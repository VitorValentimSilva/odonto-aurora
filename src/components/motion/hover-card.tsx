"use client";

import type { HTMLMotionProps } from "motion/react";
import * as m from "motion/react-m";

/** Cartão com elevação suave no hover/foco (desativada com "reduzir movimento"). */
export function HoverCard({ children, ...props }: HTMLMotionProps<"article">) {
  return (
    <m.article
      whileHover={{ y: -6 }}
      whileFocus={{ y: -6 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      {...props}
    >
      {children}
    </m.article>
  );
}
