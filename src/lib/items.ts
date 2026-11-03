import { site } from "@/config/site";

export function itemPath(slug: string) {
  return `/${site.treatments.basePath}/${slug}`;
}

export function findItem(collection: string, slug: string) {
  if (collection !== site.treatments.basePath) return undefined;
  return site.treatments.items.find((item) => item.slug === slug);
}
