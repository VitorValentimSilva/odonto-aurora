import { ArrowRight, Check } from "lucide-react";

import { Container } from "@/components/container";
import { HoverCard } from "@/components/motion/hover-card";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { getIcon } from "@/lib/icons";

export function Treatments() {
  const { treatments } = site;
  return (
    <section id="tratamentos" aria-labelledby="tratamentos-title" className="py-20 sm:py-24">
      <Container>
        <SectionHeading id="tratamentos-title" {...treatments.heading} />

        <Stagger as="ul" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.items.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <StaggerItem as="li" key={item.title} className="h-full">
                <HoverCard className="group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-card p-6 shadow-soft transition-[box-shadow,border-color] duration-300 hover:border-primary/25 hover:shadow-lift sm:p-7">
                  <div
                    aria-hidden="true"
                    className="absolute -top-16 -right-16 size-40 rounded-full bg-[radial-gradient(circle,oklch(0.94_0.04_50),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <span className="relative grid size-13 place-items-center rounded-2xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                  </span>
                  <h3 className="relative mt-5 text-xl font-bold">{item.title}</h3>
                  <p className="relative mt-2 text-muted-foreground">{item.description}</p>
                  <ul className="relative mt-auto flex flex-wrap gap-2 pt-5">
                    {item.highlights.map((h) => (
                      <li key={h} className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-foreground/80">
                        <Check className="size-3 text-primary" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </HoverCard>
              </StaggerItem>
            );
          })}
        </Stagger>

        <div className="mt-10 flex justify-center">
          <Button asChild size="xl" variant="outline" className="group bg-card">
            <a href={treatments.cta.href}>
              {treatments.cta.label}
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
