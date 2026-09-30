/**
 * Live precious-metal spot prices.
 *
 * Primary:   MetalMetric API (https://metalmetric.com) — free, no auth, COMEX/LBMA data, 60s refresh.
 * Fallback1: Binance PAXG/USDT for gold + CoinGecko kinesis-silver for silver.
 * Fallback2: Static dummy prices so the app never breaks.
 *
 * Brass is not exchange-traded; a fixed industrial proxy is used.
 */

const TROY_OZ_TO_GRAM     = 31.1034768;
const BRASS_USD_PER_TROY_OZ = 2.5;
const DEFAULT_GOLD_SILVER_RATIO = 80; // COMEX approximate

export interface KitcoSpotPrices {
  goldUSDPerGram:   number;
  silverUSDPerGram: number;
  brassUSDPerGram:  number;
  source:           string;
  fetchedAt:        string;
}

// ─── Primary: MetalMetric (free, no key) ────────────────────────────────────

interface MetalMetricResponse {
  source:    string;
  timestamp: string;
  prices: {
    gold:     { price_per_oz: number };
    silver:   { price_per_oz: number };
    platinum?: { price_per_oz: number };
    palladium?: { price_per_oz: number };
  };
}

async function fetchMetalMetric(): Promise<{ goldOz: number; silverOz: number } | null> {
  try {
    const res = await fetch('https://metalmetric.com/api/gpt?action=spot_prices&metal=all', {
      next: { revalidate: 300 },
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as MetalMetricResponse;

    const goldOz   = data?.prices?.gold?.price_per_oz;
    const silverOz = data?.prices?.silver?.price_per_oz;

    if (
      typeof goldOz   !== 'number' || !Number.isFinite(goldOz)   || goldOz   < 500  || goldOz   > 100_000 ||
      typeof silverOz !== 'number' || !Number.isFinite(silverOz) || silverOz < 5    || silverOz > 500
    ) {
      return null;
    }

    return { goldOz, silverOz };
  } catch {
    return null;
  }
}

// ─── Fallback 1a: Binance PAXG/USDT ─────────────────────────────────────────

async function fetchBinancePaxgUsdPerOz(): Promise<number | null> {
  try {
    const res = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=PAXGUSDT', {
      next: { revalidate: 300 },
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { price?: string };
    const p = parseFloat(data.price ?? '');
    return Number.isFinite(p) && p > 500 && p < 100_000 ? p : null;
  } catch {
    return null;
  }
}

// ─── Fallback 1b: CoinGecko gold ─────────────────────────────────────────────

async function fetchCoingeckoGoldUsdPerOz(): Promise<number | null> {
  try {
    const res = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=pax-gold,tether-gold&vs_currencies=usd',
      { next: { revalidate: 300 }, headers: { Accept: 'application/json' } }
    );
    if (!res.ok) return null;
    const data = (await res.json()) as {
      'pax-gold'?:    { usd?: number };
      'tether-gold'?: { usd?: number };
    };
    const vals = [data['pax-gold']?.usd, data['tether-gold']?.usd]
      .filter((x): x is number => typeof x === 'number' && x > 500 && x < 100_000);
    if (vals.length === 0) return null;
    return vals.reduce((s, v) => s + v, 0) / vals.length;
  } catch {
    return null;
  }
}

// ─── Fallback 1c: CoinGecko silver (only if COMEX-like range) ────────────────

async function fetchCoingeckoSilverUsdPerOz(): Promise<number | null> {
  try {
    const res = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=kinesis-silver&vs_currencies=usd',
      { next: { revalidate: 300 }, headers: { Accept: 'application/json' } }
    );
    if (!res.ok) return null;
    const data = (await res.json()) as { 'kinesis-silver'?: { usd?: number } };
    const p = data['kinesis-silver']?.usd;
    if (typeof p !== 'number' || !Number.isFinite(p) || p < 10 || p > 200) return null;
    return p;
  } catch {
    return null;
  }
}

// ─── Fallback 2: Static dummy prices ─────────────────────────────────────────

function dummyPrices(): KitcoSpotPrices {
  return {
    goldUSDPerGram:   4700 / TROY_OZ_TO_GRAM,
    silverUSDPerGram: 75   / TROY_OZ_TO_GRAM,
    brassUSDPerGram:  BRASS_USD_PER_TROY_OZ / TROY_OZ_TO_GRAM,
    source:           'dummy-fallback',
    fetchedAt:        new Date().toISOString(),
  };
}

// ─── Main export ─────────────────────────────────────────────────────────────

export async function fetchKitcoPrices(): Promise<KitcoSpotPrices> {
  const fetchedAt = new Date().toISOString();

  // 1. Try MetalMetric (primary — live COMEX/LBMA, no auth)
  const mm = await fetchMetalMetric();
  if (mm) {
    return {
      goldUSDPerGram:   mm.goldOz   / TROY_OZ_TO_GRAM,
      silverUSDPerGram: mm.silverOz / TROY_OZ_TO_GRAM,
      brassUSDPerGram:  BRASS_USD_PER_TROY_OZ / TROY_OZ_TO_GRAM,
      source:           'metalmetric-comex-lbma',
      fetchedAt,
    };
  }

  console.warn('[metal-spot] MetalMetric unavailable, trying fallbacks…');

  // 2. Try Binance PAXG then CoinGecko for gold
  const goldOz = (await fetchBinancePaxgUsdPerOz()) ?? (await fetchCoingeckoGoldUsdPerOz());
  if (!goldOz) {
    console.warn('[metal-spot] All live sources failed; using dummy prices');
    return dummyPrices();
  }

  // Silver: CoinGecko direct or derived from ratio
  let silverOz = await fetchCoingeckoSilverUsdPerOz();
  let source: string;

  if (silverOz) {
    source = 'fallback-binance/coingecko-gold-coingecko-silver';
  } else {
    const ratio = (() => {
      const raw = process.env.GOLD_SILVER_OZ_PRICE_RATIO;
      if (raw) {
        const n = parseFloat(raw);
        if (Number.isFinite(n) && n > 20 && n < 200) return n;
      }
      return DEFAULT_GOLD_SILVER_RATIO;
    })();
    silverOz = goldOz / ratio;
    source   = `fallback-binance/coingecko-gold-silver-derived(ratio=${ratio})`;
  }

  return {
    goldUSDPerGram:   goldOz   / TROY_OZ_TO_GRAM,
    silverUSDPerGram: silverOz / TROY_OZ_TO_GRAM,
    brassUSDPerGram:  BRASS_USD_PER_TROY_OZ / TROY_OZ_TO_GRAM,
    source,
    fetchedAt,
  };
}
