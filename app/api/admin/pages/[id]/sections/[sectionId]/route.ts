import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { isAdminAccess } from '@/lib/adminAccess';

async function isAdmin() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  return isAdminAccess(user?.email);
}

type Ctx = { params: Promise<{ id: string; sectionId: string }> };

export async function PATCH(req: NextRequest, ctx: Ctx) {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { id: pageId, sectionId } = await ctx.params;
  const body = await req.json() as { props?: Record<string, unknown>; isVisible?: boolean; type?: string };
  const data: Record<string, unknown> = {};
  if (body.props && typeof body.props === 'object') data.props = body.props;
  if (typeof body.isVisible === 'boolean') data.isVisible = body.isVisible;
  if (typeof body.type === 'string' && body.type.trim()) data.type = body.type.trim();
  const section = await prisma.cmsSection.updateMany({
    where: { id: sectionId, pageId },
    data: data as never,
  });
  if (section.count === 0) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  const updated = await prisma.cmsSection.findUnique({ where: { id: sectionId } });
  return NextResponse.json({ section: updated });
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { id: pageId, sectionId } = await ctx.params;
  await prisma.cmsSection.deleteMany({ where: { id: sectionId, pageId } });
  return NextResponse.json({ success: true });
}
