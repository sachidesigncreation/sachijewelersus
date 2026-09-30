"use client";
import { useState, useEffect } from "react";
import ScrollReveal from "../ui/ScrollReveal";
import { DEFAULT_CONTENT, type SiteContent } from "@/lib/site-content-defaults";

export default function Testimonials({ content }: { content?: SiteContent["home_testimonials"] }) {
  const c = content ?? DEFAULT_CONTENT.home_testimonials;
  const testimonials = c.items?.length ? c.items : DEFAULT_CONTENT.home_testimonials.items;

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const safeIndex = Math.min(activeIndex, Math.max(testimonials.length - 1, 0));

  return (
    <section className="bg-gold py-32 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-jet/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-jet/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal className="text-center mb-16 flex flex-col items-center">
          <span className="text-jet text-xs tracking-[0.25em] uppercase font-dm-sans mb-4 block">
            {c.eyebrow}
          </span>
          <h2 className="font-cormorant text-display-md text-jet mb-6">
            {c.heading}
          </h2>
          <div className="h-px w-16 bg-jet animate-scaleX-reveal" />
        </ScrollReveal>

        <div className="max-w-4xl mx-auto relative overflow-hidden h-[280px]">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out pb-8 text-center px-4 ${
                idx === safeIndex
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-24"
              }`}
            >
              <div className="text-jet mb-6">
                <svg
                  className="w-12 h-12 mx-auto opacity-40"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10.126.541v12.285H4.285C4.285 20.301 8.948 24.3 12.825 25.32l-2.096 6C4.851 29.569.049 23.364.049 12.826V.541h10.077zm19.141 0v12.285h-5.84C23.427 20.301 28.09 24.3 31.968 25.32l-2.097 6C23.992 29.569 19.191 23.364 19.191 12.826V.541h10.076z" />
                </svg>
              </div>
              <p className="font-cormorant text-2xl lg:text-3xl text-jet mb-8 italic">
                &quot;{t.text}&quot;
              </p>
              <div className="font-dm-sans">
                <p className="text-jet font-medium text-lg">{t.author}</p>
                <p className="text-jet/80 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${idx === safeIndex ? "bg-jet" : "bg-jet/20"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
