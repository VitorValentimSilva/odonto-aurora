import { site } from "@/config/site";

/** Dados estruturados schema.org gerados a partir do site.ts. */
export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": site.brand.schemaType,
    "@id": `${site.url}/#business`,
    name: site.brand.name,
    slogan: site.brand.slogan,
    description: site.brand.description,
    url: site.url,
    image: `${site.url}/opengraph-image`,
    logo: `${site.url}/apple-icon`,
    telephone: site.contact.phone,
    email: site.contact.email,
    priceRange: site.brand.priceRange,
    ...(site.brand.servesCuisine ? { servesCuisine: site.brand.servesCuisine } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    openingHoursSpecification: site.openingHours
      .filter((h) => h.days.length > 0)
      .flatMap((h) =>
        (h.slots ?? [{ opens: h.opens, closes: h.closes }]).map((slot) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: h.days,
          opens: slot.opens,
          closes: slot.closes,
        })),
      ),
    sameAs: site.social.map((s) => s.href),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: (
        site.testimonials.items.reduce((acc, t) => acc + t.rating, 0) / site.testimonials.items.length
      ).toFixed(1),
      reviewCount: site.testimonials.items.length,
    },
    employee: site.team.items.map((m) => ({
      "@type": "Person",
      name: m.name,
      jobTitle: m.role,
    })),
    availableService: site.treatments.items.map((t) => ({
      "@type": site.seo.serviceSchemaType,
      name: t.title,
      description: t.description,
      ...(t.price ? { offers: { "@type": "Offer", price: t.price.replace(/[^\d,]/g, "").replace(",", "."), priceCurrency: "BRL" } } : {}),
    })),
  };
}
