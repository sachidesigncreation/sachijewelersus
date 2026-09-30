import { redirect } from 'next/navigation';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { isAdminAccess } from '@/lib/adminAccess';
import AdminSidebar from '@/components/admin/AdminSidebar';

export const dynamic = 'force-dynamic';

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect('/admin/login');

  if (!(await isAdminAccess(user.email))) redirect('/admin/login');

  return (
    <div className="flex h-dvh min-h-0 overflow-hidden bg-pearl font-sans">
      <AdminSidebar userEmail={user.email ?? ''} />
      <main className="min-h-0 flex-1 overflow-y-auto p-8 lg:p-10">
        {children}
      </main>
    </div>
  );
}
