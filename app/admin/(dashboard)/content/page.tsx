import SiteContentEditor from '@/components/admin/SiteContentEditor';
import { loadSiteContentInitial, GLOBAL_TABS } from '@/lib/admin-site-content';

export const metadata = { title: 'Global Content — Admin' };
export const dynamic = 'force-dynamic';

export default async function AdminContentPage() {
  const initial = await loadSiteContentInitial();

  return (
    <div className="max-w-5xl space-y-8">
      <div>
        <h1 className="font-cormorant text-3xl text-charcoal mb-2">Global Content</h1>
        <p className="text-warm text-sm font-dm-sans max-w-2xl">
          Site-wide content: company details, navbar labels and footer. Page-specific text and
          images live under <span className="font-medium text-charcoal">Pages</span> — open any
          page there to edit its own content.
        </p>
      </div>
      <SiteContentEditor initial={initial as never} visibleTabs={GLOBAL_TABS} />
    </div>
  );
}
