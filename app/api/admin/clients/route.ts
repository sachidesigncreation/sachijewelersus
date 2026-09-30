import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { createSupabaseServerClient, createSupabaseAdminClient } from '@/lib/supabase/server';
import { isAdminAccess } from '@/lib/adminAccess';

async function isAdmin() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  return isAdminAccess(user?.email);
}

/** Admin-created wholesale account. Creates auth user + ClientAccount.
 * Body: { email, password?, name, company, country, phone?, businessType?, status? }
 * If no password is supplied, a secure random one is generated and returned once. */
export async function POST(req: NextRequest) {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const body = await req.json() as Record<string, string>;

  const email = String(body.email || '').trim().toLowerCase();
  const name = String(body.name || '').trim();
  const company = String(body.company || '').trim();
  const country = String(body.country || '').trim();
  const phone = String(body.phone || '').trim() || null;
  const businessType = String(body.businessType || 'Retailer').trim();
  const status = body.status === 'PENDING' || body.status === 'REJECTED' ? body.status : 'APPROVED';
  let password = String(body.password || '');
  let generated = false;
  if (!password) {
    const { randomBytes } = await import('crypto');
    password = randomBytes(12).toString('base64url');
    generated = true;
  }
  if (!email || !name || !company || !country) {
    return NextResponse.json({ error: 'Email, name, company and country are required' }, { status: 400 });
  }
  if (password.length < 6) {
    return NextResponse.json({ error: 'Password must be at least 6 characters' }, { status: 400 });
  }

  const existing = await prisma.clientAccount.findUnique({ where: { email } });
  if (existing) return NextResponse.json({ error: 'An account with this email already exists' }, { status: 409 });

  const supabase = await createSupabaseAdminClient();
  const { data: authData, error: authError } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });
  if (authError) return NextResponse.json({ error: authError.message }, { status: 400 });

  const account = await prisma.clientAccount.create({
    data: {
      email, name, company, country, phone, businessType, status,
      supabaseUid: authData.user?.id,
    },
  });

  return NextResponse.json(
    { account, ...(generated ? { generatedPassword: password } : {}) },
    { status: 201 }
  );
}
