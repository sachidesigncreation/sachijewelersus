'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Admin = { email: string; name?: string | null; role: 'owner' | 'admin'; source: 'config' | 'panel' };

const inputCls =
  'w-full bg-ivory border border-black/10 px-3 py-2 font-dm-sans text-sm text-charcoal focus:outline-none focus:border-gold transition-colors';
const labelCls = 'block text-[11px] uppercase tracking-widest text-warm font-dm-sans mb-1';

export default function AdminUsersManager({ initial, you }: { initial: Admin[]; you: string }) {
  const router = useRouter();
  const [admins, setAdmins] = useState<Admin[]>(initial);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'owner' | 'admin'>('admin');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState('');
  const [removing, setRemoving] = useState<string | null>(null);
  const [roleSaving, setRoleSaving] = useState<string | null>(null);

  const refresh = async () => {
    const res = await fetch('/api/admin/admins');
    if (res.ok) {
      const data = await res.json();
      setAdmins(data.admins);
    }
    router.refresh();
  };

  const create = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    setResult('');
    try {
      const res = await fetch('/api/admin/admins', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, password, role }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create admin');
      setResult(
        data.generatedPassword
          ? `Admin (${role}) created for ${data.admin.email}. One-time password: ${data.generatedPassword} — share it securely, it won't be shown again.`
          : `Admin (${role}) created for ${data.admin.email}.`
      );
      setEmail('');
      setName('');
      setPassword('');
      setRole('admin');
      await refresh();
    } catch (err) {
      setError(String(err instanceof Error ? err.message : err));
    }
    setSaving(false);
  };

  const changeRole = async (target: string, next: 'owner' | 'admin') => {
    setRoleSaving(target);
    setError('');
    try {
      const res = await fetch(`/api/admin/admins/${encodeURIComponent(target)}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: next }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to change role');
      await refresh();
    } catch (err) {
      setError(String(err instanceof Error ? err.message : err));
    }
    setRoleSaving(null);
  };

  const remove = async (target: string) => {
    if (!confirm(`Remove admin access for ${target}? They will no longer be able to sign in to the admin panel.`)) return;
    setRemoving(target);
    setError('');
    try {
      const res = await fetch(`/api/admin/admins/${encodeURIComponent(target)}`, { method: 'DELETE' });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to remove admin');
      await refresh();
    } catch (err) {
      setError(String(err instanceof Error ? err.message : err));
    }
    setRemoving(null);
  };

  return (
    <div className="space-y-8">
      {/* Existing admins */}
      <div className="border border-black/10 overflow-hidden">
        <table className="w-full text-sm font-dm-sans">
          <thead className="bg-charcoal text-ivory">
            <tr>
              {['Email', 'Name', 'Role', 'Source', ''].map((h) => (
                <th key={h} className="px-4 py-2.5 text-left text-xs uppercase tracking-widest font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-black/5 bg-ivory">
            {admins.map((a) => (
              <tr key={a.email} className="hover:bg-pearl/50">
                <td className="px-4 py-3 font-medium text-charcoal">
                  {a.email}
                  {a.email === you ? (
                    <span className="ml-2 text-[10px] uppercase tracking-widest bg-gold/20 text-gold-deep px-2 py-0.5 rounded-full">you</span>
                  ) : null}
                </td>
                <td className="px-4 py-3 text-warm">{a.name || '—'}</td>
                <td className="px-4 py-3">
                  {a.source === 'panel' && a.email !== you ? (
                    <select
                      value={a.role}
                      disabled={roleSaving === a.email}
                      onChange={(e) => changeRole(a.email, e.target.value as 'owner' | 'admin')}
                      className="bg-ivory border border-black/10 text-xs font-dm-sans px-2 py-1 focus:outline-none focus:border-gold disabled:opacity-50"
                    >
                      <option value="admin">admin</option>
                      <option value="owner">owner</option>
                    </select>
                  ) : (
                    <span className={`text-xs px-2 py-0.5 border rounded-full font-medium ${
                      a.role === 'owner'
                        ? 'text-gold-deep bg-gold/10 border-gold/40'
                        : 'text-green-700 bg-green-50 border-green-200'
                    }`}>
                      {a.role}
                    </span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <span className="text-[11px] text-warm">
                    {a.source === 'config' ? 'Server config' : 'Supabase table'}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  {a.source === 'panel' && a.email !== you ? (
                    <button
                      onClick={() => remove(a.email)}
                      disabled={removing === a.email}
                      className="text-xs text-red-600 underline disabled:opacity-50"
                    >
                      {removing === a.email ? 'Removing…' : 'Remove'}
                    </button>
                  ) : (
                    <span className="text-[11px] text-warm/60">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create form */}
      <div className="border border-black/10 bg-pearl/50 p-6">
        <h2 className="font-dm-sans text-xs uppercase tracking-widest text-charcoal mb-1">Create admin user</h2>
        <p className="text-[11px] text-warm font-dm-sans mb-4">
          They sign in at <span className="font-mono">/admin/login</span> with this email + password. Saved to the Supabase <span className="font-mono">AdminUser</span> table.
        </p>
        <form onSubmit={create} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            <span className={labelCls}>Email *</span>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputCls} placeholder="person@company.com" />
          </label>
          <label className="block">
            <span className={labelCls}>Name</span>
            <input value={name} onChange={(e) => setName(e.target.value)} className={inputCls} placeholder="Full name" />
          </label>
          <label className="block">
            <span className={labelCls}>Role</span>
            <select value={role} onChange={(e) => setRole(e.target.value as 'owner' | 'admin')} className={inputCls}>
              <option value="admin">admin — panel access</option>
              <option value="owner">owner — panel + manage admins</option>
            </select>
          </label>
          <label className="block">
            <span className={labelCls}>Password (blank = auto-generate)</span>
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Min 6 chars or blank" className={`${inputCls} font-mono`} />
          </label>
          <div className="md:col-span-2 flex items-center gap-3 flex-wrap">
            <button type="submit" disabled={saving} className="btn-primary disabled:opacity-50">
              {saving ? 'Creating…' : 'Create admin'}
            </button>
            {error ? <span className="text-red-600 text-xs font-dm-sans">{error}</span> : null}
            {result ? <span className="text-green-700 text-xs font-dm-sans bg-green-50 border border-green-200 px-3 py-2">{result}</span> : null}
          </div>
        </form>
      </div>
    </div>
  );
}
