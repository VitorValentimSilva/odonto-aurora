import { useId } from "react";

/**
 * Ilustrações em SVG usadas no hero (sem fotos). As cores vêm dos tokens
 * `--illus-*` de `globals.css`, então acompanham a paleta do tema.
 * Para um novo negócio, crie uma ilustração aqui e registre no mapa `illustrations`.
 */

function ToothIllustration({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 400 400" className="size-full" role="presentation" aria-hidden="true">
      <defs>
        <radialGradient id={`${id}-sun`} cx="0.5" cy="1" r="0.75">
          <stop offset="0" style={{ stopColor: "var(--illus-sun)" }} />
          <stop offset="0.45" style={{ stopColor: "var(--illus-sun-2)", stopOpacity: 0.65 }} />
          <stop offset="1" style={{ stopColor: "var(--illus-sun-2)", stopOpacity: 0 }} />
        </radialGradient>
        <linearGradient id={`${id}-tooth`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="white" />
          <stop offset="1" style={{ stopColor: "var(--illus-shade)" }} />
        </linearGradient>
        <pattern id={`${id}-dots`} width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill="white" fillOpacity="0.14" />
        </pattern>
      </defs>
      <rect width="400" height="400" fill={`url(#${id}-dots)`} />
      <circle cx="200" cy="420" r="260" fill={`url(#${id}-sun)`} />
      {/* arcos de aurora */}
      <g fill="none" strokeLinecap="round">
        <path d="M40 300a160 160 0 0 1 320 0" stroke="white" strokeOpacity="0.16" strokeWidth="2" />
        <path d="M70 300a130 130 0 0 1 260 0" stroke="white" strokeOpacity="0.22" strokeWidth="2" />
        <path d="M100 300a100 100 0 0 1 200 0" style={{ stroke: "var(--illus-sun)" }} strokeOpacity="0.8" strokeWidth="3" />
      </g>
      {/* dente estilizado */}
      <g transform="translate(200 205)">
        <ellipse cx="0" cy="118" rx="70" ry="10" fill="black" fillOpacity="0.12" />
        <path
          d="M-62-58c18-15 41-12 62-3 21-9 44-12 62 3 19 16 18 46 10 73-6 20-10 39-15 60-4 16-21 19-28 4l-15-37c-5-10-9-13-14-13s-9 3-14 13l-15 37c-7 15-24 12-28-4-5-21-9-40-15-60-8-27-9-57 10-73Z"
          fill={`url(#${id}-tooth)`}
        />
        <path d="M-38-40c8-6 18-7 27-4" fill="none" stroke="white" strokeWidth="7" strokeLinecap="round" strokeOpacity="0.9" />
        {/* brilhos */}
        <g style={{ fill: "var(--illus-sparkle)" }}>
          <path d="M78-70l4 10 10 4-10 4-4 10-4-10-10-4 10-4Z" />
          <path d="M-92 10l3 7 7 3-7 3-3 7-3-7-7-3 7-3Z" opacity="0.8" />
          <path d="M60 46l2.5 6 6 2.5-6 2.5-2.5 6-2.5-6-6-2.5 6-2.5Z" opacity="0.7" />
        </g>
      </g>
    </svg>
  );
}

export const illustrations = {
  tooth: ToothIllustration,
};

export type IllustrationName = keyof typeof illustrations;

export function Illustration({ name }: { name: IllustrationName }) {
  const id = useId();
  const Comp = illustrations[name];
  return <Comp id={id} />;
}
