import { sites } from "./site";
import type { SiteConfig } from "./types";

/**
 * Parte do conteúdo enviada aos Client Components (header, formulário, timeline…).
 * Só o idioma atual e só o necessário — o resto fica no servidor.
 */
export function toClientSite(site: SiteConfig) {
  return {
    code: site.code,
    pathPrefix: site.pathPrefix,
    languageName: site.languageName,
    brand: { name: site.brand.name, slogan: site.brand.slogan, logo: site.brand.logo },
    contact: site.contact,
    sections: site.sections,
    nav: site.nav,
    ui: site.ui,
    steps: site.steps,
    booking: site.booking,
    privacy: { path: site.privacy.path, linkLabel: site.privacy.linkLabel },
  };
}

export type ClientSite = ReturnType<typeof toClientSite>;

/** Rotas equivalentes de cada idioma, para o seletor de idioma trocar de página mantendo o conteúdo. */
export function localeRoutes() {
  return Object.values(sites).map((s) => ({
    code: s.code,
    name: s.languageName,
    prefix: s.pathPrefix,
    privacy: s.privacy.path,
    basePath: s.treatments.basePath,
    slugs: s.treatments.items.map((i) => i.slug),
  }));
}

export type LocaleRoutes = ReturnType<typeof localeRoutes>;
