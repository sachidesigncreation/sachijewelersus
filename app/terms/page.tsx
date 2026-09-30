import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { getSiteContent } from "@/lib/site-content";
import { getNavPages } from "@/lib/cms-pages";

export const metadata: Metadata = {
  title: "Terms of Service — Sachi Jewellery Co.",
  description: "Terms for using the Sachi Jewellery Co. wholesale website.",
};

export const dynamic = "force-dynamic";

export default async function TermsPage() {
  const [content, navLinks] = await Promise.all([
    getSiteContent().catch(() => null),
    getNavPages().catch(() => []),
  ]);

  return (
    <div className="bg-ivory min-h-screen">
      <Navbar content={content?.navbar} customLinks={navLinks} />

      <div className="bg-jet py-32 text-center border-b border-gold/10 mt-20">
        <h1 className="font-cormorant text-display-md lg:text-display-lg text-ivory mb-4">Terms of Service</h1>
        <p className="font-dm-sans text-warm text-body-lg tracking-widest uppercase">
          Using our wholesale website
        </p>
      </div>

      <main className="max-w-3xl mx-auto px-6 lg:px-12 py-16 lg:py-20 font-dm-sans text-charcoal-light text-body-lg leading-relaxed space-y-8">
        <section>
          <h2 className="font-cormorant text-heading text-charcoal mb-3">Wholesale access</h2>
          <p>
            The full catalogue, pricing estimates and quotation tools are available to approved
            wholesale accounts only. Accounts are reviewed individually and we may decline
            applications at our discretion.
          </p>
        </section>
        <section>
          <h2 className="font-cormorant text-heading text-charcoal mb-3">Indicative pricing</h2>
          <p>
            All price estimates shown on this website are indicative, based on live metal spot
            prices and standard formula assumptions. Final quotations are confirmed formally by
            our team and may differ.
          </p>
        </section>
        <section>
          <h2 className="font-cormorant text-heading text-charcoal mb-3">Acceptable use</h2>
          <p>
            Product images, descriptions and catalogue content belong to Sachi Jewellery Co. and
            may not be copied or redistributed without permission. You agree not to misuse
            accounts, forms or automated access to this site.
          </p>
        </section>
        <section>
          <h2 className="font-cormorant text-heading text-charcoal mb-3">Contact</h2>
          <p>
            Questions about these terms? Write to{' '}
            <a href={`mailto:${content?.company.email ?? 'contact@sachijewellery.com'}`} className="text-gold-deep underline">
              {content?.company.email ?? 'contact@sachijewellery.com'}
            </a>
            .
          </p>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp whatsappNumber={content?.company.whatsappNumber} />
    </div>
  );
}
