import { useId } from "react";

import { site } from "@/config/site";
import { cn } from "@/lib/utils";

/** Marca: glifo do negócio (site.brand.logo) sobre um quadrado em gradiente da cor primária. */
export function LogoMark({ className }: { className?: string }) {
  const id = useId();
  const bg = `${id}-bg`;
  const accent = `${id}-accent`;
  const { glyph, accent: accentPath } = site.brand.logo;
  return (
    <svg viewBox="0 0 40 40" className={cn("size-9", className)} aria-hidden="true">
      <defs>
        <linearGradient id={bg} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" style={{ stopColor: "var(--primary)" }} />
          <stop offset="1" style={{ stopColor: "var(--primary-deep)" }} />
        </linearGradient>
        <linearGradient id={accent} x1="8" y1="30" x2="32" y2="10" gradientUnits="userSpaceOnUse">
          <stop offset="0" style={{ stopColor: "var(--logo-accent-a)" }} />
          <stop offset="1" style={{ stopColor: "var(--logo-accent-b)" }} />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill={`url(#${bg})`} />
      {accentPath && <path d={accentPath} fill="none" stroke={`url(#${accent})`} strokeWidth="2.4" strokeLinecap="round" />}
      <path d={glyph} fill="white" />
    </svg>
  );
}

export function Logo({ name, className }: { name: string; className?: string }) {
  const [first, ...rest] = name.split(" ");
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="font-heading text-lg leading-none font-extrabold tracking-tight">
        {first}
        {rest.length > 0 && <span className="font-semibold text-primary"> {rest.join(" ")}</span>}
      </span>
    </span>
  );
}
