import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { isAdminAccess } from '@/lib/adminAccess';

export async function POST(_: NextRequest, props: { params: Promise<{ id: string }> }) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!(await isAdminAccess(user?.email))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await props.params;
  const product = await prisma.product.findUnique({ where: { id }, select: { featured: true } });
  if (!product) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  const updated = await prisma.product.update({
    where: { id },
    data: { featured: !product.featured },
  });

  return NextResponse.json({ featured: updated.featured });
}
