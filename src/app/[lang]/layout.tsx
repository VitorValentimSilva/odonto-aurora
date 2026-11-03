import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import { Providers } from "@/components/providers";
import { localeRoutes, toClientSite } from "@/config/client-site";
import { locales, sites } from "@/config/site";
import { getSite } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { alternatesFor } from "@/lib/seo";

import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  // "optional" evita a troca tardia de fonte no texto corrido (melhor LCP/CLS);
  // o fallback ajustado do next/font mantém as métricas muito próximas.
  display: "optional",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSite();
  return {
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
    alternates: alternatesFor(site, (s) => localePath(s, "/")),
    openGraph: {
      type: "website",
      locale: site.locale,
      alternateLocale: Object.values(sites)
        .filter((s) => s.code !== site.code)
        .map((s) => s.locale),
      url: localePath(site, "/"),
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
}

export async function generateViewport(): Promise<Viewport> {
  const site = await getSite();
  return {
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: site.theme.background },
      { media: "(prefers-color-scheme: dark)", color: site.theme.backgroundDark },
    ],
    width: "device-width",
    initialScale: 1,
  };
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const site = await getSite();
  return (
    <html lang={site.lang} suppressHydrationWarning className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        <a
          href="#conteudo"
          className="fixed top-3 left-3 z-[100] -translate-y-24 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lift transition-transform focus:translate-y-0"
        >
          {site.ui.skipToContent}
        </a>
        <Providers site={toClientSite(site)} routes={localeRoutes()}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
