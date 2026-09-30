"use client";
import ScrollReveal from "../ui/ScrollReveal";
import { DEFAULT_CONTENT, type SiteContent } from "@/lib/site-content-defaults";

export default function WhyChooseUsSection({ content }: { content?: SiteContent["home_why"] }) {
  const c = content ?? DEFAULT_CONTENT.home_why;
  const reasons = c.items?.length ? c.items : DEFAULT_CONTENT.home_why.items;

  return (
    <section
      id="why-choose-us"
      className="bg-gold py-32 border-y border-jet/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal className="text-center mb-24 flex flex-col items-center">
          <span className="text-jet text-xs tracking-[0.25em] uppercase font-dm-sans mb-4 block">
            {c.eyebrow}
          </span>
          <h2 className="font-cormorant text-display-md text-jet mb-6">
            {c.heading}
          </h2>
          <div className="h-px w-16 bg-jet animate-scaleX-reveal" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          {reasons.map((reason, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="flex gap-6 group">
                <span className="font-cormorant text-4xl text-jet/40 leading-none group-hover:text-jet transition-colors duration-500">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="text-jet font-cormorant text-subheading mb-2">
                    {reason.title}
                  </h4>
                  <p className="text-jet/80 text-body">{reason.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
