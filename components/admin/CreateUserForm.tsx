'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const inputCls =
  'w-full bg-ivory border border-black/10 px-3 py-2 font-dm-sans text-sm text-charcoal focus:outline-none focus:border-gold transition-colors';
const labelCls = 'block text-[11px] uppercase tracking-widest text-warm font-dm-sans mb-1';

export default function CreateUserForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '', email: '', company: '', country: '', phone: '',
    businessType: 'Retailer', status: 'APPROVED', password: '',
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState('');

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    setResult('');
    try {
      const res = await fetch('/api/admin/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create user');
      setResult(
        data.generatedPassword
          ? `User created. One-time password: ${data.generatedPassword} — share it securely, it won't be shown again.`
          : 'User created successfully.'
      );
      setForm({ name: '', email: '', company: '', country: '', phone: '', businessType: 'Retailer', status: 'APPROVED', password: '' });
      router.refresh();
    } catch (err) {
      setError(String(err instanceof Error ? err.message : err));
    }
    setSaving(false);
  };

  return (
    <div className="border border-black/10 bg-pearl/50 p-6">
      <div className="mb-4">
        <h2 className="font-dm-sans text-xs uppercase tracking-widest text-charcoal">Create user</h2>
        <p className="text-[11px] text-warm font-dm-sans mt-1">Adds a wholesale login instantly — no approval wait. The user logs in with this email + password.</p>
      </div>
      <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="block"><span className={labelCls}>Full name *</span>
          <input value={form.name} onChange={(e) => set('name', e.target.value)} required className={inputCls} /></label>
        <label className="block"><span className={labelCls}>Email *</span>
          <input type="email" value={form.email} onChange={(e) => set('email', e.target.value)} required className={inputCls} /></label>
        <label className="block"><span className={labelCls}>Company *</span>
          <input value={form.company} onChange={(e) => set('company', e.target.value)} required className={inputCls} /></label>
        <label className="block"><span className={labelCls}>Country *</span>
          <input value={form.country} onChange={(e) => set('country', e.target.value)} required className={inputCls} /></label>
        <label className="block"><span className={labelCls}>Phone</span>
          <input value={form.phone} onChange={(e) => set('phone', e.target.value)} className={inputCls} /></label>
        <label className="block"><span className={labelCls}>Password (blank = auto-generate)</span>
          <input type="text" value={form.password} onChange={(e) => set('password', e.target.value)}
            placeholder="Min 6 chars or blank" className={`${inputCls} font-mono`} /></label>
        <label className="block"><span className={labelCls}>Business type</span>
          <select value={form.businessType} onChange={(e) => set('businessType', e.target.value)} className={inputCls}>
            {['Retailer', 'Wholesaler', 'Designer', 'Other'].map((t) => <option key={t} value={t}>{t}</option>)}
          </select></label>
        <label className="block"><span className={labelCls}>Status</span>
          <select value={form.status} onChange={(e) => set('status', e.target.value)} className={inputCls}>
            <option value="APPROVED">Approved (can log in now)</option>
            <option value="PENDING">Pending (needs approval)</option>
            <option value="REJECTED">Rejected</option>
          </select></label>
        <div className="md:col-span-2 flex items-center gap-3 flex-wrap">
          <button type="submit" disabled={saving} className="btn-primary disabled:opacity-50">
            {saving ? 'Creating…' : 'Create user'}
          </button>
          {error ? <span className="text-red-600 text-xs font-dm-sans">{error}</span> : null}
          {result ? <span className="text-green-700 text-xs font-dm-sans bg-green-50 border border-green-200 px-3 py-2">{result}</span> : null}
        </div>
      </form>
    </div>
  );
}
