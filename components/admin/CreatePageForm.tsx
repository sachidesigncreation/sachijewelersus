'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreatePageForm() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [showInNav, setShowInNav] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    setSaving(true);
    setError('');
    try {
      const res = await fetch('/api/admin/pages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title.trim(), showInNav, status: 'DRAFT' }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create page');
      router.push(`/admin/pages/${data.page.id}`);
      router.refresh();
    } catch (err) {
      setError(String(err instanceof Error ? err.message : err));
      setSaving(false);
    }
  };

  return (
    <form onSubmit={submit} className="flex flex-col md:flex-row gap-3 md:items-end">
      <label className="flex-1">
        <span className="block text-[11px] uppercase tracking-widest text-warm font-dm-sans mb-1">Page title</span>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Sustainability"
          className="w-full bg-ivory border border-black/10 px-3 py-2 font-dm-sans text-sm text-charcoal focus:outline-none focus:border-gold"
        />
      </label>
      <label className="flex items-center gap-2 font-dm-sans text-xs text-charcoal whitespace-nowrap pb-2">
        <input type="checkbox" checked={showInNav} onChange={(e) => setShowInNav(e.target.checked)} className="accent-gold" />
        Show in navbar
      </label>
      <button type="submit" disabled={saving || !title.trim()} className="btn-primary disabled:opacity-50 whitespace-nowrap">
        {saving ? 'Creating…' : 'Create page'}
      </button>
      {error ? <p className="text-red-600 text-xs font-dm-sans md:basis-full">{error}</p> : null}
    </form>
  );
}
