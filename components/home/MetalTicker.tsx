import TickerClient from './TickerClient';

async function getMetalPrices() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';
  try {
    const res = await fetch(`${baseUrl}/api/metal-prices`, { next: { revalidate: 300 } });
    if (!res.ok) throw new Error();
    return res.json();
  } catch {
    return {
      gold:   { '24K': 151.2, '22K': 138.6, '18K': 113.4, '14K': 88.2, '10K': 63.0, '9K': 56.7 },
      silver: { '999': 2.43, '925': 2.25 },
      updatedAt: null,
      fallback: true,
    };
  }
}

export default async function MetalTicker() {
  const prices = await getMetalPrices();

  const fmt = (usdPerGram: number) => `$${usdPerGram.toFixed(2)}`;

  const items = [
    `Gold 24K  ${fmt(prices.gold['24K'])}/g`,
    `Gold 22K  ${fmt(prices.gold['22K'])}/g`,
    `Gold 18K  ${fmt(prices.gold['18K'])}/g`,
    `Gold 14K  ${fmt(prices.gold['14K'])}/g`,
    `Gold 10K  ${fmt(prices.gold['10K'])}/g`,
    `Silver 999  ${fmt(prices.silver['999'])}/g`,
    `Silver 925  ${fmt(prices.silver['925'])}/g`,
    `Live COMEX/LBMA via MetalMetric`,
  ];

  return <TickerClient items={items} updatedAt={prices.updatedAt} />;
}
