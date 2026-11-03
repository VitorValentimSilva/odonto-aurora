import { NextResponse, type NextRequest } from "next/server";

/**
 * Idiomas por prefixo de URL: português sem prefixo ("/", "/cardapio/…") e inglês em "/en/…".
 * As rotas ficam em `app/[lang]`; aqui o português é reescrito internamente para "/pt/…".
 * Mantenha estas listas iguais às de `src/config/site.ts` (o proxy não importa o conteúdo do site).
 */
const DEFAULT_LOCALE = "pt";
const PREFIXED_LOCALES = ["en"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // "/pt/…" não é uma URL pública: redireciona para a versão sem prefixo
  if (pathname === `/${DEFAULT_LOCALE}` || pathname.startsWith(`/${DEFAULT_LOCALE}/`)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(DEFAULT_LOCALE.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }

  const hasPrefix = PREFIXED_LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasPrefix) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // tudo, exceto arquivos internos do Next, imagens geradas na raiz e arquivos com extensão
  matcher: ["/((?!_next|icon|apple-icon|manifest.webmanifest|robots.txt|sitemap.xml|.*\\..*).*)"],
};
