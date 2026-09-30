'use client';

import { useState } from 'react';
import { normalizeR2Image } from '@/lib/r2/config';
import type { SiteContent } from '@/lib/site-content-defaults';

type Props = { initial: SiteContent; initialTab?: string; visibleTabs?: readonly string[] };

const isTabId = (v: string | undefined): v is TabId =>
  !!v && (TABS as readonly { id: string }[]).some((t) => t.id === v);

const TABS = [
  { id: 'company', label: 'Company & Contact' },
  { id: 'navbar', label: 'Navbar' },
  { id: 'footer', label: 'Footer' },
  { id: 'theme', label: 'Theme · Colors' },
  { id: 'home_hero', label: 'Home · Hero' },
  { id: 'home_about', label: 'Home · About + Stats' },
  { id: 'home_whatwedo', label: 'Home · What We Do' },
  { id: 'home_why', label: 'Home · Why Us' },
  { id: 'home_featured', label: 'Home · Featured header' },
  { id: 'home_process_teaser', label: 'Home · Process teaser' },
  { id: 'home_testimonials', label: 'Home · Testimonials' },
  { id: 'home_factory', label: 'Home · Factory images' },
  { id: 'home_cta', label: 'Home · CTA strip' },
  { id: 'about', label: 'About page' },
  { id: 'contact', label: 'Contact page' },
  { id: 'process', label: 'Process page' },
  { id: 'certificates_page', label: 'Certificates header' },
  { id: 'products_page', label: 'Products page copy' },
] as const;

type TabId = (typeof TABS)[number]['id'];

const inputCls =
  'w-full bg-ivory border border-black/10 px-3 py-2 font-dm-sans text-sm text-charcoal focus:outline-none focus:border-gold transition-colors';
const labelCls = 'block text-[11px] uppercase tracking-widest text-warm font-dm-sans mb-1';

function Field({ label, value, onChange, textarea, rows }: { label: string; value: string; onChange: (v: string) => void; textarea?: boolean; rows?: number }) {
  return (
    <label className="block">
      <span className={labelCls}>{label}</span>
      {textarea ? (
        <textarea value={value ?? ''} onChange={(e) => onChange(e.target.value)} rows={rows ?? 3} className={inputCls} />
      ) : (
        <input value={value ?? ''} onChange={(e) => onChange(e.target.value)} className={inputCls} />
      )}
    </label>
  );
}

function ColorField({ label, hint, value, onChange }: { label: string; hint?: string; value: string; onChange: (v: string) => void }) {
  const safe = /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i.test(value ?? '') ? value : '#000000';
  return (
    <div className="border border-black/10 p-3 bg-white/50">
      <span className={labelCls}>{label}</span>
      <div className="flex items-center gap-3">
        <input
          type="color"
          value={safe}
          onChange={(e) => onChange(e.target.value)}
          className="w-12 h-10 p-1 bg-ivory border border-black/10 cursor-pointer shrink-0"
          aria-label={`${label} color picker`}
        />
        <input
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder="#c9922a"
          spellCheck={false}
          className={`${inputCls} font-mono`}
        />
      </div>
      {hint ? <p className="text-[10px] text-warm mt-1 font-dm-sans">{hint}</p> : null}
    </div>
  );
}

