import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import FloatingQuoteCart from '@/components/layout/FloatingQuoteCart';
import QuoteCartDrawer from '@/components/quote/QuoteCartDrawer';
import ContactForm from '@/components/contact/ContactForm';
import { getSiteContent, DEFAULT_CONTENT } from '@/lib/site-content';
import { getNavPages } from '@/lib/cms-pages';

export const dynamic = 'force-dynamic';

export default async function ContactPage() {
  const [content, navLinks] = await Promise.all([getSiteContent().catch(() => null), getNavPages().catch(() => [])]);
  const c = content?.contact ?? DEFAULT_CONTENT.contact;
  const company = content?.company ?? DEFAULT_CONTENT.company;
  const waLink = `https://wa.me/${company.whatsappNumber}`;

  return (
    <div className="bg-ivory min-h-screen pt-20">
      <Navbar content={content?.navbar} customLinks={navLinks} />

      <div className="bg-jet py-32 text-center border-b border-gold/10">
        <h1 className="font-cormorant text-display-md lg:text-display-lg text-ivory mb-4">{c.heroTitle}</h1>
        <p className="font-dm-sans text-warm text-body-lg tracking-widest uppercase">
          {c.heroSubtitle}
        </p>
      </div>

      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-24 min-h-[50vh] grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Info Column */}
        <div>
          <h2 className="font-cormorant text-heading text-charcoal mb-8">{c.infoHeading}</h2>

          <div className="space-y-8 font-dm-sans text-charcoal-light">
            <div>
              <h3 className="text-sm font-medium tracking-widest text-gold uppercase mb-2">{c.addressTitle}</h3>
              <p>{c.addressLine1}</p>
              <p>{c.addressLine2}</p>
              <p>{c.addressLine3}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium tracking-widest text-gold uppercase mb-2">{c.contactTitle}</h3>
              <p className="hover:text-charcoal transition-colors">
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </p>
              <p className="hover:text-charcoal transition-colors">
                <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a>
              </p>
              <p className="hover:text-charcoal transition-colors mt-1">
                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  WhatsApp: {company.whatsappDisplay}
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium tracking-widest text-gold uppercase mb-2">{c.gstTitle}</h3>
              <p className="font-mono tracking-wider">{company.gst}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium tracking-widest text-gold uppercase mb-2">{company.hoursWeekdays ? 'Business Hours' : c.hoursTitle}</h3>
              <p>{company.hoursWeekdays}</p>
              <p>{company.hoursSunday}</p>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <ContactForm content={c} />
      </main>

      <Footer />
      <FloatingWhatsApp whatsappNumber={company.whatsappNumber} />
      <FloatingQuoteCart />
      <QuoteCartDrawer />
    </div>
  );
}
