import { useId } from "react";

import { cn } from "@/lib/utils";

/** Marca: dente estilizado com um arco de "aurora" nascendo atrás. */
export function LogoMark({ className }: { className?: string }) {
  const id = useId();
  const bg = `${id}-bg`;
  const sun = `${id}-sun`;
  return (
    <svg viewBox="0 0 40 40" className={cn("size-9", className)} aria-hidden="true">
      <defs>
        <linearGradient id={bg} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="oklch(0.52 0.09 200)" />
          <stop offset="1" stopColor="oklch(0.4 0.08 215)" />
        </linearGradient>
        <linearGradient id={sun} x1="8" y1="30" x2="32" y2="10" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="oklch(0.82 0.1 45)" />
          <stop offset="1" stopColor="oklch(0.9 0.07 70)" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill={`url(#${bg})`} />
      <path d="M7 27a13 13 0 0 1 26 0" fill="none" stroke={`url(#${sun})`} strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M13.4 12.6c1.9-1.5 4.2-1.2 6.6-.2 2.4-1 4.7-1.3 6.6.2 2 1.6 2 4.6 1.2 7.4-.6 2-1 3.9-1.5 6-.4 1.6-2.2 1.9-2.9.4l-1.6-3.8c-.5-1.1-1.1-1.4-1.8-1.4s-1.3.3-1.8 1.4l-1.6 3.8c-.7 1.5-2.5 1.2-2.9-.4-.5-2.1-.9-4-1.5-6-.8-2.8-.8-5.8 1.2-7.4Z"
        fill="white"
      />
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
