import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/container";
import { HoverCard } from "@/components/motion/hover-card";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { getSite } from "@/lib/i18n";
import { itemPath } from "@/lib/paths";
import { getIcon } from "@/lib/icons";

export async function Treatments() {
  const site = await getSite();
  const { treatments } = site;
  return (
    <section id={site.sections.treatments} aria-labelledby={`${site.sections.treatments}-title`} className="py-20 sm:py-24">
      <Container>
        <SectionHeading id={`${site.sections.treatments}-title`} {...treatments.heading} />

        <Stagger as="ul" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.items.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <StaggerItem as="li" key={item.title} className="h-full">
                <HoverCard className="group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-card p-5 shadow-soft transition-[box-shadow,border-color] duration-300 hover:border-primary/25 hover:shadow-lift sm:p-7">
                  <div
                    aria-hidden="true"
                    className="absolute -top-16 -right-16 size-40 rounded-full bg-[radial-gradient(circle,var(--glow-warm),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="relative flex items-center gap-4 sm:flex-col sm:items-start sm:gap-5">
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground sm:size-13">
                      <Icon className="size-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                    </span>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="relative mt-3 text-muted-foreground sm:mt-2">{item.description}</p>
                  <ul className="relative mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-dashed pt-4 text-sm text-foreground/80 sm:mt-5 sm:flex-col">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2">
                        <span className="grid size-5 shrink-0 place-items-center rounded-full bg-secondary">
                          <Check className="size-3 text-primary" aria-hidden="true" />
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="relative mt-auto flex items-center justify-between gap-3 pt-4 sm:pt-5">
                    <Link
                      href={itemPath(site, item.slug)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                    >
                      {treatments.cardLinkLabel}
                      <span className="sr-only">: {item.title}</span>
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>
                    {item.price && (
                      <span className="rounded-full bg-accent px-3 py-1 font-heading text-sm font-bold text-accent-foreground">
                        {item.price}
                      </span>
                    )}
                  </div>
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
