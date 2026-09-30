(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/r2/config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const R2_CONFIG = {
    BUCKET_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.R2_BUCKET || 'sachi',
    CDN_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_R2_CDN_URL || '',
    PUBLIC_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_R2_PUBLIC_URL || '',
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/site-content-defaults.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$r2$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/r2/config.ts [app-client] (ecmascript)");
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
_c = CMS_KEYS;
function cmsSettingKey(key) {
    return `cms_${key}`;
}
function resolveContentImage(value, fallback) {
    if (!value || !String(value).trim()) return fallback;
    const v = String(value).trim();
    if (v.startsWith('http') || v.startsWith('/api/') || v.startsWith('/')) return v;
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$r2$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getR2AssetUrl"])(v);
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
var _c;
__turbopack_context__.k.register(_c, "CMS_KEYS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site-content-defaults.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Navbar(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(114);
    if ($[0] !== "272609dae979536200b6414451a078c89d19f4b9a0d73a8d5d669547758f1d90") {
        for(let $i = 0; $i < 114; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "272609dae979536200b6414451a078c89d19f4b9a0d73a8d5d669547758f1d90";
    }
    const { content, customLinks: serverLinks } = t0;
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [live, setLive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [fetchedLinks, setFetchedLinks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isHomePage = pathname === "/";
    let t2;
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Navbar[useEffect()]": ()=>{
                let cancelled = false;
                fetch("/api/content", {
                    cache: "no-store"
                }).then(_NavbarUseEffectAnonymous).then({
                    "Navbar[useEffect() > (anonymous)()]": (data)=>{
                        if (!cancelled && data?.navbar) {
                            setLive(data.navbar);
                        }
                    }
                }["Navbar[useEffect() > (anonymous)()]"]).catch(_NavbarUseEffectAnonymous2);
                fetch("/api/nav", {
                    cache: "no-store"
                }).then(_NavbarUseEffectAnonymous3).then({
                    "Navbar[useEffect() > (anonymous)()]": (data_0)=>{
                        if (!cancelled && Array.isArray(data_0?.custom)) {
                            setFetchedLinks(data_0.custom.filter(_NavbarUseEffectAnonymousAnonymous));
                        }
                    }
                }["Navbar[useEffect() > (anonymous)()]"]).catch(_NavbarUseEffectAnonymous4);
                return ()=>{
                    cancelled = true;
                };
            }
        })["Navbar[useEffect()]"];
        t3 = [];
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "Navbar[useEffect()]": ()=>{
                const onScroll = {
                    "Navbar[useEffect() > onScroll]": ()=>setScrolled(window.scrollY > 80)
                }["Navbar[useEffect() > onScroll]"];
                window.addEventListener("scroll", onScroll, {
                    passive: true
                });
                return ()=>window.removeEventListener("scroll", onScroll);
            }
        })["Navbar[useEffect()]"];
        t5 = [];
        $[4] = t4;
        $[5] = t5;
    } else {
        t4 = $[4];
        t5 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    const navbarSolid = scrolled || !isHomePage;
    const nav = live ?? content ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_CONTENT"].navbar;
    const customLinks = serverLinks ?? fetchedLinks;
    const t6 = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/80 backdrop-blur-md border-b border-white/20 text-charcoal ${navbarSolid ? "py-4 shadow-sm" : "py-6"}`;
    let t7;
    if ($[6] !== nav.brand) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "font-cormorant text-2xl tracking-widest uppercase relative z-50 transition-colors text-charcoal",
            children: nav.brand
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[6] = nav.brand;
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    let t8;
    if ($[8] !== nav.companyLabel) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "hover:opacity-70 transition-opacity uppercase font-dm-sans text-sm tracking-widest",
            children: nav.companyLabel
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[8] = nav.companyLabel;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] !== nav.aboutLabel) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/about",
            className: "px-4 py-3 text-ivory hover:bg-ivory/10 text-xs transition-colors",
            children: nav.aboutLabel
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[10] = nav.aboutLabel;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] !== nav.whatWeDoLabel) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/#what-we-do",
            className: "px-4 py-3 text-ivory hover:bg-ivory/10 text-xs transition-colors",
            children: nav.whatWeDoLabel
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, this);
        $[12] = nav.whatWeDoLabel;
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] !== nav.whyChooseUsLabel) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/#why-choose-us",
            className: "px-4 py-3 text-ivory hover:bg-ivory/10 text-xs transition-colors",
            children: nav.whyChooseUsLabel
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[14] = nav.whyChooseUsLabel;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] !== nav.valuesLabel) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/#values",
            className: "px-4 py-3 text-ivory hover:bg-ivory/10 text-xs transition-colors",
            children: nav.valuesLabel
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[16] = nav.valuesLabel;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== t10 || $[19] !== t11 || $[20] !== t12 || $[21] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-full left-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-jet border border-jet/20 flex flex-col",
                children: [
                    t9,
                    t10,
                    t11,
                    t12
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Navbar.tsx",
                lineNumber: 152,
                columnNumber: 155
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[18] = t10;
        $[19] = t11;
        $[20] = t12;
        $[21] = t9;
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] !== t13 || $[24] !== t8) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative",
            children: [
                t8,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[23] = t13;
        $[24] = t8;
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    let t15;
    if ($[26] !== nav.productsLabel) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/products",
            className: "hover:opacity-70 transition-opacity",
            children: nav.productsLabel
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[26] = nav.productsLabel;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] !== nav.processLabel) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/process",
            className: "hover:opacity-70 transition-opacity",
            children: nav.processLabel
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[28] = nav.processLabel;
        $[29] = t16;
    } else {
        t16 = $[29];
    }
    let t17;
    if ($[30] !== nav.certificatesLabel) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/certificates",
            className: "hover:opacity-70 transition-opacity",
            children: nav.certificatesLabel
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 188,
            columnNumber: 11
        }, this);
        $[30] = nav.certificatesLabel;
        $[31] = t17;
    } else {
        t17 = $[31];
    }
    let t18;
    if ($[32] !== customLinks) {
        t18 = customLinks.map(_NavbarCustomLinksMap);
        $[32] = customLinks;
        $[33] = t18;
    } else {
        t18 = $[33];
    }
    let t19;
    if ($[34] !== nav.contactLabel) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/contact",
            className: "hover:opacity-70 transition-opacity",
            children: nav.contactLabel
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[34] = nav.contactLabel;
        $[35] = t19;
    } else {
        t19 = $[35];
    }
    let t20;
    if ($[36] !== nav.ctaLabel) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/contact#quote",
            className: "px-6 py-3 font-dm-sans text-xs font-medium uppercase tracking-[0.25em] transition-colors bg-gold text-jet hover:bg-gold-deep",
            children: nav.ctaLabel
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[36] = nav.ctaLabel;
        $[37] = t20;
    } else {
        t20 = $[37];
    }
    let t21;
    if ($[38] !== t14 || $[39] !== t15 || $[40] !== t16 || $[41] !== t17 || $[42] !== t18 || $[43] !== t19 || $[44] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden lg:flex items-center gap-8 font-dm-sans text-sm uppercase tracking-widest",
            children: [
                t14,
                t15,
                t16,
                t17,
                t18,
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 220,
            columnNumber: 11
        }, this);
        $[38] = t14;
        $[39] = t15;
        $[40] = t16;
        $[41] = t17;
        $[42] = t18;
        $[43] = t19;
        $[44] = t20;
        $[45] = t21;
    } else {
        t21 = $[45];
    }
    let t22;
    if ($[46] !== menuOpen) {
        t22 = ({
            "Navbar[<button>.onClick]": ()=>setMenuOpen(!menuOpen)
        })["Navbar[<button>.onClick]"];
        $[46] = menuOpen;
        $[47] = t22;
    } else {
        t22 = $[47];
    }
    const t23 = `w-full h-0.5 transition-all duration-300 bg-charcoal ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`;
    let t24;
    if ($[48] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t23
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 245,
            columnNumber: 11
        }, this);
        $[48] = t23;
        $[49] = t24;
    } else {
        t24 = $[49];
    }
    const t25 = `w-full h-0.5 transition-all duration-300 bg-charcoal ${menuOpen ? "opacity-0" : "opacity-100"}`;
    let t26;
    if ($[50] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t25
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[50] = t25;
        $[51] = t26;
    } else {
        t26 = $[51];
    }
    const t27 = `w-full h-0.5 transition-all duration-300 bg-charcoal ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`;
    let t28;
    if ($[52] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t27
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[52] = t27;
        $[53] = t28;
    } else {
        t28 = $[53];
    }
    let t29;
    if ($[54] !== t24 || $[55] !== t26 || $[56] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-6 h-4 relative flex flex-col justify-between",
            children: [
                t24,
                t26,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[54] = t24;
        $[55] = t26;
        $[56] = t28;
        $[57] = t29;
    } else {
        t29 = $[57];
    }
    let t30;
    if ($[58] !== t22 || $[59] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "lg:hidden relative z-50 p-2",
            onClick: t22,
            "aria-label": "Toggle Menu",
            children: t29
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 281,
            columnNumber: 11
        }, this);
        $[58] = t22;
        $[59] = t29;
        $[60] = t30;
    } else {
        t30 = $[60];
    }
    const t31 = `fixed inset-0 bg-ivory z-40 transition-transform duration-500 flex flex-col justify-center items-center gap-8 overflow-y-auto py-24 ${menuOpen ? "translate-x-0" : "translate-x-full lg:hidden"}`;
    let t32;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = ({
            "Navbar[<Link>.onClick]": ()=>setMenuOpen(false)
        })["Navbar[<Link>.onClick]"];
        $[61] = t32;
    } else {
        t32 = $[61];
    }
    let t33;
    if ($[62] !== nav.aboutLabel) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/about",
            onClick: t32,
            className: "font-dm-sans text-2xl text-charcoal uppercase tracking-widest",
            children: nav.aboutLabel
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 300,
            columnNumber: 11
        }, this);
        $[62] = nav.aboutLabel;
        $[63] = t33;
    } else {
        t33 = $[63];
    }
    let t34;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = ({
            "Navbar[<Link>.onClick]": ()=>setMenuOpen(false)
        })["Navbar[<Link>.onClick]"];
        $[64] = t34;
    } else {
        t34 = $[64];
    }
    let t35;
    if ($[65] !== nav.whatWeDoLabel) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/#what-we-do",
            onClick: t34,
            className: "font-dm-sans text-lg text-charcoal/80 uppercase tracking-widest",
            children: nav.whatWeDoLabel
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 317,
            columnNumber: 11
        }, this);
        $[65] = nav.whatWeDoLabel;
        $[66] = t35;
    } else {
        t35 = $[66];
    }
    let t36;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = ({
            "Navbar[<Link>.onClick]": ()=>setMenuOpen(false)
        })["Navbar[<Link>.onClick]"];
        $[67] = t36;
    } else {
        t36 = $[67];
    }
    let t37;
    if ($[68] !== nav.whyChooseUsLabel) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/#why-choose-us",
            onClick: t36,
            className: "font-dm-sans text-lg text-charcoal/80 uppercase tracking-widest",
            children: nav.whyChooseUsLabel
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 334,
            columnNumber: 11
        }, this);
        $[68] = nav.whyChooseUsLabel;
        $[69] = t37;
    } else {
        t37 = $[69];
    }
    let t38;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = ({
            "Navbar[<Link>.onClick]": ()=>setMenuOpen(false)
        })["Navbar[<Link>.onClick]"];
        $[70] = t38;
    } else {
        t38 = $[70];
    }
    let t39;
    if ($[71] !== nav.valuesLabel) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/#values",
            onClick: t38,
            className: "font-dm-sans text-lg text-charcoal/80 uppercase tracking-widest",
            children: nav.valuesLabel
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 351,
            columnNumber: 11
        }, this);
        $[71] = nav.valuesLabel;
        $[72] = t39;
    } else {
        t39 = $[72];
    }
    let t40;
    if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = ({
            "Navbar[<Link>.onClick]": ()=>setMenuOpen(false)
        })["Navbar[<Link>.onClick]"];
        $[73] = t40;
    } else {
        t40 = $[73];
    }
    let t41;
    if ($[74] !== nav.productsLabel) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/products",
            onClick: t40,
            className: "font-dm-sans text-2xl text-charcoal uppercase tracking-widest",
            children: nav.productsLabel
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 368,
            columnNumber: 11
        }, this);
        $[74] = nav.productsLabel;
        $[75] = t41;
    } else {
        t41 = $[75];
    }
    let t42;
    if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = ({
            "Navbar[<Link>.onClick]": ()=>setMenuOpen(false)
        })["Navbar[<Link>.onClick]"];
        $[76] = t42;
    } else {
        t42 = $[76];
    }
    let t43;
    if ($[77] !== nav.processLabel) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/process",
            onClick: t42,
            className: "font-dm-sans text-2xl text-charcoal uppercase tracking-widest",
            children: nav.processLabel
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 385,
            columnNumber: 11
        }, this);
        $[77] = nav.processLabel;
        $[78] = t43;
    } else {
        t43 = $[78];
    }
    let t44;
    if ($[79] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = ({
            "Navbar[<Link>.onClick]": ()=>setMenuOpen(false)
        })["Navbar[<Link>.onClick]"];
        $[79] = t44;
    } else {
        t44 = $[79];
    }
    let t45;
    if ($[80] !== nav.certificatesLabel) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/certificates",
            onClick: t44,
            className: "font-dm-sans text-2xl text-charcoal uppercase tracking-widest",
            children: nav.certificatesLabel
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 402,
            columnNumber: 11
        }, this);
        $[80] = nav.certificatesLabel;
        $[81] = t45;
    } else {
        t45 = $[81];
    }
    let t46;
    if ($[82] !== customLinks) {
        let t47;
        if ($[84] === Symbol.for("react.memo_cache_sentinel")) {
            t47 = ({
                "Navbar[customLinks.map()]": (l_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: l_1.href,
                        onClick: {
                            "Navbar[customLinks.map() > <Link>.onClick]": ()=>setMenuOpen(false)
                        }["Navbar[customLinks.map() > <Link>.onClick]"],
                        className: "font-dm-sans text-2xl text-charcoal uppercase tracking-widest",
                        children: l_1.label
                    }, l_1.href, false, {
                        fileName: "[project]/components/layout/Navbar.tsx",
                        lineNumber: 413,
                        columnNumber: 45
                    }, this)
            })["Navbar[customLinks.map()]"];
            $[84] = t47;
        } else {
            t47 = $[84];
        }
        t46 = customLinks.map(t47);
        $[82] = customLinks;
        $[83] = t46;
    } else {
        t46 = $[83];
    }
    let t47;
    if ($[85] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = ({
            "Navbar[<Link>.onClick]": ()=>setMenuOpen(false)
        })["Navbar[<Link>.onClick]"];
        $[85] = t47;
    } else {
        t47 = $[85];
    }
    let t48;
    if ($[86] !== nav.contactLabel) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/contact",
            onClick: t47,
            className: "font-dm-sans text-2xl text-charcoal uppercase tracking-widest",
            children: nav.contactLabel
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 438,
            columnNumber: 11
        }, this);
        $[86] = nav.contactLabel;
        $[87] = t48;
    } else {
        t48 = $[87];
    }
    let t49;
    if ($[88] === Symbol.for("react.memo_cache_sentinel")) {
        t49 = ({
            "Navbar[<Link>.onClick]": ()=>setMenuOpen(false)
        })["Navbar[<Link>.onClick]"];
        $[88] = t49;
    } else {
        t49 = $[88];
    }
    let t50;
    if ($[89] !== nav.ctaLabel) {
        let t51;
        if ($[91] === Symbol.for("react.memo_cache_sentinel")) {
            t51 = / →$/;
            $[91] = t51;
        } else {
            t51 = $[91];
        }
        t50 = nav.ctaLabel.replace(t51, "");
        $[89] = nav.ctaLabel;
        $[90] = t50;
    } else {
        t50 = $[90];
    }
    let t51;
    if ($[92] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/contact#quote",
            onClick: t49,
            className: "btn-primary mt-4",
            children: t50
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 470,
            columnNumber: 11
        }, this);
        $[92] = t50;
        $[93] = t51;
    } else {
        t51 = $[93];
    }
    let t52;
    if ($[94] !== t31 || $[95] !== t33 || $[96] !== t35 || $[97] !== t37 || $[98] !== t39 || $[99] !== t41 || $[100] !== t43 || $[101] !== t45 || $[102] !== t46 || $[103] !== t48 || $[104] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t31,
            children: [
                t33,
                t35,
                t37,
                t39,
                t41,
                t43,
                t45,
                t46,
                t48,
                t51
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 478,
            columnNumber: 11
        }, this);
        $[94] = t31;
        $[95] = t33;
        $[96] = t35;
        $[97] = t37;
        $[98] = t39;
        $[99] = t41;
        $[100] = t43;
        $[101] = t45;
        $[102] = t46;
        $[103] = t48;
        $[104] = t51;
        $[105] = t52;
    } else {
        t52 = $[105];
    }
    let t53;
    if ($[106] !== t21 || $[107] !== t30 || $[108] !== t52 || $[109] !== t7) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center",
            children: [
                t7,
                t21,
                t30,
                t52
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 496,
            columnNumber: 11
        }, this);
        $[106] = t21;
        $[107] = t30;
        $[108] = t52;
        $[109] = t7;
        $[110] = t53;
    } else {
        t53 = $[110];
    }
    let t54;
    if ($[111] !== t53 || $[112] !== t6) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: t6,
            children: t53
        }, void 0, false, {
            fileName: "[project]/components/layout/Navbar.tsx",
            lineNumber: 507,
            columnNumber: 11
        }, this);
        $[111] = t53;
        $[112] = t6;
        $[113] = t54;
    } else {
        t54 = $[113];
    }
    return t54;
}
_s(Navbar, "vpnCgyVRyyHDjbLCW7AaFJ1U/9g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
function _NavbarCustomLinksMap(l_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: l_0.href,
        className: "hover:opacity-70 transition-opacity",
        children: l_0.label
    }, l_0.href, false, {
        fileName: "[project]/components/layout/Navbar.tsx",
        lineNumber: 517,
        columnNumber: 10
    }, this);
}
function _NavbarUseEffectAnonymous4() {}
function _NavbarUseEffectAnonymousAnonymous(l) {
    return l.label && l.href;
}
function _NavbarUseEffectAnonymous3(r_0) {
    return r_0.ok ? r_0.json() : null;
}
function _NavbarUseEffectAnonymous2() {}
function _NavbarUseEffectAnonymous(r) {
    return r.ok ? r.json() : null;
}
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/FloatingWhatsApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingWhatsApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site-content-defaults.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function FloatingWhatsApp(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "6b87c382e4224ca8f2f20e8aeb6e77aab387e712333417211f259cfc58d2a385") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6b87c382e4224ca8f2f20e8aeb6e77aab387e712333417211f259cfc58d2a385";
    }
    const { whatsappNumber } = t0;
    const number = whatsappNumber ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_CONTENT"].company.whatsappNumber;
    const whatsappUrl = `https://wa.me/${number}`;
    let t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            scale: 0
        };
        t2 = {
            scale: 1
        };
        t3 = {
            delay: 1,
            type: "spring"
        };
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
    } else {
        t1 = $[1];
        t2 = $[2];
        t3 = $[3];
    }
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: "w-8 h-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"
            }, void 0, false, {
                fileName: "[project]/components/layout/FloatingWhatsApp.tsx",
                lineNumber: 43,
                columnNumber: 75
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/layout/FloatingWhatsApp.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== whatsappUrl) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
            href: whatsappUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "fixed bottom-6 left-6 z-30 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-colors",
            initial: t1,
            animate: t2,
            transition: t3,
            "aria-label": "Chat on WhatsApp",
            children: t4
        }, void 0, false, {
            fileName: "[project]/components/layout/FloatingWhatsApp.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[5] = whatsappUrl;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    return t5;
}
_c = FloatingWhatsApp;
var _c;
__turbopack_context__.k.register(_c, "FloatingWhatsApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/store/quoteCart.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useQuoteCart",
    ()=>useQuoteCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const useQuoteCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/FloatingQuoteCart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingQuoteCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$quoteCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/quoteCart.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function FloatingQuoteCart() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "6d6e23eddc4ab3c22a6844d7ea230f6a9f86e2b76be0a7f6a253c9b091910a85") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6d6e23eddc4ab3c22a6844d7ea230f6a9f86e2b76be0a7f6a253c9b091910a85";
    }
    const { items, openCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$quoteCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuoteCart"])();
    const [mounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(_FloatingQuoteCartUseState);
    if (!mounted || items.length === 0) {
        return null;
    }
    let t0;
    if ($[1] !== items) {
        t0 = items.reduce(_FloatingQuoteCartItemsReduce, 0);
        $[1] = items;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const totalItems = t0;
    let t1;
    let t2;
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            scale: 0,
            opacity: 0
        };
        t2 = {
            scale: 1,
            opacity: 1
        };
        t3 = {
            scale: 0,
            opacity: 0
        };
        t4 = {
            scale: 1.05
        };
        $[3] = t1;
        $[4] = t2;
        $[5] = t3;
        $[6] = t4;
    } else {
        t1 = $[3];
        t2 = $[4];
        t3 = $[5];
        t4 = $[6];
    }
    let t5;
    if ($[7] !== totalItems) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute -top-2 -right-2 bg-gold text-jet w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 border-ivory",
            children: totalItems
        }, void 0, false, {
            fileName: "[project]/components/layout/FloatingQuoteCart.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[7] = totalItems;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: "1.5",
            stroke: "currentColor",
            className: "w-6 h-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            }, void 0, false, {
                fileName: "[project]/components/layout/FloatingQuoteCart.tsx",
                lineNumber: 73,
                columnNumber: 107
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/layout/FloatingQuoteCart.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[10px] mt-0.5 font-dm-sans tracking-wider uppercase",
            children: "Quote"
        }, void 0, false, {
            fileName: "[project]/components/layout/FloatingQuoteCart.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[9] = t6;
        $[10] = t7;
    } else {
        t6 = $[9];
        t7 = $[10];
    }
    let t8;
    if ($[11] !== openCart || $[12] !== t5) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                className: "fixed bottom-6 right-6 z-30 w-16 h-16 bg-jet border border-gold rounded-full flex flex-col items-center justify-center text-gold shadow-lg hover:bg-jet/90 transition-colors",
                initial: t1,
                animate: t2,
                exit: t3,
                whileHover: t4,
                onClick: openCart,
                "aria-label": "Open Quote Cart",
                children: [
                    t5,
                    t6,
                    t7
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/FloatingQuoteCart.tsx",
                lineNumber: 83,
                columnNumber: 27
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/layout/FloatingQuoteCart.tsx",
            lineNumber: 83,
            columnNumber: 10
        }, this);
        $[11] = openCart;
        $[12] = t5;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    return t8;
}
_s(FloatingQuoteCart, "4v43Eghz2EAv96Iis9Z7+f8UoCQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$quoteCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuoteCart"]
    ];
});
_c = FloatingQuoteCart;
function _FloatingQuoteCartItemsReduce(acc, item) {
    return acc + item.quantity;
}
function _FloatingQuoteCartUseState() {
    return ("TURBOPACK compile-time value", "object") !== "undefined";
}
var _c;
__turbopack_context__.k.register(_c, "FloatingQuoteCart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/pricing.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/quotation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pricing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pricing.ts [app-client] (ecmascript)");
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
    const { P } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pricing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateItemPrice"])({
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pricing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateItemPrice"])({
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/currency.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/quote/QuoteCartDrawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuoteCartDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$quoteCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/quoteCart.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quotation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/quotation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/currency.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$r2$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/r2/config.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function QuoteCartDrawer() {
    _s();
    const { items, isOpen, closeCart, updateQuantity, removeItem, clearCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$quoteCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuoteCart"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [metalPrices, setMetalPrices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Currency is controlled by the admin (Settings → Currency). No website toggle.
    const currency = metalPrices?.currency?.defaultCurrency ?? 'USD';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuoteCartDrawer.useEffect": ()=>{
            setMounted(true);
        }
    }["QuoteCartDrawer.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuoteCartDrawer.useEffect": ()=>{
            if (isOpen) {
                fetch('/api/metal-prices').then({
                    "QuoteCartDrawer.useEffect": (r)=>r.json()
                }["QuoteCartDrawer.useEffect"]).then({
                    "QuoteCartDrawer.useEffect": (data)=>setMetalPrices(data)
                }["QuoteCartDrawer.useEffect"]).catch(console.error);
            }
        }
    }["QuoteCartDrawer.useEffect"], [
        isOpen
    ]);
    if (!mounted) return null;
    const totalUSD = metalPrices ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quotation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateQuoteTotal"])(items, metalPrices) : 0;
    const rate = metalPrices?.settings?.exchangeRateUSDtoINR ?? 83.5;
    const fmt = (usd)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(usd, currency, rate);
    const handleDownloadPDF = async ()=>{
        if (!metalPrices || items.length === 0) return;
        const { generateQuotePDF } = await __turbopack_context__.A("[project]/lib/generateQuotePDF.ts [app-client] (ecmascript, async loader)");
        generateQuotePDF(items, metalPrices, {
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_COMPANY_NAME || 'Sachi Jewellery Co.',
            address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_COMPANY_ADDRESS || 'H-193 SEZ-II Sitapura Industrial Area, Jaipur, Rajasthan 302022, India',
            email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_COMPANY_EMAIL || 'contact@sachijewellery.com',
            phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_COMPANY_PHONE || '+91-8946931404',
            gst: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_COMPANY_GST || '08ACSFS4747G1ZI'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    lineNumber: 53,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center px-6 py-5 bg-jet border-b border-gold/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-dm-sans text-sm font-semibold text-ivory uppercase tracking-widest",
                                            children: "Quotation Cart"
                                        }, void 0, false, {
                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, this),
                                        items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-warm text-xs mt-0.5",
                                            children: [
                                                items.length,
                                                " item",
                                                items.length !== 1 ? 's' : ''
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                            lineNumber: 79,
                                            columnNumber: 38
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: closeCart,
                                    className: "text-warm hover:text-ivory transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: "1.5",
                                        stroke: "currentColor",
                                        className: "w-6 h-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M6 18L18 6M6 6l12 12"
                                        }, void 0, false, {
                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                            lineNumber: 83,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-6 flex flex-col gap-6",
                            children: items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center text-warm mt-10 font-dm-sans",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Your quotation cart is empty."
                                    }, void 0, false, {
                                        fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                        lineNumber: 91,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: closeCart,
                                        className: "mt-4 btn-primary",
                                        children: "Browse Catalogue"
                                    }, void 0, false, {
                                        fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                        lineNumber: 92,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                lineNumber: 90,
                                columnNumber: 37
                            }, this) : items.map((item)=>{
                                const breakdown = metalPrices ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quotation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItemBreakdown"])(item, metalPrices) : null;
                                const itemUSD = breakdown ? breakdown.P * item.quantity : null;
                                const imgSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$r2$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeR2Image"])(item.product.images?.[0]) ?? '/image.png';
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 border-b border-black/5 pb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-20 h-20 bg-pearl border border-gold/10 shrink-0 overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: imgSrc,
                                                alt: item.product.name,
                                                fill: true,
                                                className: "object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                lineNumber: 99,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                            lineNumber: 98,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 flex flex-col justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-dm-sans text-sm font-medium text-charcoal leading-tight",
                                                                    children: item.product.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                                    lineNumber: 105,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                                    lineNumber: 108,
                                                                    columnNumber: 29
                                                                }, this),
                                                                item.product.weightGrams && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-warm mt-0.5",
                                                                    children: [
                                                                        item.product.weightGrams,
                                                                        "g"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                                    lineNumber: 113,
                                                                    columnNumber: 58
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>removeItem(item.product.id),
                                                            className: "text-warm hover:text-red-500 transition-colors shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                strokeWidth: "1.5",
                                                                stroke: "currentColor",
                                                                className: "w-4 h-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    d: "M6 18L18 6M6 6l12 12"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                                    lineNumber: 117,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                                lineNumber: 116,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 25
                                                }, this),
                                                breakdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 text-[10px] text-warm/70 font-dm-sans",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Metal: ",
                                                                fmt(breakdown.metalCost)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                            lineNumber: 124,
                                                            columnNumber: 29
                                                        }, this),
                                                        breakdown.stoneCost1 > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                " · Stone 1: ",
                                                                fmt(breakdown.stoneCost1)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                            lineNumber: 125,
                                                            columnNumber: 58
                                                        }, this),
                                                        breakdown.stoneCost2 > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                " · Stone 2: ",
                                                                fmt(breakdown.stoneCost2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 58
                                                        }, this),
                                                        breakdown.labourCost > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                " · Labour: ",
                                                                fmt(breakdown.labourCost)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 58
                                                        }, this),
                                                        breakdown.platingCost > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                " · Plating: ",
                                                                fmt(breakdown.platingCost)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 59
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 39
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center mt-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center border border-gold/30",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>updateQuantity(item.product.id, Math.max(1, item.quantity - 1)),
                                                                    className: "w-7 h-7 flex items-center justify-center text-charcoal hover:bg-gold/10 text-sm",
                                                                    children: "−"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                                    lineNumber: 134,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-8 text-center font-dm-sans text-sm text-charcoal",
                                                                    children: item.quantity
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                                    lineNumber: 137,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>updateQuantity(item.product.id, item.quantity + 1),
                                                                    className: "w-7 h-7 flex items-center justify-center text-charcoal hover:bg-gold/10 text-sm",
                                                                    children: "+"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                                    lineNumber: 140,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 27
                                                        }, this),
                                                        itemUSD !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-dm-sans text-sm font-medium text-charcoal",
                                                            children: fmt(itemUSD)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 47
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-warm italic",
                                                            children: "Loading price…"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 36
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                            lineNumber: 102,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, `${item.product.id}-${item.selectedKarat}-${item.selectedStone}`, true, {
                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                    lineNumber: 97,
                                    columnNumber: 20
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                            lineNumber: 89,
                            columnNumber: 13
                        }, this),
                        items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-pearl p-6 border-t border-gold/20",
                            children: [
                                metalPrices && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-baseline mb-4 pb-4 border-b border-gold/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-dm-sans text-xs uppercase tracking-widest text-warm",
                                            children: "Estimated Total"
                                        }, void 0, false, {
                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                            lineNumber: 158,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-cormorant text-2xl text-charcoal font-medium",
                                                    children: fmt(totalUSD)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-warm/60 mt-0.5",
                                                    children: [
                                                        "P = w·m·",
                                                        metalPrices.settings?.wastageFactor ?? 1.07,
                                                        " + N1·(s1+st1) + N2·(s2+st2) + L·w"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                            lineNumber: 161,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                    lineNumber: 157,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleDownloadPDF,
                                            disabled: !metalPrices,
                                            className: "w-full btn-secondary flex justify-center items-center gap-2 disabled:opacity-40",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: "1.5",
                                                    stroke: "currentColor",
                                                    className: "w-4 h-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 21
                                                }, this),
                                                "Download Quote PDF"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                            lineNumber: 172,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/contact#quote",
                                            onClick: closeCart,
                                            className: "w-full btn-primary text-center",
                                            children: "Request Formal Quotation"
                                        }, void 0, false, {
                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                            lineNumber: 178,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: clearCart,
                                            className: "text-xs text-warm uppercase tracking-widest hover:text-charcoal transition-colors w-full text-center mt-1",
                                            children: "Clear Cart"
                                        }, void 0, false, {
                                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                            lineNumber: 181,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                                    lineNumber: 171,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                            lineNumber: 156,
                            columnNumber: 34
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
                    lineNumber: 62,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/components/quote/QuoteCartDrawer.tsx",
        lineNumber: 50,
        columnNumber: 10
    }, this);
}
_s(QuoteCartDrawer, "rJ6vTdx2Q5QrdmpLMOy14nIkhts=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$quoteCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuoteCart"]
    ];
});
_c = QuoteCartDrawer;
var _c;
__turbopack_context__.k.register(_c, "QuoteCartDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site-content-defaults.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function HeroSection(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(45);
    if ($[0] !== "12d75b54ccf35e9406b16df066ac86fcb3228eed547ccba3025568de7b9fee7a") {
        for(let $i = 0; $i < 45; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "12d75b54ccf35e9406b16df066ac86fcb3228eed547ccba3025568de7b9fee7a";
    }
    const { content } = t0;
    const c = content ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_CONTENT"].home_hero;
    const d = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_CONTENT"].home_hero;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            hidden: {},
            visible: {
                transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.3
                }
            }
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const containerVariants = t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            opacity: 0,
            y: 20
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [
            0.25,
            0.1,
            0.25,
            1
        ];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            hidden: t2,
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.7,
                    ease: t3
                }
            }
        };
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const itemVariants = t4;
    let t5;
    if ($[5] !== c.image) {
        t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveContentImage"])(c.image, d.image);
        $[5] = c.image;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const t6 = c.imageAlt || d.imageAlt;
    let t7;
    if ($[7] !== t5 || $[8] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: t5,
            alt: t6,
            fill: true,
            className: "object-cover animate-kenburns",
            priority: true,
            sizes: "(max-width: 1024px) 100vw, 50vw"
        }, void 0, false, {
            fileName: "[project]/components/home/HeroSection.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[7] = t5;
        $[8] = t6;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-jet/10 lg:bg-jet/0"
        }, void 0, false, {
            fileName: "[project]/components/home/HeroSection.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2 h-[50vh] lg:h-full overflow-hidden",
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/HeroSection.tsx",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[11] = t7;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] !== c.badge) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-block px-5 py-1.5 tracking-[0.25em] border border-jet/40 text-jet rounded-full shadow-sm bg-transparent hover:bg-jet hover:text-gold transition-colors cursor-default font-semibold opacity-100 whitespace-nowrap",
            children: c.badge
        }, void 0, false, {
            fileName: "[project]/components/home/HeroSection.tsx",
            lineNumber: 110,
            columnNumber: 11
        }, this);
        $[13] = c.badge;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== c.location) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "whitespace-nowrap",
            children: c.location
        }, void 0, false, {
            fileName: "[project]/components/home/HeroSection.tsx",
            lineNumber: 118,
            columnNumber: 11
        }, this);
        $[15] = c.location;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] !== t10 || $[18] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: itemVariants,
            className: "flex flex-row items-center justify-center lg:justify-start gap-4 mb-8 text-jet text-xs tracking-[0.2em] uppercase font-dm-sans font-medium opacity-90 z-20 flex-wrap",
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/HeroSection.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        $[17] = t10;
        $[18] = t11;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/components/home/HeroSection.tsx",
            lineNumber: 135,
            columnNumber: 11
        }, this);
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/components/home/HeroSection.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    let t15;
    if ($[22] !== c.titleLine1 || $[23] !== c.titleLine2 || $[24] !== c.titleLine3) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
            variants: itemVariants,
            className: "font-cormorant text-5xl lg:text-[4rem] xl:text-[4.75rem] lg:leading-[1.1] text-jet mb-8 text-center lg:text-left tracking-[0] xl:tracking-tight mt-6",
            children: [
                c.titleLine1,
                t13,
                c.titleLine2,
                t14,
                c.titleLine3
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/HeroSection.tsx",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[22] = c.titleLine1;
        $[23] = c.titleLine2;
        $[24] = c.titleLine3;
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    let t16;
    if ($[26] !== c.subtitle) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
            variants: itemVariants,
            className: "font-dm-sans text-jet/80 text-body lg:text-lg mb-14 max-w-md mx-auto lg:mx-0 text-center lg:text-left font-light leading-relaxed",
            children: c.subtitle
        }, void 0, false, {
            fileName: "[project]/components/home/HeroSection.tsx",
            lineNumber: 159,
            columnNumber: 11
        }, this);
        $[26] = c.subtitle;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    const t17 = c.ctaPrimaryHref || "/products";
    let t18;
    if ($[28] !== c.ctaPrimaryLabel || $[29] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t17,
            className: "bg-jet text-gold px-10 py-4 text-center font-dm-sans font-medium text-xs tracking-[0.25em] uppercase hover:bg-jet/90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5",
            children: c.ctaPrimaryLabel
        }, void 0, false, {
            fileName: "[project]/components/home/HeroSection.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        $[28] = c.ctaPrimaryLabel;
        $[29] = t17;
        $[30] = t18;
    } else {
        t18 = $[30];
    }
    const t19 = c.ctaSecondaryHref || "/contact#quote";
    let t20;
    if ($[31] !== c.ctaSecondaryLabel || $[32] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t19,
            className: "border border-jet text-jet px-10 py-4 text-center font-dm-sans font-medium text-xs tracking-[0.2em] uppercase hover:bg-jet hover:text-gold transition-colors",
            children: c.ctaSecondaryLabel
        }, void 0, false, {
            fileName: "[project]/components/home/HeroSection.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[31] = c.ctaSecondaryLabel;
        $[32] = t19;
        $[33] = t20;
    } else {
        t20 = $[33];
    }
    let t21;
    if ($[34] !== t18 || $[35] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: itemVariants,
            className: "flex flex-col sm:flex-row gap-5 justify-center lg:justify-start",
            children: [
                t18,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/HeroSection.tsx",
            lineNumber: 187,
            columnNumber: 11
        }, this);
        $[34] = t18;
        $[35] = t20;
        $[36] = t21;
    } else {
        t21 = $[36];
    }
    let t22;
    if ($[37] !== t12 || $[38] !== t15 || $[39] !== t16 || $[40] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 w-full lg:w-1/2 lg:ml-auto min-h-[50vh] lg:min-h-screen bg-gold px-8 py-20 lg:pt-32 xl:px-24 flex flex-col justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: containerVariants,
                initial: "hidden",
                animate: "visible",
                className: "max-w-2xl mx-auto lg:mx-0 w-full",
                children: [
                    t12,
                    t15,
                    t16,
                    t21
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/HeroSection.tsx",
                lineNumber: 196,
                columnNumber: 164
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/home/HeroSection.tsx",
            lineNumber: 196,
            columnNumber: 11
        }, this);
        $[37] = t12;
        $[38] = t15;
        $[39] = t16;
        $[40] = t21;
        $[41] = t22;
    } else {
        t22 = $[41];
    }
    let t23;
    if ($[42] !== t22 || $[43] !== t9) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative min-h-screen flex flex-col lg:flex-row pt-20 lg:pt-0",
            children: [
                t9,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/HeroSection.tsx",
            lineNumber: 207,
            columnNumber: 11
        }, this);
        $[42] = t22;
        $[43] = t9;
        $[44] = t23;
    } else {
        t23 = $[44];
    }
    return t23;
}
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/ScrollReveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
;
function ScrollReveal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "1f42398edb44b140f82f86489c5b2b8ba2ffc2770c4c7648b711d34174efbf21") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1f42398edb44b140f82f86489c5b2b8ba2ffc2770c4c7648b711d34174efbf21";
    }
    const { children, className: t1, delay: t2 } = t0;
    const className = t1 === undefined ? "" : t1;
    const delay = t2 === undefined ? 0 : t2;
    let t3;
    let t4;
    let t5;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            opacity: 0,
            y: 30
        };
        t4 = {
            opacity: 1,
            y: 0
        };
        t5 = {
            once: true,
            amount: 0.2
        };
        $[1] = t3;
        $[2] = t4;
        $[3] = t5;
    } else {
        t3 = $[1];
        t4 = $[2];
        t5 = $[3];
    }
    let t6;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = [
            0.25,
            0.1,
            0.25,
            1
        ];
        $[4] = t6;
    } else {
        t6 = $[4];
    }
    let t7;
    if ($[5] !== delay) {
        t7 = {
            duration: 0.65,
            ease: t6,
            delay
        };
        $[5] = delay;
        $[6] = t7;
    } else {
        t7 = $[6];
    }
    let t8;
    if ($[7] !== children || $[8] !== className || $[9] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: className,
            initial: t3,
            whileInView: t4,
            viewport: t5,
            transition: t7,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/ScrollReveal.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[7] = children;
        $[8] = className;
        $[9] = t7;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    return t8;
}
_c = ScrollReveal;
var _c;
__turbopack_context__.k.register(_c, "ScrollReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/AboutSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/ScrollReveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site-content-defaults.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function Counter(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "b6813bd599f5b29799e5b2b670dd807a14e13fac6057bdebeb2c87f86c6c7a99") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b6813bd599f5b29799e5b2b670dd807a14e13fac6057bdebeb2c87f86c6c7a99";
    }
    const { to } = t0;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            once: true,
            amount: 0.5
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, t1);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            bounce: 0,
            duration: 2000
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const springValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(0, t2);
    let t3;
    let t4;
    if ($[3] !== isInView || $[4] !== springValue || $[5] !== to) {
        t3 = ({
            "Counter[useEffect()]": ()=>{
                if (isInView) {
                    springValue.set(to);
                }
            }
        })["Counter[useEffect()]"];
        t4 = [
            isInView,
            springValue,
            to
        ];
        $[3] = isInView;
        $[4] = springValue;
        $[5] = to;
        $[6] = t3;
        $[7] = t4;
    } else {
        t3 = $[6];
        t4 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[8] !== springValue) {
        t5 = ({
            "Counter[useEffect()]": ()=>springValue.on("change", {
                    "Counter[useEffect() > springValue.on()]": (latest)=>{
                        if (ref.current) {
                            ref.current.textContent = Math.floor(latest).toString() + "+";
                        }
                    }
                }["Counter[useEffect() > springValue.on()]"])
        })["Counter[useEffect()]"];
        $[8] = springValue;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== springValue || $[11] !== to) {
        t6 = [
            springValue,
            to
        ];
        $[10] = springValue;
        $[11] = to;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            ref: ref,
            className: "font-dm-sans font-medium text-5xl text-gold mb-2 block"
        }, void 0, false, {
            fileName: "[project]/components/home/AboutSection.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    return t7;
}
_s(Counter, "5HqdC1xcsrBs0IlLr+rJh4zLDsc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = Counter;
function AboutSection(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    if ($[0] !== "b6813bd599f5b29799e5b2b670dd807a14e13fac6057bdebeb2c87f86c6c7a99") {
        for(let $i = 0; $i < 37; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b6813bd599f5b29799e5b2b670dd807a14e13fac6057bdebeb2c87f86c6c7a99";
    }
    const { content } = t0;
    const c = content ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_CONTENT"].home_about;
    const d = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_CONTENT"].home_about;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 lg:-ml-8 lg:-mt-8 -ml-4 -mt-4 border border-gold/30 z-0"
        }, void 0, false, {
            fileName: "[project]/components/home/AboutSection.tsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== c.image) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveContentImage"])(c.image, d.image);
        $[2] = c.image;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const t3 = c.imageAlt || d.imageAlt;
    let t4;
    if ($[4] !== t2 || $[5] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "relative lg:ml-8 lg:mt-8 order-2 lg:order-1 mt-10",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative aspect-[4/5] w-full z-10 w-full overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: t2,
                        alt: t3,
                        fill: true,
                        className: "object-cover",
                        sizes: "(max-width: 1024px) 100vw, 50vw"
                    }, void 0, false, {
                        fileName: "[project]/components/home/AboutSection.tsx",
                        lineNumber: 131,
                        columnNumber: 164
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/home/AboutSection.tsx",
                    lineNumber: 131,
                    columnNumber: 90
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/AboutSection.tsx",
            lineNumber: 131,
            columnNumber: 10
        }, this);
        $[4] = t2;
        $[5] = t3;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== c.eyebrow) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gold text-xs tracking-[0.25em] uppercase font-dm-sans mb-4 block",
            children: c.eyebrow
        }, void 0, false, {
            fileName: "[project]/components/home/AboutSection.tsx",
            lineNumber: 140,
            columnNumber: 10
        }, this);
        $[7] = c.eyebrow;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== c.heading) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "font-cormorant text-display-md text-charcoal mb-8",
            children: c.heading
        }, void 0, false, {
            fileName: "[project]/components/home/AboutSection.tsx",
            lineNumber: 148,
            columnNumber: 10
        }, this);
        $[9] = c.heading;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== c.para1) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: c.para1
        }, void 0, false, {
            fileName: "[project]/components/home/AboutSection.tsx",
            lineNumber: 156,
            columnNumber: 10
        }, this);
        $[11] = c.para1;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== c.para2) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: c.para2
        }, void 0, false, {
            fileName: "[project]/components/home/AboutSection.tsx",
            lineNumber: 164,
            columnNumber: 10
        }, this);
        $[13] = c.para2;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== t7 || $[16] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6 text-charcoal-light text-body-lg mb-12",
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/AboutSection.tsx",
            lineNumber: 172,
            columnNumber: 10
        }, this);
        $[15] = t7;
        $[16] = t8;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    const t10 = c.stats?.length ? c.stats : d.stats;
    let t11;
    if ($[18] !== t10) {
        t11 = t10.map(_AboutSectionAnonymous);
        $[18] = t10;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-3 gap-8 mb-12 border-t border-gold/20 pt-8",
            children: t11
        }, void 0, false, {
            fileName: "[project]/components/home/AboutSection.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[20] = t11;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    const t13 = c.linkHref || "/about";
    let t14;
    if ($[22] !== c.linkLabel) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "border-b border-transparent group-hover:border-gold pb-1 transition-colors",
            children: c.linkLabel
        }, void 0, false, {
            fileName: "[project]/components/home/AboutSection.tsx",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        $[22] = c.linkLabel;
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    let t15;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "ml-2",
            children: "→"
        }, void 0, false, {
            fileName: "[project]/components/home/AboutSection.tsx",
            lineNumber: 207,
            columnNumber: 11
        }, this);
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    let t16;
    if ($[25] !== t13 || $[26] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t13,
            className: "group inline-flex items-center text-charcoal font-medium hover:text-gold transition-colors font-dm-sans text-sm tracking-widest uppercase",
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/AboutSection.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[25] = t13;
        $[26] = t14;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    if ($[28] !== t12 || $[29] !== t16 || $[30] !== t5 || $[31] !== t6 || $[32] !== t9) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "order-1 lg:order-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    t5,
                    t6,
                    t9,
                    t12,
                    t16
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/AboutSection.tsx",
                lineNumber: 223,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/home/AboutSection.tsx",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[28] = t12;
        $[29] = t16;
        $[30] = t5;
        $[31] = t6;
        $[32] = t9;
        $[33] = t17;
    } else {
        t17 = $[33];
    }
    let t18;
    if ($[34] !== t17 || $[35] !== t4) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "about",
            className: "bg-ivory py-32 overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-20 items-center",
                children: [
                    t4,
                    t17
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/AboutSection.tsx",
                lineNumber: 235,
                columnNumber: 74
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/home/AboutSection.tsx",
            lineNumber: 235,
            columnNumber: 11
        }, this);
        $[34] = t17;
        $[35] = t4;
        $[36] = t18;
    } else {
        t18 = $[36];
    }
    return t18;
}
_c1 = AboutSection;
function _AboutSectionAnonymous(s, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Counter, {
                to: s.value
            }, void 0, false, {
                fileName: "[project]/components/home/AboutSection.tsx",
                lineNumber: 245,
                columnNumber: 23
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-caption text-warm uppercase tracking-wider block mt-2 whitespace-pre-line",
                children: s.label
            }, void 0, false, {
                fileName: "[project]/components/home/AboutSection.tsx",
                lineNumber: 245,
                columnNumber: 47
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/components/home/AboutSection.tsx",
        lineNumber: 245,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "Counter");
__turbopack_context__.k.register(_c1, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/WhatWeDoSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhatWeDoSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/ScrollReveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site-content-defaults.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
const ICONS = [
    'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
    'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    'M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418',
    'M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z',
    'M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z'
];
function WhatWeDoSection(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "dd1a9bbb9d51c71160842b623eac25e3bb6c9566de4ee542a7b19bb31592c2a9") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dd1a9bbb9d51c71160842b623eac25e3bb6c9566de4ee542a7b19bb31592c2a9";
    }
    const { content } = t0;
    const c = content ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_CONTENT"].home_whatwedo;
    const cards = c.cards?.length ? c.cards : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_CONTENT"].home_whatwedo.cards;
    let t1;
    if ($[1] !== c.eyebrow) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gold text-xs tracking-[0.25em] uppercase font-dm-sans mb-4 block",
            children: c.eyebrow
        }, void 0, false, {
            fileName: "[project]/components/home/WhatWeDoSection.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        $[1] = c.eyebrow;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== c.heading) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "font-cormorant text-display-md text-charcoal mb-6",
            children: c.heading
        }, void 0, false, {
            fileName: "[project]/components/home/WhatWeDoSection.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[3] = c.heading;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-px w-16 bg-gold animate-scaleX-reveal"
        }, void 0, false, {
            fileName: "[project]/components/home/WhatWeDoSection.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t1 || $[7] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "text-center mb-20 flex flex-col items-center",
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/WhatWeDoSection.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[6] = t1;
        $[7] = t2;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== cards) {
        t5 = cards.map(_WhatWeDoSectionCardsMap);
        $[9] = cards;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
            children: t5
        }, void 0, false, {
            fileName: "[project]/components/home/WhatWeDoSection.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t4 || $[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "what-we-do",
            className: "bg-pearl py-32",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 lg:px-12",
                children: [
                    t4,
                    t6
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/WhatWeDoSection.tsx",
                lineNumber: 70,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/home/WhatWeDoSection.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[13] = t4;
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    return t7;
}
_c = WhatWeDoSection;
function _WhatWeDoSectionCardsMap(card, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        delay: idx * 0.1,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-ivory border border-gold/20 p-8 group hover:border-gold transition-colors duration-300 h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: "1.5",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: ICONS[idx % ICONS.length]
                        }, void 0, false, {
                            fileName: "[project]/components/home/WhatWeDoSection.tsx",
                            lineNumber: 80,
                            columnNumber: 328
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/WhatWeDoSection.tsx",
                        lineNumber: 80,
                        columnNumber: 251
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/home/WhatWeDoSection.tsx",
                    lineNumber: 80,
                    columnNumber: 166
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-dm-sans text-sm font-semibold text-charcoal mb-3 uppercase tracking-[0.15em]",
                    children: card.title
                }, void 0, false, {
                    fileName: "[project]/components/home/WhatWeDoSection.tsx",
                    lineNumber: 80,
                    columnNumber: 423
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-body text-warm leading-relaxed",
                    children: card.desc
                }, void 0, false, {
                    fileName: "[project]/components/home/WhatWeDoSection.tsx",
                    lineNumber: 80,
                    columnNumber: 538
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/WhatWeDoSection.tsx",
            lineNumber: 80,
            columnNumber: 52
        }, this)
    }, idx, false, {
        fileName: "[project]/components/home/WhatWeDoSection.tsx",
        lineNumber: 80,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "WhatWeDoSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/WhyChooseUsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhyChooseUsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/ScrollReveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site-content-defaults.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function WhyChooseUsSection(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "df688d7712bd3bad8939b38affaa17ed0ec32d0f59bbc1f4eef40b33084fdf0c") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "df688d7712bd3bad8939b38affaa17ed0ec32d0f59bbc1f4eef40b33084fdf0c";
    }
    const { content } = t0;
    const c = content ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_CONTENT"].home_why;
    const reasons = c.items?.length ? c.items : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_CONTENT"].home_why.items;
    let t1;
    if ($[1] !== c.eyebrow) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-jet text-xs tracking-[0.25em] uppercase font-dm-sans mb-4 block",
            children: c.eyebrow
        }, void 0, false, {
            fileName: "[project]/components/home/WhyChooseUsSection.tsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        $[1] = c.eyebrow;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== c.heading) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "font-cormorant text-display-md text-jet mb-6",
            children: c.heading
        }, void 0, false, {
            fileName: "[project]/components/home/WhyChooseUsSection.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[3] = c.heading;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-px w-16 bg-jet animate-scaleX-reveal"
        }, void 0, false, {
            fileName: "[project]/components/home/WhyChooseUsSection.tsx",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t1 || $[7] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "text-center mb-24 flex flex-col items-center",
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/WhyChooseUsSection.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[6] = t1;
        $[7] = t2;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== reasons) {
        t5 = reasons.map(_WhyChooseUsSectionReasonsMap);
        $[9] = reasons;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12",
            children: t5
        }, void 0, false, {
            fileName: "[project]/components/home/WhyChooseUsSection.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t4 || $[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "why-choose-us",
            className: "bg-gold py-32 border-y border-jet/10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 lg:px-12",
                children: [
                    t4,
                    t6
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/WhyChooseUsSection.tsx",
                lineNumber: 69,
                columnNumber: 87
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/home/WhyChooseUsSection.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[13] = t4;
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    return t7;
}
_c = WhyChooseUsSection;
function _WhyChooseUsSectionReasonsMap(reason, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        delay: idx * 0.1,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-6 group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-cormorant text-4xl text-jet/40 leading-none group-hover:text-jet transition-colors duration-500",
                    children: String(idx + 1).padStart(2, "0")
                }, void 0, false, {
                    fileName: "[project]/components/home/WhyChooseUsSection.tsx",
                    lineNumber: 79,
                    columnNumber: 86
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-jet font-cormorant text-subheading mb-2",
                            children: reason.title
                        }, void 0, false, {
                            fileName: "[project]/components/home/WhyChooseUsSection.tsx",
                            lineNumber: 79,
                            columnNumber: 251
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-jet/80 text-body",
                            children: reason.desc
                        }, void 0, false, {
                            fileName: "[project]/components/home/WhyChooseUsSection.tsx",
                            lineNumber: 79,
                            columnNumber: 331
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/WhyChooseUsSection.tsx",
                    lineNumber: 79,
                    columnNumber: 246
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/WhyChooseUsSection.tsx",
            lineNumber: 79,
            columnNumber: 52
        }, this)
    }, idx, false, {
        fileName: "[project]/components/home/WhyChooseUsSection.tsx",
        lineNumber: 79,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "WhyChooseUsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/products/ProductCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$quoteCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/quoteCart.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$r2$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/r2/config.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function productHref(product) {
    const key = product.sku?.trim() || product.id;
    return `/products/${encodeURIComponent(key)}`;
}
function ProductCard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(43);
    if ($[0] !== "3c6e704e15ddf34e0badc36c5cb61fdae06322d41b1c368d56bc56cff570fc64") {
        for(let $i = 0; $i < 43; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3c6e704e15ddf34e0badc36c5cb61fdae06322d41b1c368d56bc56cff570fc64";
    }
    const { product, isGuest: t1, onGuestAction } = t0;
    const isGuest = t1 === undefined ? false : t1;
    const addItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$quoteCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuoteCart"])(_ProductCardUseQuoteCart);
    let t2;
    if ($[1] !== product.images?.[0]) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$r2$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeR2Image"])(product.images?.[0]) ?? "/image.png";
        $[1] = product.images?.[0];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const imgSrc = t2;
    let t3;
    if ($[3] !== product) {
        t3 = productHref(product);
        $[3] = product;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const href = t3;
    let t4;
    if ($[5] !== addItem || $[6] !== isGuest || $[7] !== onGuestAction || $[8] !== product) {
        t4 = ({
            "ProductCard[handleAddToQuote]": (e)=>{
                e.preventDefault();
                if (isGuest) {
                    onGuestAction?.();
                    return;
                }
                const karat = product.purityOptions?.[0] ?? "925";
                const metal = product.metalColorOptions?.[0] ?? "Yellow Gold";
                const stone = product.availableStones?.[0] ?? "None";
                addItem(product, karat, metal, stone, 1);
            }
        })["ProductCard[handleAddToQuote]"];
        $[5] = addItem;
        $[6] = isGuest;
        $[7] = onGuestAction;
        $[8] = product;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const handleAddToQuote = t4;
    let t5;
    let t6;
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            opacity: 1,
            y: 0
        };
        t6 = {
            opacity: 0,
            y: 20
        };
        t7 = {
            once: true
        };
        $[10] = t5;
        $[11] = t6;
        $[12] = t7;
    } else {
        t5 = $[10];
        t6 = $[11];
        t7 = $[12];
    }
    let t8;
    if ($[13] !== imgSrc || $[14] !== product.name) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: imgSrc,
            alt: product.name,
            fill: true,
            className: "object-cover group-hover:scale-105 transition-transform duration-500",
            sizes: "(max-width: 768px) 50vw, 20vw"
        }, void 0, false, {
            fileName: "[project]/components/products/ProductCard.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[13] = imgSrc;
        $[14] = product.name;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== href || $[17] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            className: "block relative w-full aspect-square bg-ivory overflow-hidden",
            children: t8
        }, void 0, false, {
            fileName: "[project]/components/products/ProductCard.tsx",
            lineNumber: 110,
            columnNumber: 10
        }, this);
        $[16] = href;
        $[17] = t8;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    const t10 = isGuest ? "Login to add to quote" : "Add to quote";
    const t11 = isGuest ? "Login to add to quote" : "Add to quote";
    let t12;
    if ($[19] !== isGuest) {
        t12 = isGuest ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: "1.5",
            stroke: "currentColor",
            className: "w-5 h-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            }, void 0, false, {
                fileName: "[project]/components/products/ProductCard.tsx",
                lineNumber: 121,
                columnNumber: 118
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/products/ProductCard.tsx",
            lineNumber: 121,
            columnNumber: 21
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: "1.5",
            stroke: "currentColor",
            className: "w-5 h-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M12 4.5v15m7.5-7.5h-15"
            }, void 0, false, {
                fileName: "[project]/components/products/ProductCard.tsx",
                lineNumber: 121,
                columnNumber: 450
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/products/ProductCard.tsx",
            lineNumber: 121,
            columnNumber: 353
        }, this);
        $[19] = isGuest;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] !== handleAddToQuote || $[22] !== t10 || $[23] !== t11 || $[24] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleAddToQuote,
            className: "absolute top-3 right-3 opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300 bg-jet/80 text-gold p-2 hover:bg-jet hover:text-gold-light",
            "aria-label": t10,
            title: t11,
            children: t12
        }, void 0, false, {
            fileName: "[project]/components/products/ProductCard.tsx",
            lineNumber: 129,
            columnNumber: 11
        }, this);
        $[21] = handleAddToQuote;
        $[22] = t10;
        $[23] = t11;
        $[24] = t12;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    const t14 = product.purityOptions?.[0] ?? product.baseMetal;
    let t15;
    if ($[26] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-caption text-warm uppercase tracking-widest",
            children: t14
        }, void 0, false, {
            fileName: "[project]/components/products/ProductCard.tsx",
            lineNumber: 141,
            columnNumber: 11
        }, this);
        $[26] = t14;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] !== product.name) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-dm-sans text-sm font-medium text-charcoal mt-1 line-clamp-1 uppercase tracking-tight",
            children: product.name
        }, void 0, false, {
            fileName: "[project]/components/products/ProductCard.tsx",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[28] = product.name;
        $[29] = t16;
    } else {
        t16 = $[29];
    }
    let t17;
    if ($[30] !== href || $[31] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            className: "hover:text-gold transition-colors",
            children: t16
        }, void 0, false, {
            fileName: "[project]/components/products/ProductCard.tsx",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        $[30] = href;
        $[31] = t16;
        $[32] = t17;
    } else {
        t17 = $[32];
    }
    let t18;
    if ($[33] !== product.primaryGemstone) {
        t18 = product.primaryGemstone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-caption text-warm mt-1 line-clamp-1",
            children: product.primaryGemstone
        }, void 0, false, {
            fileName: "[project]/components/products/ProductCard.tsx",
            lineNumber: 166,
            columnNumber: 38
        }, this);
        $[33] = product.primaryGemstone;
        $[34] = t18;
    } else {
        t18 = $[34];
    }
    let t19;
    if ($[35] !== t15 || $[36] !== t17 || $[37] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 grow flex flex-col",
            children: [
                t15,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/components/products/ProductCard.tsx",
            lineNumber: 174,
            columnNumber: 11
        }, this);
        $[35] = t15;
        $[36] = t17;
        $[37] = t18;
        $[38] = t19;
    } else {
        t19 = $[38];
    }
    let t20;
    if ($[39] !== t13 || $[40] !== t19 || $[41] !== t9) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "group relative bg-pearl border border-gold/10 overflow-hidden hover:border-gold/40 transition-colors duration-300 flex flex-col h-full",
            whileInView: t5,
            initial: t6,
            viewport: t7,
            children: [
                t9,
                t13,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/components/products/ProductCard.tsx",
            lineNumber: 184,
            columnNumber: 11
        }, this);
        $[39] = t13;
        $[40] = t19;
        $[41] = t9;
        $[42] = t20;
    } else {
        t20 = $[42];
    }
    return t20;
}
_s(ProductCard, "TnAHsmwOcS14bzlD4u6ypm7UXVg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$quoteCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuoteCart"]
    ];
});
_c = ProductCard;
function _ProductCardUseQuoteCart(s) {
    return s.addItem;
}
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/ProcessTeaser.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProcessTeaser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/ScrollReveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site-content-defaults.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function ProcessTeaser(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "c1f4f0d8f48514c1ed486555b7679b4279a8f620791bafa7c6e7aa97a4e57c9d") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c1f4f0d8f48514c1ed486555b7679b4279a8f620791bafa7c6e7aa97a4e57c9d";
    }
    const { content } = t0;
    const c = content ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_CONTENT"].home_process_teaser;
    const steps = c.steps?.length ? c.steps : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_CONTENT"].home_process_teaser.steps;
    let t1;
    if ($[1] !== c.eyebrow) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gold text-xs tracking-[0.25em] uppercase font-dm-sans mb-4 block",
            children: c.eyebrow
        }, void 0, false, {
            fileName: "[project]/components/home/ProcessTeaser.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        $[1] = c.eyebrow;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== c.heading) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "font-cormorant text-display-md text-charcoal mb-6",
            children: c.heading
        }, void 0, false, {
            fileName: "[project]/components/home/ProcessTeaser.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[3] = c.heading;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-px w-16 bg-gold animate-scaleX-reveal"
        }, void 0, false, {
            fileName: "[project]/components/home/ProcessTeaser.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t1 || $[7] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "text-center mb-16 lg:mb-20 flex flex-col items-center",
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/ProcessTeaser.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[6] = t1;
        $[7] = t2;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute left-[6%] right-[6%] top-8 h-px bg-gold/40 hidden lg:block z-0",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/components/home/ProcessTeaser.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== steps) {
        t6 = steps.map(_ProcessTeaserStepsMap);
        $[10] = steps;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-4 xl:gap-6",
                    children: t6
                }, void 0, false, {
                    fileName: "[project]/components/home/ProcessTeaser.tsx",
                    lineNumber: 69,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/ProcessTeaser.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    const t8 = c.ctaHref || "/process";
    let t9;
    if ($[14] !== c.ctaLabel) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "border-b border-transparent group-hover:border-gold pb-1 transition-colors",
            children: c.ctaLabel
        }, void 0, false, {
            fileName: "[project]/components/home/ProcessTeaser.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[14] = c.ctaLabel;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "ml-2",
            children: "→"
        }, void 0, false, {
            fileName: "[project]/components/home/ProcessTeaser.tsx",
            lineNumber: 86,
            columnNumber: 11
        }, this);
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== t8 || $[18] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mt-16 lg:mt-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: t8,
                className: "group inline-flex items-center text-charcoal font-medium hover:text-gold transition-colors font-dm-sans text-sm tracking-widest uppercase",
                children: [
                    t9,
                    t10
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/ProcessTeaser.tsx",
                lineNumber: 93,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/home/ProcessTeaser.tsx",
            lineNumber: 93,
            columnNumber: 11
        }, this);
        $[17] = t8;
        $[18] = t9;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== t11 || $[21] !== t4 || $[22] !== t7) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-pearl py-32 overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 lg:px-12",
                children: [
                    t4,
                    t7,
                    t11
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/ProcessTeaser.tsx",
                lineNumber: 102,
                columnNumber: 63
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/home/ProcessTeaser.tsx",
            lineNumber: 102,
            columnNumber: 11
        }, this);
        $[20] = t11;
        $[21] = t4;
        $[22] = t7;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    return t12;
}
_c = ProcessTeaser;
function _ProcessTeaserStepsMap(step, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        delay: idx * 0.08,
        className: "relative z-10 flex flex-col items-center text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-16 h-16 rounded-full bg-ivory border-2 border-gold/50 flex items-center justify-center font-cormorant text-2xl text-gold mb-5 shrink-0 shadow-sm",
                children: idx + 1
            }, void 0, false, {
                fileName: "[project]/components/home/ProcessTeaser.tsx",
                lineNumber: 113,
                columnNumber: 137
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-cormorant text-lg xl:text-xl text-charcoal mb-2 leading-snug max-w-56 lg:max-w-none mx-auto",
                children: step.title
            }, void 0, false, {
                fileName: "[project]/components/home/ProcessTeaser.tsx",
                lineNumber: 113,
                columnNumber: 316
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-warm text-sm font-dm-sans leading-relaxed max-w-xs lg:max-w-46 xl:max-w-52 mx-auto",
                children: step.desc
            }, void 0, false, {
                fileName: "[project]/components/home/ProcessTeaser.tsx",
                lineNumber: 113,
                columnNumber: 446
            }, this)
        ]
    }, `${step.title}-${idx}`, true, {
        fileName: "[project]/components/home/ProcessTeaser.tsx",
        lineNumber: 113,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ProcessTeaser");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/Testimonials.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Testimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/ScrollReveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site-content-defaults.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Testimonials(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(32);
    if ($[0] !== "16dd95f0457c0a1e8d0217765e10dabe8a22eeb4e678efe52f94bacb693c0b29") {
        for(let $i = 0; $i < 32; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "16dd95f0457c0a1e8d0217765e10dabe8a22eeb4e678efe52f94bacb693c0b29";
    }
    const { content } = t0;
    const c = content ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_CONTENT"].home_testimonials;
    const testimonials = c.items?.length ? c.items : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_CONTENT"].home_testimonials.items;
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t1;
    let t2;
    if ($[1] !== testimonials.length) {
        t1 = ({
            "Testimonials[useEffect()]": ()=>{
                if (testimonials.length <= 1) {
                    return;
                }
                const interval = setInterval({
                    "Testimonials[useEffect() > setInterval()]": ()=>{
                        setActiveIndex({
                            "Testimonials[useEffect() > setInterval() > setActiveIndex()]": (current)=>(current + 1) % testimonials.length
                        }["Testimonials[useEffect() > setInterval() > setActiveIndex()]"]);
                    }
                }["Testimonials[useEffect() > setInterval()]"], 5000);
                return ()=>clearInterval(interval);
            }
        })["Testimonials[useEffect()]"];
        t2 = [
            testimonials.length
        ];
        $[1] = testimonials.length;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    const safeIndex = Math.min(activeIndex, Math.max(testimonials.length - 1, 0));
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-jet/20 to-transparent"
        }, void 0, false, {
            fileName: "[project]/components/home/Testimonials.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-jet/20 to-transparent"
        }, void 0, false, {
            fileName: "[project]/components/home/Testimonials.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] !== c.eyebrow) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-jet text-xs tracking-[0.25em] uppercase font-dm-sans mb-4 block",
            children: c.eyebrow
        }, void 0, false, {
            fileName: "[project]/components/home/Testimonials.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[6] = c.eyebrow;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== c.heading) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "font-cormorant text-display-md text-jet mb-6",
            children: c.heading
        }, void 0, false, {
            fileName: "[project]/components/home/Testimonials.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[8] = c.heading;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-px w-16 bg-jet animate-scaleX-reveal"
        }, void 0, false, {
            fileName: "[project]/components/home/Testimonials.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t5 || $[12] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "text-center mb-16 flex flex-col items-center",
            children: [
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/Testimonials.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[11] = t5;
        $[12] = t6;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== safeIndex || $[15] !== testimonials) {
        let t10;
        if ($[17] !== safeIndex) {
            t10 = ({
                "Testimonials[testimonials.map()]": (t, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute top-0 left-0 w-full transition-all duration-700 ease-in-out pb-8 text-center px-4 ${idx === safeIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-24"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-jet mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-12 h-12 mx-auto opacity-40",
                                    fill: "currentColor",
                                    viewBox: "0 0 32 32",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M10.126.541v12.285H4.285C4.285 20.301 8.948 24.3 12.825 25.32l-2.096 6C4.851 29.569.049 23.364.049 12.826V.541h10.077zm19.141 0v12.285h-5.84C23.427 20.301 28.09 24.3 31.968 25.32l-2.097 6C23.992 29.569 19.191 23.364 19.191 12.826V.541h10.076z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Testimonials.tsx",
                                        lineNumber: 97,
                                        columnNumber: 374
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/Testimonials.tsx",
                                    lineNumber: 97,
                                    columnNumber: 288
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home/Testimonials.tsx",
                                lineNumber: 97,
                                columnNumber: 257
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-cormorant text-2xl lg:text-3xl text-jet mb-8 italic",
                                children: [
                                    '"',
                                    t.text,
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/Testimonials.tsx",
                                lineNumber: 97,
                                columnNumber: 641
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-dm-sans",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-jet font-medium text-lg",
                                        children: t.author
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Testimonials.tsx",
                                        lineNumber: 97,
                                        columnNumber: 757
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-jet/80 text-sm",
                                        children: t.role
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Testimonials.tsx",
                                        lineNumber: 97,
                                        columnNumber: 815
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/Testimonials.tsx",
                                lineNumber: 97,
                                columnNumber: 727
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/components/home/Testimonials.tsx",
                        lineNumber: 97,
                        columnNumber: 57
                    }, this)
            })["Testimonials[testimonials.map()]"];
            $[17] = safeIndex;
            $[18] = t10;
        } else {
            t10 = $[18];
        }
        t9 = testimonials.map(t10);
        $[14] = safeIndex;
        $[15] = testimonials;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[19] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto relative overflow-hidden h-[280px]",
            children: t9
        }, void 0, false, {
            fileName: "[project]/components/home/Testimonials.tsx",
            lineNumber: 113,
            columnNumber: 11
        }, this);
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== safeIndex || $[22] !== testimonials) {
        let t12;
        if ($[24] !== safeIndex) {
            t12 = ({
                "Testimonials[testimonials.map()]": (_, idx_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "Testimonials[testimonials.map() > <button>.onClick]": ()=>setActiveIndex(idx_0)
                        }["Testimonials[testimonials.map() > <button>.onClick]"],
                        className: `w-3 h-3 rounded-full transition-colors duration-300 ${idx_0 === safeIndex ? "bg-jet" : "bg-jet/20"}`,
                        "aria-label": `Go to slide ${idx_0 + 1}`
                    }, idx_0, false, {
                        fileName: "[project]/components/home/Testimonials.tsx",
                        lineNumber: 124,
                        columnNumber: 59
                    }, this)
            })["Testimonials[testimonials.map()]"];
            $[24] = safeIndex;
            $[25] = t12;
        } else {
            t12 = $[25];
        }
        t11 = testimonials.map(t12);
        $[21] = safeIndex;
        $[22] = testimonials;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[26] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center gap-3 mt-8",
            children: t11
        }, void 0, false, {
            fileName: "[project]/components/home/Testimonials.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[26] = t11;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    let t13;
    if ($[28] !== t10 || $[29] !== t12 || $[30] !== t8) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-gold py-32 relative",
            children: [
                t3,
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 lg:px-12",
                    children: [
                        t8,
                        t10,
                        t12
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/Testimonials.tsx",
                    lineNumber: 150,
                    columnNumber: 63
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/Testimonials.tsx",
            lineNumber: 150,
            columnNumber: 11
        }, this);
        $[28] = t10;
        $[29] = t12;
        $[30] = t8;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    return t13;
}
_s(Testimonials, "16En7kR7TbAJMjBrm+xutVNIc5Q=");
_c = Testimonials;
var _c;
__turbopack_context__.k.register(_c, "Testimonials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/FactoryBento.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FactoryBento
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/ScrollReveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site-content-defaults.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function FactoryBento(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(45);
    if ($[0] !== "175e860d2c4227fa7da8d8595f1f367ac8d77b420817fef01aa267bb9e981ac5") {
        for(let $i = 0; $i < 45; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "175e860d2c4227fa7da8d8595f1f367ac8d77b420817fef01aa267bb9e981ac5";
    }
    const { content } = t0;
    const c = content ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_CONTENT"].home_factory;
    const d = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_CONTENT"].home_factory;
    const images = c.images?.length ? c.images : d.images;
    let t1;
    if ($[1] !== images) {
        const img = {
            "FactoryBento[img]": (i)=>images[i] ?? d.images[i] ?? d.images[0]
        }["FactoryBento[img]"];
        t1 = ({
            "FactoryBento[renderImg]": (i_0, fallbackAlt)=>{
                const item = img(i_0);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveContentImage"])(item.src, d.images[i_0]?.src ?? d.images[0].src),
                    alt: item.alt || fallbackAlt,
                    fill: true,
                    className: "object-cover group-hover:scale-105 transition-transform duration-700"
                }, void 0, false, {
                    fileName: "[project]/components/home/FactoryBento.tsx",
                    lineNumber: 29,
                    columnNumber: 16
                }, this);
            }
        })["FactoryBento[renderImg]"];
        $[1] = images;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const renderImg = t1;
    let t2;
    if ($[3] !== c.eyebrow) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gold text-xs tracking-[0.25em] uppercase font-dm-sans mb-4 block",
            children: c.eyebrow
        }, void 0, false, {
            fileName: "[project]/components/home/FactoryBento.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[3] = c.eyebrow;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== c.heading) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "font-cormorant text-display-md text-charcoal mb-6",
            children: c.heading
        }, void 0, false, {
            fileName: "[project]/components/home/FactoryBento.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[5] = c.heading;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-px w-16 bg-gold animate-scaleX-reveal"
        }, void 0, false, {
            fileName: "[project]/components/home/FactoryBento.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t2 || $[9] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "text-center mb-16 flex flex-col items-center",
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/FactoryBento.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[8] = t2;
        $[9] = t3;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== renderImg) {
        t6 = renderImg(0, "Workshop");
        $[11] = renderImg;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-jet/20 group-hover:bg-transparent transition-colors"
        }, void 0, false, {
            fileName: "[project]/components/home/FactoryBento.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            delay: 0.1,
            className: "md:col-span-8 row-span-1 group relative overflow-hidden bg-pearl border border-gold/10 hover:border-gold/60 transition-colors",
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/FactoryBento.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[14] = t6;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== renderImg) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            delay: 0.2,
            className: "md:col-span-4 row-span-1 group relative overflow-hidden bg-pearl border border-gold/10 hover:border-gold/60 transition-colors",
            children: renderImg(1, "Tools")
        }, void 0, false, {
            fileName: "[project]/components/home/FactoryBento.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[16] = renderImg;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== renderImg) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            delay: 0.3,
            className: "md:col-span-4 row-span-2 group relative overflow-hidden bg-pearl border border-gold/10 hover:border-gold/60 transition-colors",
            children: renderImg(2, "Crafting")
        }, void 0, false, {
            fileName: "[project]/components/home/FactoryBento.tsx",
            lineNumber: 103,
            columnNumber: 11
        }, this);
        $[18] = renderImg;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== renderImg) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            delay: 0.4,
            className: "md:col-span-8 row-span-1 group relative overflow-hidden bg-pearl border border-gold/10 hover:border-gold/60 transition-colors",
            children: renderImg(3, "CAD")
        }, void 0, false, {
            fileName: "[project]/components/home/FactoryBento.tsx",
            lineNumber: 111,
            columnNumber: 11
        }, this);
        $[20] = renderImg;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== c.tourTitle) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-cormorant text-2xl text-jet mb-2",
            children: c.tourTitle
        }, void 0, false, {
            fileName: "[project]/components/home/FactoryBento.tsx",
            lineNumber: 119,
            columnNumber: 11
        }, this);
        $[22] = c.tourTitle;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== c.tourDesc) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-jet/80 text-sm mb-4",
            children: c.tourDesc
        }, void 0, false, {
            fileName: "[project]/components/home/FactoryBento.tsx",
            lineNumber: 127,
            columnNumber: 11
        }, this);
        $[24] = c.tourDesc;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    const t14 = c.tourCtaHref || "/contact";
    let t15;
    if ($[26] !== c.tourCtaLabel || $[27] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: t14,
            className: "border-b border-jet text-jet pb-1 font-medium hover:text-jet/70 transition-colors font-dm-sans text-xs uppercase tracking-widest",
            children: c.tourCtaLabel
        }, void 0, false, {
            fileName: "[project]/components/home/FactoryBento.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[26] = c.tourCtaLabel;
        $[27] = t14;
        $[28] = t15;
    } else {
        t15 = $[28];
    }
    let t16;
    if ($[29] !== t12 || $[30] !== t13 || $[31] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            delay: 0.5,
            className: "md:col-span-4 row-span-1 group relative overflow-hidden bg-pearl border border-gold/10 hover:border-gold/60 transition-colors",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex flex-col items-center justify-center bg-gold p-6 text-center",
                children: [
                    t12,
                    t13,
                    t15
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/FactoryBento.tsx",
                lineNumber: 145,
                columnNumber: 175
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/home/FactoryBento.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[29] = t12;
        $[30] = t13;
        $[31] = t15;
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    let t17;
    if ($[33] !== renderImg) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            delay: 0.6,
            className: "md:col-span-4 row-span-1 group relative overflow-hidden bg-pearl border border-gold/10 hover:border-gold/60 transition-colors",
            children: renderImg(4, "Workshop details")
        }, void 0, false, {
            fileName: "[project]/components/home/FactoryBento.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[33] = renderImg;
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    let t18;
    if ($[35] !== t10 || $[36] !== t11 || $[37] !== t16 || $[38] !== t17 || $[39] !== t8 || $[40] !== t9) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-12 auto-rows-[200px] md:auto-rows-[280px] gap-4",
            children: [
                t8,
                t9,
                t10,
                t11,
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/FactoryBento.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[35] = t10;
        $[36] = t11;
        $[37] = t16;
        $[38] = t17;
        $[39] = t8;
        $[40] = t9;
        $[41] = t18;
    } else {
        t18 = $[41];
    }
    let t19;
    if ($[42] !== t18 || $[43] !== t5) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-ivory py-32",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 lg:px-12",
                children: [
                    t5,
                    t18
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/FactoryBento.tsx",
                lineNumber: 176,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/home/FactoryBento.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[42] = t18;
        $[43] = t5;
        $[44] = t19;
    } else {
        t19 = $[44];
    }
    return t19;
}
_c = FactoryBento;
var _c;
__turbopack_context__.k.register(_c, "FactoryBento");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/ContactCTAStrip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactCTAStrip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/ScrollReveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site-content-defaults.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ContactCTAStrip({ content, companyEmail }) {
    _s();
    const c = content ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2d$content$2d$defaults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_CONTENT"].home_cta;
    const [sent, setSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        setSending(true);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    type: 'INQUIRY',
                    name: String(data.get('name') || ''),
                    email: String(data.get('email') || ''),
                    message: String(data.get('message') || '')
                })
            });
            if (res.ok) {
                setSent(true);
                form.reset();
            }
        } catch  {}
        setSending(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-gold py-20 relative overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-cormorant text-display-md text-jet mb-4",
                            children: c.heading
                        }, void 0, false, {
                            fileName: "[project]/components/home/ContactCTAStrip.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-jet/80 text-body-lg mb-8 max-w-md font-dm-sans",
                            children: c.desc
                        }, void 0, false, {
                            fileName: "[project]/components/home/ContactCTAStrip.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: c.buttonHref || "/contact",
                            className: "inline-block bg-jet text-gold px-8 py-4 font-dm-sans font-medium text-xs tracking-widest uppercase hover:bg-jet/90 transition-colors",
                            children: c.buttonLabel
                        }, void 0, false, {
                            fileName: "[project]/components/home/ContactCTAStrip.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/ContactCTAStrip.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    delay: 0.2,
                    className: "bg-ivory p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-cormorant text-2xl text-charcoal mb-6",
                            children: c.formTitle
                        }, void 0, false, {
                            fileName: "[project]/components/home/ContactCTAStrip.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        sent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-cormorant text-xl text-charcoal mb-2",
                                    children: c.formSuccessTitle
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ContactCTAStrip.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-charcoal-light font-dm-sans",
                                    children: c.formSuccessDesc
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ContactCTAStrip.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/ContactCTAStrip.tsx",
                            lineNumber: 57,
                            columnNumber: 19
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "flex flex-col gap-4",
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    name: "name",
                                    required: true,
                                    minLength: 2,
                                    type: "text",
                                    placeholder: "Name",
                                    className: "w-full bg-pearl border border-gold/30 px-4 py-3 placeholder:text-warm focus:outline-none focus:border-gold"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ContactCTAStrip.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    name: "email",
                                    required: true,
                                    type: "email",
                                    placeholder: "Email",
                                    className: "w-full bg-pearl border border-gold/30 px-4 py-3 placeholder:text-warm focus:outline-none focus:border-gold"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ContactCTAStrip.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    name: "message",
                                    required: true,
                                    minLength: 10,
                                    placeholder: "Message",
                                    rows: 3,
                                    className: "w-full bg-pearl border border-gold/30 px-4 py-3 placeholder:text-warm focus:outline-none focus:border-gold resize-none"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ContactCTAStrip.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: sending,
                                    className: "w-full bg-charcoal text-ivory py-3 font-dm-sans text-xs uppercase tracking-widest hover:bg-jet transition-colors disabled:opacity-50",
                                    children: sending ? 'Sending...' : c.formButtonLabel
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ContactCTAStrip.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/ContactCTAStrip.tsx",
                            lineNumber: 60,
                            columnNumber: 22
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/ContactCTAStrip.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/ContactCTAStrip.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/ContactCTAStrip.tsx",
        lineNumber: 41,
        columnNumber: 10
    }, this);
}
_s(ContactCTAStrip, "9HQ0gFP1cCCjswsm0CMqXURwAWw=");
_c = ContactCTAStrip;
var _c;
__turbopack_context__.k.register(_c, "ContactCTAStrip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_01313bq._.js.map