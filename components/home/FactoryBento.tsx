"use client";
import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";
import { DEFAULT_CONTENT, resolveContentImage, type SiteContent } from "@/lib/site-content-defaults";

export default function FactoryBento({ content }: { content?: SiteContent["home_factory"] }) {
  const c = content ?? DEFAULT_CONTENT.home_factory;
  const d = DEFAULT_CONTENT.home_factory;
  const images = c.images?.length ? c.images : d.images;
  const img = (i: number) => images[i] ?? d.images[i] ?? d.images[0];

  const tileClass =
    "group relative overflow-hidden bg-pearl border border-gold/10 hover:border-gold/60 transition-colors";

  const renderImg = (i: number, fallbackAlt: string) => {
    const item = img(i);
    return (
      <Image
        src={resolveContentImage(item.src, d.images[i]?.src ?? d.images[0].src)}
        alt={item.alt || fallbackAlt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
      />
    );
  };

  return (
    <section className="bg-ivory py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal className="text-center mb-16 flex flex-col items-center">
          <span className="text-gold text-xs tracking-[0.25em] uppercase font-dm-sans mb-4 block">
            {c.eyebrow}
          </span>
          <h2 className="font-cormorant text-display-md text-charcoal mb-6">
            {c.heading}
          </h2>
          <div className="h-px w-16 bg-gold animate-scaleX-reveal" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[200px] md:auto-rows-[280px] gap-4">
          {/* BENTO WIDE */}
          <ScrollReveal
            delay={0.1}
            className={`md:col-span-8 row-span-1 ${tileClass}`}
          >
            {renderImg(0, "Workshop")}
            <div className="absolute inset-0 bg-jet/20 group-hover:bg-transparent transition-colors" />
          </ScrollReveal>

          {/* BENTO SMALL */}
          <ScrollReveal
            delay={0.2}
            className={`md:col-span-4 row-span-1 ${tileClass}`}
          >
            {renderImg(1, "Tools")}
          </ScrollReveal>

          {/* BENTO TALL */}
          <ScrollReveal
            delay={0.3}
            className={`md:col-span-4 row-span-2 ${tileClass}`}
          >
            {renderImg(2, "Crafting")}
          </ScrollReveal>

          {/* BENTO WIDE */}
          <ScrollReveal
            delay={0.4}
            className={`md:col-span-8 row-span-1 ${tileClass}`}
          >
            {renderImg(3, "CAD")}
          </ScrollReveal>

          {/* BENTO SMALL */}
          <ScrollReveal
            delay={0.5}
            className="md:col-span-4 row-span-1 group relative overflow-hidden bg-pearl border border-gold/10 hover:border-gold/60 transition-colors"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gold p-6 text-center">
              <h3 className="font-cormorant text-2xl text-jet mb-2">
                {c.tourTitle}
              </h3>
              <p className="text-jet/80 text-sm mb-4">
                {c.tourDesc}
              </p>
              <a
                href={c.tourCtaHref || "/contact"}
                className="border-b border-jet text-jet pb-1 font-medium hover:text-jet/70 transition-colors font-dm-sans text-xs uppercase tracking-widest"
              >
                {c.tourCtaLabel}
              </a>
            </div>
          </ScrollReveal>

          {/* BENTO SMALL */}
          <ScrollReveal
            delay={0.6}
            className={`md:col-span-4 row-span-1 ${tileClass}`}
          >
            {renderImg(4, "Workshop details")}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
