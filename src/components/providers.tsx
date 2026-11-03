"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

import { SiteProvider } from "@/components/site-provider";
import type { ClientSite, LocaleRoutes } from "@/config/client-site";

// O Toaster só é necessário depois de uma interação: fica fora do bundle inicial.
const Toaster = dynamic(() => import("@/components/ui/sonner").then((mod) => mod.Toaster), { ssr: false });

type Props = { site: ClientSite; routes: LocaleRoutes; children: ReactNode };

export function Providers({ site, routes, children }: Props) {
  return (
    <SiteProvider site={site} routes={routes}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <LazyMotion features={domAnimation} strict>
          <MotionConfig reducedMotion="user">
            {children}
            <Toaster
              position="top-center"
              richColors
              closeButton
              containerAriaLabel={site.ui.notifications}
              toastOptions={{ closeButtonAriaLabel: site.ui.closeNotification }}
            />
          </MotionConfig>
        </LazyMotion>
      </ThemeProvider>
    </SiteProvider>
  );
}
