import type { SiteConfig } from "@/config/types";

type PathSite = Pick<SiteConfig, "pathPrefix">;

/** Caminho no idioma do site ("/" → "/" ou "/en"; "/x" → "/x" ou "/en/x"). */
export function localePath(site: PathSite, path: string) {
  if (path === "/") return site.pathPrefix || "/";
  return `${site.pathPrefix}${path}`;
}

/** Âncora da home que funciona a partir de qualquer página ("#secao" → "/#secao" ou "/en#secao"). */
export function homeHref(site: PathSite, href: string) {
  return href.startsWith("#") ? `${site.pathPrefix || "/"}${href}` : href;
}

export function itemPath(site: PathSite & { treatments: { basePath: string } }, slug: string) {
  return `${site.pathPrefix}/${site.treatments.basePath}/${slug}`;
}

export function privacyPath(site: PathSite & { privacy: { path: string } }) {
  return `${site.pathPrefix}/${site.privacy.path}`;
}
