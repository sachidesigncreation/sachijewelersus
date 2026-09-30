import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { getSiteContent } from "@/lib/site-content";
import {
  DEFAULT_CONTENT,
  sanitizeHex,
  themeVarName,
} from "@/lib/site-content-defaults";
import type { CSSProperties } from "react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant-next",
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans-next",
  display: "swap",
  preload: true,
});

export async function generateViewport(): Promise<Viewport> {
  try {
    const content = await getSiteContent();
    const gold = sanitizeHex(
      (content?.theme as Record<string, unknown> | undefined)?.gold,
      DEFAULT_CONTENT.theme.gold,
    );
    return { themeColor: gold, colorScheme: "light" };
  } catch {
    return { themeColor: DEFAULT_CONTENT.theme.gold, colorScheme: "light" };
  }
}

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  ),
  title: {
    default:
      "Sachi Jewellery Co. — Fine Jewellery Manufacturer & Exporter, Jaipur",
    template: "%s | Sachi Jewellery Co.",
  },
  description:
    "Sachi Jewellery Co. — Leading fine jewellery manufacturer, wholesaler and exporter from Jaipur, India.",
  keywords: [
    "jewellery manufacturer India",
    "gold jewellery wholesaler Jaipur",
    "silver jewellery exporter",
    "gemstone jewellery OEM",
    "fine jewellery manufacturer",
    "SEZ jewellery exporter",
    "colour gemstone jewellery",
    "jewellery ODM India",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Sachi Jewellery Co.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Website colors (Admin → Global Content → Theme) as runtime CSS vars.
  // Missing/invalid values fall back to brand defaults in globals.css.
  let themeStyle: CSSProperties = {};
  try {
    const content = await getSiteContent();
    const theme = { ...DEFAULT_CONTENT.theme, ...(content?.theme ?? {}) };
    const vars: Record<string, string> = {};
    for (const [key, fallback] of Object.entries(DEFAULT_CONTENT.theme)) {
      vars[themeVarName(key)] = sanitizeHex(
        (theme as Record<string, unknown>)[key],
        fallback,
      );
    }
    themeStyle = vars as CSSProperties;
  } catch {
    themeStyle = {};
  }

  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`} style={themeStyle}>
      <body className="font-sans antialiased bg-ivory text-charcoal">
        {children}
      </body>
    </html>
  );
}
