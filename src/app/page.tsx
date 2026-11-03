import { cacheLife } from "next/cache";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import { Booking } from "@/components/sections/booking";
import { Differentials } from "@/components/sections/differentials";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Location } from "@/components/sections/location";
import { Payment } from "@/components/sections/payment";
import { Stats } from "@/components/sections/stats";
import { Team } from "@/components/sections/team";
import { Testimonials } from "@/components/sections/testimonials";
import { Treatments } from "@/components/sections/treatments";
import { buildLocalBusinessJsonLd } from "@/lib/json-ld";

export default async function Home() {
  "use cache";
  cacheLife("days");
  const year = new Date().getFullYear();
  const jsonLd = buildLocalBusinessJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <SiteHeader />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Hero />
        <Stats />
        <Treatments />
        <Differentials />
        <HowItWorks />
        <Team />
        <Testimonials />
        <Payment />
        <Faq />
        <Booking />
        <Location />
      </main>
      <SiteFooter year={year} />
      <WhatsAppFab />
    </>
  );
}
