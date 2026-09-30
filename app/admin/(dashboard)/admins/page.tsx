import { redirect } from 'next/navigation';
import { getAllAdmins, isOwner } from '@/lib/adminAccess';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import AdminUsersManager from '@/components/admin/AdminUsersManager';

export const metadata = { title: 'Admins — Admin' };
export const dynamic = 'force-dynamic';

export default async function AdminAdminsPage() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  // Panel access itself is enforced by the dashboard layout; role management is owners-only.
  if (!(await isOwner(user?.email))) redirect('/admin');

  const admins = await getAllAdmins();

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="font-cormorant text-3xl text-charcoal mb-2">Admins</h1>
        <p className="text-warm text-sm font-dm-sans max-w-2xl">
          People who can sign in at <span className="font-mono">/admin/login</span> and access this
          admin panel. Roles live in the <span className="font-mono">AdminUser</span> table in
          Supabase — <span className="font-medium text-charcoal">owner</span> can manage admins,
          <span className="font-medium text-charcoal"> admin </span> can use everything else.
          Only owners see this page.
        </p>
      </div>
      <AdminUsersManager
        initial={admins}
        you={(user?.email ?? '').toLowerCase()}
      />
    </div>
  );
}
