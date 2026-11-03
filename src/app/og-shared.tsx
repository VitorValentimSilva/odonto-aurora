/* Elementos compartilhados pelas imagens geradas com next/og. */
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { site } from "@/config/site";

/** Plus Jakarta Sans (licença OFL) embutida para gerar as imagens no build, sem rede. */
export async function loadOgFonts() {
  const dir = join(process.cwd(), "src/assets/fonts");
  const [medium, extraBold] = await Promise.all([
    readFile(join(dir, "PlusJakartaSans-500.ttf")),
    readFile(join(dir, "PlusJakartaSans-800.ttf")),
  ]);
  return [
    { name: "Jakarta", data: medium, weight: 500 as const, style: "normal" as const },
    { name: "Jakarta", data: extraBold, weight: 800 as const, style: "normal" as const },
  ];
}

/** Cores da marca em hex (o next/og não lê variáveis CSS). */
export const brandColors = site.theme;

/** Logo (glifo de site.brand.logo) para as imagens geradas. */
export function BrandMark({ size }: { size: number }) {
  const { glyph, accent } = site.brand.logo;
  return (
    <svg width={size} height={size} viewBox="0 0 40 40">
      <rect width="40" height="40" rx="12" fill={brandColors.primary} />
      {accent && <path d={accent} fill="none" stroke={brandColors.warm} strokeWidth="2.4" strokeLinecap="round" />}
      <path d={glyph} fill="#fff" />
    </svg>
  );
}
