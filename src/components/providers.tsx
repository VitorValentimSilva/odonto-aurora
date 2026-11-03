"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

import { Toaster } from "@/components/ui/sonner";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
      <Toaster position="top-center" richColors closeButton />
    </MotionConfig>
  );
}
