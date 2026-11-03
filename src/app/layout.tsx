import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import { Providers } from "@/components/providers";
import { site } from "@/config/site";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.seo.title,
    template: `%s | ${site.brand.name}`,
  },
  description: site.seo.description,
  keywords: site.seo.keywords,
  applicationName: site.brand.name,
  authors: [{ name: site.author.name, url: site.author.url }],
  creator: site.author.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: site.brand.name,
    title: site.seo.title,
    description: site.seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#f9fcfc",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={site.lang} className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        <a
          href="#conteudo"
          className="fixed top-3 left-3 z-[100] -translate-y-24 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lift transition-transform focus:translate-y-0"
        >
          {site.ui.skipToContent}
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
