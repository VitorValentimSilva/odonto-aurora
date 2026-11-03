import { notFound } from "next/navigation";
import { lang } from "next/root-params";

import { hasLocale, sites, type Locale } from "@/config/site";

/** Idioma da rota atual (Server Components). */
export async function getLocale(): Promise<Locale> {
  const value = await lang();
  if (!hasLocale(value)) notFound();
  return value;
}

/** Conteúdo do site no idioma da rota atual (Server Components). */
export async function getSite() {
  return sites[await getLocale()];
}
