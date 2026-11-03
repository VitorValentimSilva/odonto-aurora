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


/** Prato servido com vapor, talheres e ramo de alecrim (restaurante). */
function DishIllustration({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 400 400" className="size-full" role="presentation" aria-hidden="true">
      <defs>
        <radialGradient id={`${id}-sun`} cx="0.5" cy="1" r="0.8">
          <stop offset="0" style={{ stopColor: "var(--illus-sun)" }} />
          <stop offset="0.45" style={{ stopColor: "var(--illus-sun-2)", stopOpacity: 0.55 }} />
          <stop offset="1" style={{ stopColor: "var(--illus-sun-2)", stopOpacity: 0 }} />
        </radialGradient>
        <radialGradient id={`${id}-plate`} cx="0.45" cy="0.35" r="0.75">
          <stop offset="0" stopColor="white" />
          <stop offset="1" style={{ stopColor: "var(--illus-shade)" }} />
        </radialGradient>
        <pattern id={`${id}-dots`} width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill="white" fillOpacity="0.14" />
        </pattern>
      </defs>
      <rect width="400" height="400" fill={`url(#${id}-dots)`} />
      <circle cx="200" cy="430" r="270" fill={`url(#${id}-sun)`} />

      {/* vapor */}
      <g fill="none" stroke="white" strokeLinecap="round" strokeWidth="5" strokeOpacity="0.55">
        <path d="M170 92c-12 14 12 22 0 38" />
        <path d="M200 78c-14 16 14 26 0 46" />
        <path d="M230 92c-12 14 12 22 0 38" />
      </g>

      {/* talheres */}
      <g fill="white" fillOpacity="0.9">
        <rect x="58" y="160" width="10" height="130" rx="5" />
        <path d="M50 130h4v36h4v-36h4v36h4v-36h4v42a13 13 0 0 1-26 0Z" />
        <path d="M334 128c14 6 16 46 6 62v100a5 5 0 0 1-10 0V132a4 4 0 0 1 4-4Z" />
      </g>

      {/* prato */}
      <ellipse cx="200" cy="318" rx="118" ry="14" fill="black" fillOpacity="0.14" />
      <circle cx="200" cy="215" r="112" fill={`url(#${id}-plate)`} />
      <circle cx="200" cy="215" r="84" fill="none" style={{ stroke: "var(--illus-shade)" }} strokeWidth="3" />

      {/* comida */}
      <g>
        {/* carne em fatias */}
        <path d="M150 200c10-22 52-30 78-14 12 8 8 24-6 30-26 12-62 10-72-16Z" fill="#8c4a2f" />
        <path d="M158 202c10-14 44-20 64-10" fill="none" stroke="#b86a45" strokeWidth="6" strokeLinecap="round" />
        <path d="M168 222c16 6 38 4 52-4" fill="none" stroke="#6b3420" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
        {/* tomates */}
        <circle cx="244" cy="240" r="15" fill="#d9482b" />
        <circle cx="244" cy="240" r="7" fill="#f07a5a" />
        <circle cx="222" cy="258" r="12" fill="#e5583a" />
        {/* folhas */}
        <ellipse cx="160" cy="246" rx="24" ry="12" fill="#5f8f3e" transform="rotate(-24 160 246)" />
        <ellipse cx="182" cy="258" rx="20" ry="10" fill="#79a94f" transform="rotate(18 182 258)" />
        {/* alecrim */}
        <g stroke="#3f6b2a" strokeLinecap="round">
          <path d="M226 150l60 52" strokeWidth="3" fill="none" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <g key={i} transform={`translate(${232 + i * 9} ${155 + i * 7.8}) rotate(41)`}>
              <path d="M0 0l-9-6M0 0l-9 6" strokeWidth="3" />
            </g>
          ))}
        </g>
      </g>

      {/* brilhos */}
      <g style={{ fill: "var(--illus-sparkle)" }}>
        <path d="M300 92l4 10 10 4-10 4-4 10-4-10-10-4 10-4Z" />
        <path d="M96 96l3 7 7 3-7 3-3 7-3-7-7-3 7-3Z" opacity="0.8" />
      </g>
    </svg>
  );
}

export const illustrations = {
  tooth: ToothIllustration,
  dish: DishIllustration,
};

export type IllustrationName = keyof typeof illustrations;

export function Illustration({ name }: { name: IllustrationName }) {
  const id = useId();
  const Comp = illustrations[name];
  return <Comp id={id} />;
}
