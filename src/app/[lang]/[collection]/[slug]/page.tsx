import { ArrowRight, Check, ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/container";
import { Icon } from "@/components/icon";
import { WhatsAppIcon } from "@/components/icons/brand-icons";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { getSite } from "@/lib/i18n";
import { findItem } from "@/lib/items";
import { buildItemJsonLd } from "@/lib/json-ld";
import { homeHref, itemPath, localePath } from "@/lib/paths";
import { alternatesFor } from "@/lib/seo";
import { currentYear } from "@/lib/year";

type Params = { collection: string; slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  const site = await getSite();
  return site.treatments.items.map((item) => ({ collection: site.treatments.basePath, slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const site = await getSite();
  const { collection, slug } = await params;
  const item = findItem(site, collection, slug);
  if (!item) return {};
  const index = site.treatments.items.indexOf(item);
  const path = itemPath(site, item.slug);
  return {
    title: item.title,
    description: item.details.metaDescription,
    alternates: alternatesFor(site, (s) => {
      const equivalent = s.treatments.items[index];
      return equivalent ? itemPath(s, equivalent.slug) : null;
    }),
    openGraph: { title: `${item.title} | ${site.brand.name}`, description: item.details.metaDescription, url: path },
  };
}

export default async function ItemPage({ params }: { params: Promise<Params> }) {
  const site = await getSite();
  const { collection, slug } = await params;
  const item = findItem(site, collection, slug);
  if (!item) notFound();

  const year = await currentYear();
  const { page, items } = site.treatments;
  const related = items.filter((i) => i.slug !== item.slug).slice(0, 3);
  const jsonLd = buildItemJsonLd(site, item);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <SiteHeader />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        {/* cabeçalho do item */}
        <section className="relative isolate overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-16">
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <div className="absolute -top-40 -right-40 size-[32rem] rounded-full bg-[radial-gradient(circle,var(--glow-cool),transparent_65%)]" />
            <div className="absolute top-1/3 -left-48 size-[28rem] rounded-full bg-[radial-gradient(circle,var(--glow-warm),transparent_65%)]" />
          </div>
          <Container className="max-w-4xl">
            <nav aria-label={page.breadcrumbLabel}>
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
                <li>
                  <Link href={localePath(site, "/")} className="hover:text-foreground hover:underline">
                    {page.breadcrumbHome}
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="size-3.5" />
                </li>
                <li>
                  <Link href={homeHref(site, `#${site.sections.treatments}`)} className="hover:text-foreground hover:underline">
                    {page.breadcrumbLabel}
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="size-3.5" />
                </li>
                <li aria-current="page" className="font-medium text-foreground">
                  {item.title}
                </li>
              </ol>
            </nav>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
                  <Icon name={item.icon} className="size-7" />
                </span>
                <div>
                  <h1 className="text-4xl leading-tight font-extrabold sm:text-5xl">{item.title}</h1>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.highlights.map((h) => (
                      <li
                        key={h}
                        className="inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1 text-sm font-medium text-foreground/80 shadow-soft"
                      >
                        <Check className="size-3.5 text-primary" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {item.price && (
                <span className="self-start rounded-full bg-accent px-4 py-2 font-heading text-xl font-extrabold text-accent-foreground">
                  {item.price}
                </span>
              )}
            </div>

            <p className="mt-8 text-lg text-pretty text-foreground/85 sm:text-xl">{item.details.intro}</p>
            <Button asChild size="xl" className="mt-8 shadow-lift">
              <a href={homeHref(site, page.cta.button.href)}>
                <WhatsAppIcon />
                {page.cta.button.label}
              </a>
            </Button>
          </Container>
        </section>

        {/* conteúdo */}
        <section className="pb-16">
          <Container className="grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-[1.5fr_1fr]">
            <div className="flex flex-col gap-4 text-pretty text-muted-foreground">
              {item.details.body.map((p) => (
                <p key={p.slice(0, 40)} className="text-base leading-relaxed sm:text-lg">
                  {p}
                </p>
              ))}
            </div>
            <aside className="self-start rounded-3xl border bg-card p-6 shadow-soft">
              <h2 className="text-lg font-bold">{page.benefitsTitle}</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {item.details.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-secondary">
                      <Check className="size-3 text-primary" aria-hidden="true" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </aside>
          </Container>
        </section>

        {/* FAQ do item */}
        <section aria-labelledby="item-faq-title" className="bg-secondary/50 py-16 sm:py-20">
          <Container className="max-w-3xl">
            <h2 id="item-faq-title" className="text-3xl font-bold">
              {page.faqTitle}
            </h2>
            <Accordion type="single" collapsible className="mt-8 flex flex-col gap-3">
              {item.details.faq.map((f, i) => (
                <AccordionItem
                  key={f.question}
                  value={`faq-${i}`}
                  className="rounded-2xl border bg-card px-5 shadow-soft last:border-b data-[state=open]:border-primary/25"
                >
                  <AccordionTrigger className="py-5 text-base font-semibold hover:no-underline">{f.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">{f.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Container>
        </section>

        {/* veja também */}
        <section aria-labelledby="related-title" className="py-16 sm:py-20">
          <Container className="max-w-5xl">
            <h2 id="related-title" className="text-3xl font-bold">
              {page.relatedTitle}
            </h2>
            <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={itemPath(site, r.slug)}
                    className="group flex h-full flex-col rounded-3xl border bg-card p-6 shadow-soft transition-[box-shadow,border-color] hover:border-primary/25 hover:shadow-lift"
                  >
                    <span className="grid size-11 place-items-center rounded-2xl bg-secondary text-primary">
                      <Icon name={r.icon} className="size-5" />
                    </span>
                    <span className="mt-4 font-heading text-lg font-bold">{r.title}</span>
                    <span className="mt-1 line-clamp-2 text-sm text-muted-foreground">{r.description}</span>
                    <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-primary">
                      {site.treatments.cardLinkLabel}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-14 flex flex-col items-start gap-5 rounded-3xl bg-gradient-to-br from-primary to-primary-deep p-8 text-primary-foreground shadow-lift sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div>
                <p className="font-heading text-2xl font-bold">{page.cta.title}</p>
                <p className="mt-1 text-primary-foreground/85">{page.cta.description}</p>
              </div>
              <Button asChild size="xl" variant="secondary" className="shrink-0">
                <a href={homeHref(site, page.cta.button.href)}>
                  <WhatsAppIcon />
                  {page.cta.button.label}
                </a>
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter year={year} />
      <WhatsAppFab />
    </>
  );
}
