import { prisma } from '@/lib/db';

export type CmsPageWithSections = {
  id: string;
  slug: string;
  title: string;
  navLabel: string | null;
  showInNav: boolean;
  navOrder: number;
  status: string;
  metaDescription: string | null;
  sections: {
    id: string;
    type: string;
    sortOrder: number;
    isVisible: boolean;
    props: Record<string, unknown>;
  }[];
};

export type NavLink = { label: string; href: string; order: number };

const RESERVED = new Set([
  'admin', 'api', 'products', 'about', 'contact', 'process',
  'certificates', 'account', 'auth', 'p', 'pages', 'privacy', 'terms',
]);

export function isReservedSlug(slug: string): boolean {
  return RESERVED.has(slug.toLowerCase());
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80) || 'page';
}

/** All published pages with visible sections, ordered. */
export async function getPublishedPages(): Promise<CmsPageWithSections[]> {
  try {
    const rows = await prisma.cmsPage.findMany({
      where: { status: 'PUBLISHED' },
      orderBy: [{ navOrder: 'asc' }, { title: 'asc' }],
      include: { sections: { where: { isVisible: true }, orderBy: { sortOrder: 'asc' } } },
    });
    return rows as unknown as CmsPageWithSections[];
  } catch {
    return [];
  }
}

export async function getPageBySlug(slug: string): Promise<CmsPageWithSections | null> {
  try {
    const row = await prisma.cmsPage.findUnique({
      where: { slug },
      include: { sections: { where: { isVisible: true }, orderBy: { sortOrder: 'asc' } } },
    });
    if (!row || row.status !== 'PUBLISHED') return null;
    return row as unknown as CmsPageWithSections;
  } catch {
    return null;
  }
}

/** Custom pages flagged for navbar, for merging into the main nav. */
export async function getNavPages(): Promise<NavLink[]> {
  try {
    const rows = await prisma.cmsPage.findMany({
      where: { status: 'PUBLISHED', showInNav: true },
      orderBy: [{ navOrder: 'asc' }, { title: 'asc' }],
      select: { slug: true, title: true, navLabel: true, navOrder: true },
    });
    return rows.map((r, i) => ({
      label: r.navLabel || r.title,
      href: `/${r.slug}`,
      order: r.navOrder ?? i,
    }));
  } catch {
    return [];
  }
}
