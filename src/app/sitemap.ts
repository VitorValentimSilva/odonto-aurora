import type { MetadataRoute } from "next";

import { defaultLocale, sites } from "@/config/site";
import type { SiteConfig } from "@/config/types";
import { itemPath, localePath, privacyPath } from "@/lib/paths";

const base = sites[defaultLocale].url;
const all = Object.values(sites);

/** Uma entrada por página e idioma, com os equivalentes nos outros idiomas (hreflang). */
function entry(
  pathFor: (site: SiteConfig) => string,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number,
): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(all.map((s) => [s.lang, `${base}${pathFor(s)}`]));
  return all.map((s) => ({
    url: `${base}${pathFor(s)}`,
    changeFrequency,
    priority,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const items = sites[defaultLocale].treatments.items.map((_, index) =>
    entry((s) => itemPath(s, s.treatments.items[index].slug), "monthly", 0.8),
  );
  return [
    ...entry((s) => localePath(s, "/"), "monthly", 1),
    ...items.flat(),
    ...entry((s) => privacyPath(s), "yearly", 0.3),
  ];
}
