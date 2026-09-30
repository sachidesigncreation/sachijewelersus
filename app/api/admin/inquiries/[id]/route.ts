import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { isAdminAccess } from '@/lib/adminAccess';

export async function POST(req: NextRequest, props: { params: Promise<{ id: string }> }) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!(await isAdminAccess(user?.email))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await props.params;
  const { status } = await req.json();

  const updated = await prisma.inquiry.update({ where: { id }, data: { status } });
  return NextResponse.json(updated);
}
