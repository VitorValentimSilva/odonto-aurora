"use client";

import { createContext, useContext, type ReactNode } from "react";

import type { ClientSite, LocaleRoutes } from "@/config/client-site";

const SiteContext = createContext<{ site: ClientSite; routes: LocaleRoutes } | null>(null);

export function SiteProvider({ site, routes, children }: { site: ClientSite; routes: LocaleRoutes; children: ReactNode }) {
  return <SiteContext.Provider value={{ site, routes }}>{children}</SiteContext.Provider>;
}

function useSiteContext() {
  const value = useContext(SiteContext);
  if (!value) throw new Error("SiteProvider ausente");
  return value;
}

/** Conteúdo do idioma atual nos Client Components. */
export function useSite() {
  return useSiteContext().site;
}

export function useLocaleRoutes() {
  return useSiteContext().routes;
}
