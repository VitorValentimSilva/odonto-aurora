"use client";

import { motion, type HTMLMotionProps, type Variants } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

type RevealProps = HTMLMotionProps<"div"> & { delay?: number; y?: number };

/** Fade + slide ao entrar na tela (uma vez). */
export function Reveal({ delay = 0, y = 24, children, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.55, ease, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  as?: "div" | "ul" | "ol";
  stagger?: number;
  className?: string;
  children: ReactNode;
};

const viewport = { once: true, margin: "0px 0px -80px 0px" } as const;

/** Container que revela os filhos (`StaggerItem`) em sequência. */
export function Stagger({ stagger = 0.08, as = "div", className, children }: StaggerProps) {
  const Comp = as === "ul" ? motion.ul : as === "ol" ? motion.ol : motion.div;
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </Comp>
  );
}

type StaggerItemProps = { as?: "div" | "li"; className?: string; children: ReactNode };

export function StaggerItem({ as = "div", className, children }: StaggerItemProps) {
  const Comp = as === "li" ? motion.li : motion.div;
  return (
    <Comp className={className} variants={itemVariants}>
      {children}
    </Comp>
  );
}
