import { Container } from "@/components/container";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { site } from "@/config/site";

import { Counter } from "./counter";

export function Stats() {
  const { stats } = site;
  return (
    <section aria-labelledby="stats-title" className="py-12 sm:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-[oklch(0.36_0.07_220)] px-6 py-10 text-primary-foreground shadow-lift sm:px-10 sm:py-12">
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 size-72 rounded-full bg-[radial-gradient(circle,oklch(0.85_0.09_50/0.35),transparent_65%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px] opacity-[0.07]"
          />
          <div className="relative">
            <p className="text-center text-xs font-semibold tracking-wide text-primary-foreground/80 uppercase">{stats.heading.eyebrow}</p>
            <h2 id="stats-title" className="mx-auto mt-2 max-w-xl text-center text-2xl font-bold sm:text-3xl">
              {stats.heading.title}
            </h2>
            <Stagger as="ul" className="mt-10 grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:divide-x lg:divide-white/15">
              {stats.items.map((stat) => (
                <StaggerItem as="li" key={stat.label} className="flex flex-col items-center px-2 text-center">
                  <span className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
                    <Counter stat={stat} locale={site.lang} />
                  </span>
                  <span className="mt-1.5 text-sm text-balance text-primary-foreground/80 sm:text-base">{stat.label}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Container>
    </section>
  );
}
