import { prisma } from '@/lib/db';
import CreatePageForm from '@/components/admin/CreatePageForm';
import PagesTable from '@/components/admin/PagesTable';
import CorePagesTable from '@/components/admin/CorePagesTable';

export const metadata = { title: 'Pages — Admin' };
export const dynamic = 'force-dynamic';

export default async function AdminPagesPage() {
  const pages = await prisma.cmsPage.findMany({
    orderBy: [{ navOrder: 'asc' }, { updatedAt: 'desc' }],
    include: { _count: { select: { sections: true } } },
  });

  return (
    <div className="max-w-5xl space-y-10">
      <div>
        <h1 className="font-cormorant text-3xl text-charcoal mb-2">Pages</h1>
        <p className="text-warm text-sm font-dm-sans max-w-2xl">
          Every page on your website in one place. Core pages are built-in — click Edit to change
          their text and images. Custom pages are fully yours: create, add sections, publish, and
          show them in the navbar.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="font-dm-sans text-xs uppercase tracking-widest text-charcoal">
          Core site pages
        </h2>
        <CorePagesTable />
      </section>

      <section className="space-y-4">
        <h2 className="font-dm-sans text-xs uppercase tracking-widest text-charcoal">
          Custom pages ({pages.length})
        </h2>
        <div className="border border-black/10 bg-pearl/50 p-6">
          <h3 className="font-dm-sans text-xs uppercase tracking-widest text-charcoal mb-4">Create new page</h3>
          <CreatePageForm />
          <p className="text-[11px] text-warm font-dm-sans mt-3">
            Published pages go live instantly at <span className="font-mono">/your-url</span> and
            appear in the website navbar when “Show in navbar” is on.
          </p>
        </div>

        <PagesTable pages={JSON.parse(JSON.stringify(pages))} />
      </section>
    </div>
  );
}
