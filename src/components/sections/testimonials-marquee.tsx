"use client";

import { Pause, Play, Quote } from "lucide-react";
import { useState } from "react";

import { Stars } from "@/components/stars";
import type { Testimonial } from "@/config/types";
import { cn } from "@/lib/utils";

type Props = {
  items: Testimonial[];
  /** Nome acessível da região rolável (título da seção). */
  label: string;
  pauseLabel: string;
  playLabel: string;
};

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full w-[19rem] shrink-0 flex-col rounded-3xl border bg-card p-6 shadow-soft sm:w-[22rem]">
      <div className="flex items-center justify-between">
        <Stars rating={t.rating} />
        <Quote className="size-7 text-accent-foreground/30" aria-hidden="true" />
      </div>
      <blockquote className="mt-4 flex-1 text-pretty text-foreground/85">“{t.quote}”</blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t pt-4">
        <span
          aria-hidden="true"
          className="grid size-10 place-items-center rounded-full bg-accent font-heading text-sm font-bold text-accent-foreground"
        >
          {t.name.charAt(0)}
        </span>
        <span>
          <span className="block text-sm font-semibold">{t.name}</span>
          <span className="block text-xs text-muted-foreground">{t.detail}</span>
        </span>
      </figcaption>
    </figure>
  );
}

/**
 * Marquee infinito em CSS. Pausa no hover/foco, tem botão de pausa (WCAG 2.2.2)
 * e vira uma lista com rolagem horizontal quando "reduzir movimento" está ativo.
 */
export function TestimonialsMarquee({ items, label, pauseLabel, playLabel }: Props) {
  const [paused, setPaused] = useState(false);

  return (
    <div className="relative">
      <div
        role="region"
        aria-label={label}
        tabIndex={0}
        className={cn(
          "group relative overflow-hidden rounded-3xl py-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]",
          "motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]",
        )}
      >
        <ul
          className={cn(
            "flex w-max animate-marquee gap-6 [--marquee-duration:60s] group-focus-within:[animation-play-state:paused] group-hover:[animation-play-state:paused]",
            "motion-reduce:animate-none motion-reduce:px-4",
            paused && "[animation-play-state:paused]",
          )}
        >
          {items.map((t) => (
            <li key={t.name}>
              <Card t={t} />
            </li>
          ))}
          {/* cópia para o loop contínuo — escondida de leitores de tela */}
          {items.map((t) => (
            <li key={`${t.name}-copy`} aria-hidden="true" className="motion-reduce:hidden">
              <Card t={t} />
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 flex justify-center motion-reduce:hidden">
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm font-medium text-foreground/80 shadow-soft transition-colors hover:bg-secondary"
        >
          {paused ? <Play className="size-4" aria-hidden="true" /> : <Pause className="size-4" aria-hidden="true" />}
          {paused ? playLabel : pauseLabel}
        </button>
      </div>
    </div>
  );
}
