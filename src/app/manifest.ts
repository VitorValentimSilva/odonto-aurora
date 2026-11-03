import type { MetadataRoute } from "next";

import { defaultLocale, sites } from "@/config/site";

const site = sites[defaultLocale];

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.brand.name,
    short_name: site.brand.shortName,
    description: site.brand.description,
    lang: site.lang,
    start_url: "/",
    display: "standalone",
    background_color: site.theme.background,
    theme_color: site.theme.primary,
    icons: [
      { src: "/icon", type: "image/png", sizes: "64x64" },
      { src: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
  };
}
