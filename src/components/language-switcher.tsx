"use client";

import { Languages } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useLocaleRoutes, useSite } from "@/components/site-provider";
import type { LocaleRoutes } from "@/config/client-site";
import { cn } from "@/lib/utils";

/** Descobre a página equivalente no outro idioma (home, privacidade ou item pelo índice). */
function equivalentPath(pathname: string, from: LocaleRoutes[number], to: LocaleRoutes[number]) {
  // no idioma padrão o caminho pode vir reescrito pelo proxy ("/pt/…"): remove esse prefixo interno também
  const internal = `/${from.code}`;
  const strip = from.prefix || (pathname === internal || pathname.startsWith(`${internal}/`) ? internal : "");
  const rest = (strip ? pathname.slice(strip.length) : pathname) || "/";
  const [first, second] = rest.split("/").filter(Boolean);
  let target = "/";
  if (first === from.privacy) target = `/${to.privacy}`;
  else if (first === from.basePath && second) {
    const index = from.slugs.indexOf(second);
    target = index >= 0 && to.slugs[index] ? `/${to.basePath}/${to.slugs[index]}` : "/";
  }
  return target === "/" ? to.prefix || "/" : `${to.prefix}${target}`;
}

export function LanguageSwitcher({ className }: { className?: string }) {
  const site = useSite();
  const routes = useLocaleRoutes();
  const pathname = usePathname();
  const current = routes.find((r) => r.code === site.code)!;
  const others = routes.filter((r) => r.code !== site.code);

  return (
    <nav aria-label={site.ui.language.label} className={cn("flex items-center", className)}>
      {others.map((other) => (
        <Link
          key={other.code}
          href={equivalentPath(pathname, current, other)}
          hrefLang={other.code}
          lang={other.code}
          className="inline-flex h-10 items-center gap-1.5 rounded-full border bg-background/70 px-2.5 sm:px-3 text-sm font-semibold uppercase transition-colors hover:bg-secondary"
          title={other.name}
        >
          <Languages className="hidden size-4 sm:block" aria-hidden="true" />
          <span aria-hidden="true">{other.code}</span>
          <span className="sr-only">{other.name}</span>
        </Link>
      ))}
    </nav>
  );
}
