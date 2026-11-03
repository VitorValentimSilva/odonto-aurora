import type { SiteConfig, Treatment } from "@/config/types";
import { homeHref, itemPath, localePath } from "@/lib/paths";

/** Dados estruturados schema.org gerados a partir do site.ts. */
export function buildLocalBusinessJsonLd(site: SiteConfig) {
  return {
    "@context": "https://schema.org",
    "@type": site.brand.schemaType,
    "@id": `${site.url}/#business`,
    name: site.brand.name,
    slogan: site.brand.slogan,
    description: site.brand.description,
    url: `${site.url}${localePath(site, "/")}`,
    inLanguage: site.lang,
    image: `${site.url}${localePath(site, "/opengraph-image")}`,
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
      url: `${site.url}${itemPath(site, t.slug)}`,
      description: t.description,
      ...(t.price ? { offers: { "@type": "Offer", price: t.price.replace(/[^\d,]/g, "").replace(",", "."), priceCurrency: "BRL" } } : {}),
    })),
  };
}

/** JSON-LD da página de um item: o item, a trilha de navegação e o FAQ. */
export function buildItemJsonLd(site: SiteConfig, item: Treatment) {
  const url = `${site.url}${itemPath(site, item.slug)}`;
  const page = site.treatments.page;
  return [
    {
      "@context": "https://schema.org",
      "@type": site.seo.serviceSchemaType,
      name: item.title,
      description: item.details.metaDescription,
      url,
      provider: { "@id": `${site.url}/#business` },
      ...(item.price
        ? { offers: { "@type": "Offer", price: item.price.replace(/[^\d,]/g, "").replace(",", "."), priceCurrency: "BRL" } }
        : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: page.breadcrumbHome, item: `${site.url}${localePath(site, "/")}` },
        { "@type": "ListItem", position: 2, name: page.breadcrumbLabel, item: `${site.url}${homeHref(site, `#${site.sections.treatments}`)}` },
        { "@type": "ListItem", position: 3, name: item.title, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: item.details.faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ];
}
