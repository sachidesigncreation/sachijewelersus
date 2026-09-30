import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import FloatingQuoteCart from "@/components/layout/FloatingQuoteCart";
import QuoteCartDrawer from "@/components/quote/QuoteCartDrawer";

import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ProcessTeaser from "@/components/home/ProcessTeaser";
import Testimonials from "@/components/home/Testimonials";
import FactoryBento from "@/components/home/FactoryBento";
import ContactCTAStrip from "@/components/home/ContactCTAStrip";
import { getNavPages } from '@/lib/cms-pages';
import { getSiteContent } from "@/lib/site-content";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [content, navLinks] = await Promise.all([getSiteContent().catch(() => null), getNavPages().catch(() => [])]);

  return (
    <div className="relative">
      <Navbar content={content?.navbar} customLinks={navLinks} />

      <main>
        <HeroSection content={content?.home_hero} />
        <AboutSection content={content?.home_about} />
        <WhatWeDoSection content={content?.home_whatwedo} />
        <WhyChooseUsSection content={content?.home_why} />
        <FeaturedProducts content={content?.home_featured} />
        <ProcessTeaser content={content?.home_process_teaser} />
        <Testimonials content={content?.home_testimonials} />
        <FactoryBento content={content?.home_factory} />
        <ContactCTAStrip content={content?.home_cta} />
      </main>

      <Footer />
      <FloatingWhatsApp whatsappNumber={content?.company.whatsappNumber} />
      <FloatingQuoteCart />
      <QuoteCartDrawer />
    </div>
  );
}