function ImageField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  const [uploading, setUploading] = useState(false);
  const [err, setErr] = useState('');
  const preview = normalizeR2Image(value) ?? value;

  const upload = async (f: File | undefined) => {
    if (!f) return;
    setUploading(true);
    setErr('');
    try {
      const form = new FormData();
      form.append('file', f);
      form.append('folder', 'cms');
      const res = await fetch('/api/upload', { method: 'POST', body: form });
      const data = await res.json();
      if (!res.ok || !data.key) throw new Error(data.error || 'Upload failed');
      onChange(data.key);
    } catch (e) {
      setErr(String(e));
    }
    setUploading(false);
  };

  return (
    <div className="border border-black/10 p-3 bg-white/50">
      <span className={labelCls}>{label}</span>
      {preview ? (
        <div className="relative w-full h-28 mb-2 border border-gold/20 overflow-hidden bg-pearl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={preview} alt="" className="w-full h-full object-cover" />
        </div>
      ) : null}
      <input value={value ?? ''} onChange={(e) => onChange(e.target.value)} placeholder="/HomePageImage.webp or R2 key or https://…" className={inputCls} />
      <div className="flex items-center gap-2 mt-2">
        <label className="text-xs font-dm-sans text-gold-deep underline cursor-pointer">
          {uploading ? 'Uploading…' : 'Upload new image'}
          <input type="file" accept="image/*" className="hidden" onChange={(e) => upload(e.target.files?.[0])} />
        </label>
        {value ? (
          <button type="button" onClick={() => onChange('')} className="text-xs font-dm-sans text-warm underline">
            Clear
          </button>
        ) : null}
      </div>
      {err ? <p className="text-red-500 text-xs mt-1">{err}</p> : null}
      <p className="text-[10px] text-warm mt-1 font-dm-sans">Paste a /public path, full URL, or upload (stored in R2).</p>
    </div>
  );
}

function CardList({ items, onChange, singular }: { items: { title: string; desc: string }[]; onChange: (v: { title: string; desc: string }[]) => void; singular: string }) {
  const set = (i: number, patch: Partial<{ title: string; desc: string }>) => {
    const next = items.map((it, j) => (j === i ? { ...it, ...patch } : it));
    onChange(next);
  };
  return (
    <div className="space-y-4">
      {items.map((it, i) => (
        <div key={i} className="border border-black/10 p-4 space-y-3 bg-white/40">
          <div className="flex items-center justify-between">
            <span className="text-xs font-dm-sans uppercase tracking-widest text-charcoal">{singular} {i + 1}</span>
            <button type="button" onClick={() => onChange(items.filter((_, j) => j !== i))} className="text-xs text-red-600 underline font-dm-sans">
              Remove
            </button>
          </div>
          <Field label="Title" value={it.title} onChange={(v) => set(i, { title: v })} />
          <Field label="Description" value={it.desc} onChange={(v) => set(i, { desc: v })} textarea />
        </div>
      ))}
      <button type="button" onClick={() => onChange([...items, { title: `New ${singular}`, desc: '' }])} className="text-xs font-dm-sans uppercase tracking-widest border border-gold/40 px-4 py-2 hover:border-gold">
        + Add {singular}
      </button>
    </div>
  );
}

