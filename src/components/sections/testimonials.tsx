import { Container } from "@/components/container";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Stars } from "@/components/stars";
import { getSite } from "@/lib/i18n";

import { TestimonialsMarquee } from "./testimonials-marquee";

export async function Testimonials() {
  const site = await getSite();
  const { testimonials, ui } = site;
  return (
    <section id={site.sections.testimonials} aria-labelledby={`${site.sections.testimonials}-title`} className="overflow-hidden py-20 sm:py-24">
      <Container>
        <SectionHeading id={`${site.sections.testimonials}-title`} {...testimonials.heading} />
        <Reveal className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
          <Stars rating={5} labelTemplate={ui.starsLabel} className="[&_svg]:size-5" />
          <p className="text-center text-sm font-medium text-muted-foreground">{testimonials.summary}</p>
        </Reveal>
      </Container>
      <Reveal className="mt-12">
        <TestimonialsMarquee items={testimonials.items} label={testimonials.heading.title}
          starsLabel={ui.starsLabel} pauseLabel={ui.pauseAnimation} playLabel={ui.playAnimation} />
      </Reveal>
    </section>
  );
}
