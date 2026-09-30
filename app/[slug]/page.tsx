import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import FloatingQuoteCart from '@/components/layout/FloatingQuoteCart';
import QuoteCartDrawer from '@/components/quote/QuoteCartDrawer';
import SectionRenderer from '@/components/cms/SectionRenderer';
import { getPageBySlug, getPublishedPages, getNavPages } from '@/lib/cms-pages';
import { getSiteContent } from '@/lib/site-content';

export const dynamic = 'force-dynamic';

type Ctx = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Ctx): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPageBySlug(slug);
  if (!page) return { title: 'Page not found' };
  return {
    title: `${page.title} — Sachi Jewellery Co.`,
    description: page.metaDescription || page.title,
  };
}

export default async function CustomPage({ params }: Ctx) {
  const { slug } = await params;
  const [page, content, navLinks] = await Promise.all([
    getPageBySlug(slug),
    getSiteContent().catch(() => null),
    getNavPages().catch(() => []),
  ]);
  if (!page) notFound();

  return (
    <div className="bg-ivory min-h-screen">
      <Navbar content={content?.navbar} customLinks={navLinks} />
      <main className="pt-20">
        {page.sections.length === 0 ? (
          <div className="max-w-3xl mx-auto px-6 py-32 text-center">
            <h1 className="font-cormorant text-display-md text-charcoal mb-4">{page.title}</h1>
            <p className="text-warm font-dm-sans">This page has no sections yet. Add some in Admin → Pages.</p>
          </div>
        ) : (
          page.sections.map((s) => (
            <SectionRenderer key={s.id} type={s.type} props={s.props as Record<string, unknown>} />
          ))
        )}
      </main>
      <Footer />
      <FloatingWhatsApp whatsappNumber={content?.company.whatsappNumber} />
      <FloatingQuoteCart />
      <QuoteCartDrawer />
    </div>
  );
}

export async function generateStaticParams() {
  // Keep fully dynamic so newly published pages work without a rebuild.
  const pages = await getPublishedPages().catch(() => []);
  return pages.slice(0, 0).map((p) => ({ slug: p.slug }));
}
