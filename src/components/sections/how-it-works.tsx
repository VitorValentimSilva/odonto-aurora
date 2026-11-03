import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/config/site";

import { Timeline } from "./timeline";

export function HowItWorks() {
  return (
    <section id="como-funciona" aria-labelledby="como-funciona-title" className="py-20 sm:py-24">
      <Container>
        <SectionHeading id="como-funciona-title" {...site.steps.heading} />
        <Timeline />
      </Container>
    </section>
  );
}
