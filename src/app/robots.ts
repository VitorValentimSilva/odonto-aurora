import type { MetadataRoute } from "next";

import { defaultLocale, sites } from "@/config/site";

const site = sites[defaultLocale];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