export default function SiteContentEditor({ initial, initialTab, visibleTabs }: Props) {
  const tabs = visibleTabs && visibleTabs.length > 0
    ? TABS.filter((t) => (visibleTabs as readonly string[]).includes(t.id))
    : [...TABS];
  const fallbackTab: TabId = tabs[0]?.id ?? 'company';
  const [tab, setTab] = useState<TabId>(
    isTabId(initialTab) && tabs.some((t) => t.id === initialTab) ? initialTab : fallbackTab
  );
  const [data, setData] = useState<SiteContent>(initial);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  const patch = <K extends keyof SiteContent>(key: K, p: Partial<SiteContent[K]>) =>
    setData((d) => ({ ...d, [key]: { ...(d[key] as object), ...p } as SiteContent[K] }));

  const save = async (only?: TabId) => {
    setSaving(true);
    setError('');
    try {
      const payload = only ? { [only]: data[only] } : data;
      const res = await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Save failed (${res.status})`);
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (e) {
      setError(String(e));
    }
    setSaving(false);
  };

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-3 py-1.5 text-[11px] uppercase tracking-widest font-dm-sans border transition-colors ${
              tab === t.id ? 'bg-jet text-ivory border-jet' : 'border-black/10 text-warm hover:border-gold hover:text-charcoal'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="bg-pearl/50 border border-black/10 p-6 space-y-5">
        {tab === 'company' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Brand short (navbar/footer)" value={data.company.brandName} onChange={(v) => patch('company', { brandName: v })} />
            <Field label="Full company name" value={data.company.fullName} onChange={(v) => patch('company', { fullName: v })} />
            <div className="md:col-span-2"><Field label="Tagline / footer description" value={data.company.tagline} onChange={(v) => patch('company', { tagline: v })} textarea /></div>
            <Field label="Address line 1" value={data.company.addressLine1} onChange={(v) => patch('company', { addressLine1: v })} />
            <Field label="Address line 2" value={data.company.addressLine2} onChange={(v) => patch('company', { addressLine2: v })} />
            <Field label="Email" value={data.company.email} onChange={(v) => patch('company', { email: v })} />
            <Field label="Phone display" value={data.company.phoneDisplay} onChange={(v) => patch('company', { phoneDisplay: v })} />
            <Field label="Phone tel (+… no spaces)" value={data.company.phoneTel} onChange={(v) => patch('company', { phoneTel: v })} />
            <Field label="WhatsApp number (digits only)" value={data.company.whatsappNumber} onChange={(v) => patch('company', { whatsappNumber: v })} />
            <Field label="WhatsApp display" value={data.company.whatsappDisplay} onChange={(v) => patch('company', { whatsappDisplay: v })} />
            <Field label="GST" value={data.company.gst} onChange={(v) => patch('company', { gst: v })} />
            <Field label="Hours weekdays" value={data.company.hoursWeekdays} onChange={(v) => patch('company', { hoursWeekdays: v })} />
            <Field label="Hours sunday" value={data.company.hoursSunday} onChange={(v) => patch('company', { hoursSunday: v })} />
            <Field label="LinkedIn URL" value={data.company.linkedinUrl} onChange={(v) => patch('company', { linkedinUrl: v })} />
            <Field label="Instagram URL" value={data.company.instagramUrl} onChange={(v) => patch('company', { instagramUrl: v })} />
            <Field label="Copyright name" value={data.company.copyrightName} onChange={(v) => patch('company', { copyrightName: v })} />
          </div>
        )}

        {tab === 'navbar' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(data.navbar).map(([k, v]) => (
              <Field key={k} label={k} value={String(v)} onChange={(nv) => patch('navbar', { [k]: nv } as never)} />
            ))}
          </div>
        )}

        {tab === 'footer' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(data.footer).map(([k, v]) => (
              <div key={k} className={k === 'aboutText' ? 'md:col-span-2' : ''}>
                <Field label={k} value={String(v)} onChange={(nv) => patch('footer', { [k]: nv } as never)} textarea={k === 'aboutText'} />
              </div>
            ))}
          </div>
        )}

        {tab === 'theme' && (
          <div className="space-y-4">
            <p className="text-xs text-warm font-dm-sans max-w-2xl">
              Website colors — applied live across every page (backgrounds, headings, buttons, badges).
              Pick a color or paste a hex code, then <span className="font-medium text-charcoal">Save Theme</span> below.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ColorField label="Gold (primary brand)" hint="Buttons, badges, highlights, prices" value={data.theme.gold} onChange={(v) => patch('theme', { gold: v })} />
              <ColorField label="Gold deep (hover)" hint="Button hover states" value={data.theme.goldDeep} onChange={(v) => patch('theme', { goldDeep: v })} />
              <ColorField label="Gold light" hint="Light gold surfaces, pale accents" value={data.theme.goldLight} onChange={(v) => patch('theme', { goldLight: v })} />
              <ColorField label="Ivory (page background)" hint="Main page background" value={data.theme.ivory} onChange={(v) => patch('theme', { ivory: v })} />
              <ColorField label="Pearl (card background)" hint="Cards, form panels, alt sections" value={data.theme.pearl} onChange={(v) => patch('theme', { pearl: v })} />
              <ColorField label="Charcoal (headings)" hint="Headings, body text on light" value={data.theme.charcoal} onChange={(v) => patch('theme', { charcoal: v })} />
              <ColorField label="Charcoal light (body)" hint="Paragraph text" value={data.theme.charcoalLight} onChange={(v) => patch('theme', { charcoalLight: v })} />
              <ColorField label="Warm gray (muted)" hint="Captions, placeholders, secondary text" value={data.theme.warm} onChange={(v) => patch('theme', { warm: v })} />
              <ColorField label="Jet black (dark sections)" hint="Navbar dropdowns, footers, dark bands" value={data.theme.jet} onChange={(v) => patch('theme', { jet: v })} />
            </div>
            <div className="border border-black/10 p-4 bg-white/50">
              <span className={labelCls}>Live preview</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {(Object.entries(data.theme) as [string, string][]).map(([k, v]) => (
                  <div key={k} className="flex items-center gap-2 border border-black/10 px-2 py-1">
                    <span className="w-6 h-6 border border-black/10 inline-block" style={{ backgroundColor: /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i.test(v) ? v : 'transparent' }} />
                    <span className="text-[10px] font-mono">{k}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === 'home_hero' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Badge" value={data.home_hero.badge} onChange={(v) => patch('home_hero', { badge: v })} />
            <Field label="Location line" value={data.home_hero.location} onChange={(v) => patch('home_hero', { location: v })} />
            <Field label="Title line 1" value={data.home_hero.titleLine1} onChange={(v) => patch('home_hero', { titleLine1: v })} />
            <Field label="Title line 2" value={data.home_hero.titleLine2} onChange={(v) => patch('home_hero', { titleLine2: v })} />
            <Field label="Title line 3" value={data.home_hero.titleLine3} onChange={(v) => patch('home_hero', { titleLine3: v })} />
            <div className="md:col-span-2"><Field label="Subtitle" value={data.home_hero.subtitle} onChange={(v) => patch('home_hero', { subtitle: v })} textarea /></div>
            <Field label="Primary button label" value={data.home_hero.ctaPrimaryLabel} onChange={(v) => patch('home_hero', { ctaPrimaryLabel: v })} />
            <Field label="Primary button link" value={data.home_hero.ctaPrimaryHref} onChange={(v) => patch('home_hero', { ctaPrimaryHref: v })} />
            <Field label="Secondary button label" value={data.home_hero.ctaSecondaryLabel} onChange={(v) => patch('home_hero', { ctaSecondaryLabel: v })} />
            <Field label="Secondary button link" value={data.home_hero.ctaSecondaryHref} onChange={(v) => patch('home_hero', { ctaSecondaryHref: v })} />
            <div className="md:col-span-2">
              <ImageField label="Hero image" value={data.home_hero.image} onChange={(v) => patch('home_hero', { image: v })} />
            </div>
            <Field label="Hero image alt" value={data.home_hero.imageAlt} onChange={(v) => patch('home_hero', { imageAlt: v })} />
          </div>
        )}

        {tab === 'home_about' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Eyebrow" value={data.home_about.eyebrow} onChange={(v) => patch('home_about', { eyebrow: v })} />
              <Field label="Heading" value={data.home_about.heading} onChange={(v) => patch('home_about', { heading: v })} />
            </div>
            <Field label="Paragraph 1" value={data.home_about.para1} onChange={(v) => patch('home_about', { para1: v })} textarea rows={4} />
            <Field label="Paragraph 2" value={data.home_about.para2} onChange={(v) => patch('home_about', { para2: v })} textarea rows={4} />
            <ImageField label="About image" value={data.home_about.image} onChange={(v) => patch('home_about', { image: v })} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Image alt" value={data.home_about.imageAlt} onChange={(v) => patch('home_about', { imageAlt: v })} />
              <Field label="Link label" value={data.home_about.linkLabel} onChange={(v) => patch('home_about', { linkLabel: v })} />
            </div>
            <div>
              <span className={labelCls}>Stats (number + label)</span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {data.home_about.stats.map((s, i) => (
                  <div key={i} className="border border-black/10 p-3 space-y-2 bg-white/40">
                    <Field label={`Stat ${i + 1} number`} value={String(s.value)} onChange={(v) => {
                      const next = data.home_about.stats.map((x, j) => (j === i ? { ...x, value: Number(v) || 0 } : x));
                      patch('home_about', { stats: next } as never);
                    }} />
                    <Field label={`Stat ${i + 1} label`} value={s.label} onChange={(v) => {
                      const next = data.home_about.stats.map((x, j) => (j === i ? { ...x, label: v } : x));
                      patch('home_about', { stats: next } as never);
                    }} textarea rows={2} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === 'home_whatwedo' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Eyebrow" value={data.home_whatwedo.eyebrow} onChange={(v) => patch('home_whatwedo', { eyebrow: v })} />
              <Field label="Heading" value={data.home_whatwedo.heading} onChange={(v) => patch('home_whatwedo', { heading: v })} />
            </div>
            <CardList items={data.home_whatwedo.cards} onChange={(v) => patch('home_whatwedo', { cards: v } as never)} singular="Card" />
          </div>
        )}

        {tab === 'home_why' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Eyebrow" value={data.home_why.eyebrow} onChange={(v) => patch('home_why', { eyebrow: v })} />
              <Field label="Heading" value={data.home_why.heading} onChange={(v) => patch('home_why', { heading: v })} />
            </div>
            <CardList items={data.home_why.items} onChange={(v) => patch('home_why', { items: v } as never)} singular="Reason" />
          </div>
        )}

        {tab === 'home_featured' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Eyebrow" value={data.home_featured.eyebrow} onChange={(v) => patch('home_featured', { eyebrow: v })} />
            <Field label="Heading" value={data.home_featured.heading} onChange={(v) => patch('home_featured', { heading: v })} />
            <Field label="Button label" value={data.home_featured.ctaLabel} onChange={(v) => patch('home_featured', { ctaLabel: v })} />
            <Field label="Button link" value={data.home_featured.ctaHref} onChange={(v) => patch('home_featured', { ctaHref: v })} />
            <p className="md:col-span-2 text-xs text-warm font-dm-sans">Which products appear here is controlled in Products (Featured toggle).</p>
          </div>
        )}

        {tab === 'home_process_teaser' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Eyebrow" value={data.home_process_teaser.eyebrow} onChange={(v) => patch('home_process_teaser', { eyebrow: v })} />
              <Field label="Heading" value={data.home_process_teaser.heading} onChange={(v) => patch('home_process_teaser', { heading: v })} />
              <Field label="Link label" value={data.home_process_teaser.ctaLabel} onChange={(v) => patch('home_process_teaser', { ctaLabel: v })} />
              <Field label="Link href" value={data.home_process_teaser.ctaHref} onChange={(v) => patch('home_process_teaser', { ctaHref: v })} />
            </div>
            <CardList items={data.home_process_teaser.steps} onChange={(v) => patch('home_process_teaser', { steps: v } as never)} singular="Step" />
          </div>
        )}

        {tab === 'home_testimonials' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Eyebrow" value={data.home_testimonials.eyebrow} onChange={(v) => patch('home_testimonials', { eyebrow: v })} />
              <Field label="Heading" value={data.home_testimonials.heading} onChange={(v) => patch('home_testimonials', { heading: v })} />
            </div>
            <div className="space-y-4">
              {data.home_testimonials.items.map((t, i) => (
                <div key={i} className="border border-black/10 p-4 space-y-3 bg-white/40">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-dm-sans uppercase tracking-widest">Testimonial {i + 1}</span>
                    <button type="button" onClick={() => patch('home_testimonials', { items: data.home_testimonials.items.filter((_, j) => j !== i) } as never)} className="text-xs text-red-600 underline font-dm-sans">Remove</button>
                  </div>
                  <Field label="Quote" value={t.text} onChange={(v) => {
                    const next = data.home_testimonials.items.map((x, j) => (j === i ? { ...x, text: v } : x));
                    patch('home_testimonials', { items: next } as never);
                  }} textarea />
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Author" value={t.author} onChange={(v) => {
                      const next = data.home_testimonials.items.map((x, j) => (j === i ? { ...x, author: v } : x));
                      patch('home_testimonials', { items: next } as never);
                    }} />
                    <Field label="Role" value={t.role} onChange={(v) => {
                      const next = data.home_testimonials.items.map((x, j) => (j === i ? { ...x, role: v } : x));
                      patch('home_testimonials', { items: next } as never);
                    }} />
                  </div>
                </div>
              ))}
              <button type="button" onClick={() => patch('home_testimonials', { items: [...data.home_testimonials.items, { text: '', author: '', role: '' }] } as never)} className="text-xs font-dm-sans uppercase tracking-widest border border-gold/40 px-4 py-2 hover:border-gold">
                + Add testimonial
              </button>
            </div>
          </div>
        )}

        {tab === 'home_factory' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Eyebrow" value={data.home_factory.eyebrow} onChange={(v) => patch('home_factory', { eyebrow: v })} />
              <Field label="Heading" value={data.home_factory.heading} onChange={(v) => patch('home_factory', { heading: v })} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.home_factory.images.map((im, i) => (
                <ImageField key={i} label={`Factory image ${i + 1} (alt: ${im.alt || '—'})`} value={im.src} onChange={(v) => {
                  const next = data.home_factory.images.map((x, j) => (j === i ? { ...x, src: v } : x));
                  patch('home_factory', { images: next } as never);
                }} />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Tour title" value={data.home_factory.tourTitle} onChange={(v) => patch('home_factory', { tourTitle: v })} />
              <Field label="Tour description" value={data.home_factory.tourDesc} onChange={(v) => patch('home_factory', { tourDesc: v })} />
              <Field label="Tour button label" value={data.home_factory.tourCtaLabel} onChange={(v) => patch('home_factory', { tourCtaLabel: v })} />
              <Field label="Tour button link" value={data.home_factory.tourCtaHref} onChange={(v) => patch('home_factory', { tourCtaHref: v })} />
            </div>
          </div>
        )}

        {tab === 'home_cta' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2"><Field label="Heading" value={data.home_cta.heading} onChange={(v) => patch('home_cta', { heading: v })} /></div>
            <div className="md:col-span-2"><Field label="Description" value={data.home_cta.desc} onChange={(v) => patch('home_cta', { desc: v })} textarea /></div>
            <Field label="Button label" value={data.home_cta.buttonLabel} onChange={(v) => patch('home_cta', { buttonLabel: v })} />
            <Field label="Button link" value={data.home_cta.buttonHref} onChange={(v) => patch('home_cta', { buttonHref: v })} />
            <Field label="Form title" value={data.home_cta.formTitle} onChange={(v) => patch('home_cta', { formTitle: v })} />
            <Field label="Form button" value={data.home_cta.formButtonLabel} onChange={(v) => patch('home_cta', { formButtonLabel: v })} />
            <Field label="Success title" value={data.home_cta.formSuccessTitle} onChange={(v) => patch('home_cta', { formSuccessTitle: v })} />
            <Field label="Success text" value={data.home_cta.formSuccessDesc} onChange={(v) => patch('home_cta', { formSuccessDesc: v })} />
          </div>
        )}

        {tab === 'about' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Eyebrow" value={data.about.eyebrow} onChange={(v) => patch('about', { eyebrow: v })} />
              <Field label="Heading" value={data.about.heading} onChange={(v) => patch('about', { heading: v })} />
            </div>
            <Field label="Intro paragraph" value={data.about.intro} onChange={(v) => patch('about', { intro: v })} textarea rows={5} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ImageField label="Cover image" value={data.about.coverImage} onChange={(v) => patch('about', { coverImage: v })} />
              <Field label="Cover alt" value={data.about.coverAlt} onChange={(v) => patch('about', { coverAlt: v })} />
              <ImageField label="Image 1" value={data.about.image1} onChange={(v) => patch('about', { image1: v })} />
              <Field label="Image 1 alt" value={data.about.image1Alt} onChange={(v) => patch('about', { image1Alt: v })} />
            </div>
            <Field label="Text block 1" value={data.about.text1} onChange={(v) => patch('about', { text1: v })} textarea rows={5} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ImageField label="Image 2" value={data.about.image2} onChange={(v) => patch('about', { image2: v })} />
              <Field label="Image 2 alt" value={data.about.image2Alt} onChange={(v) => patch('about', { image2Alt: v })} />
            </div>
            <Field label="Text block 2" value={data.about.text2} onChange={(v) => patch('about', { text2: v })} textarea rows={5} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Bottom link label" value={data.about.ctaLabel} onChange={(v) => patch('about', { ctaLabel: v })} />
              <Field label="Bottom link href" value={data.about.ctaHref} onChange={(v) => patch('about', { ctaHref: v })} />
            </div>
          </div>
        )}

        {tab === 'contact' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Hero title" value={data.contact.heroTitle} onChange={(v) => patch('contact', { heroTitle: v })} />
            <Field label="Hero subtitle" value={data.contact.heroSubtitle} onChange={(v) => patch('contact', { heroSubtitle: v })} />
            <Field label="Info heading" value={data.contact.infoHeading} onChange={(v) => patch('contact', { infoHeading: v })} />
            <Field label="Address title" value={data.contact.addressTitle} onChange={(v) => patch('contact', { addressTitle: v })} />
            <Field label="Address line 1" value={data.contact.addressLine1} onChange={(v) => patch('contact', { addressLine1: v })} />
            <Field label="Address line 2" value={data.contact.addressLine2} onChange={(v) => patch('contact', { addressLine2: v })} />
            <Field label="Address line 3" value={data.contact.addressLine3} onChange={(v) => patch('contact', { addressLine3: v })} />
            <Field label="Contact block title" value={data.contact.contactTitle} onChange={(v) => patch('contact', { contactTitle: v })} />
            <Field label="GST title" value={data.contact.gstTitle} onChange={(v) => patch('contact', { gstTitle: v })} />
            <Field label="Inquiry tab" value={data.contact.inquiryTabLabel} onChange={(v) => patch('contact', { inquiryTabLabel: v })} />
            <Field label="Quotation tab" value={data.contact.quotationTabLabel} onChange={(v) => patch('contact', { quotationTabLabel: v })} />
            <Field label="Send button" value={data.contact.sendButtonLabel} onChange={(v) => patch('contact', { sendButtonLabel: v })} />
            <Field label="Sending…" value={data.contact.sendingButtonLabel} onChange={(v) => patch('contact', { sendingButtonLabel: v })} />
            <Field label="Success title" value={data.contact.successTitle} onChange={(v) => patch('contact', { successTitle: v })} />
            <Field label="Success text" value={data.contact.successDesc} onChange={(v) => patch('contact', { successDesc: v })} />
            <Field label="Send-another link" value={data.contact.sendAnotherLabel} onChange={(v) => patch('contact', { sendAnotherLabel: v })} />
            <div className="md:col-span-2"><Field label="Inquiry placeholder" value={data.contact.inquiryPlaceholder} onChange={(v) => patch('contact', { inquiryPlaceholder: v })} textarea rows={2} /></div>
            <div className="md:col-span-2"><Field label="Quotation placeholder" value={data.contact.quotationPlaceholder} onChange={(v) => patch('contact', { quotationPlaceholder: v })} textarea rows={2} /></div>
            <p className="md:col-span-2 text-xs text-warm font-dm-sans">Email / phone / WhatsApp / GST / hours come from the Company & Contact tab.</p>
          </div>
        )}

        {tab === 'process' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Hero title" value={data.process.heroTitle} onChange={(v) => patch('process', { heroTitle: v })} />
              <Field label="Hero subtitle" value={data.process.heroSubtitle} onChange={(v) => patch('process', { heroSubtitle: v })} />
              <Field label="Bottom CTA title" value={data.process.ctaTitle} onChange={(v) => patch('process', { ctaTitle: v })} />
              <Field label="Bottom CTA button" value={data.process.ctaButtonLabel} onChange={(v) => patch('process', { ctaButtonLabel: v })} />
            </div>
            <div className="space-y-4">
              {data.process.steps.map((s, i) => (
                <div key={i} className="border border-black/10 p-4 space-y-3 bg-white/40">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-dm-sans uppercase tracking-widest">Step {i + 1}</span>
                    <button type="button" onClick={() => patch('process', { steps: data.process.steps.filter((_, j) => j !== i) } as never)} className="text-xs text-red-600 underline font-dm-sans">Remove</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Field label="Title" value={s.title} onChange={(v) => {
                      const next = data.process.steps.map((x, j) => (j === i ? { ...x, title: v } : x));
                      patch('process', { steps: next } as never);
                    }} />
                    <ImageField label="Step image" value={s.image} onChange={(v) => {
                      const next = data.process.steps.map((x, j) => (j === i ? { ...x, image: v } : x));
                      patch('process', { steps: next } as never);
                    }} />
                  </div>
                  <Field label="Description" value={s.desc} onChange={(v) => {
                    const next = data.process.steps.map((x, j) => (j === i ? { ...x, desc: v } : x));
                    patch('process', { steps: next } as never);
                  }} textarea />
                  <div>
                    <span className={labelCls}>Bullet highlights (one per line)</span>
                    <textarea
                      value={s.highlights.join('\n')}
                      onChange={(e) => {
                        const next = data.process.steps.map((x, j) => (j === i ? { ...x, highlights: e.target.value.split('\n') } : x));
                        patch('process', { steps: next } as never);
                      }}
                      rows={3}
                      className={inputCls}
                    />
                  </div>
                </div>
              ))}
              <button type="button" onClick={() => patch('process', { steps: [...data.process.steps, { title: 'New step', desc: '', highlights: [''], image: '' }] } as never)} className="text-xs font-dm-sans uppercase tracking-widest border border-gold/40 px-4 py-2 hover:border-gold">
                + Add step
              </button>
            </div>
          </div>
        )}

        {tab === 'certificates_page' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Hero title" value={data.certificates_page.heroTitle} onChange={(v) => patch('certificates_page', { heroTitle: v })} />
            <Field label="Hero subtitle" value={data.certificates_page.heroSubtitle} onChange={(v) => patch('certificates_page', { heroSubtitle: v })} />
            <p className="md:col-span-2 text-xs text-warm font-dm-sans">Certificate cards (name, issuer, image) are managed in the Certificates tab — this public page now reads that database.</p>
          </div>
        )}

        {tab === 'products_page' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Page title" value={data.products_page.title} onChange={(v) => patch('products_page', { title: v })} />
            <Field label="Page subtitle" value={data.products_page.subtitle} onChange={(v) => patch('products_page', { subtitle: v })} />
            <div className="md:col-span-2"><Field label="Guest note (use {n} for count)" value={data.products_page.guestNote} onChange={(v) => patch('products_page', { guestNote: v })} /></div>
            <Field label="Empty-filter message" value={data.products_page.emptyMessage} onChange={(v) => patch('products_page', { emptyMessage: v })} />
            <Field label="Guest banner title (use {n})" value={data.products_page.guestBannerTitle} onChange={(v) => patch('products_page', { guestBannerTitle: v })} />
            <div className="md:col-span-2"><Field label="Guest banner description" value={data.products_page.guestBannerDesc} onChange={(v) => patch('products_page', { guestBannerDesc: v })} textarea /></div>
            <Field label="Sign-in button" value={data.products_page.signInLabel} onChange={(v) => patch('products_page', { signInLabel: v })} />
            <Field label="Register button" value={data.products_page.registerLabel} onChange={(v) => patch('products_page', { registerLabel: v })} />
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-3">
        <button onClick={() => save(tab)} disabled={saving} className="btn-primary disabled:opacity-50">
          {saving ? 'Saving…' : saved ? 'Saved ✓' : `Save ${TABS.find((t) => t.id === tab)?.label}`}
        </button>
        <button onClick={() => save()} disabled={saving} className="btn-secondary disabled:opacity-50">
          Save all sections
        </button>
        {error ? <span className="text-red-600 text-xs font-dm-sans">{error}</span> : null}
      </div>

      {/* Debug preview */}
      <details className="text-xs font-mono text-warm">
        <summary className="cursor-pointer uppercase tracking-widest font-dm-sans">Preview saved image URLs</summary>
        <pre className="mt-2 whitespace-pre-wrap break-all bg-black/5 p-3 max-h-64 overflow-auto">
          {JSON.stringify({ hero: data.home_hero.image, about: data.home_about.image, factory: data.home_factory.images }, null, 2)}
        </pre>
      </details>
    </div>
  );
}
