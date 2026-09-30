module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/r2/config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "R2_CONFIG",
    ()=>R2_CONFIG,
    "getR2AssetUrl",
    ()=>getR2AssetUrl,
    "normalizeR2Image",
    ()=>normalizeR2Image,
    "r2Key",
    ()=>r2Key
]);
const R2_CONFIG = {
    BUCKET_NAME: process.env.R2_BUCKET || 'sachi',
    CDN_URL: process.env.NEXT_PUBLIC_R2_CDN_URL || '',
    PUBLIC_URL: process.env.NEXT_PUBLIC_R2_PUBLIC_URL || '',
    // All Sachi assets are prefixed with this folder in the shared bucket
    PREFIX: 'sachi_jewellers'
};
function getR2AssetUrl(path) {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    if (R2_CONFIG.CDN_URL) return `${R2_CONFIG.CDN_URL}/${cleanPath}`;
    if (R2_CONFIG.PUBLIC_URL) return `${R2_CONFIG.PUBLIC_URL}/${cleanPath}`;
    return `/api/r2-image/${cleanPath}`;
}
function r2Key(relativePath) {
    const clean = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
    return `${R2_CONFIG.PREFIX}/${clean}`;
}
function normalizeR2Image(imagePath) {
    if (!imagePath) return null;
    if (imagePath.startsWith('http') || imagePath.startsWith('/api/r2-image/')) {
        return imagePath;
    }
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    return getR2AssetUrl(cleanPath);
}
}),
"[project]/lib/site-content-defaults.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CMS_KEYS",
    ()=>CMS_KEYS,
    "DEFAULT_CONTENT",
    ()=>DEFAULT_CONTENT,
    "cmsSettingKey",
    ()=>cmsSettingKey,
    "resolveContentImage",
    ()=>resolveContentImage,
    "sanitizeHex",
    ()=>sanitizeHex,
    "themeVarName",
    ()=>themeVarName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$r2$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/r2/config.ts [app-ssr] (ecmascript)");
