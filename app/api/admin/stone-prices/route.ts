import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { isAdminAccess } from '@/lib/adminAccess';

async function isAdmin() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  return isAdminAccess(user?.email);
}

export async function POST(req: NextRequest) {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { stoneName, priceD, satinCost } = await req.json();
  const stone = await prisma.stonePrice.create({
    data: { stoneName, priceD: priceD ?? 0, satinCost: satinCost ?? 0 },
  });
  return NextResponse.json(stone, { status: 201 });
}
