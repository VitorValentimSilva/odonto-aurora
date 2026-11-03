import { Container } from "@/components/container";
import { HoverCard } from "@/components/motion/hover-card";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/config/site";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

export function Differentials() {
  const { differentials } = site;
  return (
    <section id={site.sections.differentials} aria-labelledby={`${site.sections.differentials}-title`} className="relative bg-secondary/50 py-20 sm:py-24">
      <Container>
        <SectionHeading id={`${site.sections.differentials}-title`} {...differentials.heading} />

        <Stagger as="ul" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.items.map((item, index) => {
            const Icon = getIcon(item.icon);
            const wide = item.size === "wide";
            const featured = index === 0;
            return (
              <StaggerItem as="li" key={item.title} className={cn(wide && "sm:col-span-2")}>
                <HoverCard
                  className={cn(
                    "relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border p-6 shadow-soft sm:p-7",
                    featured ? "border-transparent bg-primary text-primary-foreground" : "bg-card",
                  )}
                >
                  {featured && (
                    <div
                      aria-hidden="true"
                      className="absolute -top-20 -right-20 size-64 rounded-full border-[24px] border-white/10 sm:-top-24 sm:-right-12"
                    />
                  )}
                  {!featured && wide && (
                    <div
                      aria-hidden="true"
                      className="absolute -top-16 -right-16 size-56 rounded-full bg-[radial-gradient(circle,var(--glow-warm),transparent_70%)]"
                    />
                  )}
                  <span
                    className={cn(
                      "relative grid size-12 place-items-center rounded-2xl",
                      featured ? "bg-primary-foreground/15 text-primary-foreground" : "bg-accent text-accent-foreground",
                    )}
                  >
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <div className="relative">
                    <h3 className={cn("font-bold", wide ? "text-2xl" : "text-xl")}>{item.title}</h3>
                    <p className={cn("mt-2 max-w-md", featured ? "text-primary-foreground/85" : "text-muted-foreground")}>
                      {item.description}
                    </p>
                  </div>
                </HoverCard>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