;
function processImage(filename) {
    return `/Processes/${encodeURIComponent(filename)}`;
}
const DEFAULT_CONTENT = {
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
        copyrightName: 'Sachi Jewellery Co.'
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
        ctaLabel: 'Request a Quote →'
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
        rightsText: 'All rights reserved.'
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
        imageAlt: 'Sachi Jewellery — Fine Craftsmanship'
    },
    home_about: {
        eyebrow: 'About Sachi Jewellery Co.',
        heading: 'Where Craft Meets Global Standards',
        para1: 'Sachi Jewellery Co. is a Jaipur-based manufacturer specializing in large-scale production and global supply of precious and semi-precious jewellery. We serve global wholesalers, retailers, and brands with consistent quality and reliable delivery.',
        para2: 'With in-house design, CAD expertise, and skilled craftsmanship, we deliver precision-driven, market-ready collections. Our focus is on scalability, quality control, and long-term business partnerships across global markets.',
        image: '/HomePageAbout.webp',
        imageAlt: 'Sachi Jewellery craftsmen',
        linkLabel: 'Learn More About Our Story',
        linkHref: '/about',
        stats: [
            {
                value: 150,
                label: 'Skilled\nCraftsmen'
            },
            {
                value: 8,
                label: 'Global\nMarkets'
            },
            {
                value: 4,
                label: 'Metal\nSpecialisations'
            }
        ]
    },
    home_whatwedo: {
        eyebrow: 'End-to-End Fine Jewellery',
        heading: 'Manufacturing',
        cards: [
            {
                title: 'High-Precision Manufacturing',
                desc: 'Advanced manufacturing with skilled craftsmanship ensuring precision and consistent global quality.'
            },
            {
                title: 'OEM / ODM Expertise',
                desc: 'Trusted Jaipur-based partner offering complete OEM/ODM solutions across Gold, Silver, and Brass jewellery.'
            },
            {
                title: 'Color Gemstone Specialization',
                desc: 'Deep expertise in sourcing, matching, and setting gemstones with consistent color, clarity, and finish.'
            },
            {
                title: 'Global B2B Partnerships',
                desc: 'Working with international brands, wholesalers, and bulk buyers to deliver reliable, production-ready solutions.'
            },
            {
                title: 'End-to-End Development',
                desc: 'From concept to final production, delivering trend-driven and fully customized jewellery with accuracy.'
            },
            {
                title: 'Scalable & Consistent Production',
                desc: 'Handling small batches to high volumes with strict quality control, ensuring durability and premium finishing.'
            }
        ]
    },
    home_why: {
        eyebrow: 'Why Partner With Sachi',
        heading: 'The Manufacturer of Choice',
        items: [
            {
                title: 'In-House Production',
                desc: '150 craftsmen under one roof, providing complete end-to-end quality control and faster turnaround.'
            },
            {
                title: 'Gemstone Expertise',
                desc: "Direct sourcing of precious stones from Jaipur's finest cutters, ensuring vibrancy and match perfection."
            },
            {
                title: 'Sustainability Focus',
                desc: 'Ethical material sourcing, safe working conditions, and responsible waste management protocols.'
            },
            {
                title: 'CAD Precision',
                desc: 'Advanced 3D modeling allows perfect prototyping before physical casting begins.'
            },
            {
                title: 'Scalable Manufacturing',
                desc: 'Equipped to handle boutique minimums or massive chain-store volume without compromising detail.'
            },
            {
                title: 'Trusted Partnerships',
                desc: 'Over a decade building reliable B2B wholesale relationships globally.'
            }
        ]
    },
    home_featured: {
        eyebrow: 'Our Collections',
        heading: 'Handpicked From Our Catalogue',
        ctaLabel: 'View All Products →',
        ctaHref: '/products'
    },
    home_process_teaser: {
        eyebrow: 'Our Process',
        heading: 'From Concept to Creation',
        ctaLabel: 'See Our Full Process',
        ctaHref: '/process',
        steps: [
            {
                title: 'Design Consultation',
                desc: 'Understanding your vision and conceptualizing.'
            },
            {
                title: 'CAD Modelling',
                desc: '3D modeling and client approval loop.'
            },
            {
                title: 'Casting & Forming',
                desc: 'Lost-wax casting and metal working.'
            },
            {
                title: 'Gemstone Setting',
                desc: 'Precision color matching and setting.'
            },
            {
                title: 'QC',
                desc: 'Strict qualitative adherence checks.'
            },
            {
                title: 'Export',
                desc: 'Global shipping and compliance.'
            }
        ]
    },
    home_testimonials: {
        eyebrow: 'Client Testimonials',
        heading: 'Trusted by Buyers Worldwide',
        items: [
            {
                text: 'Sachi has been our manufacturing partner for 3 years. Consistent quality, timely delivery.',
                author: 'Sarah Mitchell',
                role: 'Wholesale Buyer, UK'
            },
            {
                text: 'The gemstone matching precision is unparalleled. Our customers love every piece.',
                author: 'Dmitri Volkov',
                role: 'Jewellery Chain Owner, Russia'
            },
            {
                text: "From design to delivery, Sachi's process is seamless. Highly recommended.",
                author: 'Marie Dupont',
                role: 'Brand Director, France'
            }
        ]
    },
    home_factory: {
        eyebrow: 'Inside Our Workshop',
        heading: '150 Craftsmen, One Vision',
        images: [
            {
                src: '/BentoGrid/1.png',
                alt: 'Workshop'
            },
            {
                src: '/BentoGrid/2.png',
                alt: 'Tools'
            },
            {
                src: '/BentoGrid/3.png',
                alt: 'Crafting'
            },
            {
                src: '/BentoGrid/4.png',
                alt: 'CAD'
            },
            {
                src: '/BentoGrid/6.png',
                alt: 'Workshop details'
            }
        ],
        tourTitle: 'Book a Factory Tour',
        tourDesc: 'See where the magic happens.',
        tourCtaLabel: 'Contact Us →',
        tourCtaHref: '/contact'
    },
    home_cta: {
        heading: 'Ready to Start Your Next Collection?',
        desc: 'Contact our dedicated team to discuss your manufacturing needs, request a sample, or get a quotation for bulk orders.',
        buttonLabel: 'Contact Us Today',
        buttonHref: '/contact',
        formTitle: 'Quick Inquiry',
        formButtonLabel: 'Send Message',
        formSuccessTitle: 'Message Received',
        formSuccessDesc: 'Our team will get back to you within 24 business hours.'
    },
    about: {
        coverImage: '/HomePageImage.webp',
        coverAlt: 'Sachi Jewellery Co. — Jaipur manufacturing',
        eyebrow: 'Who We Are',
        heading: 'About Us',
        intro: "Sachi Jewellery Co. is a fine jewellery manufacturing company based in Jaipur, the heart of India's jewellery hub. Located in the Sitapura Industrial Area (SEZ-II), Rajasthan, we have established a strong reputation as a global leader in the sustainable mass production, wholesale, and export of both precious and semi-precious jewellery.",
        image1: '/BentoGrid/1.png',
        image1Alt: 'Sachi Jewellery design and craftsmanship',
        text1: 'Our journey is defined by innovation, trust, and timeless craftsmanship. With a dedicated team of passionate jewellery designers trained at prestigious design institutions, we bring creativity and originality to every collection. Our skilled CAD designers and master craftsmen ensure that each piece reflects precision, elegance, and international quality standards.',
        image2: '/BentoGrid/3.png',
        image2Alt: 'Sachi Jewellery workshop and production',
        text2: 'At Sachi Jewellery Co., we pride ourselves on blending traditional artistry with cutting-edge technology. This synergy allows us to consistently deliver exquisite designs that cater to diverse global markets, from classic pieces to contemporary trends. With sustainability at the core of our practices, we aim to not only create jewellery but also foster long-lasting relationships with our partners worldwide.',
        ctaLabel: 'Explore Our Process →',
        ctaHref: '/process'
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
        quotationPlaceholder: 'Please paste your quotation details here or provide a link to the generated Quote PDF.'
    },
    process: {
        heroTitle: 'From Concept to Creation',
        heroSubtitle: 'End-to-End Fine Jewellery Manufacturing',
        ctaTitle: 'Ready to Begin Your Collection?',
        ctaButtonLabel: 'Contact Us Today',
        ctaButtonHref: '/contact',
        steps: [
            {
                title: 'Concept & Design',
                desc: 'Market-driven designs developed to align with client and global trends.',
                highlights: [
                    'Trend research and concept development',
                    'Sketching and design detailing',
                    'CAD file creation for production'
                ],
                image: processImage('1. Concept & Design.webp')
            },
            {
                title: '3D Modeling & Prototyping',
                desc: 'Precise CAD models converted into physical prototypes for validation.',
                highlights: [
                    '3D CAD model development',
                    'Prototype creation (wax/resin)',
                    'Design review and approval'
                ],
                image: processImage('2.3d Modeling .webp')
            },
            {
                title: 'Mold Making',
                desc: 'Accurate molds created to ensure consistency in bulk production.',
                highlights: [
                    'Master model preparation',
                    'Mold creation (silicone/rubber)',
                    'Mold finishing and testing'
                ],
                image: processImage('3. mold Making.webp')
            },
            {
                title: 'Wax Injection',
                desc: 'Consistent wax models produced for efficient casting processes.',
                highlights: [
                    'Wax injection into molds',
                    'Removal and cleaning of wax pieces',
                    'Tree assembly for casting'
                ],
                image: processImage('4. Wax Injection.webp')
            },
            {
                title: 'Casting',
                desc: 'Metal is cast into defined shapes using advanced casting techniques.',
                highlights: [
                    'Investment preparation',
                    'Metal melting and pouring',
                    'Cooling and mold removal'
                ],
                image: processImage('5. Casting .webp')
            },
            {
                title: 'Cutting & Filing',
                desc: 'Refining raw cast pieces to achieve accurate structure and finish.',
                highlights: [
                    'Tree cutting and separation',
                    'Filing and shaping',
                    'Surface correction'
                ],
                image: processImage('6. Cuttin and Filling.webp')
            },
            {
                title: 'Pre-Polishing',
                desc: 'Initial polishing to prepare surfaces for further processing.',
                highlights: [
                    'Surface smoothing',
                    'Emery and buffing',
                    'Pre-finishing inspection'
                ],
                image: processImage('7. Pre Polishing.webp')
            },
            {
                title: 'Stone Setting',
                desc: 'Gemstones are securely set with precision and alignment.',
                highlights: [
                    'Stone Color matching is done',
                    'Setting (prong/bezel/pave)',
                    'Tightening and alignment'
                ],
                image: processImage('8. Stone Setting.webp')
            },
            {
                title: 'Final Polishing',
                desc: "Enhancing the jewellery's shine and overall finish.",
                highlights: [
                    'Final buffing and polishing',
                    'Ultrasonic cleaning',
                    'Surface finishing check'
                ],
                image: processImage('9. Final Polishing.webp')
            },
            {
                title: 'Plating / Finishing',
                desc: 'Applying protective and decorative coatings for durability and aesthetics.',
                highlights: [
                    'Surface preparation and cleaning',
                    'Rhodium or Gold Plating',
                    'Final finish inspection'
                ],
                image: processImage('10. Plating.webp')
            },
            {
                title: 'Quality Control (QC)',
                desc: 'Strict inspection to ensure every piece meets required standards.',
                highlights: [
                    'Dimensional and design check',
                    'Stone setting inspection',
                    'Final quality approval'
                ],
                image: processImage('11. Quality Control.webp')
            },
            {
                title: 'Packaging & Dispatch',
                desc: 'Secure packaging and timely delivery for global shipments.',
                highlights: [
                    'Final cleaning and polishing',
                    'Packaging as per client requirement',
                    'Dispatch and logistics handling'
                ],
                image: processImage('12. packaging .webp')
            }
        ]
    },
    certificates_page: {
        heroTitle: 'Quality Certifications',
        heroSubtitle: 'Commitment to Excellence & Compliance'
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
        catalogueLoginMessage: 'Sign in for full catalogue access'
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
        jet: '#111010'
    }
};
const CMS_KEYS = Object.keys(DEFAULT_CONTENT);
function cmsSettingKey(key) {
    return `cms_${key}`;
}
function resolveContentImage(value, fallback) {
    if (!value || !String(value).trim()) return fallback;
    const v = String(value).trim();
    if (v.startsWith('http') || v.startsWith('/api/') || v.startsWith('/')) return v;
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$r2$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getR2AssetUrl"])(v);
    } catch  {
        return fallback;
    }
}
function sanitizeHex(value, fallback) {
    const v = String(value ?? '').trim();
    return /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i.test(v) ? v : fallback;
}
function themeVarName(key) {
    return '--color-' + key.replace(/[A-Z]/g, (m)=>'-' + m.toLowerCase());
}
}),
"[project]/components/layout/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site-content-defaults.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Navbar({ content, customLinks: serverLinks }) {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [live, setLive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fetchedLinks, setFetchedLinks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const isHomePage = pathname === "/";
    // Pull latest CMS copy client-side so admin edits appear without a redeploy.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let cancelled = false;
        fetch("/api/content", {
            cache: "no-store"
        }).then((r)=>r.ok ? r.json() : null).then((data)=>{
            if (!cancelled && data?.navbar) setLive(data.navbar);
        }).catch(()=>{});
        fetch("/api/nav", {
            cache: "no-store"
        }).then((r)=>r.ok ? r.json() : null).then((data)=>{
            if (!cancelled && Array.isArray(data?.custom)) {
                setFetchedLinks(data.custom.filter((l)=>l.label && l.href));
            }
        }).catch(()=>{});
        return ()=>{
            cancelled = true;
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", onScroll);
    }, []);
    const navbarSolid = scrolled || !isHomePage;
    const nav = live ?? content ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_CONTENT"].navbar;
    // Server-rendered links first (SEO + instant), client fetch refreshes after admin edits.
    const customLinks = serverLinks ?? fetchedLinks;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/80 backdrop-blur-md border-b border-white/20 text-charcoal ${navbarSolid ? "py-4 shadow-sm" : "py-6"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: `font-cormorant text-2xl tracking-widest uppercase relative z-50 transition-colors text-charcoal`,
                    children: nav.brand
                }, void 0, false, {
                    fileName: "[project]/components/layout/Navbar.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden lg:flex items-center gap-8 font-dm-sans text-sm uppercase tracking-widest",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "hover:opacity-70 transition-opacity uppercase font-dm-sans text-sm tracking-widest",
                                    children: nav.companyLabel
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Navbar.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-full left-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-jet border border-jet/20 flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about",
                                                className: "px-4 py-3 text-ivory hover:bg-ivory/10 text-xs transition-colors",
                                                children: nav.aboutLabel
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Navbar.tsx",
                                                lineNumber: 77,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/#what-we-do",
                                                className: "px-4 py-3 text-ivory hover:bg-ivory/10 text-xs transition-colors",
                                                children: nav.whatWeDoLabel
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Navbar.tsx",
                                                lineNumber: 83,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/#why-choose-us",
                                                className: "px-4 py-3 text-ivory hover:bg-ivory/10 text-xs transition-colors",
                                                children: nav.whyChooseUsLabel
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Navbar.tsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/#values",
                                                className: "px-4 py-3 text-ivory hover:bg-ivory/10 text-xs transition-colors",
                                                children: nav.valuesLabel
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Navbar.tsx",
                                                lineNumber: 95,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layout/Navbar.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Navbar.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Navbar.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/products",
                            className: "hover:opacity-70 transition-opacity",
                            children: nav.productsLabel
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Navbar.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/process",
                            className: "hover:opacity-70 transition-opacity",
                            children: nav.processLabel
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Navbar.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/certificates",
                            className: "hover:opacity-70 transition-opacity",
                            children: nav.certificatesLabel
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Navbar.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        customLinks.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: l.href,
                                className: "hover:opacity-70 transition-opacity",
                                children: l.label
                            }, l.href, false, {
                                fileName: "[project]/components/layout/Navbar.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            className: "hover:opacity-70 transition-opacity",
                            children: nav.contactLabel
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Navbar.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact#quote",
                            className: `px-6 py-3 font-dm-sans text-xs font-medium uppercase tracking-[0.25em] transition-colors bg-gold text-jet hover:bg-gold-deep`,
                            children: nav.ctaLabel
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Navbar.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Navbar.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "lg:hidden relative z-50 p-2",
                    onClick: ()=>setMenuOpen(!menuOpen),
                    "aria-label": "Toggle Menu",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-6 h-4 relative flex flex-col justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `w-full h-0.5 transition-all duration-300 bg-charcoal ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Navbar.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `w-full h-0.5 transition-all duration-300 bg-charcoal ${menuOpen ? "opacity-0" : "opacity-100"}`
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Navbar.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `w-full h-0.5 transition-all duration-300 bg-charcoal ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Navbar.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Navbar.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/layout/Navbar.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `fixed inset-0 bg-ivory z-40 transition-transform duration-500 flex flex-col justify-center items-center gap-8 overflow-y-auto py-24 ${menuOpen ? "translate-x-0" : "translate-x-full lg:hidden"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/about",
                            onClick: ()=>setMenuOpen(false),
                            className: "font-dm-sans text-2xl text-charcoal uppercase tracking-widest",
                            children: nav.aboutLabel
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Navbar.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/#what-we-do",
                            onClick: ()=>setMenuOpen(false),
                            className: "font-dm-sans text-lg text-charcoal/80 uppercase tracking-widest",
                            children: nav.whatWeDoLabel
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Navbar.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/#why-choose-us",
                            onClick: ()=>setMenuOpen(false),
                            className: "font-dm-sans text-lg text-charcoal/80 uppercase tracking-widest",
                            children: nav.whyChooseUsLabel
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Navbar.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/#values",
                            onClick: ()=>setMenuOpen(false),
                            className: "font-dm-sans text-lg text-charcoal/80 uppercase tracking-widest",
                            children: nav.valuesLabel
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Navbar.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/products",
                            onClick: ()=>setMenuOpen(false),
                            className: "font-dm-sans text-2xl text-charcoal uppercase tracking-widest",
                            children: nav.productsLabel
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Navbar.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/process",
                            onClick: ()=>setMenuOpen(false),
                            className: "font-dm-sans text-2xl text-charcoal uppercase tracking-widest",
                            children: nav.processLabel
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Navbar.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/certificates",
                            onClick: ()=>setMenuOpen(false),
                            className: "font-dm-sans text-2xl text-charcoal uppercase tracking-widest",
                            children: nav.certificatesLabel
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Navbar.tsx",
                            lineNumber: 200,
                            columnNumber: 11
                        }, this),
                        customLinks.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: l.href,
                                onClick: ()=>setMenuOpen(false),
                                className: "font-dm-sans text-2xl text-charcoal uppercase tracking-widest",
                                children: l.label
                            }, l.href, false, {
                                fileName: "[project]/components/layout/Navbar.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            onClick: ()=>setMenuOpen(false),
                            className: "font-dm-sans text-2xl text-charcoal uppercase tracking-widest",
                            children: nav.contactLabel
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Navbar.tsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact#quote",
                            onClick: ()=>setMenuOpen(false),
                            className: "btn-primary mt-4",
                            children: nav.ctaLabel.replace(/ →$/, "")
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Navbar.tsx",
                            lineNumber: 224,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Navbar.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layout/Navbar.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/layout/FloatingWhatsApp.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingWhatsApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site-content-defaults.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function FloatingWhatsApp({ whatsappNumber }) {
    const number = whatsappNumber ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_CONTENT"].company.whatsappNumber;
    const whatsappUrl = `https://wa.me/${number}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
        href: whatsappUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "fixed bottom-6 left-6 z-30 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-colors",
        initial: {
            scale: 0
        },
        animate: {
            scale: 1
        },
        transition: {
            delay: 1,
            type: 'spring'
        },
        "aria-label": "Chat on WhatsApp",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: "w-8 h-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"
            }, void 0, false, {
                fileName: "[project]/components/layout/FloatingWhatsApp.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/layout/FloatingWhatsApp.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layout/FloatingWhatsApp.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/store/quoteCart.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useQuoteCart",
    ()=>useQuoteCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
;
;
const useQuoteCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        items: [],
        isOpen: false,
        addItem: (product, karat, metal, stone, qty = 1, secondaryStone, secondaryCount)=>{
            const existing = get().items.find((i)=>i.product.id === product.id && i.selectedKarat === karat && i.selectedMetal === metal && i.selectedStone === stone && i.selectedSecondaryStone === secondaryStone);
            if (existing) {
                set((s)=>({
                        items: s.items.map((i)=>i.product.id === product.id && i.selectedKarat === karat && i.selectedMetal === metal && i.selectedStone === stone && i.selectedSecondaryStone === secondaryStone ? {
                                ...i,
                                quantity: i.quantity + qty
                            } : i)
                    }));
            } else {
                set((s)=>({
                        items: [
                            ...s.items,
                            {
                                product,
                                selectedKarat: karat,
                                selectedMetal: metal,
                                selectedStone: stone,
                                selectedSecondaryStone: secondaryStone,
                                secondaryGemstoneCount: secondaryCount,
                                quantity: qty
                            }
                        ]
                    }));
            }
        },
        removeItem: (productId)=>set((s)=>({
                    items: s.items.filter((i)=>i.product.id !== productId)
                })),
        updateQuantity: (productId, qty)=>set((s)=>({
                    items: s.items.map((i)=>i.product.id === productId ? {
                            ...i,
                            quantity: qty
                        } : i)
                })),
        clearCart: ()=>set({
                items: []
            }),
        openCart: ()=>set({
                isOpen: true
            }),
        closeCart: ()=>set({
                isOpen: false
            })
    }), {
    name: 'sachi-quote-cart'
}));
}),
"[project]/components/layout/FloatingQuoteCart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingQuoteCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$quoteCart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/quoteCart.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function FloatingQuoteCart() {
    const { items, openCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$quoteCart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuoteCart"])();
    // Hydration guard without setState-in-effect: true on first client render only.
    const [mounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>("TURBOPACK compile-time value", "undefined") !== 'undefined');
    if (!mounted || items.length === 0) return null;
    const totalItems = items.reduce((acc, item)=>acc + item.quantity, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
            className: "fixed bottom-6 right-6 z-30 w-16 h-16 bg-jet border border-gold rounded-full flex flex-col items-center justify-center text-gold shadow-lg hover:bg-jet/90 transition-colors",
            initial: {
                scale: 0,
                opacity: 0
            },
            animate: {
                scale: 1,
                opacity: 1
            },
            exit: {
                scale: 0,
                opacity: 0
            },
            whileHover: {
                scale: 1.05
            },
            onClick: openCart,
            "aria-label": "Open Quote Cart",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute -top-2 -right-2 bg-gold text-jet w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 border-ivory",
                    children: totalItems
                }, void 0, false, {
                    fileName: "[project]/components/layout/FloatingQuoteCart.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: "1.5",
                    stroke: "currentColor",
                    className: "w-6 h-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/FloatingQuoteCart.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/layout/FloatingQuoteCart.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[10px] mt-0.5 font-dm-sans tracking-wider uppercase",
                    children: "Quote"
                }, void 0, false, {
                    fileName: "[project]/components/layout/FloatingQuoteCart.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/FloatingQuoteCart.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layout/FloatingQuoteCart.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/pricing.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Pricing engine — dual-stone formula:
 *
 *   P = w × m × wastageFactor
 *     + N1 × (s1 + st1)   ← primary gemstone  (product.primaryGemstone / selectedStone)
 *     + N2 × (s2 + st2)   ← secondary gemstone (product.availableStones / selectedSecondaryStone)
 *     + L × w
 *     + platingFactor × w × m
 *
 * w             = weight in grams                   (product.weightGrams)
 * m             = karat-adjusted spot price USD/g   (live from metal-prices API)
 * wastageFactor = metal wastage multiplier           (SiteSettings: wastageFactor, default 1.07)
 * N1            = primary gemstone count             (client-selected; defaults to product.gemstoneCount)
 * s1, st1       = primary stone cost + satin USD     (StonePrice lookup)
 * N2            = secondary gemstone count           (client-selected; 0 if no secondary stone)
 * s2, st2       = secondary stone cost + satin USD   (StonePrice lookup)
 * L             = labour cost USD/g                  (product.makingChargeC if > 0, else SiteSettings: labourCostPerGram)
 * platingFactor = dimensionless plating cost factor  (SiteSettings: platingCostFactor)
 */ __turbopack_context__.s([
    "calculateItemPrice",
    ()=>calculateItemPrice,
    "calculateQuoteTotal",
    ()=>calculateQuoteTotal
]);
const KARAT_PURITY = {
    '9K': 0.375,
    '10K': 0.4167,
    '14K': 0.5833,
    '18K': 0.75,
    '22K': 0.9167,
    '24K': 1.0,
    '925': 0.925,
    '999': 0.999
};
function calculateItemPrice(params) {
    const { product, karat, selectedStone, selectedSecondaryStone, secondaryGemstoneCount, spotPrices, stonePrices, settings } = params;
    const w = product.weightGrams ?? 0;
    // Karat-adjusted spot price
    let baseSpot;
    switch(product.baseMetal){
        case 'gold':
            baseSpot = spotPrices.goldUSDPerGram;
            break;
        case 'silver':
            baseSpot = spotPrices.silverUSDPerGram;
            break;
        case 'brass':
            baseSpot = spotPrices.brassUSDPerGram;
            break;
        default:
            baseSpot = spotPrices.silverUSDPerGram;
    }
    const purity = KARAT_PURITY[karat] ?? 1;
    const m = baseSpot * purity;
    const wastageFactor = settings.wastageFactor ?? 1.07;
    const metalCost = w * m * wastageFactor;
    // Primary stone
    const N1 = product.gemstoneCount ?? 1;
    const key1 = selectedStone && selectedStone !== 'None' ? selectedStone : 'None';
    const entry1 = stonePrices[key1] ?? {
        priceD: 0,
        satinCost: 0
    };
    const s1 = entry1.priceD;
    const st1 = entry1.satinCost;
    const stoneCost1 = N1 * (s1 + st1);
    // Secondary stone
    const N2 = secondaryGemstoneCount ?? 0;
    const key2 = selectedSecondaryStone && selectedSecondaryStone !== 'None' ? selectedSecondaryStone : 'None';
    const entry2 = stonePrices[key2] ?? {
        priceD: 0,
        satinCost: 0
    };
    const s2 = entry2.priceD;
    const st2 = entry2.satinCost;
    const stoneCost2 = N2 * (s2 + st2);
    const stoneCost = stoneCost1 + stoneCost2;
    const L = product.makingChargeC > 0 ? product.makingChargeC : settings.labourCostPerGram ?? 0;
    const labourCost = L * w;
    const platingFactor = settings.platingCostFactor ?? 0;
    const platingCost = platingFactor * w * m;
    const P = metalCost + stoneCost + labourCost + platingCost;
    const pINR = P * (settings.exchangeRateUSDtoINR ?? 83.5);
    return {
        w,
        m,
        wastageFactor,
        metalCost,
        N1,
        s1,
        st1,
        stoneCost1,
        N2,
        s2,
        st2,
        stoneCost2,
        stoneCost,
        L,
        labourCost,
        platingFactor,
        platingCost,
        P,
        pINR,
        exchangeRate: settings.exchangeRateUSDtoINR ?? 83.5
    };
}
function calculateQuoteTotal(items, spotPrices, stonePrices, settings) {
    let totalUSD = 0;
    for (const item of items){
        const { P } = calculateItemPrice({
            product: item.product,
            karat: item.selectedKarat,
            selectedStone: item.selectedStone ?? 'None',
            selectedSecondaryStone: item.selectedSecondaryStone,
            secondaryGemstoneCount: item.secondaryGemstoneCount,
            spotPrices,
            stonePrices,
            settings
        });
        totalUSD += P * item.quantity;
    }
    const exchangeRate = settings.exchangeRateUSDtoINR ?? 83.5;
    return {
        totalUSD,
        totalINR: totalUSD * exchangeRate
    };
}
}),
"[project]/lib/quotation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Compatibility bridge: MetalPrices shape (from /api/metal-prices) → pricing engine.
 *
 * The /api/metal-prices endpoint returns raw USD/gram values, pricing settings
 * (wastageFactor, labourCostPerGram, platingCostFactor, exchangeRateUSDtoINR),
 * and a stonePrices map so a single fetch drives all calculations.
 */ __turbopack_context__.s([
    "calculateItemPrice",
    ()=>calculateItemPrice,
    "calculateQuoteTotal",
    ()=>calculateQuoteTotal,
    "getItemBreakdown",
    ()=>getItemBreakdown,
    "getMetalPricePerGram",
    ()=>getMetalPricePerGram
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pricing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pricing.ts [app-ssr] (ecmascript)");
;
function metalPricesToKitcoSpot(prices) {
    const raw = prices.raw;
    return {
        goldUSDPerGram: raw?.goldUSDPerGram ?? prices.gold['24K'] ?? 75,
        silverUSDPerGram: raw?.silverUSDPerGram ?? prices.silver['999'] ?? 0.9,
        brassUSDPerGram: raw?.brassUSDPerGram ?? 0.08,
        source: 'from-metal-prices-api',
        fetchedAt: prices.updatedAt ?? new Date().toISOString()
    };
}
function getSettings(prices) {
    return prices.settings ?? {
        wastageFactor: 1.07,
        labourCostPerGram: 0,
        platingCostFactor: 0,
        exchangeRateUSDtoINR: 83.5
    };
}
function getStonePrices(prices) {
    return prices.stonePrices ?? {};
}
function calculateItemPrice(item, prices) {
    if (!prices) return 0;
    const spotPrices = metalPricesToKitcoSpot(prices);
    const settings = getSettings(prices);
    const stonePrices = getStonePrices(prices);
    const { P } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pricing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateItemPrice"])({
        product: item.product,
        karat: item.selectedKarat,
        selectedStone: item.selectedStone ?? 'None',
        selectedSecondaryStone: item.selectedSecondaryStone,
        secondaryGemstoneCount: item.secondaryGemstoneCount,
        spotPrices,
        stonePrices,
        settings
    });
    return P * item.quantity;
}
function calculateQuoteTotal(items, prices) {
    if (!prices) return 0;
    return items.reduce((sum, item)=>sum + calculateItemPrice(item, prices), 0);
}
function getItemBreakdown(item, prices) {
    const spotPrices = metalPricesToKitcoSpot(prices);
    const settings = getSettings(prices);
    const stonePrices = getStonePrices(prices);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pricing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateItemPrice"])({
        product: item.product,
        karat: item.selectedKarat,
        selectedStone: item.selectedStone ?? 'None',
        selectedSecondaryStone: item.selectedSecondaryStone,
        secondaryGemstoneCount: item.secondaryGemstoneCount,
        spotPrices,
        stonePrices,
        settings
    });
}
function getMetalPricePerGram(metal, karat, prices) {
    if (metal === 'gold') return prices.gold[karat] ?? prices.gold['18K'] ?? 0;
    if (metal === 'silver') return prices.silver[karat] ?? prices.silver['925'] ?? 0;
    return 0;
}
}),
"[project]/lib/currency.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Currency helpers — USD is canonical, INR derived via exchange rate. */ __turbopack_context__.s([
    "convertUSD",
    ()=>convertUSD,
    "formatINR",
    ()=>formatINR,
    "formatPrice",
    ()=>formatPrice,
    "formatUSD",
    ()=>formatUSD
]);
function formatUSD(n) {
    return `$${n.toFixed(2)}`;
}
function formatINR(n) {
    return `₹${n.toLocaleString('en-IN', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
    })}`;
}
function formatPrice(usd, currency, rate) {
    if (currency === 'INR') return formatINR(usd * (rate || 83.5));
    return formatUSD(usd);
}
function convertUSD(usd, currency, rate) {
    return currency === 'INR' ? usd * (rate || 83.5) : usd;
}
}),
"[project]/components/quote/QuoteCartDrawer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuoteCartDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$quoteCart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/quoteCart.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quotation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/quotation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/currency.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$r2$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/r2/config.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function QuoteCartDrawer() {
    const { items, isOpen, closeCart, updateQuantity, removeItem, clearCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$quoteCart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuoteCart"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [metalPrices, setMetalPrices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Currency is controlled by the admin (Settings → Currency). No website toggle.
    const currency = metalPrices?.currency?.defaultCurrency ?? 'USD';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            fetch('/api/metal-prices').then((r)=>r.json()).then((data)=>setMetalPrices(data)).catch(console.error);
        }
    }, [
        isOpen
    ]);
    if (!mounted) return null;
    const totalUSD = metalPrices ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quotation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateQuoteTotal"])(items, metalPrices) : 0;
    const rate = metalPrices?.settings?.exchangeRateUSDtoINR ?? 83.5;
    const fmt = (usd)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$currency$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPrice"])(usd, currency, rate);
    const handleDownloadPDF = async ()=>{
        if (!metalPrices || items.length === 0) return;
        const { generateQuotePDF } = await __turbopack_context__.A("[project]/lib/generateQuotePDF.ts [app-ssr] (ecmascript, async loader)");
        generateQuotePDF(items, metalPrices, {
            name: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Sachi Jewellery Co.',
            address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || 'H-193 SEZ-II Sitapura Industrial Area, Jaipur, Rajasthan 302022, India',
            email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'contact@sachijewellery.com',
            phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || '+91-8946931404',
            gst: process.env.NEXT_PUBLIC_COMPANY_GST || '08ACSFS4747G1ZI'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: closeCart,
                    className: "fixed inset-0 bg-jet/60 backdrop-blur-sm z-50"
                }, void 0, false, {
                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        x: '100%'
                    },
                    animate: {
                        x: 0
                    },
                    exit: {
                        x: '100%'
                    },
                    transition: {
                        type: 'spring',
                        damping: 25,
                        stiffness: 200
                    },
                    className: "fixed right-0 top-0 bottom-0 w-full max-w-md bg-ivory shadow-2xl z-50 flex flex-col border-l border-gold/30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center px-6 py-5 bg-jet border-b border-gold/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-dm-sans text-sm font-semibold text-ivory uppercase tracking-widest",
                                            children: "Quotation Cart"
                                        }, void 0, false, {
                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this),
                                        items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-warm text-xs mt-0.5",
                                            children: [
                                                items.length,
                                                " item",
                                                items.length !== 1 ? 's' : ''
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                            lineNumber: 81,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: closeCart,
                                    className: "text-warm hover:text-ivory transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: "1.5",
                                        stroke: "currentColor",
                                        className: "w-6 h-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M6 18L18 6M6 6l12 12"
                                        }, void 0, false, {
                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                            lineNumber: 86,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-6 flex flex-col gap-6",
                            children: items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center text-warm mt-10 font-dm-sans",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Your quotation cart is empty."
                                    }, void 0, false, {
                                        fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                        lineNumber: 95,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: closeCart,
                                        className: "mt-4 btn-primary",
                                        children: "Browse Catalogue"
                                    }, void 0, false, {
                                        fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                        lineNumber: 96,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                lineNumber: 94,
                                columnNumber: 17
                            }, this) : items.map((item)=>{
                                const breakdown = metalPrices ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quotation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getItemBreakdown"])(item, metalPrices) : null;
                                const itemUSD = breakdown ? breakdown.P * item.quantity : null;
                                const imgSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$r2$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeR2Image"])(item.product.images?.[0]) ?? '/image.png';
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 border-b border-black/5 pb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-20 h-20 bg-pearl border border-gold/10 shrink-0 overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: imgSrc,
                                                alt: item.product.name,
                                                fill: true,
                                                className: "object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                lineNumber: 110,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                            lineNumber: 109,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 flex flex-col justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-dm-sans text-sm font-medium text-charcoal leading-tight",
                                                                    children: item.product.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                                    lineNumber: 116,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-warm mt-0.5 uppercase tracking-wider",
                                                                    children: [
                                                                        item.selectedMetal,
                                                                        " · ",
                                                                        item.selectedKarat,
                                                                        item.selectedStone && item.selectedStone !== 'None' ? ` · ${item.product.gemstoneCount ?? 1}× ${item.selectedStone}` : '',
                                                                        item.selectedSecondaryStone && item.selectedSecondaryStone !== 'None' ? ` · ${item.secondaryGemstoneCount ?? 1}× ${item.selectedSecondaryStone}` : ''
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                                    lineNumber: 119,
                                                                    columnNumber: 29
                                                                }, this),
                                                                item.product.weightGrams && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-warm mt-0.5",
                                                                    children: [
                                                                        item.product.weightGrams,
                                                                        "g"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                                    lineNumber: 129,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>removeItem(item.product.id),
                                                            className: "text-warm hover:text-red-500 transition-colors shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                strokeWidth: "1.5",
                                                                stroke: "currentColor",
                                                                className: "w-4 h-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    d: "M6 18L18 6M6 6l12 12"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                                    lineNumber: 137,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                                lineNumber: 136,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 25
                                                }, this),
                                                breakdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 text-[10px] text-warm/70 font-dm-sans",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Metal: ",
                                                                fmt(breakdown.metalCost)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 29
                                                        }, this),
                                                        breakdown.stoneCost1 > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                " · Stone 1: ",
                                                                fmt(breakdown.stoneCost1)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 59
                                                        }, this),
                                                        breakdown.stoneCost2 > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                " · Stone 2: ",
                                                                fmt(breakdown.stoneCost2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 59
                                                        }, this),
                                                        breakdown.labourCost > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                " · Labour: ",
                                                                fmt(breakdown.labourCost)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 59
                                                        }, this),
                                                        breakdown.platingCost > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                " · Plating: ",
                                                                fmt(breakdown.platingCost)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 59
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center mt-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center border border-gold/30",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>updateQuantity(item.product.id, Math.max(1, item.quantity - 1)),
                                                                    className: "w-7 h-7 flex items-center justify-center text-charcoal hover:bg-gold/10 text-sm",
                                                                    children: "−"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                                    lineNumber: 156,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-8 text-center font-dm-sans text-sm text-charcoal",
                                                                    children: item.quantity
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                                    lineNumber: 162,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>updateQuantity(item.product.id, item.quantity + 1),
                                                                    className: "w-7 h-7 flex items-center justify-center text-charcoal hover:bg-gold/10 text-sm",
                                                                    children: "+"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                                    lineNumber: 165,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 27
                                                        }, this),
                                                        itemUSD !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-dm-sans text-sm font-medium text-charcoal",
                                                            children: fmt(itemUSD)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 29
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-warm italic",
                                                            children: "Loading price…"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                            lineNumber: 179,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                            lineNumber: 113,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, `${item.product.id}-${item.selectedKarat}-${item.selectedStone}`, true, {
                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                    lineNumber: 105,
                                    columnNumber: 21
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this),
                        items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-pearl p-6 border-t border-gold/20",
                            children: [
                                metalPrices && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-baseline mb-4 pb-4 border-b border-gold/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-dm-sans text-xs uppercase tracking-widest text-warm",
                                            children: "Estimated Total"
                                        }, void 0, false, {
                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                            lineNumber: 194,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-cormorant text-2xl text-charcoal font-medium",
                                                    children: fmt(totalUSD)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-warm/60 mt-0.5",
                                                    children: [
                                                        "P = w·m·",
                                                        metalPrices.settings?.wastageFactor ?? 1.07,
                                                        " + N1·(s1+st1) + N2·(s2+st2) + L·w"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                            lineNumber: 197,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                    lineNumber: 193,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleDownloadPDF,
                                            disabled: !metalPrices,
                                            className: "w-full btn-secondary flex justify-center items-center gap-2 disabled:opacity-40",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: "1.5",
                                                    stroke: "currentColor",
                                                    className: "w-4 h-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 21
                                                }, this),
                                                "Download Quote PDF"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                            lineNumber: 209,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/contact#quote",
                                            onClick: closeCart,
                                            className: "w-full btn-primary text-center",
                                            children: "Request Formal Quotation"
                                        }, void 0, false, {
                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                            lineNumber: 219,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: clearCart,
                                            className: "text-xs text-warm uppercase tracking-widest hover:text-charcoal transition-colors w-full text-center mt-1",
                                            children: "Clear Cart"
                                        }, void 0, false, {
                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                            lineNumber: 226,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                    lineNumber: 208,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                            lineNumber: 191,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                    lineNumber: 67,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/ScrollReveal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
;
;
function ScrollReveal({ children, className = '', delay = 0 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: className,
        initial: {
            opacity: 0,
            y: 30
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            amount: 0.2
        },
        transition: {
            duration: 0.65,
            ease: [
                0.25,
                0.1,
                0.25,
                1
            ],
            delay
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/ScrollReveal.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/cms/SectionRenderer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/ScrollReveal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$r2$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/r2/config.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const str = (v, fb = '')=>typeof v === 'string' ? v : fb;
const arr = (v)=>Array.isArray(v) ? v : [];
function imgSrc(v) {
    if (typeof v !== 'string' || !v.trim()) return null;
    if (v.startsWith('/') || v.startsWith('http') || v.startsWith('/api/')) return v;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$r2$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeR2Image"])(v);
}
const BG_THEMES = {
    ivory: {
        section: 'bg-ivory',
        heading: 'text-charcoal',
        body: 'text-charcoal-light',
        muted: 'text-warm',
        frame: 'bg-pearl'
    },
    pearl: {
        section: 'bg-pearl',
        heading: 'text-charcoal',
        body: 'text-charcoal-light',
        muted: 'text-warm',
        frame: 'bg-ivory'
    },
    jet: {
        section: 'bg-jet',
        heading: 'text-ivory',
        body: 'text-ivory/80',
        muted: 'text-warm',
        frame: 'bg-charcoal'
    },
    gold: {
        section: 'bg-gold',
        heading: 'text-jet',
        body: 'text-jet/80',
        muted: 'text-jet/60',
        frame: 'bg-ivory'
    }
};
function bgTheme(v) {
    return typeof v === 'string' && BG_THEMES[v] ? BG_THEMES[v] : null;
}
function Buttons({ props }) {
    const primaryLabel = str(props.primaryLabel);
    const primaryHref = str(props.primaryHref);
    const secondaryLabel = str(props.secondaryLabel);
    const secondaryHref = str(props.secondaryHref);
    if (!primaryLabel && !secondaryLabel) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col sm:flex-row gap-4 mt-8",
        children: [
            primaryLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: primaryHref || '/contact',
                className: "btn-primary text-center",
                children: primaryLabel
            }, void 0, false, {
                fileName: "[project]/components/cms/SectionRenderer.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this) : null,
            secondaryLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: secondaryHref || '/products',
                className: "btn-secondary text-center",
                children: secondaryLabel
            }, void 0, false, {
                fileName: "[project]/components/cms/SectionRenderer.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/cms/SectionRenderer.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
function HeroSection({ props }) {
    const src = imgSrc(props.image);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-jet py-32 text-center border-b border-gold/10",
        children: [
            src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-[38vh] min-h-[260px] mb-10 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: src,
                        alt: str(props.imageAlt, str(props.heading, 'Page hero')),
                        fill: true,
                        className: "object-cover",
                        sizes: "100vw"
                    }, void 0, false, {
                        fileName: "[project]/components/cms/SectionRenderer.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-jet/40"
                    }, void 0, false, {
                        fileName: "[project]/components/cms/SectionRenderer.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/cms/SectionRenderer.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-3xl mx-auto px-6",
                children: [
                    str(props.eyebrow) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gold text-xs tracking-[0.25em] uppercase font-dm-sans mb-4 block",
                        children: str(props.eyebrow)
                    }, void 0, false, {
                        fileName: "[project]/components/cms/SectionRenderer.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-cormorant text-display-md lg:text-display-lg text-ivory mb-4",
                        children: str(props.heading, 'Untitled')
                    }, void 0, false, {
                        fileName: "[project]/components/cms/SectionRenderer.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    str(props.subtext) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-dm-sans text-warm text-body-lg",
                        children: str(props.subtext)
                    }, void 0, false, {
                        fileName: "[project]/components/cms/SectionRenderer.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Buttons, {
                            props: props
                        }, void 0, false, {
                            fileName: "[project]/components/cms/SectionRenderer.tsx",
                            lineNumber: 73,
                            columnNumber: 46
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/cms/SectionRenderer.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/cms/SectionRenderer.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/cms/SectionRenderer.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
function TextImageSection({ props }) {
    const src = imgSrc(props.image);
    const alignRight = str(props.align) === 'right';
    const t = bgTheme(props.bg);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${t ? t.section : 'bg-ivory'} py-24 border-b border-gold/10`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    className: alignRight ? 'lg:order-2' : '',
                    children: [
                        str(props.eyebrow) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gold text-xs tracking-[0.25em] uppercase font-dm-sans mb-4 block",
                            children: str(props.eyebrow)
                        }, void 0, false, {
                            fileName: "[project]/components/cms/SectionRenderer.tsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: `font-cormorant text-display-md mb-6 ${t ? t.heading : 'text-charcoal'}`,
                            children: str(props.heading)
                        }, void 0, false, {
                            fileName: "[project]/components/cms/SectionRenderer.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        str(props.text) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `font-dm-sans text-body-lg leading-relaxed whitespace-pre-line ${t ? t.body : 'text-charcoal-light'}`,
                            children: str(props.text)
                        }, void 0, false, {
                            fileName: "[project]/components/cms/SectionRenderer.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Buttons, {
                            props: props
                        }, void 0, false, {
                            fileName: "[project]/components/cms/SectionRenderer.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/cms/SectionRenderer.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    className: `relative aspect-[4/3] w-full overflow-hidden border border-gold/20 ${t ? t.frame : 'bg-pearl'} ${alignRight ? 'lg:order-1' : ''}`,
                    children: src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: src,
                        alt: str(props.imageAlt, str(props.heading)),
                        fill: true,
                        className: "object-cover",
                        sizes: "(max-width:1024px) 100vw, 50vw"
                    }, void 0, false, {
                        fileName: "[project]/components/cms/SectionRenderer.tsx",
                        lineNumber: 98,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center text-warm text-sm font-dm-sans",
                        children: "No image set"
                    }, void 0, false, {
                        fileName: "[project]/components/cms/SectionRenderer.tsx",
                        lineNumber: 100,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/cms/SectionRenderer.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/cms/SectionRenderer.tsx",
            lineNumber: 85,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/cms/SectionRenderer.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
function CardsSection({ props }) {
    const items = arr(props.items);
    const t = bgTheme(props.bg);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${t ? t.section : 'bg-pearl'} py-24 border-b border-gold/10`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-14",
                    children: [
                        str(props.eyebrow) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gold text-xs tracking-[0.25em] uppercase font-dm-sans mb-4 block",
                            children: str(props.eyebrow)
                        }, void 0, false, {
                            fileName: "[project]/components/cms/SectionRenderer.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: `font-cormorant text-display-md ${t ? t.heading : 'text-charcoal'}`,
                            children: str(props.heading)
                        }, void 0, false, {
                            fileName: "[project]/components/cms/SectionRenderer.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        str(props.subtext) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `${t ? t.muted : 'text-warm'} font-dm-sans mt-4 max-w-2xl mx-auto`,
                            children: str(props.subtext)
                        }, void 0, false, {
                            fileName: "[project]/components/cms/SectionRenderer.tsx",
                            lineNumber: 119,
                            columnNumber: 33
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/cms/SectionRenderer.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: items.map((it, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${t ? t.frame : 'bg-ivory'} border border-gold/20 p-8`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: `font-dm-sans text-sm font-semibold mb-3 uppercase tracking-[0.15em] ${t ? t.heading : 'text-charcoal'}`,
                                    children: str(it.title, `Card ${i + 1}`)
                                }, void 0, false, {
                                    fileName: "[project]/components/cms/SectionRenderer.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-body leading-relaxed whitespace-pre-line ${t ? t.muted : 'text-warm'}`,
                                    children: str(it.desc ?? it.text)
                                }, void 0, false, {
                                    fileName: "[project]/components/cms/SectionRenderer.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/cms/SectionRenderer.tsx",
                            lineNumber: 123,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/cms/SectionRenderer.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/cms/SectionRenderer.tsx",
            lineNumber: 113,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/cms/SectionRenderer.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
function StatsSection({ props }) {
    const items = arr(props.items);
    const t = bgTheme(props.bg);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${t ? t.section : 'bg-jet'} py-20 border-y border-gold/10`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-12 text-center",
            children: [
                str(props.heading) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: `font-cormorant text-display-md mb-10 ${t ? t.heading : 'text-ivory'}`,
                    children: str(props.heading)
                }, void 0, false, {
                    fileName: "[project]/components/cms/SectionRenderer.tsx",
                    lineNumber: 140,
                    columnNumber: 31
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 lg:grid-cols-4 gap-8",
                    children: items.map((it, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-cormorant text-4xl text-gold mb-2",
                                    children: str(it.value)
                                }, void 0, false, {
                                    fileName: "[project]/components/cms/SectionRenderer.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `${t ? t.muted : 'text-warm'} text-xs uppercase tracking-widest font-dm-sans whitespace-pre-line`,
                                    children: str(it.label)
                                }, void 0, false, {
                                    fileName: "[project]/components/cms/SectionRenderer.tsx",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/cms/SectionRenderer.tsx",
                            lineNumber: 143,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/cms/SectionRenderer.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/cms/SectionRenderer.tsx",
            lineNumber: 139,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/cms/SectionRenderer.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
function GallerySection({ props }) {
    const images = arr(props.images);
    const t = bgTheme(props.bg);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${t ? t.section : 'bg-ivory'} py-24 border-b border-gold/10`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-12",
            children: [
                str(props.heading) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: `font-cormorant text-display-md mb-10 text-center ${t ? t.heading : 'text-charcoal'}`,
                    children: str(props.heading)
                }, void 0, false, {
                    fileName: "[project]/components/cms/SectionRenderer.tsx",
                    lineNumber: 160,
                    columnNumber: 31
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 lg:grid-cols-3 gap-4",
                    children: images.map((im, i)=>{
                        const src = typeof im === 'string' ? imgSrc(im) : imgSrc(im.src);
                        const alt = typeof im === 'string' ? `Gallery ${i + 1}` : str(im.alt, `Gallery ${i + 1}`);
                        if (!src) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `relative aspect-square overflow-hidden border border-gold/10 ${t ? t.frame : 'bg-pearl'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: src,
                                alt: alt,
                                fill: true,
                                className: "object-cover hover:scale-105 transition-transform duration-700",
                                sizes: "(max-width:1024px) 50vw, 33vw"
                            }, void 0, false, {
                                fileName: "[project]/components/cms/SectionRenderer.tsx",
                                lineNumber: 168,
                                columnNumber: 17
                            }, this)
                        }, i, false, {
                            fileName: "[project]/components/cms/SectionRenderer.tsx",
                            lineNumber: 167,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/cms/SectionRenderer.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/cms/SectionRenderer.tsx",
            lineNumber: 159,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/cms/SectionRenderer.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
function TestimonialsSection({ props }) {
    const items = arr(props.items);
    const t = bgTheme(props.bg);
    const ink = t ? t.heading : 'text-jet';
    const sub = t ? t.body : 'text-jet';
    const faint = t ? t.muted : 'text-jet/70';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${t ? t.section : 'bg-gold'} py-24`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-6 text-center",
            children: [
                str(props.heading) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: `font-cormorant text-display-md mb-12 ${ink}`,
                    children: str(props.heading)
                }, void 0, false, {
                    fileName: "[project]/components/cms/SectionRenderer.tsx",
                    lineNumber: 187,
                    columnNumber: 31
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-10",
                    children: items.map((t2, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `font-cormorant text-2xl italic mb-4 ${ink}`,
                                    children: [
                                        "“",
                                        str(t2.text),
                                        "”"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/cms/SectionRenderer.tsx",
                                    lineNumber: 191,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `${sub} font-medium font-dm-sans`,
                                    children: str(t2.author)
                                }, void 0, false, {
                                    fileName: "[project]/components/cms/SectionRenderer.tsx",
                                    lineNumber: 192,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `${faint} text-sm font-dm-sans`,
                                    children: str(t2.role)
                                }, void 0, false, {
                                    fileName: "[project]/components/cms/SectionRenderer.tsx",
                                    lineNumber: 193,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/cms/SectionRenderer.tsx",
                            lineNumber: 190,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/cms/SectionRenderer.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/cms/SectionRenderer.tsx",
            lineNumber: 186,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/cms/SectionRenderer.tsx",
        lineNumber: 185,
        columnNumber: 5
    }, this);
}
function CtaSection({ props }) {
    const t = bgTheme(props.bg);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${t ? t.section : 'bg-pearl'} py-24 text-center border-t border-gold/20`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: `font-cormorant text-display-md mb-4 ${t ? t.heading : 'text-charcoal'}`,
                children: str(props.heading, 'Ready to talk?')
            }, void 0, false, {
                fileName: "[project]/components/cms/SectionRenderer.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            str(props.text) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `${t ? t.muted : 'text-warm'} font-dm-sans mb-8 max-w-xl mx-auto`,
                children: str(props.text)
            }, void 0, false, {
                fileName: "[project]/components/cms/SectionRenderer.tsx",
                lineNumber: 207,
                columnNumber: 26
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: str(props.buttonHref, '/contact'),
                    className: "btn-primary",
                    children: str(props.buttonLabel, 'Contact Us')
                }, void 0, false, {
                    fileName: "[project]/components/cms/SectionRenderer.tsx",
                    lineNumber: 209,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/cms/SectionRenderer.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/cms/SectionRenderer.tsx",
        lineNumber: 205,
        columnNumber: 5
    }, this);
}
function SectionRenderer({ type, props }) {
    switch(type){
        case 'hero':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroSection, {
                props: props
            }, void 0, false, {
                fileName: "[project]/components/cms/SectionRenderer.tsx",
                lineNumber: 219,
                columnNumber: 25
            }, this);
        case 'text_image':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TextImageSection, {
                props: props
            }, void 0, false, {
                fileName: "[project]/components/cms/SectionRenderer.tsx",
                lineNumber: 220,
                columnNumber: 31
            }, this);
        case 'cards':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CardsSection, {
                props: props
            }, void 0, false, {
                fileName: "[project]/components/cms/SectionRenderer.tsx",
                lineNumber: 221,
                columnNumber: 26
            }, this);
        case 'stats':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatsSection, {
                props: props
            }, void 0, false, {
                fileName: "[project]/components/cms/SectionRenderer.tsx",
                lineNumber: 222,
                columnNumber: 26
            }, this);
        case 'gallery':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GallerySection, {
                props: props
            }, void 0, false, {
                fileName: "[project]/components/cms/SectionRenderer.tsx",
                lineNumber: 223,
                columnNumber: 28
            }, this);
        case 'testimonials':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialsSection, {
                props: props
            }, void 0, false, {
                fileName: "[project]/components/cms/SectionRenderer.tsx",
                lineNumber: 224,
                columnNumber: 33
            }, this);
        case 'cta':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CtaSection, {
                props: props
            }, void 0, false, {
                fileName: "[project]/components/cms/SectionRenderer.tsx",
                lineNumber: 225,
                columnNumber: 24
            }, this);
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TextImageSection, {
                props: props
            }, void 0, false, {
                fileName: "[project]/components/cms/SectionRenderer.tsx",
                lineNumber: 226,
                columnNumber: 21
            }, this);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__089unt~._.js.map