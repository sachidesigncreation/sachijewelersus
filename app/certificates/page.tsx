import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import FloatingQuoteCart from '@/components/layout/FloatingQuoteCart';
import QuoteCartDrawer from '@/components/quote/QuoteCartDrawer';
import CertificatesClient from '@/components/certificates/CertificatesClient';
import { prisma } from '@/lib/db';
import { getSiteContent, DEFAULT_CONTENT } from '@/lib/site-content';
import { getNavPages } from '@/lib/cms-pages';
import { normalizeR2Image } from '@/lib/r2/config';

export const dynamic = 'force-dynamic';

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=600';
const FALLBACK_FULL = 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=100&w=1200';

export default async function CertificatesPage() {
  const [content, dbCerts, navLinks] = await Promise.all([
    getSiteContent().catch(() => null),
    prisma.certificate.findMany({ orderBy: { sortOrder: 'asc' } }).catch(() => []),
    getNavPages().catch(() => []),
  ]);

  const hero = content?.certificates_page ?? DEFAULT_CONTENT.certificates_page;

  // Admin-managed certificates (DB). Falls back to legacy static list if DB empty.
  const certificates = dbCerts.length
    ? dbCerts.map((c) => {
        const url = normalizeR2Image(c.imageKey) ?? FALLBACK_IMG;
        return {
          id: c.id,
          name: c.name,
          issuingBody: c.issuingBody,
          thumbnail: url,
          fullImage: url,
        };
      })
    : [
        { id: 'bis', name: 'BIS Hallmark Certification', issuingBody: 'Bureau of Indian Standards', thumbnail: FALLBACK_IMG, fullImage: FALLBACK_FULL },
        { id: 'sez', name: 'SEZ Registration', issuingBody: 'Ministry of Commerce & Industry', thumbnail: FALLBACK_IMG, fullImage: FALLBACK_FULL },
        { id: 'export', name: 'Recognized Export House', issuingBody: 'Government of India', thumbnail: FALLBACK_IMG, fullImage: FALLBACK_FULL },
        { id: 'iso', name: 'ISO 9001:2015', issuingBody: 'International Organization for Standardization', thumbnail: FALLBACK_IMG, fullImage: FALLBACK_FULL },
        { id: 'gst', name: 'GST Registration', issuingBody: 'Government of India', thumbnail: FALLBACK_IMG, fullImage: FALLBACK_FULL },
        { id: 'msme', name: 'MSME Registration', issuingBody: 'Ministry of MSME', thumbnail: FALLBACK_IMG, fullImage: FALLBACK_FULL },
      ];

  return (
    <div className="bg-ivory min-h-screen pt-20">
      <Navbar content={content?.navbar} customLinks={navLinks} />

      <div className="bg-jet py-32 text-center border-b border-gold/10">
        <h1 className="font-cormorant text-display-md lg:text-display-lg text-ivory mb-4">{hero.heroTitle}</h1>
        <p className="font-dm-sans text-warm text-body-lg tracking-widest uppercase">
          {hero.heroSubtitle}
        </p>
      </div>

      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-32 min-h-[50vh]">
        <CertificatesClient certificates={certificates} />
      </main>

      <Footer />
      <FloatingWhatsApp whatsappNumber={content?.company.whatsappNumber} />
      <FloatingQuoteCart />
      <QuoteCartDrawer />
    </div>
  );
}
