import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/container";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getSite } from "@/lib/i18n";
import { localePath, privacyPath } from "@/lib/paths";
import { alternatesFor } from "@/lib/seo";
import { currentYear } from "@/lib/year";

type Params = { collection: string };

/** Página de um segmento só: hoje, a política de privacidade (`site.privacy.path`). */
export async function generateStaticParams(): Promise<Params[]> {
  const site = await getSite();
  return [{ collection: site.privacy.path }];
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const site = await getSite();
  if ((await params).collection !== site.privacy.path) return {};
  return {
    title: site.privacy.title,
    description: site.privacy.description,
    alternates: alternatesFor(site, (s) => privacyPath(s)),
  };
}

export default async function PrivacyPage({ params }: { params: Promise<Params> }) {
  const site = await getSite();
  if ((await params).collection !== site.privacy.path) notFound();
  const year = await currentYear();
  const { privacy } = site;

  return (
    <>
      <SiteHeader />
      <main id="conteudo" tabIndex={-1} className="pt-28 pb-20 outline-none sm:pt-32">
        <Container className="max-w-3xl">
          <Link
            href={localePath(site, "/")}
            className="inline-flex items-center gap-1.5 rounded-full text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            {privacy.backLabel}
          </Link>
          <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl">{privacy.title}</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            {privacy.updatedLabel}: <time>{privacy.updatedAt}</time>
          </p>
          <p className="mt-8 text-lg text-pretty text-foreground/85">{privacy.intro}</p>

          <div className="mt-10 flex flex-col gap-8">
            {privacy.sections.map((section) => (
              <section key={section.heading} className="rounded-3xl border bg-card p-6 shadow-soft sm:p-8">
                <h2 className="text-xl font-bold sm:text-2xl">{section.heading}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-3 text-pretty text-muted-foreground">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </Container>
      </main>
      <SiteFooter year={year} />
    </>
  );
}
