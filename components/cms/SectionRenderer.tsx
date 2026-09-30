'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { normalizeR2Image } from '@/lib/r2/config';

type PropsOf = Record<string, unknown>;
const str = (v: unknown, fb = ''): string => (typeof v === 'string' ? v : fb);
const arr = <T,>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : []);

function imgSrc(v: unknown): string | null {
  if (typeof v !== 'string' || !v.trim()) return null;
  if (v.startsWith('/') || v.startsWith('http') || v.startsWith('/api/')) return v;
  return normalizeR2Image(v);
}

/** Optional per-section background (Admin → Pages → section → Background).
 * Returns null for the designed default; otherwise classes that keep
 * headings/body readable on the chosen surface. */
type BgTheme = { section: string; heading: string; body: string; muted: string; frame: string };
const BG_THEMES: Record<string, BgTheme> = {
  ivory: { section: 'bg-ivory', heading: 'text-charcoal', body: 'text-charcoal-light', muted: 'text-warm', frame: 'bg-pearl' },
  pearl: { section: 'bg-pearl', heading: 'text-charcoal', body: 'text-charcoal-light', muted: 'text-warm', frame: 'bg-ivory' },
  jet:   { section: 'bg-jet',   heading: 'text-ivory',    body: 'text-ivory/80',       muted: 'text-warm', frame: 'bg-charcoal' },
  gold:  { section: 'bg-gold',  heading: 'text-jet',      body: 'text-jet/80',         muted: 'text-jet/60', frame: 'bg-ivory' },
};

function bgTheme(v: unknown): BgTheme | null {
  return typeof v === 'string' && BG_THEMES[v] ? BG_THEMES[v] : null;
}

function Buttons({ props }: { props: PropsOf }) {
  const primaryLabel = str(props.primaryLabel);
  const primaryHref = str(props.primaryHref);
  const secondaryLabel = str(props.secondaryLabel);
  const secondaryHref = str(props.secondaryHref);
  if (!primaryLabel && !secondaryLabel) return null;
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      {primaryLabel ? (
        <Link href={primaryHref || '/contact'} className="btn-primary text-center">
          {primaryLabel}
        </Link>
      ) : null}
      {secondaryLabel ? (
        <Link href={secondaryHref || '/products'} className="btn-secondary text-center">
          {secondaryLabel}
        </Link>
      ) : null}
    </div>
  );
}

function HeroSection({ props }: { props: PropsOf }) {
  const src = imgSrc(props.image);
  return (
    <section className="bg-jet py-32 text-center border-b border-gold/10">
      {src ? (
        <div className="relative w-full h-[38vh] min-h-[260px] mb-10 overflow-hidden">
          <Image src={src} alt={str(props.imageAlt, str(props.heading, 'Page hero'))} fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-jet/40" />
        </div>
      ) : null}
      <div className="max-w-3xl mx-auto px-6">
        {str(props.eyebrow) ? (
          <span className="text-gold text-xs tracking-[0.25em] uppercase font-dm-sans mb-4 block">{str(props.eyebrow)}</span>
        ) : null}
        <h1 className="font-cormorant text-display-md lg:text-display-lg text-ivory mb-4">{str(props.heading, 'Untitled')}</h1>
        {str(props.subtext) ? (
          <p className="font-dm-sans text-warm text-body-lg">{str(props.subtext)}</p>
        ) : null}
        <div className="flex justify-center"><Buttons props={props} /></div>
      </div>
    </section>
  );
}

