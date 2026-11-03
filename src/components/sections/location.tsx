import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";

import { Container } from "@/components/container";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { buildMapsUrl } from "@/lib/links";

/** Mapa ilustrativo em SVG (sem iframe, sem requisições externas). */
function MapIllustration({ caption }: { caption: string }) {
  return (
    <div className="relative h-full min-h-64 overflow-hidden rounded-3xl bg-[oklch(0.95_0.02_190)]">
      <svg aria-hidden="true" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
        <rect width="400" height="300" fill="oklch(0.95 0.02 190)" />
        <path d="M-20 210C60 180 120 240 200 200s140-90 230-60" fill="none" stroke="oklch(0.85 0.05 210)" strokeWidth="22" />
        <g stroke="white" strokeWidth="10" strokeLinecap="round" fill="none">
          <path d="M-10 90h420" />
          <path d="M120-10v320" />
          <path d="M290-10v320" />
          <path d="M-10 250l420-60" />
        </g>
        <g stroke="white" strokeWidth="4" fill="none" opacity="0.8">
          <path d="M-10 40h420M-10 150h420M60-10v320M200-10v320M350-10v320" />
        </g>
        <rect x="140" y="105" width="40" height="30" rx="6" fill="oklch(0.9 0.05 150)" />
        <rect x="305" y="20" width="60" height="50" rx="8" fill="oklch(0.9 0.05 150)" />
        <circle cx="205" cy="120" r="46" fill="oklch(0.47 0.085 205 / 0.12)" />
        <circle cx="205" cy="120" r="24" fill="oklch(0.47 0.085 205 / 0.18)" />
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[85%]">
        <span className="grid size-14 place-items-center rounded-full rounded-br-none bg-primary text-primary-foreground shadow-lift [transform:rotate(45deg)]">
          <MapPin className="size-6 [transform:rotate(-45deg)]" aria-hidden="true" />
        </span>
      </div>
      <p className="absolute bottom-4 left-4 rounded-full bg-card/95 px-3 py-1.5 text-xs font-semibold shadow-soft">{caption}</p>
    </div>
  );
}

export function Location() {
  const { location, address, openingHours, contact, brand, ui } = site;
  return (
    <section id="localizacao" aria-labelledby="localizacao-title" className="py-20 sm:py-24">
      <Container>
        <SectionHeading id="localizacao-title" {...location.heading} />

        <Reveal className="mt-12 grid overflow-hidden rounded-[2rem] border bg-card p-3 shadow-lift lg:grid-cols-2">
          <div className="flex flex-col gap-8 p-5 sm:p-8">
            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-primary uppercase">
                <MapPin className="size-4" aria-hidden="true" />
                {location.addressTitle}
              </h3>
              <address className="mt-3 text-lg not-italic">
                <span className="block font-semibold">{brand.name}</span>
                {address.street}
                <br />
                {address.district}, {address.city} – {address.state}
                <br />
                {address.postalCode}
              </address>
              {address.reference && <p className="mt-2 text-sm text-muted-foreground">{address.reference}</p>}
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-primary uppercase">
                <Clock className="size-4" aria-hidden="true" />
                {location.hoursTitle}
              </h3>
              <dl className="mt-3 divide-y">
                {openingHours.map((h) => (
                  <div key={h.label} className="flex items-center justify-between gap-4 py-2.5">
                    <dt className="text-foreground/80">{h.label}</dt>
                    <dd className="font-semibold">{h.hours}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h3 className="text-sm font-semibold tracking-wide text-primary uppercase">{location.contactTitle}</h3>
              <ul className="mt-3 flex flex-col gap-2">
                <li>
                  <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`} className="inline-flex items-center gap-2 hover:text-primary">
                    <Phone className="size-4 text-muted-foreground" aria-hidden="true" />
                    {contact.whatsappDisplay}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 break-all hover:text-primary">
                    <Mail className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                    {contact.email}
                  </a>
                </li>
              </ul>
            </div>

            <Button asChild size="xl" className="w-full sm:w-auto sm:self-start">
              <a href={buildMapsUrl()} target="_blank" rel="noopener noreferrer">
                <Navigation aria-hidden="true" />
                {location.directionsCta}
                <span className="sr-only">{ui.externalLinkHint}</span>
              </a>
            </Button>
          </div>

          <MapIllustration caption={location.mapCaption} />
        </Reveal>
      </Container>
    </section>
  );
}
