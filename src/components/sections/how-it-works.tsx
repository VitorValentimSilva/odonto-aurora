import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { getSite } from "@/lib/i18n";

import { Timeline } from "./timeline";

export async function HowItWorks() {
  const site = await getSite();
  return (
    <section id={site.sections.steps} aria-labelledby={`${site.sections.steps}-title`} className="py-20 sm:py-24">
      <Container>
        <SectionHeading id={`${site.sections.steps}-title`} {...site.steps.heading} />
        <Timeline />
      </Container>
    </section>
  );
}
