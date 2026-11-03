import type { MetadataRoute } from "next";

import { site } from "@/config/site";
import { itemPath } from "@/lib/items";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    ...site.treatments.items.map((item) => ({
      url: `${site.url}${itemPath(item.slug)}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${site.url}/privacidade`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
