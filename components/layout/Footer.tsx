import Link from 'next/link';
import { getSiteContent, DEFAULT_CONTENT } from '@/lib/site-content';

export default async function Footer() {
  let company = DEFAULT_CONTENT.company;
  let footer = DEFAULT_CONTENT.footer;
  try {
    const content = await getSiteContent();
    company = content.company;
    footer = content.footer;
  } catch { /* use defaults */ }

  const waLink = `https://wa.me/${company.whatsappNumber}`;

  return (
    <footer className="bg-jet pt-20 pb-10 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 */}
          <div>
            <h2 className="font-cormorant text-3xl text-ivory mb-4 uppercase tracking-widest">{footer.aboutTitle}</h2>
            <p className="text-warm text-body mb-6">
              {company.tagline}
            </p>
            <div className="flex gap-4">
              <a href={company.linkedinUrl} className="w-10 h-10 border border-gold/20 flex flex-col justify-center items-center text-ivory hover:border-gold transition-colors">In</a>
              <a href={company.instagramUrl} className="w-10 h-10 border border-gold/20 flex flex-col justify-center items-center text-ivory hover:border-gold transition-colors">Ig</a>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gold/20 flex flex-col justify-center items-center text-ivory hover:border-gold transition-colors">Wa</a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-ivory font-dm-sans text-sm tracking-widest uppercase mb-6">{footer.companyTitle}</h3>
            <div className="flex flex-col gap-3 text-warm text-body">
              <Link href="/about" className="hover:text-gold transition-colors">{footer.companyAbout}</Link>
              <Link href="/process" className="hover:text-gold transition-colors">{footer.companyProcess}</Link>
              <Link href="/certificates" className="hover:text-gold transition-colors">{footer.companyCertificates}</Link>
              <Link href="/#sustainability" className="hover:text-gold transition-colors">{footer.companySustainability}</Link>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-ivory font-dm-sans text-sm tracking-widest uppercase mb-6">{footer.productsTitle}</h3>
            <div className="flex flex-col gap-3 text-warm text-body">
              <Link href="/products?metal=gold" className="hover:text-gold transition-colors">{footer.productsGold}</Link>
              <Link href="/products?metal=silver" className="hover:text-gold transition-colors">{footer.productsSilver}</Link>
              <Link href="/products?metal=brass" className="hover:text-gold transition-colors">{footer.productsBrass}</Link>
              <Link href="/products" className="hover:text-gold transition-colors">{footer.productsAll}</Link>
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-ivory font-dm-sans text-sm tracking-widest uppercase mb-6">{footer.contactTitle}</h3>
            <div className="flex flex-col gap-3 text-warm text-body">
              <p>{company.addressLine1}<br />{company.addressLine2}</p>
              <a href={`mailto:${company.email}`} className="hover:text-gold transition-colors">{company.email}</a>
              <a href={`tel:${company.phoneTel}`} className="hover:text-gold transition-colors">{company.phoneDisplay}</a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gold/20 flex flex-col md:flex-row justify-between items-center gap-4 text-warm text-sm">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <p suppressHydrationWarning>© {new Date().getFullYear()} {company.copyrightName} {footer.rightsText}</p>
            <span className="hidden md:inline text-gold/30">|</span>
            <p className="text-warm/60 text-xs">GST: {company.gst}</p>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gold transition-colors">{footer.privacyLabel}</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">{footer.termsLabel}</Link>
          </div>
        </div>
      </div>
    </footer>

  );
}
