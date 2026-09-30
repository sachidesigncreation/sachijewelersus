import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { isAdminAccess } from '@/lib/adminAccess';
import { slugify, isReservedSlug } from '@/lib/cms-pages';

async function isAdmin() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  return isAdminAccess(user?.email);
}

type Ctx = { params: Promise<{ id: string }> };

export async function GET(_req: NextRequest, ctx: Ctx) {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { id } = await ctx.params;
  const page = await prisma.cmsPage.findUnique({
    where: { id },
    include: { sections: { orderBy: { sortOrder: 'asc' } } },
  });
  if (!page) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ page });
}

export async function PATCH(req: NextRequest, ctx: Ctx) {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { id } = await ctx.params;
  const body = await req.json() as Record<string, unknown>;

  const data: Record<string, unknown> = {};
  if (typeof body.title === 'string' && body.title.trim()) data.title = body.title.trim();
  if (typeof body.slug === 'string' && body.slug.trim()) {
    const slug = slugify(body.slug);
    if (isReservedSlug(slug)) return NextResponse.json({ error: `“${slug}” is a reserved URL` }, { status: 400 });
    const clash = await prisma.cmsPage.findUnique({ where: { slug } });
    if (clash && clash.id !== id) return NextResponse.json({ error: 'Another page uses this URL' }, { status: 409 });
    data.slug = slug;
  }
  if (body.status === 'PUBLISHED' || body.status === 'DRAFT') data.status = body.status;
  if (typeof body.showInNav === 'boolean') data.showInNav = body.showInNav;
  if (typeof body.navLabel === 'string') data.navLabel = body.navLabel.trim() || null;
  if (body.navOrder !== undefined) data.navOrder = Number(body.navOrder) || 0;
  if (typeof body.metaDescription === 'string') data.metaDescription = body.metaDescription.trim() || null;

  const page = await prisma.cmsPage.update({ where: { id }, data: data as never });
  return NextResponse.json({ page });
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { id } = await ctx.params;
  await prisma.cmsPage.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
