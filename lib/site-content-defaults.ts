import { getR2AssetUrl } from '@/lib/r2/config';

/**
 * Central CMS layer — every public text + image lives here.
 * Stored in `SiteSettings` table as JSON under `cms_*` keys.
 * Admin edits via /admin/content (saves through /api/admin/settings).
 * Public pages merge DB values over DEFAULT_CONTENT so the site
 * works with zero DB rows and updates instantly when admin saves.
 */

export type StatItem = { value: number; label: string };
export type CardItem = { title: string; desc: string };
export type TestimonialItem = { text: string; author: string; role: string };
export type FactoryImage = { src: string; alt: string };
export type ProcessStep = { title: string; desc: string; highlights: string[]; image: string };

function processImage(filename: string) {
  return `/Processes/${encodeURIComponent(filename)}`;
}

export const DEFAULT_CONTENT = {
  company: {
    brandName: 'Sachi',
    fullName: 'Sachi Jewellery Co.',
    tagline: 'A legacy of craftsmanship from the heart of Jaipur. Trusted worldwide.',
    addressLine1: 'H-193 SEZ-II Sitapura Industrial Area',
    addressLine2: 'Jaipur, Rajasthan 302022, India',
    email: 'contact@sachijewellery.com',
    phoneDisplay: '+91 89469 31404',
    phoneTel: '+918946931404',
    whatsappNumber: '918946931404',
    whatsappDisplay: '+91 89469 31404',
    gst: '08ACSFS4747G1ZI',
    hoursWeekdays: 'Monday - Saturday: 10:00 AM - 7:00 PM (IST)',
    hoursSunday: 'Sunday: Closed',
    linkedinUrl: '#',
    instagramUrl: '#',
    copyrightName: 'Sachi Jewellery Co.',
  },
  navbar: {
    brand: 'Sachi',
    companyLabel: 'Company ▾',
    aboutLabel: 'About Us',
    whatWeDoLabel: 'What We Do',
    whyChooseUsLabel: 'Why Choose Us',
    valuesLabel: 'Our Values',
    productsLabel: 'Products',
    processLabel: 'Our Process',
    certificatesLabel: 'Certificates',
    contactLabel: 'Contact',
    ctaLabel: 'Request a Quote →',
  },
  footer: {
    aboutTitle: 'Sachi',
    aboutText: 'A legacy of craftsmanship from the heart of Jaipur. Trusted worldwide.',
    companyTitle: 'Company',
    companyAbout: 'About Sachi',
    companyProcess: 'Our Process',
    companyCertificates: 'Certificates',
    companySustainability: 'Sustainability',
    productsTitle: 'Products',
    productsGold: 'Gold Jewellery',
    productsSilver: 'Silver Jewellery',
    productsBrass: 'Brass Jewellery',
    productsAll: 'All Collections',
    contactTitle: 'Contact',
    privacyLabel: 'Privacy Policy',
    termsLabel: 'Terms of Service',
    rightsText: 'All rights reserved.',
  },
  home_hero: {
    badge: 'Since 1975',
    location: 'Jaipur, India — Est. in Craftsmanship',
    titleLine1: 'Crafted in Jaipur.',
    titleLine2: 'Trusted',
    titleLine3: 'Worldwide.',
    subtitle: 'Fine jewellery manufacturing, wholesale & export. Gold · Silver · Brass · Gemstones.',
    ctaPrimaryLabel: 'Explore Collections',
    ctaPrimaryHref: '/products',
    ctaSecondaryLabel: 'Request a Quote',
    ctaSecondaryHref: '/contact#quote',
    image: '/HomePageImage.webp',
    imageAlt: 'Sachi Jewellery — Fine Craftsmanship',
  },
  home_about: {
    eyebrow: 'About Sachi Jewellery Co.',
    heading: 'Where Craft Meets Global Standards',
    para1:
      'Sachi Jewellery Co. is a Jaipur-based manufacturer specializing in large-scale production and global supply of precious and semi-precious jewellery. We serve global wholesalers, retailers, and brands with consistent quality and reliable delivery.',
    para2:
      'With in-house design, CAD expertise, and skilled craftsmanship, we deliver precision-driven, market-ready collections. Our focus is on scalability, quality control, and long-term business partnerships across global markets.',
    image: '/HomePageAbout.webp',
    imageAlt: 'Sachi Jewellery craftsmen',
    linkLabel: 'Learn More About Our Story',
    linkHref: '/about',
    stats: [
      { value: 150, label: 'Skilled\nCraftsmen' },
      { value: 8, label: 'Global\nMarkets' },
      { value: 4, label: 'Metal\nSpecialisations' },
    ] as StatItem[],
  },
  home_whatwedo: {
    eyebrow: 'End-to-End Fine Jewellery',
    heading: 'Manufacturing',
    cards: [
      { title: 'High-Precision Manufacturing', desc: 'Advanced manufacturing with skilled craftsmanship ensuring precision and consistent global quality.' },
      { title: 'OEM / ODM Expertise', desc: 'Trusted Jaipur-based partner offering complete OEM/ODM solutions across Gold, Silver, and Brass jewellery.' },
      { title: 'Color Gemstone Specialization', desc: 'Deep expertise in sourcing, matching, and setting gemstones with consistent color, clarity, and finish.' },
      { title: 'Global B2B Partnerships', desc: 'Working with international brands, wholesalers, and bulk buyers to deliver reliable, production-ready solutions.' },
      { title: 'End-to-End Development', desc: 'From concept to final production, delivering trend-driven and fully customized jewellery with accuracy.' },
      { title: 'Scalable & Consistent Production', desc: 'Handling small batches to high volumes with strict quality control, ensuring durability and premium finishing.' },
    ] as CardItem[],
  },
  home_why: {
    eyebrow: 'Why Partner With Sachi',
    heading: 'The Manufacturer of Choice',
    items: [
      { title: 'In-House Production', desc: '150 craftsmen under one roof, providing complete end-to-end quality control and faster turnaround.' },
      { title: 'Gemstone Expertise', desc: "Direct sourcing of precious stones from Jaipur's finest cutters, ensuring vibrancy and match perfection." },
      { title: 'Sustainability Focus', desc: 'Ethical material sourcing, safe working conditions, and responsible waste management protocols.' },
      { title: 'CAD Precision', desc: 'Advanced 3D modeling allows perfect prototyping before physical casting begins.' },
      { title: 'Scalable Manufacturing', desc: 'Equipped to handle boutique minimums or massive chain-store volume without compromising detail.' },
      { title: 'Trusted Partnerships', desc: 'Over a decade building reliable B2B wholesale relationships globally.' },
    ] as CardItem[],
  },
  home_featured: {
    eyebrow: 'Our Collections',
    heading: 'Handpicked From Our Catalogue',
    ctaLabel: 'View All Products →',
    ctaHref: '/products',
  },
  home_process_teaser: {
    eyebrow: 'Our Process',
    heading: 'From Concept to Creation',
    ctaLabel: 'See Our Full Process',
    ctaHref: '/process',
    steps: [
      { title: 'Design Consultation', desc: 'Understanding your vision and conceptualizing.' },
      { title: 'CAD Modelling', desc: '3D modeling and client approval loop.' },
      { title: 'Casting & Forming', desc: 'Lost-wax casting and metal working.' },
      { title: 'Gemstone Setting', desc: 'Precision color matching and setting.' },
      { title: 'QC', desc: 'Strict qualitative adherence checks.' },
      { title: 'Export', desc: 'Global shipping and compliance.' },
    ] as CardItem[],
  },
  home_testimonials: {
    eyebrow: 'Client Testimonials',
    heading: 'Trusted by Buyers Worldwide',
    items: [
      { text: 'Sachi has been our manufacturing partner for 3 years. Consistent quality, timely delivery.', author: 'Sarah Mitchell', role: 'Wholesale Buyer, UK' },
      { text: 'The gemstone matching precision is unparalleled. Our customers love every piece.', author: 'Dmitri Volkov', role: 'Jewellery Chain Owner, Russia' },
      { text: "From design to delivery, Sachi's process is seamless. Highly recommended.", author: 'Marie Dupont', role: 'Brand Director, France' },
    ] as TestimonialItem[],
  },
  home_factory: {
    eyebrow: 'Inside Our Workshop',
    heading: '150 Craftsmen, One Vision',
    images: [
      { src: '/BentoGrid/1.png', alt: 'Workshop' },
      { src: '/BentoGrid/2.png', alt: 'Tools' },
      { src: '/BentoGrid/3.png', alt: 'Crafting' },
      { src: '/BentoGrid/4.png', alt: 'CAD' },
      { src: '/BentoGrid/6.png', alt: 'Workshop details' },
    ] as FactoryImage[],
    tourTitle: 'Book a Factory Tour',
    tourDesc: 'See where the magic happens.',
    tourCtaLabel: 'Contact Us →',
    tourCtaHref: '/contact',
  },
  home_cta: {
    heading: 'Ready to Start Your Next Collection?',
    desc: 'Contact our dedicated team to discuss your manufacturing needs, request a sample, or get a quotation for bulk orders.',
    buttonLabel: 'Contact Us Today',
    buttonHref: '/contact',
    formTitle: 'Quick Inquiry',
    formButtonLabel: 'Send Message',
    formSuccessTitle: 'Message Received',
    formSuccessDesc: 'Our team will get back to you within 24 business hours.',
  },
  about: {
    coverImage: '/HomePageImage.webp',
    coverAlt: 'Sachi Jewellery Co. — Jaipur manufacturing',
    eyebrow: 'Who We Are',
    heading: 'About Us',
    intro:
      "Sachi Jewellery Co. is a fine jewellery manufacturing company based in Jaipur, the heart of India's jewellery hub. Located in the Sitapura Industrial Area (SEZ-II), Rajasthan, we have established a strong reputation as a global leader in the sustainable mass production, wholesale, and export of both precious and semi-precious jewellery.",
    image1: '/BentoGrid/1.png',
    image1Alt: 'Sachi Jewellery design and craftsmanship',
    text1:
      'Our journey is defined by innovation, trust, and timeless craftsmanship. With a dedicated team of passionate jewellery designers trained at prestigious design institutions, we bring creativity and originality to every collection. Our skilled CAD designers and master craftsmen ensure that each piece reflects precision, elegance, and international quality standards.',
    image2: '/BentoGrid/3.png',
    image2Alt: 'Sachi Jewellery workshop and production',
    text2:
      'At Sachi Jewellery Co., we pride ourselves on blending traditional artistry with cutting-edge technology. This synergy allows us to consistently deliver exquisite designs that cater to diverse global markets, from classic pieces to contemporary trends. With sustainability at the core of our practices, we aim to not only create jewellery but also foster long-lasting relationships with our partners worldwide.',
    ctaLabel: 'Explore Our Process →',
    ctaHref: '/process',
  },
  contact: {
    heroTitle: 'Contact Us',
    heroSubtitle: 'Wholesale Inquiries · Factory Tours · Custom Orders',
    infoHeading: 'Get in Touch',
    addressTitle: 'Registered Office & Factory',
    addressLine1: 'H-193 SEZ-II',
    addressLine2: 'Sitapura Industrial Area',
    addressLine3: 'Jaipur, Rajasthan 302022, India',
    contactTitle: 'Contact Details',
    gstTitle: 'GST Registration',
    hoursTitle: 'Business Hours',
    successTitle: 'Message Received',
    successDesc: 'Our team will get back to you within 24 business hours.',
    sendAnotherLabel: 'Send Another Message',
    inquiryTabLabel: 'Inquiry',
    quotationTabLabel: 'Formal Quotation',
    sendButtonLabel: 'Send Message',
    sendingButtonLabel: 'Sending...',
    inquiryPlaceholder: 'How can we help you? *',
    quotationPlaceholder: 'Please paste your quotation details here or provide a link to the generated Quote PDF.',
  },
  process: {
    heroTitle: 'From Concept to Creation',
    heroSubtitle: 'End-to-End Fine Jewellery Manufacturing',
    ctaTitle: 'Ready to Begin Your Collection?',
    ctaButtonLabel: 'Contact Us Today',
    ctaButtonHref: '/contact',
    steps: [
      { title: 'Concept & Design', desc: 'Market-driven designs developed to align with client and global trends.', highlights: ['Trend research and concept development', 'Sketching and design detailing', 'CAD file creation for production'], image: processImage('1. Concept & Design.webp') },
      { title: '3D Modeling & Prototyping', desc: 'Precise CAD models converted into physical prototypes for validation.', highlights: ['3D CAD model development', 'Prototype creation (wax/resin)', 'Design review and approval'], image: processImage('2.3d Modeling .webp') },
      { title: 'Mold Making', desc: 'Accurate molds created to ensure consistency in bulk production.', highlights: ['Master model preparation', 'Mold creation (silicone/rubber)', 'Mold finishing and testing'], image: processImage('3. mold Making.webp') },
      { title: 'Wax Injection', desc: 'Consistent wax models produced for efficient casting processes.', highlights: ['Wax injection into molds', 'Removal and cleaning of wax pieces', 'Tree assembly for casting'], image: processImage('4. Wax Injection.webp') },
      { title: 'Casting', desc: 'Metal is cast into defined shapes using advanced casting techniques.', highlights: ['Investment preparation', 'Metal melting and pouring', 'Cooling and mold removal'], image: processImage('5. Casting .webp') },
      { title: 'Cutting & Filing', desc: 'Refining raw cast pieces to achieve accurate structure and finish.', highlights: ['Tree cutting and separation', 'Filing and shaping', 'Surface correction'], image: processImage('6. Cuttin and Filling.webp') },
      { title: 'Pre-Polishing', desc: 'Initial polishing to prepare surfaces for further processing.', highlights: ['Surface smoothing', 'Emery and buffing', 'Pre-finishing inspection'], image: processImage('7. Pre Polishing.webp') },
      { title: 'Stone Setting', desc: 'Gemstones are securely set with precision and alignment.', highlights: ['Stone Color matching is done', 'Setting (prong/bezel/pave)', 'Tightening and alignment'], image: processImage('8. Stone Setting.webp') },
      { title: 'Final Polishing', desc: "Enhancing the jewellery's shine and overall finish.", highlights: ['Final buffing and polishing', 'Ultrasonic cleaning', 'Surface finishing check'], image: processImage('9. Final Polishing.webp') },
      { title: 'Plating / Finishing', desc: 'Applying protective and decorative coatings for durability and aesthetics.', highlights: ['Surface preparation and cleaning', 'Rhodium or Gold Plating', 'Final finish inspection'], image: processImage('10. Plating.webp') },
      { title: 'Quality Control (QC)', desc: 'Strict inspection to ensure every piece meets required standards.', highlights: ['Dimensional and design check', 'Stone setting inspection', 'Final quality approval'], image: processImage('11. Quality Control.webp') },
      { title: 'Packaging & Dispatch', desc: 'Secure packaging and timely delivery for global shipments.', highlights: ['Final cleaning and polishing', 'Packaging as per client requirement', 'Dispatch and logistics handling'], image: processImage('12. packaging .webp') },
    ] as ProcessStep[],
  },
  certificates_page: {
    heroTitle: 'Quality Certifications',
    heroSubtitle: 'Commitment to Excellence & Compliance',
  },
  products_page: {
    title: 'Our Collections',
    subtitle: 'Gold · Silver · Brass · Gemstones',
    guestNote: 'Showing {n} featured pieces · Sign in for full access',
    emptyMessage: 'No products match the selected filters.',
    guestBannerTitle: 'Viewing {n} of our featured pieces',
    guestBannerDesc: 'Sign in or register for a wholesale account to browse the complete catalogue.',
    signInLabel: 'Sign In',
    registerLabel: 'Apply for Wholesale Access',
    filterLoginMessage: 'Sign in to use filters and search the full catalogue',
    cardLoginMessage: 'Sign in to add products to your quotation',
    catalogueLoginMessage: 'Sign in for full catalogue access',
  },
  theme: {
    gold: '#c9922a',
    goldDeep: '#a67318',
    goldLight: '#f5e6c8',
    ivory: '#fdfaf4',
    pearl: '#f9f6ef',
    charcoal: '#2c2a27',
    charcoalLight: '#4a4743',
    warm: '#7a7670',
    jet: '#111010',
  },
};

