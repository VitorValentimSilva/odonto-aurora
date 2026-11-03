import { ArrowUp } from "lucide-react";

import { Container } from "@/components/container";
import { GitHubIcon } from "@/components/icons/brand-icons";
import { Logo } from "@/components/logo";
import { site } from "@/config/site";
import { homeHref } from "@/lib/links";
import { getIcon } from "@/lib/icons";

export function SiteFooter({ year }: { year: number }) {
  const { brand, footer, nav, contact, address, social, responsible, author, ui } = site;
  return (
    <footer className="border-t bg-footer text-white/80">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo name={brand.name} className="text-white [&_.text-primary]:text-footer-accent" />
          <p className="mt-4 max-w-xs text-sm">{footer.about}</p>
          <p className="mt-4 text-sm">
            <span className="font-semibold text-white">{responsible.role}:</span> {responsible.name} — <span className="whitespace-nowrap">{responsible.registry}</span>
          </p>
        </div>

        <nav aria-label={footer.linksTitle}>
          <h2 className="font-heading text-sm font-semibold tracking-wide text-white uppercase">{footer.linksTitle}</h2>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={homeHref(item.href)} className="hover:text-white hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-heading text-sm font-semibold tracking-wide text-white uppercase">{footer.contactTitle}</h2>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            <li>
              <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`} className="hover:text-white hover:underline">
                {contact.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="break-all hover:text-white hover:underline">
                {contact.email}
              </a>
            </li>
            <li>{address.full}</li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-sm font-semibold tracking-wide text-white uppercase">{footer.socialTitle}</h2>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {social.map((s) => {
              const Icon = getIcon(s.icon);
              return (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white hover:underline">
                    <Icon className="size-4" aria-hidden="true" />
                    {s.label}
                    <span className="sr-only">
                      {s.handle} {ui.externalLinkHint}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <p>
              © {year} {brand.name}. {footer.rights} {footer.disclaimer}
            </p>
            <p>
              <a href="/privacidade" className="font-semibold text-white underline-offset-4 hover:underline">
                {site.privacy.linkLabel}
              </a>
            </p>
            <p>
              {footer.portfolioPrefix}{" "}
              <a
                href={author.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-white underline-offset-4 hover:underline"
              >
                <GitHubIcon className="size-3.5" />
                {author.name}
                <span className="sr-only">{ui.externalLinkHint}</span>
              </a>
            </p>
          </div>
          <a href={`/#${site.sections.home}`} className="inline-flex items-center gap-1.5 self-start rounded-full border border-white/20 px-3 py-1.5 hover:bg-white/10 sm:self-auto">
            <ArrowUp className="size-3.5" aria-hidden="true" />
            {footer.backToTop}
          </a>
        </Container>
      </div>
    </footer>
  );
}
