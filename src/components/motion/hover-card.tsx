"use client";

import { motion, type HTMLMotionProps } from "motion/react";

/** Cartão com elevação suave no hover/foco (desativada com "reduzir movimento"). */
export function HoverCard({ children, ...props }: HTMLMotionProps<"article">) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      whileFocus={{ y: -6 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      {...props}
    >
      {children}
    </motion.article>
  );
}
