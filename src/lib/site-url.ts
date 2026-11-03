/**
 * URL pública do site, usada em SEO (canonical, Open Graph, sitemap, JSON-LD).
 *
 * Ordem de prioridade:
 * 1. `NEXT_PUBLIC_SITE_URL` (opcional, para domínio próprio);
 * 2. domínio de produção do projeto na Vercel (variável de sistema, preenchida automaticamente no deploy);
 * 3. o valor padrão definido no `site.ts`.
 */
export function resolveSiteUrl(fallback: string) {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");
  const vercel = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return fallback;
}