export type SiteContent = typeof DEFAULT_CONTENT;
export type ContentKey = keyof SiteContent;

export const CMS_KEYS: ContentKey[] = Object.keys(DEFAULT_CONTENT) as ContentKey[];

export function cmsSettingKey(key: ContentKey): string {
  return `cms_${key}`;
}

/** Resolve any stored image value → usable <Image> src.
 * Accepts: /public paths (/foo.webp), http(s) URLs, R2 keys (sachi_jewellers/...),
 * /api/r2-image/... passthrough. Falls back to `fallback` on empty. */
export function resolveContentImage(
  value: string | null | undefined,
  fallback: string,
): string {
  if (!value || !String(value).trim()) return fallback;
  const v = String(value).trim();
  if (v.startsWith('http') || v.startsWith('/api/') || v.startsWith('/')) return v;
  try {
    return getR2AssetUrl(v);
  } catch {
    return fallback;
  }
}

/** Keep only safe #rgb / #rrggbb colors (used before injecting theme CSS). */
export function sanitizeHex(value: unknown, fallback: string): string {
  const v = String(value ?? '').trim();
  return /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i.test(v) ? v : fallback;
}

/** CSS var name for a theme color key, e.g. goldDeep becomes --color-gold-deep.
 * Matches the @theme inline color tokens, so per-request values set on
 * the html element override every bg, text and border utility at runtime. */
export function themeVarName(key: string): string {
  return '--color-' + key.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
}

