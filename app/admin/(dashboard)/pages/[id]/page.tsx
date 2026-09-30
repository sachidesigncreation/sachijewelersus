import { notFound } from 'next/navigation';
import { prisma } from '@/lib/db';
import PageEditor from '@/components/admin/PageEditor';

export const dynamic = 'force-dynamic';

export default async function AdminPageEditor({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const page = await prisma.cmsPage.findUnique({
    where: { id },
    include: { sections: { orderBy: { sortOrder: 'asc' } } },
  });
  if (!page) notFound();

  return (
    <div className="max-w-5xl space-y-8">
      <PageEditor initial={JSON.parse(JSON.stringify(page))} />
    </div>
  );
}
