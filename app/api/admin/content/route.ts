import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { isAdminAccess } from '@/lib/adminAccess';
import { CMS_KEYS, cmsSettingKey, type ContentKey } from '@/lib/site-content';

async function isAdmin() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  return isAdminAccess(user?.email);
}

export async function GET() {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const rows = await prisma.siteSettings.findMany({ where: { key: { startsWith: 'cms_' } } });
  const map: Record<string, string> = {};
  rows.forEach((r) => { map[r.key] = r.value; });
  return NextResponse.json({ success: true, settings: map });
}

/** Save one or more cms sections. Body: { company: {...}, home_hero: {...}, ... } */
export async function POST(req: NextRequest) {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const body = await req.json() as Record<string, unknown>;
  const writes: { key: string; value: string }[] = [];
  for (const [section, value] of Object.entries(body)) {
    if (!CMS_KEYS.includes(section as ContentKey)) continue;
    if (typeof value === 'string') {
      writes.push({ key: cmsSettingKey(section as ContentKey), value });
    } else {
      writes.push({ key: cmsSettingKey(section as ContentKey), value: JSON.stringify(value) });
    }
  }
  if (writes.length === 0) return NextResponse.json({ error: 'No valid cms sections' }, { status: 400 });
  await Promise.all(
    writes.map(({ key, value }) =>
      prisma.siteSettings.upsert({ where: { key }, create: { key, value }, update: { value } }),
    ),
  );
  return NextResponse.json({ success: true, saved: writes.map((w) => w.key) });
}
