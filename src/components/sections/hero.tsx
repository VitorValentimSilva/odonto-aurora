import { ArrowRight } from "lucide-react";

import { Container } from "@/components/container";
import { WhatsAppIcon } from "@/components/icons/brand-icons";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { getIcon } from "@/lib/icons";

import { HeroVisual } from "./hero-visual";

/** Entrada animada via CSS (roda antes da hidratação → melhor LCP). */
const enter = "animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out fill-mode-both";
/** Título e subtítulo (candidatos a LCP) só deslizam, sem começar invisíveis. */
const enterText = "animate-in slide-in-from-bottom-3 duration-700 ease-out fill-mode-both";

export function Hero() {
  const { hero } = site;
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      {/* fundo */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 size-[36rem] rounded-full bg-[radial-gradient(circle,oklch(0.93_0.04_195),transparent_65%)]" />
        <div className="absolute top-1/3 -left-48 size-[30rem] rounded-full bg-[radial-gradient(circle,oklch(0.95_0.035_50),transparent_65%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div className="flex flex-col items-start">
          <p className={`${enter} inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-xs font-semibold text-secondary-foreground shadow-soft sm:text-sm`}>
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-soft-ping rounded-full bg-emerald-500" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {hero.badge}
          </p>

          <h1
            id="hero-title"
            className={`${enterText} mt-5 text-[2.5rem] leading-[1.05] font-extrabold sm:text-5xl lg:text-6xl xl:text-[4.25rem] [animation-delay:80ms]`}
          >
            {hero.title}{" "}
            <span className="bg-[linear-gradient(transparent_78%,color-mix(in_oklch,var(--warm)_55%,transparent)_78%,color-mix(in_oklch,var(--warm)_55%,transparent)_92%,transparent_92%)] box-decoration-clone text-primary">
              {hero.highlight}
            </span>
            {hero.titleAfter && <> {hero.titleAfter}</>}
          </h1>

          <p className={`${enterText} mt-6 max-w-xl text-lg text-pretty text-muted-foreground [animation-delay:160ms]`}>{hero.subtitle}</p>

          <div className={`${enter} mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row [animation-delay:240ms]`}>
            <Button asChild size="xl" className="shadow-lift">
              <a href={hero.primaryCta.href}>
                <WhatsAppIcon />
                {hero.primaryCta.label}
              </a>
            </Button>
            <Button asChild size="xl" variant="outline" className="group bg-card">
              <a href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </Button>
          </div>

          <ul
            className={`${enter} mt-10 grid w-full max-w-xl grid-cols-3 divide-x divide-border border-t border-border pt-6 [animation-delay:320ms]`}
          >
            {hero.trustBadges.map((badge) => {
              const Icon = getIcon(badge.icon);
              return (
                <li
                  key={badge.label}
                  className="flex flex-col gap-2 px-3 text-[0.8rem] leading-snug font-medium text-foreground/80 first:pl-0 sm:px-5 sm:text-sm"
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  {badge.label}
                </li>
              );
            })}
          </ul>
        </div>

        <div className={`${enter} duration-1000 [animation-delay:200ms]`}>
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
