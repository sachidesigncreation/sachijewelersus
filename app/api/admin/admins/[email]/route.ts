import { NextRequest, NextResponse } from 'next/server';
import { createSupabaseServerClient, createSupabaseAdminClient } from '@/lib/supabase/server';
import { isAdminAccess, isOwner, getAllAdmins, removePanelAdmin, setPanelAdminRole, getEnvAdminEmails, normalizeRole } from '@/lib/adminAccess';

async function currentOwnerEmail(): Promise<{ email: string } | 'non-owner' | null> {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user?.email || !(await isAdminAccess(user.email))) return null;
  if (!(await isOwner(user.email))) return 'non-owner';
  return { email: user.email.toLowerCase() };
}

type Ctx = { params: Promise<{ email: string }> };

/** Owner-only: change a panel admin's role. Body: { role: "owner" | "admin" } */
export async function PATCH(req: NextRequest, ctx: Ctx) {
  const me = await currentOwnerEmail();
  if (!me) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (me === 'non-owner') return NextResponse.json({ error: 'Only owners can change roles' }, { status: 403 });
  const myEmail = me.email;

  const { email: raw } = await ctx.params;
  const target = decodeURIComponent(raw).trim().toLowerCase();
  const body = await req.json() as Record<string, string>;
  const role = normalizeRole(body.role);

  if (getEnvAdminEmails().includes(target)) {
    return NextResponse.json({ error: 'This admin comes from server config — roles only apply to table admins' }, { status: 400 });
  }
  if (target === myEmail && role !== 'owner') {
    return NextResponse.json({ error: 'You cannot demote yourself' }, { status: 400 });
  }
  const admins = await getAllAdmins();
  const found = admins.find((a) => a.email === target && a.source === 'panel');
  if (!found) return NextResponse.json({ error: 'Admin not found' }, { status: 404 });

  if (found.role === 'owner' && role !== 'owner') {
    const owners = admins.filter((a) => a.role === 'owner');
    if (owners.length <= 1) {
      return NextResponse.json({ error: 'Cannot demote the last owner' }, { status: 400 });
    }
  }

  await setPanelAdminRole(target, role);
  return NextResponse.json({ success: true, email: target, role });
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const me = await currentOwnerEmail();
  if (!me) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (me === 'non-owner') return NextResponse.json({ error: 'Only owners can remove admins' }, { status: 403 });
  const myEmail = me.email;

  const { email: raw } = await ctx.params;
  const target = decodeURIComponent(raw).trim().toLowerCase();
  if (!target) return NextResponse.json({ error: 'Email required' }, { status: 400 });
  if (target === myEmail) return NextResponse.json({ error: 'You cannot remove your own admin access' }, { status: 400 });
  if (getEnvAdminEmails().includes(target)) {
    return NextResponse.json({ error: 'This admin comes from server config (ADMIN_EMAIL) — remove it there' }, { status: 400 });
  }

  const admins = await getAllAdmins();
  if (admins.length <= 1) {
    return NextResponse.json({ error: 'Cannot remove the last admin' }, { status: 400 });
  }
  const found = admins.find((a) => a.email === target);
  if (!found) return NextResponse.json({ error: 'Admin not found' }, { status: 404 });
  if (found.role === 'owner' && admins.filter((a) => a.role === 'owner').length <= 1) {
    return NextResponse.json({ error: 'Cannot remove the last owner' }, { status: 400 });
  }

  // Remove login too (best-effort) so the account can't sign in anymore.
  try {
    const supabase = await createSupabaseAdminClient();
    const { data } = await supabase.auth.admin.listUsers();
    const match = data.users.find((u) => u.email?.toLowerCase() === target);
    if (match) await supabase.auth.admin.deleteUser(match.id);
  } catch { /* non-fatal */ }

  await removePanelAdmin(target);
  return NextResponse.json({ success: true });
}
