import Link from 'next/link';
import { CORE_PAGE_TABS } from '@/lib/admin-site-content';

export type CorePage = {
  title: string;
  href: string;
  editHref: string;
  note: string;
};

const CORE_PAGES: CorePage[] = Object.entries(CORE_PAGE_TABS).map(([id, def]) => ({
  title: def.title,
  href: def.href,
  editHref: `/admin/pages/core/${id}`,
  note: def.note,
}));

export default function CorePagesTable() {
  return (
    <div className="border border-black/10 overflow-hidden">
      <table className="w-full text-sm font-dm-sans">
        <thead className="bg-charcoal text-ivory">
          <tr>
            {['Page', 'URL', 'Editable content', ''].map((h) => (
              <th key={h} className="px-4 py-2.5 text-left text-xs uppercase tracking-widest font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-black/5 bg-ivory">
          {CORE_PAGES.map((p) => (
            <tr key={p.href} className="hover:bg-pearl/50">
              <td className="px-4 py-3 font-medium text-charcoal">{p.title}</td>
              <td className="px-4 py-3">
                <Link href={p.href} target="_blank" className="font-mono text-xs text-gold-deep hover:underline">
                  {p.href} ↗
                </Link>
              </td>
              <td className="px-4 py-3 text-warm text-xs">{p.note}</td>
              <td className="px-4 py-3 text-right">
                <Link href={p.editHref} className="text-xs text-gold-deep underline">
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
