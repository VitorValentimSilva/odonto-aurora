import type { Metadata } from "next";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { getSite } from "@/lib/i18n";
import { localePath } from "@/lib/paths";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSite();
  return { title: site.ui.notFound.title, robots: { index: false } };
}

export default async function NotFound() {
  const site = await getSite();
  const { notFound } = site.ui;
  return (
    <main id="conteudo" className="grid min-h-dvh place-items-center px-4 py-16">
      <div className="flex max-w-md flex-col items-center text-center">
        <Link href={localePath(site, "/")} aria-label={site.ui.homeLabel} className="rounded-lg">
          <Logo name={site.brand.name} logo={site.brand.logo} />
        </Link>
        <p aria-hidden="true" className="mt-10 font-heading text-8xl font-extrabold tracking-tight text-primary/15">
          404
        </p>
        <h1 className="mt-2 text-3xl font-bold">{notFound.title}</h1>
        <p className="mt-3 text-muted-foreground">{notFound.description}</p>
        <Button asChild size="xl" className="mt-8">
          <Link href={localePath(site, notFound.cta.href)}>{notFound.cta.label}</Link>
        </Button>
      </div>
    </main>
  );
}
