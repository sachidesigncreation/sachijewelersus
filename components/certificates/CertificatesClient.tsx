'use client';
import { useState } from 'react';
import Image from 'next/image';
import Lightbox from '@/components/ui/Lightbox';
import { normalizeR2Image } from '@/lib/r2/config';

export type PublicCert = {
  id: string;
  name: string;
  issuingBody: string;
  thumbnail: string;
  fullImage: string;
};

export default function CertificatesClient({ certificates }: { certificates: PublicCert[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeCert = certificates.find((c) => c.id === activeId) ?? null;

  const toLightbox = (c: PublicCert | null) =>
    c ? { id: c.id, name: c.name, issuingBody: c.issuingBody, thumbnail: c.thumbnail, fullImage: c.fullImage } : null;

  const handleNext = () => {
    if (!activeCert) return;
    const idx = certificates.findIndex((c) => c.id === activeCert.id);
    setActiveId(certificates[(idx + 1) % certificates.length].id);
  };

  const handlePrev = () => {
    if (!activeCert) return;
    const idx = certificates.findIndex((c) => c.id === activeCert.id);
    setActiveId(certificates[(idx - 1 + certificates.length) % certificates.length].id);
  };

  if (certificates.length === 0) {
    return (
      <div className="text-center py-20 text-warm font-dm-sans">
        Certificates will be published soon.
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-pearl border border-gold/20 p-6 group cursor-pointer hover:border-gold transition-colors"
            onClick={() => setActiveId(cert.id)}
          >
            <div className="aspect-[4/3] bg-ivory border border-gold/10 mb-4 relative overflow-hidden">
              <Image src={cert.thumbnail} alt={cert.name} fill className="object-cover p-4 group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <h3 className="font-cormorant text-heading text-charcoal">{cert.name}</h3>
            <p className="text-caption text-warm mt-1 uppercase tracking-widest">{cert.issuingBody}</p>
          </div>
        ))}
      </div>
      <Lightbox cert={toLightbox(activeCert) as never} onClose={() => setActiveId(null)} onNext={handleNext} onPrev={handlePrev} />
    </>
  );
}

export function certImage(url: string, fallback: string): string {
  return normalizeR2Image(url) ?? fallback;
}
