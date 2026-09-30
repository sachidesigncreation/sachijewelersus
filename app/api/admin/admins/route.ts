import { NextRequest, NextResponse } from 'next/server';
import { createSupabaseServerClient, createSupabaseAdminClient } from '@/lib/supabase/server';
import { isAdminAccess, isOwner, getAllAdmins, addPanelAdmin, normalizeRole } from '@/lib/adminAccess';

async function currentAdminEmail(): Promise<string | null> {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user?.email || !(await isAdminAccess(user.email))) return null;
  return user.email;
}

/** Null = unauthenticated; non-owner emails are returned with owner=false. */
async function currentOwnerEmail(): Promise<{ email: string; owner: boolean } | null> {
  const email = await currentAdminEmail();
  if (!email) return null;
  return { email, owner: await isOwner(email) };
}

export async function GET() {
  const email = await currentAdminEmail();
  if (!email) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const admins = await getAllAdmins();
  const owner = await isOwner(email);
  return NextResponse.json({ admins, you: email.toLowerCase(), youAreOwner: owner });
}

/** Owner-only: create an admin user (Supabase login + AdminUser row with role).
 * Body: { email, name?, password?, role?: "owner" | "admin" } — blank password = auto-generated (returned once). */
export async function POST(req: NextRequest) {
  const me = await currentOwnerEmail();
  if (!me) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!me.owner) return NextResponse.json({ error: 'Only owners can create admins' }, { status: 403 });

  const body = await req.json() as Record<string, string>;
  const newEmail = String(body.email || '').trim().toLowerCase();
  const name = String(body.name || '').trim() || null;
  const role = normalizeRole(body.role);
  let password = String(body.password || '');
  let generated = false;
  if (!password) {
    const { randomBytes } = await import('crypto');
    password = randomBytes(12).toString('base64url');
    generated = true;
  }
  if (!newEmail.includes('@')) return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
  if (password.length < 6) return NextResponse.json({ error: 'Password must be at least 6 characters' }, { status: 400 });

  if (await isAdminAccess(newEmail)) {
    return NextResponse.json({ error: 'This email already has admin access' }, { status: 409 });
  }

  const supabase = await createSupabaseAdminClient();
  const { data: authData, error: authError } = await supabase.auth.admin.createUser({
    email: newEmail,
    password,
    email_confirm: true,
  });
  if (authError) return NextResponse.json({ error: authError.message }, { status: 400 });

  await addPanelAdmin({ email: newEmail, name, role });

  return NextResponse.json(
    {
      admin: { email: newEmail, name, role, source: 'panel' as const },
      supabaseUid: authData.user?.id,
      ...(generated ? { generatedPassword: password } : {}),
    },
    { status: 201 }
  );
}
