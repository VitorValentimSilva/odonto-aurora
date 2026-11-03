import { CalendarClock, Check, Star } from "lucide-react";
import Image from "next/image";

import { Illustration } from "@/components/illustrations";
import { site } from "@/config/site";

/**
 * Composição visual do hero feita só com SVG, gradientes e cartões.
 * Se `site.hero.image` estiver definido, a foto entra no lugar da ilustração.
 */
export function HeroVisual() {
  const { visual, image } = site.hero;

  return (
    <div className="relative mx-auto aspect-[4/4.2] w-full max-w-[30rem] sm:aspect-square lg:max-w-none">
      {/* halo */}
      <div
        aria-hidden="true"
        className="absolute inset-[6%] rounded-full bg-[radial-gradient(circle_at_30%_30%,var(--glow-warm),transparent_60%),radial-gradient(circle_at_70%_70%,var(--glow-cool),transparent_60%)] blur-2xl"
      />

      {/* cartão principal */}
      <div className="absolute inset-[8%] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-primary-deep shadow-lift">
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
          <Illustration name={visual.illustration} />
        )}
      </div>

      {/* cartão: plano de tratamento */}
      <div className="absolute top-[3%] left-0 max-w-[60%] animate-float rounded-2xl border border-white/60 bg-card/95 dark:border-white/10 px-3 py-2.5 shadow-lift backdrop-blur sm:max-w-60 sm:p-4">
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
      <div className="absolute right-0 bottom-[20%] flex animate-float-slow items-center gap-2.5 rounded-2xl border border-white/60 bg-card/95 dark:border-white/10 p-2.5 pr-3.5 shadow-lift sm:bottom-[16%] sm:gap-3 sm:p-3 sm:pr-4 backdrop-blur [animation-delay:-3s]">
        <span className="grid size-9 place-items-center rounded-xl bg-accent text-accent-foreground sm:size-10">
          <Star className="size-5 fill-current" aria-hidden="true" />
        </span>
        <span>
          <span className="block font-heading text-lg leading-none font-extrabold">{visual.ratingValue}</span>
          <span className="text-xs text-muted-foreground">{visual.ratingLabel}</span>
        </span>
      </div>

      {/* cartão: próximo horário */}
      <div className="absolute bottom-[1%] left-0 flex animate-float items-center gap-2.5 rounded-2xl border border-white/60 bg-card/95 dark:border-white/10 p-2.5 pr-3.5 shadow-lift sm:left-[6%] sm:gap-3 sm:p-3 sm:pr-4 backdrop-blur [animation-delay:-1.5s]">
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
