import { useId } from "react";

import type { SiteConfig } from "@/config/types";
import { cn } from "@/lib/utils";

type LogoData = SiteConfig["brand"]["logo"];

/** Marca: glifo do negócio (site.brand.logo) sobre um quadrado em gradiente da cor primária. */
export function LogoMark({ logo, className }: { logo: LogoData; className?: string }) {
  const id = useId();
  const bg = `${id}-bg`;
  const accent = `${id}-accent`;
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
      {logo.accent && <path d={logo.accent} fill="none" stroke={`url(#${accent})`} strokeWidth="2.4" strokeLinecap="round" />}
      <path d={logo.glyph} fill="white" />
    </svg>
  );
}

export function Logo({ name, logo, className }: { name: string; logo: LogoData; className?: string }) {
  const [first, ...rest] = name.split(" ");
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark logo={logo} />
      <span className="font-heading text-lg leading-none font-extrabold tracking-tight whitespace-nowrap">
        {first}
        {rest.length > 0 && <span className="font-semibold text-primary"> {rest.join(" ")}</span>}
      </span>
    </span>
  );
}