function TextImageSection({ props }: { props: PropsOf }) {
  const src = imgSrc(props.image);
  const alignRight = str(props.align) === 'right';
  const t = bgTheme(props.bg);
  return (
    <section className={`${t ? t.section : 'bg-ivory'} py-24 border-b border-gold/10`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal className={alignRight ? 'lg:order-2' : ''}>
          {str(props.eyebrow) ? (
            <span className="text-gold text-xs tracking-[0.25em] uppercase font-dm-sans mb-4 block">{str(props.eyebrow)}</span>
          ) : null}
          <h2 className={`font-cormorant text-display-md mb-6 ${t ? t.heading : 'text-charcoal'}`}>{str(props.heading)}</h2>
          {str(props.text) ? (
            <p className={`font-dm-sans text-body-lg leading-relaxed whitespace-pre-line ${t ? t.body : 'text-charcoal-light'}`}>{str(props.text)}</p>
          ) : null}
          <Buttons props={props} />
        </ScrollReveal>
        <ScrollReveal className={`relative aspect-[4/3] w-full overflow-hidden border border-gold/20 ${t ? t.frame : 'bg-pearl'} ${alignRight ? 'lg:order-1' : ''}`}>
          {src ? (
            <Image src={src} alt={str(props.imageAlt, str(props.heading))} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-warm text-sm font-dm-sans">No image set</div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}

function CardsSection({ props }: { props: PropsOf }) {
  const items = arr<{ title?: string; desc?: string; text?: string }>(props.items);
  const t = bgTheme(props.bg);
  return (
    <section className={`${t ? t.section : 'bg-pearl'} py-24 border-b border-gold/10`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          {str(props.eyebrow) ? (
            <span className="text-gold text-xs tracking-[0.25em] uppercase font-dm-sans mb-4 block">{str(props.eyebrow)}</span>
          ) : null}
          <h2 className={`font-cormorant text-display-md ${t ? t.heading : 'text-charcoal'}`}>{str(props.heading)}</h2>
          {str(props.subtext) ? <p className={`${t ? t.muted : 'text-warm'} font-dm-sans mt-4 max-w-2xl mx-auto`}>{str(props.subtext)}</p> : null}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className={`${t ? t.frame : 'bg-ivory'} border border-gold/20 p-8`}>
              <h3 className={`font-dm-sans text-sm font-semibold mb-3 uppercase tracking-[0.15em] ${t ? t.heading : 'text-charcoal'}`}>{str(it.title, `Card ${i + 1}`)}</h3>
              <p className={`text-body leading-relaxed whitespace-pre-line ${t ? t.muted : 'text-warm'}`}>{str(it.desc ?? it.text)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection({ props }: { props: PropsOf }) {
  const items = arr<{ value?: string; label?: string }>(props.items);
  const t = bgTheme(props.bg);
  return (
    <section className={`${t ? t.section : 'bg-jet'} py-20 border-y border-gold/10`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {str(props.heading) ? <h2 className={`font-cormorant text-display-md mb-10 ${t ? t.heading : 'text-ivory'}`}>{str(props.heading)}</h2> : null}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((it, i) => (
            <div key={i}>
              <p className="font-cormorant text-4xl text-gold mb-2">{str(it.value)}</p>
              <p className={`${t ? t.muted : 'text-warm'} text-xs uppercase tracking-widest font-dm-sans whitespace-pre-line`}>{str(it.label)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection({ props }: { props: PropsOf }) {
  const images = arr<string | { src?: string; alt?: string }>(props.images);
  const t = bgTheme(props.bg);
  return (
    <section className={`${t ? t.section : 'bg-ivory'} py-24 border-b border-gold/10`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {str(props.heading) ? <h2 className={`font-cormorant text-display-md mb-10 text-center ${t ? t.heading : 'text-charcoal'}`}>{str(props.heading)}</h2> : null}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((im, i) => {
            const src = typeof im === 'string' ? imgSrc(im) : imgSrc(im.src);
            const alt = typeof im === 'string' ? `Gallery ${i + 1}` : str(im.alt, `Gallery ${i + 1}`);
            if (!src) return null;
            return (
              <div key={i} className={`relative aspect-square overflow-hidden border border-gold/10 ${t ? t.frame : 'bg-pearl'}`}>
                <Image src={src} alt={alt} fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width:1024px) 50vw, 33vw" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection({ props }: { props: PropsOf }) {
  const items = arr<{ text?: string; author?: string; role?: string }>(props.items);
  const t = bgTheme(props.bg);
  const ink = t ? t.heading : 'text-jet';
  const sub = t ? t.body : 'text-jet';
  const faint = t ? t.muted : 'text-jet/70';
  return (
    <section className={`${t ? t.section : 'bg-gold'} py-24`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        {str(props.heading) ? <h2 className={`font-cormorant text-display-md mb-12 ${ink}`}>{str(props.heading)}</h2> : null}
        <div className="space-y-10">
          {items.map((t2, i) => (
            <div key={i}>
              <p className={`font-cormorant text-2xl italic mb-4 ${ink}`}>&ldquo;{str(t2.text)}&rdquo;</p>
              <p className={`${sub} font-medium font-dm-sans`}>{str(t2.author)}</p>
              <p className={`${faint} text-sm font-dm-sans`}>{str(t2.role)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection({ props }: { props: PropsOf }) {
  const t = bgTheme(props.bg);
  return (
    <section className={`${t ? t.section : 'bg-pearl'} py-24 text-center border-t border-gold/20`}>
      <h2 className={`font-cormorant text-display-md mb-4 ${t ? t.heading : 'text-charcoal'}`}>{str(props.heading, 'Ready to talk?')}</h2>
      {str(props.text) ? <p className={`${t ? t.muted : 'text-warm'} font-dm-sans mb-8 max-w-xl mx-auto`}>{str(props.text)}</p> : null}
      <div className="flex justify-center">
        <Link href={str(props.buttonHref, '/contact')} className="btn-primary">
          {str(props.buttonLabel, 'Contact Us')}
        </Link>
      </div>
    </section>
  );
}

export default function SectionRenderer({ type, props }: { type: string; props: PropsOf }) {
  switch (type) {
    case 'hero': return <HeroSection props={props} />;
    case 'text_image': return <TextImageSection props={props} />;
    case 'cards': return <CardsSection props={props} />;
    case 'stats': return <StatsSection props={props} />;
    case 'gallery': return <GallerySection props={props} />;
    case 'testimonials': return <TestimonialsSection props={props} />;
    case 'cta': return <CtaSection props={props} />;
    default: return <TextImageSection props={props} />;
  }
}
