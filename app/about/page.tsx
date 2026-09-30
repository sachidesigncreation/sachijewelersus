import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import FloatingQuoteCart from "@/components/layout/FloatingQuoteCart";
import QuoteCartDrawer from "@/components/quote/QuoteCartDrawer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getSiteContent, resolveContentImage } from "@/lib/site-content";
import { getNavPages } from '@/lib/cms-pages';

export const metadata: Metadata = {
  title: "About Us — Sachi Jewellery Co.",
  description:
    "Fine jewellery manufacturing in Jaipur. Sustainable mass production, wholesale, and export of precious and semi-precious jewellery.",
};

export const dynamic = "force-dynamic";

function BodyBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-charcoal-light font-dm-sans text-body lg:text-body-lg leading-relaxed space-y-4">
      {children}
    </div>
  );
}

export default async function AboutPage() {
  const [content, navLinks] = await Promise.all([getSiteContent().catch(() => null), getNavPages().catch(() => [])]);
  const c = content?.about;
  const d = (await import("@/lib/site-content")).DEFAULT_CONTENT.about;

  const about = c ?? d;

  return (
    <div className="bg-ivory min-h-screen">
      <Navbar content={content?.navbar} customLinks={navLinks} />

      {/* Cover hero */}
      <div className="relative w-full h-[min(52vh,560px)] min-h-[280px] mt-20">
        <Image
          src={resolveContentImage(about.coverImage, d.coverImage)}
          alt={about.coverAlt || d.coverAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-jet/35" aria-hidden />
      </div>

      <main className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <span className="text-gold text-xs tracking-[0.25em] uppercase font-dm-sans mb-4 block">
              {about.eyebrow}
            </span>
            <h1 className="font-cormorant text-display-md lg:text-display-lg text-charcoal mb-6">
              {about.heading}
            </h1>
            <div className="h-px w-16 bg-gold mx-auto mb-10" />
            <BodyBlock>
              <p className="text-center text-charcoal">
                {about.intro}
              </p>
            </BodyBlock>
          </ScrollReveal>

          {/* Image left · text right */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-16 border-t border-gold/15">
            <ScrollReveal className="relative aspect-square w-full max-w-xl mx-auto lg:mx-0 overflow-hidden border border-gold/20 bg-pearl">
              <Image
                src={resolveContentImage(about.image1, d.image1)}
                alt={about.image1Alt || d.image1Alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </ScrollReveal>
            <ScrollReveal>
              <BodyBlock>
                <p>{about.text1}</p>
              </BodyBlock>
            </ScrollReveal>
          </section>

          {/* Text left · image right (stack: text then image on small screens) */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-16 border-t border-gold/15">
            <ScrollReveal>
              <BodyBlock>
                <p>{about.text2}</p>
              </BodyBlock>
            </ScrollReveal>
            <ScrollReveal className="relative aspect-square w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto overflow-hidden border border-gold/20 bg-pearl">
              <Image
                src={resolveContentImage(about.image2, d.image2)}
                alt={about.image2Alt || d.image2Alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </ScrollReveal>
          </section>

          <div className="text-center pt-8">
            <Link
              href={about.ctaHref || "/process"}
              className="inline-flex items-center font-dm-sans text-sm tracking-widest uppercase text-charcoal border-b border-transparent hover:border-gold hover:text-gold transition-colors"
            >
              {about.ctaLabel}
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp whatsappNumber={content?.company.whatsappNumber} />
      <FloatingQuoteCart />
      <QuoteCartDrawer />
    </div>
  );
}
