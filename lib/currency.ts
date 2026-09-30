/** Currency helpers — USD is canonical, INR derived via exchange rate. */

export type Currency = 'USD' | 'INR';

export function formatUSD(n: number): string {
  return `$${n.toFixed(2)}`;
}

export function formatINR(n: number): string {
  return `₹${n.toLocaleString('en-IN', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}`;
}

export function formatPrice(usd: number, currency: Currency, rate: number): string {
  if (currency === 'INR') return formatINR(usd * (rate || 83.5));
  return formatUSD(usd);
}

export function convertUSD(usd: number, currency: Currency, rate: number): number {
  return currency === 'INR' ? usd * (rate || 83.5) : usd;
}
