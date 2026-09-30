import { NextResponse } from 'next/server';
import { fetchKitcoPrices } from '@/lib/kitco';
import { prisma } from '@/lib/db';

const DEFAULT_SETTINGS = {
  wastageFactor:        1.07,
  labourCostPerGram:    0,
  platingCostFactor:    0,
  exchangeRateUSDtoINR: 83.5,
};

const DEFAULT_CURRENCY = {
  defaultCurrency: 'USD' as 'USD' | 'INR',
  showCurrencyToggle: true,
};

export async function GET() {
  const [prices, dbSettings, dbStones] = await Promise.all([
    fetchKitcoPrices(),
    prisma.siteSettings.findMany(),
    prisma.stonePrice.findMany(),
  ]);

  // Build settings map from DB, falling back to defaults
  const settingsMap: Record<string, string> = {};
  dbSettings.forEach(s => { settingsMap[s.key] = s.value; });

  const settings = {
    wastageFactor:        parseFloat(settingsMap.wastageFactor        ?? '') || DEFAULT_SETTINGS.wastageFactor,
    labourCostPerGram:    parseFloat(settingsMap.labourCostPerGram    ?? '') || DEFAULT_SETTINGS.labourCostPerGram,
    platingCostFactor:    parseFloat(settingsMap.platingCostFactor    ?? '') || DEFAULT_SETTINGS.platingCostFactor,
    exchangeRateUSDtoINR: parseFloat(settingsMap.exchangeRateUSDtoINR ?? '') || DEFAULT_SETTINGS.exchangeRateUSDtoINR,
  };

  const rawDefault = (settingsMap.defaultCurrency ?? 'USD').toUpperCase();
  const currency = {
    defaultCurrency: (rawDefault === 'INR' ? 'INR' : 'USD') as 'USD' | 'INR',
    showCurrencyToggle: (settingsMap.showCurrencyToggle ?? 'true') !== 'false',
  };

  // Stone prices map for client-side formula use
  const stonePrices: Record<string, { priceD: number; satinCost: number }> = {};
  dbStones.forEach(stone => {
    stonePrices[stone.stoneName] = {
      priceD:    stone.priceD,
      satinCost: stone.satinCost,
    };
  });

  const body = {
    gold: {
      '24K': prices.goldUSDPerGram * 1.0,
      '22K': prices.goldUSDPerGram * 0.9167,
      '18K': prices.goldUSDPerGram * 0.75,
      '14K': prices.goldUSDPerGram * 0.5833,
      '10K': prices.goldUSDPerGram * 0.4167,
      '9K':  prices.goldUSDPerGram * 0.375,
    },
    silver: {
      '999': prices.silverUSDPerGram * 0.999,
      '925': prices.silverUSDPerGram * 0.925,
    },
    brass: {
      standard: prices.brassUSDPerGram,
    },
    raw: {
      goldUSDPerGram:   prices.goldUSDPerGram,
      silverUSDPerGram: prices.silverUSDPerGram,
      brassUSDPerGram:  prices.brassUSDPerGram,
    },
    settings,
    stonePrices,
    currency,
    source:    prices.source,
    updatedAt: prices.fetchedAt,
  };

  return NextResponse.json(body, {
    headers: {
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600',
    },
  });
}
