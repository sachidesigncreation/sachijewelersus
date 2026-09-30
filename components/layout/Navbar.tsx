"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DEFAULT_CONTENT, type SiteContent } from "@/lib/site-content-defaults";

type NavbarContent = SiteContent["navbar"];
type CustomNavLink = { label: string; href: string; order: number };

export default function Navbar({ content, customLinks: serverLinks }: {
  content?: NavbarContent;
  customLinks?: CustomNavLink[];
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [live, setLive] = useState<NavbarContent | null>(null);
  const [fetchedLinks, setFetchedLinks] = useState<CustomNavLink[]>([]);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Pull latest CMS copy client-side so admin edits appear without a redeploy.
  useEffect(() => {
    let cancelled = false;
    fetch("/api/content", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!cancelled && data?.navbar) setLive(data.navbar as NavbarContent);
      })
      .catch(() => {});
    fetch("/api/nav", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!cancelled && Array.isArray(data?.custom)) {
          setFetchedLinks(
            (data.custom as CustomNavLink[]).filter((l) => l.label && l.href)
          );
        }
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navbarSolid = scrolled || !isHomePage;
  const nav = live ?? content ?? DEFAULT_CONTENT.navbar;
  // Server-rendered links first (SEO + instant), client fetch refreshes after admin edits.
  const customLinks = serverLinks ?? fetchedLinks;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/80 backdrop-blur-md border-b border-white/20 text-charcoal ${
        navbarSolid ? "py-4 shadow-sm" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link
          href="/"
          className={`font-cormorant text-2xl tracking-widest uppercase relative z-50 transition-colors text-charcoal`}
        >
          {nav.brand}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 font-dm-sans text-sm uppercase tracking-widest">
          <div className="group relative">
            <button className="hover:opacity-70 transition-opacity uppercase font-dm-sans text-sm tracking-widest">
              {nav.companyLabel}
            </button>
            <div className="absolute top-full left-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <div className="bg-jet border border-jet/20 flex flex-col">
              <Link
                href="/about"
                className="px-4 py-3 text-ivory hover:bg-ivory/10 text-xs transition-colors"
              >
                {nav.aboutLabel}
              </Link>
              <Link
                href="/#what-we-do"
                className="px-4 py-3 text-ivory hover:bg-ivory/10 text-xs transition-colors"
              >
                {nav.whatWeDoLabel}
              </Link>
              <Link
                href="/#why-choose-us"
                className="px-4 py-3 text-ivory hover:bg-ivory/10 text-xs transition-colors"
              >
                {nav.whyChooseUsLabel}
              </Link>
              <Link
                href="/#values"
                className="px-4 py-3 text-ivory hover:bg-ivory/10 text-xs transition-colors"
              >
                {nav.valuesLabel}
              </Link>
            </div>
            </div>
          </div>
          <Link
            href="/products"
            className="hover:opacity-70 transition-opacity"
          >
            {nav.productsLabel}
          </Link>
          <Link href="/process" className="hover:opacity-70 transition-opacity">
            {nav.processLabel}
          </Link>
          <Link
            href="/certificates"
            className="hover:opacity-70 transition-opacity"
          >
            {nav.certificatesLabel}
          </Link>
          {customLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:opacity-70 transition-opacity">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="hover:opacity-70 transition-opacity">
            {nav.contactLabel}
          </Link>
          <Link
            href="/contact#quote"
            className={`px-6 py-3 font-dm-sans text-xs font-medium uppercase tracking-[0.25em] transition-colors bg-gold text-jet hover:bg-gold-deep`}
          >
            {nav.ctaLabel}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden relative z-50 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-4 relative flex flex-col justify-between">
            <span
              className={`w-full h-0.5 transition-all duration-300 bg-charcoal ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`w-full h-0.5 transition-all duration-300 bg-charcoal ${menuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`w-full h-0.5 transition-all duration-300 bg-charcoal ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-ivory z-40 transition-transform duration-500 flex flex-col justify-center items-center gap-8 overflow-y-auto py-24 ${menuOpen ? "translate-x-0" : "translate-x-full lg:hidden"}`}
        >
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="font-dm-sans text-2xl text-charcoal uppercase tracking-widest"
          >
            {nav.aboutLabel}
          </Link>
          <Link
            href="/#what-we-do"
            onClick={() => setMenuOpen(false)}
            className="font-dm-sans text-lg text-charcoal/80 uppercase tracking-widest"
          >
            {nav.whatWeDoLabel}
          </Link>
          <Link
            href="/#why-choose-us"
            onClick={() => setMenuOpen(false)}
            className="font-dm-sans text-lg text-charcoal/80 uppercase tracking-widest"
          >
            {nav.whyChooseUsLabel}
          </Link>
          <Link
            href="/#values"
            onClick={() => setMenuOpen(false)}
            className="font-dm-sans text-lg text-charcoal/80 uppercase tracking-widest"
          >
            {nav.valuesLabel}
          </Link>
          <Link
            href="/products"
            onClick={() => setMenuOpen(false)}
            className="font-dm-sans text-2xl text-charcoal uppercase tracking-widest"
          >
            {nav.productsLabel}
          </Link>
          <Link
            href="/process"
            onClick={() => setMenuOpen(false)}
            className="font-dm-sans text-2xl text-charcoal uppercase tracking-widest"
          >
            {nav.processLabel}
          </Link>
          <Link
            href="/certificates"
            onClick={() => setMenuOpen(false)}
            className="font-dm-sans text-2xl text-charcoal uppercase tracking-widest"
          >
            {nav.certificatesLabel}
          </Link>
          {customLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-dm-sans text-2xl text-charcoal uppercase tracking-widest"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="font-dm-sans text-2xl text-charcoal uppercase tracking-widest"
          >
            {nav.contactLabel}
          </Link>
          <Link
            href="/contact#quote"
            onClick={() => setMenuOpen(false)}
            className="btn-primary mt-4"
          >
            {nav.ctaLabel.replace(/ →$/, "")}
          </Link>
        </div>
      </div>
    </nav>
  );
}
