import { Container } from "@/components/container";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Stars } from "@/components/stars";
import { site } from "@/config/site";

import { TestimonialsMarquee } from "./testimonials-marquee";

export function Testimonials() {
  const { testimonials, ui } = site;
  return (
    <section id="depoimentos" aria-labelledby="depoimentos-title" className="overflow-hidden py-20 sm:py-24">
      <Container>
        <SectionHeading id="depoimentos-title" {...testimonials.heading} />
        <Reveal className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
          <Stars rating={5} className="[&_svg]:size-5" />
          <p className="text-center text-sm font-medium text-muted-foreground">{testimonials.summary}</p>
        </Reveal>
      </Container>
      <Reveal className="mt-12">
        <TestimonialsMarquee items={testimonials.items} pauseLabel={ui.pauseAnimation} playLabel={ui.playAnimation} />
      </Reveal>
    </section>
  );
}
