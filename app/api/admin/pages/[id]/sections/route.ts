import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { isAdminAccess } from '@/lib/adminAccess';

async function isAdmin() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  return isAdminAccess(user?.email);
}

type Ctx = { params: Promise<{ id: string }> };

export const SECTION_TYPES = ['hero', 'text_image', 'cards', 'stats', 'gallery', 'testimonials', 'cta'] as const;

const BLANK_PROPS: Record<string, Record<string, unknown>> = {
  hero: { eyebrow: '', heading: 'New heading', subtext: '', primaryLabel: '', primaryHref: '', image: '' },
  text_image: { heading: 'New heading', text: '', image: '', imageAlt: '', align: 'left' },
  cards: { heading: 'New heading', subtext: '', items: [{ title: 'Card 1', desc: '' }] },
  stats: { heading: '', items: [{ value: '150+', label: 'Craftsmen' }] },
  gallery: { heading: '', images: [] },
  testimonials: { heading: '', items: [{ text: '', author: '', role: '' }] },
  cta: { heading: 'Ready to talk?', text: '', buttonLabel: 'Contact Us', buttonHref: '/contact' },
};

export async function POST(req: NextRequest, ctx: Ctx) {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { id: pageId } = await ctx.params;
  const page = await prisma.cmsPage.findUnique({ where: { id: pageId }, include: { _count: { select: { sections: true } } } });
  if (!page) return NextResponse.json({ error: 'Page not found' }, { status: 404 });

  const body = await req.json() as { type?: string };
  const type = String(body.type || 'text_image');
  if (!(SECTION_TYPES as readonly string[]).includes(type)) {
    return NextResponse.json({ error: `Unknown section type: ${type}` }, { status: 400 });
  }
  const section = await prisma.cmsSection.create({
    data: {
      pageId,
      type,
      sortOrder: page._count.sections,
      props: (BLANK_PROPS[type] ?? {}) as never,
    },
  });
  return NextResponse.json({ section }, { status: 201 });
}

/** Reorder sections: body { order: string[] } */
export async function PATCH(req: NextRequest, ctx: Ctx) {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { id: pageId } = await ctx.params;
  const body = await req.json() as { order?: string[] };
  if (!Array.isArray(body.order)) return NextResponse.json({ error: 'order[] required' }, { status: 400 });
  await Promise.all(
    body.order.map((sid, i) =>
      prisma.cmsSection.updateMany({ where: { id: sid, pageId }, data: { sortOrder: i } })
    )
  );
  return NextResponse.json({ success: true });
}
