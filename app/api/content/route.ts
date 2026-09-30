import { NextResponse } from 'next/server';
import { getSiteContent } from '@/lib/site-content';

export const dynamic = 'force-dynamic';

/** Public read-only CMS snapshot for client components. */
export async function GET() {
  const content = await getSiteContent();
  return NextResponse.json(content, {
    headers: { 'Cache-Control': 'no-store' },
  });
}
