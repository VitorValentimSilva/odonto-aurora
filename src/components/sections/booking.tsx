import { ArrowUpRight, CheckCircle2, Clock } from "lucide-react";

import { Container } from "@/components/container";
import { WhatsAppIcon } from "@/components/icons/brand-icons";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/links";

import { LazyBookingForm } from "./booking-form-lazy";

export function Booking() {
  const { booking, contact, ui, location, openingHours } = site;
  return (
    <section id="agendar" aria-labelledby="agendar-title" className="relative isolate py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-2/3 bg-gradient-to-b from-secondary/60 to-transparent"
      />
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="flex flex-col">
          <SectionHeading id="agendar-title" align="left" {...booking.heading} />
          <Reveal delay={0.1}>
            <ul className="mt-8 flex flex-col gap-3">
              {booking.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-foreground/85">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 overflow-hidden rounded-3xl border bg-card shadow-soft">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-5 transition-colors hover:bg-secondary/60"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-[#1f9d55] text-white">
                  <WhatsAppIcon className="size-6" />
                </span>
                <span>
                  <span className="block text-xs text-muted-foreground">{contact.whatsappLabel}</span>
                  <span className="block font-heading text-lg font-bold">{contact.whatsappDisplay}</span>
                </span>
                <span className="sr-only">{ui.externalLinkHint}</span>
                <ArrowUpRight className="ml-auto size-5 text-muted-foreground" aria-hidden="true" />
              </a>
              <div className="border-t bg-muted/40 p-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
                  <Clock className="size-4 text-primary" aria-hidden="true" />
                  {location.hoursTitle}
                </p>
                <dl className="mt-3 grid gap-1.5 text-sm">
                  {openingHours.map((h) => (
                    <div key={h.label} className="flex justify-between gap-4">
                      <dt className="text-muted-foreground">{h.label}</dt>
                      <dd className="font-semibold">{h.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.05} className="rounded-3xl border bg-card p-5 shadow-lift sm:p-8">
          <LazyBookingForm />
        </Reveal>
      </Container>
    </section>
  );
}
