'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type PageRow = {
  id: string;
  slug: string;
  title: string;
  navLabel: string | null;
  showInNav: boolean;
  navOrder: number;
  status: string;
  _count: { sections: number };
};

export default function PagesTable({ pages }: { pages: PageRow[] }) {
  const router = useRouter();
  const [deleting, setDeleting] = useState<string | null>(null);

  const remove = async (id: string, title: string) => {
    if (!confirm(`Delete page “${title}” and all its sections?`)) return;
    setDeleting(id);
    await fetch(`/api/admin/pages/${id}`, { method: 'DELETE' });
    setDeleting(null);
    router.refresh();
  };

  const togglePublish = async (p: PageRow) => {
    await fetch(`/api/admin/pages/${p.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: p.status === 'PUBLISHED' ? 'DRAFT' : 'PUBLISHED' }),
    });
    router.refresh();
  };

  if (pages.length === 0) {
    return <p className="text-warm font-dm-sans text-sm py-10 text-center">No custom pages yet. Create your first page above.</p>;
  }

  return (
    <div className="border border-black/10 overflow-hidden">
      <table className="w-full text-sm font-dm-sans">
        <thead className="bg-charcoal text-ivory">
          <tr>
            {['Page', 'URL', 'Navbar', 'Sections', 'Status', ''].map((h) => (
              <th key={h} className="px-4 py-2.5 text-left text-xs uppercase tracking-widest font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-black/5 bg-ivory">
          {pages.map((p) => (
            <tr key={p.id} className="hover:bg-pearl/50">
              <td className="px-4 py-3 font-medium text-charcoal">
                <Link href={`/admin/pages/${p.id}`} className="hover:text-gold-deep hover:underline">
                  {p.title}
                </Link>
              </td>
              <td className="px-4 py-3">
                {p.status === 'PUBLISHED' ? (
                  <Link href={`/${p.slug}`} target="_blank" className="font-mono text-xs text-gold-deep hover:underline">
                    /{p.slug} ↗
                  </Link>
                ) : (
                  <span className="font-mono text-xs text-warm">/{p.slug}</span>
                )}
              </td>
              <td className="px-4 py-3 text-warm text-xs">
                {p.showInNav ? `Yes · #${p.navOrder} · ${p.navLabel || p.title}` : 'Hidden'}
              </td>
              <td className="px-4 py-3 text-warm">{p._count.sections}</td>
              <td className="px-4 py-3">
                <button
                  onClick={() => togglePublish(p)}
                  className={`text-xs px-2 py-0.5 border rounded-full font-medium ${
                    p.status === 'PUBLISHED'
                      ? 'text-green-600 bg-green-50 border-green-200'
                      : 'text-warm bg-black/5 border-black/10'
                  }`}
                >
                  {p.status}
                </button>
              </td>
              <td className="px-4 py-3 text-right whitespace-nowrap">
                <Link href={`/admin/pages/${p.id}`} className="text-xs text-gold-deep underline mr-3">
                  Edit
                </Link>
                <button
                  onClick={() => remove(p.id, p.title)}
                  disabled={deleting === p.id}
                  className="text-xs text-red-600 underline disabled:opacity-50"
                >
                  {deleting === p.id ? 'Deleting…' : 'Delete'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
