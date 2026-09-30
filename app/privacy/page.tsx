import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { getSiteContent } from "@/lib/site-content";
import { getNavPages } from "@/lib/cms-pages";

export const metadata: Metadata = {
  title: "Privacy Policy — Sachi Jewellery Co.",
  description: "How Sachi Jewellery Co. collects, uses and protects your information.",
};

export const dynamic = "force-dynamic";

export default async function PrivacyPage() {
  const [content, navLinks] = await Promise.all([
    getSiteContent().catch(() => null),
    getNavPages().catch(() => []),
  ]);

  return (
    <div className="bg-ivory min-h-screen">
      <Navbar content={content?.navbar} customLinks={navLinks} />

      <div className="bg-jet py-32 text-center border-b border-gold/10 mt-20">
        <h1 className="font-cormorant text-display-md lg:text-display-lg text-ivory mb-4">Privacy Policy</h1>
        <p className="font-dm-sans text-warm text-body-lg tracking-widest uppercase">
          How we handle your information
        </p>
      </div>

      <main className="max-w-3xl mx-auto px-6 lg:px-12 py-16 lg:py-20 font-dm-sans text-charcoal-light text-body-lg leading-relaxed space-y-8">
        <section>
          <h2 className="font-cormorant text-heading text-charcoal mb-3">What we collect</h2>
          <p>
            When you apply for a wholesale account we collect your name, email address, company,
            country, phone number and business type. When you contact us we collect whatever you
            share in the inquiry form. Your quotation cart is stored only in your own browser.
          </p>
        </section>
        <section>
          <h2 className="font-cormorant text-heading text-charcoal mb-3">How we use it</h2>
          <p>
            We use this information to review account applications, respond to inquiries, prepare
            quotations and operate our wholesale catalogue. We do not sell your personal information.
          </p>
        </section>
        <section>
          <h2 className="font-cormorant text-heading text-charcoal mb-3">Sharing</h2>
          <p>
            Account and inquiry emails are sent through our email provider. Apart from the service
            providers needed to run this website, we do not share your details with third parties.
          </p>
        </section>
        <section>
          <h2 className="font-cormorant text-heading text-charcoal mb-3">Your choices</h2>
          <p>
            You may ask us to correct or delete your account information at any time by writing to{' '}
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
