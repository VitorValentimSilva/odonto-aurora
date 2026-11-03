
import { Container } from "@/components/container";
import { Icon } from "@/components/icon";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { getSite } from "@/lib/i18n";
import { getIcon } from "@/lib/icons";

export async function Payment() {
  const site = await getSite();
  const { payment } = site;

  return (
    <section id={site.sections.payment} aria-labelledby={`${site.sections.payment}-title`} className="bg-secondary/50 py-20 sm:py-24">
      <Container>
        <SectionHeading id={`${site.sections.payment}-title`} {...payment.heading} />

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="flex flex-col rounded-3xl border bg-card p-6 shadow-soft sm:p-8">
            <h3 className="flex items-center gap-2 text-lg font-bold">
              <Icon name={payment.insurancesIcon ?? "shieldCheck"} className="size-5 text-primary" />
              {payment.insurancesTitle}
            </h3>
            <Stagger as="ul" stagger={0.05} className="mt-5 flex flex-1 flex-wrap content-start gap-2.5 pb-6">
              {payment.insurances.map((name) => (
                <StaggerItem
                  as="li"
                  key={name}
                  className="rounded-full border bg-background px-4 py-2 text-sm font-medium text-foreground/85 transition-colors hover:border-primary/30 hover:bg-secondary"
                >
                  {name}
                </StaggerItem>
              ))}
            </Stagger>
            <p className="border-t pt-5 text-xs text-muted-foreground">{payment.note}</p>
          </Reveal>

          <Reveal delay={0.1} className="relative flex flex-col overflow-hidden rounded-3xl bg-accent p-6 text-accent-foreground shadow-soft sm:p-8">
            <div aria-hidden="true" className="absolute -top-12 -right-12 size-44 rounded-full bg-background/40" />
            <Icon name={payment.installments.icon ?? "creditCard"} className="relative size-8" />
            <p className="relative mt-4 font-heading text-3xl leading-tight font-extrabold text-balance">{payment.installments.title}</p>
            <p className="relative mt-1 text-accent-foreground/90">{payment.installments.description}</p>
            <h3 className="relative mt-6 text-sm font-semibold tracking-wide uppercase">{payment.methodsTitle}</h3>
            <ul className="relative mt-3 flex flex-wrap gap-2">
              {payment.methods.map((m) => {
                const Icon = getIcon(m.icon);
                return (
                  <li key={m.label} className="inline-flex items-center gap-1.5 rounded-full bg-background/60 px-3 py-1.5 text-sm font-medium">
                    <Icon className="size-4" aria-hidden="true" />
                    {m.label}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
