import { CalendarClock, Check, Star } from "lucide-react";
import Image from "next/image";
import { useId } from "react";

import { site } from "@/config/site";

/**
 * Composição visual do hero feita só com SVG, gradientes e cartões.
 * Se `site.hero.image` estiver definido, a foto entra no lugar da ilustração.
 */
export function HeroVisual() {
  const { visual, image } = site.hero;
  const id = useId();

  return (
    <div className="relative mx-auto aspect-[4/4.2] w-full max-w-[30rem] sm:aspect-square lg:max-w-none">
      {/* halo */}
      <div
        aria-hidden="true"
        className="absolute inset-[6%] rounded-full bg-[radial-gradient(circle_at_30%_30%,oklch(0.9_0.06_50),transparent_60%),radial-gradient(circle_at_70%_70%,oklch(0.86_0.06_195),transparent_60%)] blur-2xl"
      />

      {/* cartão principal */}
      <div className="absolute inset-[8%] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-[oklch(0.36_0.07_220)] shadow-lift">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="size-full object-cover"
          />
        ) : (
          <svg viewBox="0 0 400 400" className="size-full" role="presentation" aria-hidden="true">
            <defs>
              <radialGradient id={`${id}-sun`} cx="0.5" cy="1" r="0.75">
                <stop offset="0" stopColor="oklch(0.88 0.09 55)" />
                <stop offset="0.45" stopColor="oklch(0.8 0.1 40 / 0.65)" />
                <stop offset="1" stopColor="oklch(0.8 0.1 40 / 0)" />
              </radialGradient>
              <linearGradient id={`${id}-tooth`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="white" />
                <stop offset="1" stopColor="oklch(0.94 0.02 200)" />
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
              <path d="M100 300a100 100 0 0 1 200 0" stroke="oklch(0.88 0.08 55)" strokeOpacity="0.8" strokeWidth="3" />
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
              <g fill="oklch(0.9 0.08 70)">
                <path d="M78-70l4 10 10 4-10 4-4 10-4-10-10-4 10-4Z" />
                <path d="M-92 10l3 7 7 3-7 3-3 7-3-7-7-3 7-3Z" opacity="0.8" />
                <path d="M60 46l2.5 6 6 2.5-6 2.5-2.5 6-2.5-6-6-2.5 6-2.5Z" opacity="0.7" />
              </g>
            </g>
          </svg>
        )}
      </div>

      {/* cartão: plano de tratamento */}
      <div className="absolute top-[3%] left-0 max-w-[60%] animate-float rounded-2xl border border-white/60 bg-card/95 px-3 py-2.5 shadow-lift backdrop-blur sm:max-w-60 sm:p-4">
        <p className="text-xs font-medium text-muted-foreground">{visual.cardTitle}</p>
        <p className="mt-0.5 font-heading text-sm font-bold sm:text-base">{visual.cardSubtitle}</p>
        <ul className="mt-2.5 hidden flex-wrap gap-1.5 sm:flex">
          {visual.chips.map((chip) => (
            <li
              key={chip}
              className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-[0.7rem] font-semibold text-secondary-foreground"
            >
              <Check className="size-3" aria-hidden="true" />
              {chip}
            </li>
          ))}
        </ul>
      </div>

      {/* cartão: avaliação */}
      <div className="absolute right-0 bottom-[20%] flex animate-float-slow items-center gap-2.5 rounded-2xl border border-white/60 bg-card/95 p-2.5 pr-3.5 shadow-lift sm:bottom-[16%] sm:gap-3 sm:p-3 sm:pr-4 backdrop-blur [animation-delay:-3s]">
        <span className="grid size-9 place-items-center rounded-xl bg-accent text-accent-foreground sm:size-10">
          <Star className="size-5 fill-current" aria-hidden="true" />
        </span>
        <span>
          <span className="block font-heading text-lg leading-none font-extrabold">{visual.ratingValue}</span>
          <span className="text-xs text-muted-foreground">{visual.ratingLabel}</span>
        </span>
      </div>

      {/* cartão: próximo horário */}
      <div className="absolute bottom-[1%] left-0 flex animate-float items-center gap-2.5 rounded-2xl border border-white/60 bg-card/95 p-2.5 pr-3.5 shadow-lift sm:left-[6%] sm:gap-3 sm:p-3 sm:pr-4 backdrop-blur [animation-delay:-1.5s]">
        <span className="grid size-9 place-items-center rounded-xl bg-secondary text-primary sm:size-10">
          <CalendarClock className="size-5" aria-hidden="true" />
        </span>
        <span>
          <span className="block text-xs text-muted-foreground">{visual.nextSlotLabel}</span>
          <span className="block text-sm font-bold">{visual.nextSlotValue}</span>
        </span>
      </div>
    </div>
  );
}
