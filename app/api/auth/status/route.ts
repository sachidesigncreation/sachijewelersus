import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { isAdminAccess } from '@/lib/adminAccess';

export async function GET() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ status: 'UNAUTHENTICATED' }, { status: 401 });
  }

  const account = await prisma.clientAccount.findUnique({
    where: { email: user.email! },
    select: { status: true, name: true, company: true },
  });

  if (!account) {
    // Admin user — not in ClientAccount table
    if (await isAdminAccess(user.email)) {
      return NextResponse.json({ status: 'ADMIN' });
    }
    return NextResponse.json({ status: 'PENDING' });
  }

  return NextResponse.json({ status: account.status, name: account.name, company: account.company });
}
