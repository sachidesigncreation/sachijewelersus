'use client';
import { useState } from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import { DEFAULT_CONTENT, type SiteContent } from '@/lib/site-content-defaults';

export default function ContactCTAStrip({ content, companyEmail }: { content?: SiteContent["home_cta"]; companyEmail?: string }) {
  const c = content ?? DEFAULT_CONTENT.home_cta;
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'INQUIRY',
          name: String(data.get('name') || ''),
          email: String(data.get('email') || ''),
          message: String(data.get('message') || ''),
        }),
      });
      if (res.ok) {
        setSent(true);
        form.reset();
      }
    } catch { /* keep form */ }
    setSending(false);
  };

  return (
    <section className="bg-gold py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <h2 className="font-cormorant text-display-md text-jet mb-4">
            {c.heading}
          </h2>
          <p className="text-jet/80 text-body-lg mb-8 max-w-md font-dm-sans">
            {c.desc}
          </p>
          <a href={c.buttonHref || "/contact"} className="inline-block bg-jet text-gold px-8 py-4 font-dm-sans font-medium text-xs tracking-widest uppercase hover:bg-jet/90 transition-colors">
            {c.buttonLabel}
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="bg-ivory p-8">
          <h3 className="font-cormorant text-2xl text-charcoal mb-6">{c.formTitle}</h3>
          {sent ? (
            <div className="text-center py-8">
              <p className="font-cormorant text-xl text-charcoal mb-2">{c.formSuccessTitle}</p>
              <p className="text-sm text-charcoal-light font-dm-sans">{c.formSuccessDesc}</p>
            </div>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input name="name" required minLength={2} type="text" placeholder="Name" className="w-full bg-pearl border border-gold/30 px-4 py-3 placeholder:text-warm focus:outline-none focus:border-gold" />
              <input name="email" required type="email" placeholder="Email" className="w-full bg-pearl border border-gold/30 px-4 py-3 placeholder:text-warm focus:outline-none focus:border-gold" />
              <textarea name="message" required minLength={10} placeholder="Message" rows={3} className="w-full bg-pearl border border-gold/30 px-4 py-3 placeholder:text-warm focus:outline-none focus:border-gold resize-none" />
              <button type="submit" disabled={sending} className="w-full bg-charcoal text-ivory py-3 font-dm-sans text-xs uppercase tracking-widest hover:bg-jet transition-colors disabled:opacity-50">
                {sending ? 'Sending...' : c.formButtonLabel}
              </button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
