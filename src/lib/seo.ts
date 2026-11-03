import type { Metadata } from "next";

import { defaultLocale, sites } from "@/config/site";
import type { SiteConfig } from "@/config/types";

/**
 * canonical + hreflang de uma página.
 * `pathFor` devolve o caminho da página em cada idioma (ou null se ela não existir nele).
 */
export function alternatesFor(current: SiteConfig, pathFor: (site: SiteConfig) => string | null): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  for (const site of Object.values(sites)) {
    const path = pathFor(site);
    if (path) languages[site.lang] = path;
  }
  const fallback = pathFor(sites[defaultLocale]);
  if (fallback) languages["x-default"] = fallback;
  return { canonical: pathFor(current) ?? undefined, languages };
}
