"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";

import { site } from "@/config/site";

// O Toaster só é necessário depois de uma interação: fica fora do bundle inicial.
const Toaster = dynamic(() => import("@/components/ui/sonner").then((mod) => mod.Toaster), { ssr: false });

export function Providers({ children }: { children: ReactNode }) {
  return (
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
  );
}
