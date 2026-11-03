import type { MetadataRoute } from "next";

import { site } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.brand.name,
    short_name: site.brand.shortName,
    description: site.brand.description,
    lang: site.lang,
    start_url: "/",
    display: "standalone",
    background_color: "#f7fbfb",
    theme_color: "#0f6f7c",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
  };
}
