import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteContentEditor from '@/components/admin/SiteContentEditor';
import { loadSiteContentInitial, CORE_PAGE_TABS } from '@/lib/admin-site-content';

export const dynamic = 'force-dynamic';

export default async function CorePageEditor({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page: pageId } = await params;
  const def = CORE_PAGE_TABS[pageId];
  if (!def) notFound();

  const initial = await loadSiteContentInitial();

  return (
    <div className="max-w-5xl space-y-8">
      <div>
        <div className="flex items-center gap-3 text-xs font-dm-sans mb-2">
          <Link href="/admin/pages" className="text-gold-deep underline">← All pages</Link>
          <Link href={def.href} target="_blank" className="text-gold-deep underline">View live ↗</Link>
        </div>
        <h1 className="font-cormorant text-3xl text-charcoal mb-2">Editing: {def.title}</h1>
        <p className="text-warm text-sm font-dm-sans max-w-2xl">
          Every headline, paragraph, button and image on this page. Changes go live instantly.
        </p>
      </div>
      <SiteContentEditor initial={initial as never} visibleTabs={def.tabs} initialTab={def.tabs[0]} />
    </div>
  );
}
