import { Container } from "@/components/container";
import { WhatsAppIcon } from "@/components/icons/brand-icons";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { getSite } from "@/lib/i18n";

export async function Faq() {
  const site = await getSite();
  const { faq } = site;
  return (
    <section id={site.sections.faq} aria-labelledby={`${site.sections.faq}-title`} className="py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading id={`${site.sections.faq}-title`} align="left" {...faq.heading} />
          <Reveal delay={0.1} className="mt-8 hidden rounded-3xl border bg-card p-6 shadow-soft lg:block">
            <p className="font-heading text-lg font-bold">{faq.contactPrompt}</p>
            <Button asChild size="xl" className="mt-4">
              <a href={faq.contactCta.href}>
                <WhatsAppIcon />
                {faq.contactCta.label}
              </a>
            </Button>
          </Reveal>
        </div>

        <Reveal>
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faq.items.map((item, i) => (
              <AccordionItem
                key={item.question}
                value={`faq-${i}`}
                className="rounded-2xl border bg-card px-5 shadow-soft last:border-b data-[state=open]:border-primary/25"
              >
                <AccordionTrigger className="py-5 text-base font-semibold hover:no-underline">{item.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-8 rounded-3xl border bg-card p-6 text-center shadow-soft lg:hidden">
            <p className="font-heading text-lg font-bold">{faq.contactPrompt}</p>
            <Button asChild size="xl" className="mt-4 w-full sm:w-auto">
              <a href={faq.contactCta.href}>
                <WhatsAppIcon />
                {faq.contactCta.label}
              </a>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
