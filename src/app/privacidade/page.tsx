import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { cacheLife } from "next/cache";
import Link from "next/link";

import { Container } from "@/components/container";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: site.privacy.title,
  description: site.privacy.description,
  alternates: { canonical: "/privacidade" },
};

export default async function PrivacyPage() {
  "use cache";
  cacheLife("days");
  const year = new Date().getFullYear();
  const { privacy } = site;

  return (
    <>
      <SiteHeader />
      <main id="conteudo" tabIndex={-1} className="pt-28 pb-20 outline-none sm:pt-32">
        <Container className="max-w-3xl">
          <Link
            href="/"
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
