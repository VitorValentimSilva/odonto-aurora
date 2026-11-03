"use client";

import { CalendarCheck, Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // Scrollspy: destaca no menu a seção que ocupa o meio da tela.
  useEffect(() => {
    const sections = site.nav
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          // No topo da página (hero) nenhum item fica ativo.
          setActive(window.scrollY < window.innerHeight * 0.5 ? null : `#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      if (window.scrollY < window.innerHeight * 0.5) setActive(null);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/80 shadow-soft backdrop-blur-lg supports-[backdrop-filter]:bg-background/70"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <a href={`#${site.sections.home}`} aria-label={site.ui.homeLabel} className="rounded-lg">
          <Logo name={site.brand.name} />
        </a>

        <nav aria-label={site.ui.mainNavLabel} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active === item.href ? "true" : undefined}
                  className="relative rounded-full px-3 py-2 text-sm font-medium text-foreground/75 transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-primary after:transition-transform hover:bg-secondary hover:text-foreground aria-[current=true]:text-foreground aria-[current=true]:after:scale-x-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden h-10 rounded-full px-5 font-semibold shadow-soft sm:inline-flex">
            <a href={site.ui.headerCta.href}>
              <CalendarCheck aria-hidden="true" />
              {site.ui.headerCta.label}
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon-lg" className="rounded-full bg-background/70 lg:hidden" aria-label={site.ui.openMenu}>
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" closeLabel={site.ui.closeMenu} className="w-[85vw] max-w-sm gap-0 p-0">
              <SheetHeader className="border-b p-5">
                <SheetTitle className="text-left">
                  <Logo name={site.brand.name} />
                </SheetTitle>
                <SheetDescription className="text-left">{site.brand.slogan}</SheetDescription>
              </SheetHeader>
              <nav aria-label={site.ui.menuTitle} className="flex-1 overflow-y-auto p-3">
                <ul className="flex flex-col gap-1">
                  {site.nav.map((item) => (
                    <li key={item.href}>
                      <SheetClose asChild>
                        <a
                          href={item.href}
                          aria-current={active === item.href ? "true" : undefined}
                          className="flex rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-secondary aria-[current=true]:bg-secondary aria-[current=true]:text-primary"
                        >
                          {item.label}
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="border-t p-5">
                <SheetClose asChild>
                  <Button asChild size="xl" className="w-full">
                    <a href={site.ui.headerCta.href}>
                      <CalendarCheck aria-hidden="true" />
                      {site.ui.headerCta.label}
                    </a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
