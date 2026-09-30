import { prisma } from '@/lib/db';
import { DEFAULT_CONTENT, CMS_KEYS, type SiteContent } from '@/lib/site-content';

/** Tabs that belong to a specific page (everything else is global). */
export const GLOBAL_TABS = ['company', 'navbar', 'footer', 'theme'] as const;

/** Core-page → its content tabs. Home owns all home_* sections. */
export const CORE_PAGE_TABS: Record<string, { title: string; href: string; tabs: (keyof SiteContent)[]; note: string }> = {
  home: {
    title: 'Home',
    href: '/',
    tabs: ['home_hero', 'home_about', 'home_whatwedo', 'home_why', 'home_featured', 'home_process_teaser', 'home_testimonials', 'home_factory', 'home_cta'],
    note: 'Hero, about, services, testimonials, factory, CTA strip',
  },
  about: {
    title: 'About',
    href: '/about',
    tabs: ['about'],
    note: 'Cover, story blocks, images',
  },
  contact: {
    title: 'Contact',
    href: '/contact',
    tabs: ['contact'],
    note: 'Headings, address labels, form text',
  },
  process: {
    title: 'Process',
    href: '/process',
    tabs: ['process'],
    note: 'Hero + all 12 manufacturing steps',
  },
  certificates: {
    title: 'Certificates',
    href: '/certificates',
    tabs: ['certificates_page'],
    note: 'Page headings — cards managed in Certificates',
  },
  products: {
    title: 'Products',
    href: '/products',
    tabs: ['products_page'],
    note: 'Page headings — catalogue managed in Products',
  },
};

/** Load the full CMS snapshot for admin editors (DB merged over defaults). */
export async function loadSiteContentInitial(): Promise<SiteContent> {
  const rows = await prisma.siteSettings.findMany({
    where: { key: { startsWith: 'cms_' } },
  });
  const map: Record<string, string> = {};
  rows.forEach((r) => { map[r.key] = r.value; });

  const initial = {} as SiteContent;
  for (const key of CMS_KEYS) {
    const raw = map[`cms_${key}`];
    if (raw) {
      try {
        (initial as Record<string, unknown>)[key] = { ...DEFAULT_CONTENT[key], ...JSON.parse(raw) };
      } catch {
        (initial as Record<string, unknown>)[key] = DEFAULT_CONTENT[key];
      }
    } else {
      (initial as Record<string, unknown>)[key] = DEFAULT_CONTENT[key];
    }
  }
  return initial;
}
