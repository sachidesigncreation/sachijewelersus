import { NextResponse } from 'next/server';
import { getNavPages } from '@/lib/cms-pages';
import { getSiteContent } from '@/lib/site-content';

export const dynamic = 'force-dynamic';

/** Public nav: core labels + admin-created pages flagged showInNav. */
export async function GET() {
  const [content, custom] = await Promise.all([
    getSiteContent().catch(() => null),
    getNavPages(),
  ]);
  return NextResponse.json(
    {
      brand: content?.navbar.brand ?? 'Sachi',
      custom,
    },
    { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } }
  );
}
