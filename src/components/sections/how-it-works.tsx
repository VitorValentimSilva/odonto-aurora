import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/config/site";

import { Timeline } from "./timeline";

export function HowItWorks() {
  return (
    <section id={site.sections.steps} aria-labelledby={`${site.sections.steps}-title`} className="py-20 sm:py-24">
      <Container>
        <SectionHeading id={`${site.sections.steps}-title`} {...site.steps.heading} />
        <Timeline />
      </Container>
    </section>
  );
}
