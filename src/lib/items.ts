import type { SiteConfig } from "@/config/types";

export { itemPath } from "@/lib/paths";

export function findItem(site: SiteConfig, collection: string, slug: string) {
  if (collection !== site.treatments.basePath) return undefined;
  return site.treatments.items.find((item) => item.slug === slug);
}
