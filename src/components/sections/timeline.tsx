"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

import { site } from "@/config/site";
import { getIcon } from "@/lib/icons";

/** Linha do tempo cuja linha "preenche" conforme a rolagem. */
export function Timeline() {
  const { steps } = site;
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <ol ref={ref} className="relative mx-auto mt-14 max-w-3xl">
      {/* trilho */}
      <div aria-hidden="true" className="absolute top-2 bottom-2 left-6 w-0.5 rounded-full bg-border sm:left-1/2 sm:-translate-x-1/2" />
      <motion.div
        aria-hidden="true"
        style={{ scaleY: progress }}
        className="absolute top-2 bottom-2 left-6 w-0.5 origin-top rounded-full bg-gradient-to-b from-primary to-warm sm:left-1/2 sm:-translate-x-1/2"
      />

      {steps.items.map((step, i) => {
        const Icon = getIcon(step.icon);
        const right = i % 2 === 1;
        return (
          <li key={step.title} className="relative grid grid-cols-[3rem_1fr] gap-5 pb-10 last:pb-0 sm:grid-cols-[1fr_3rem_1fr] sm:gap-8">
            <motion.span
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative z-10 col-start-1 row-start-1 grid size-12 place-items-center rounded-2xl border-4 border-background bg-primary text-primary-foreground shadow-soft sm:col-start-2"
            >
              <Icon className="size-5" aria-hidden="true" />
            </motion.span>
            <motion.div
              initial={{ opacity: 0, x: right ? 24 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={
                right
                  ? "col-start-2 row-start-1 sm:col-start-3"
                  : "col-start-2 row-start-1 sm:col-start-1 sm:text-right"
              }
            >
              <div className="rounded-3xl border bg-card p-5 shadow-soft sm:p-6">
                <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                  {steps.stepLabel} {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 text-lg font-bold sm:text-xl">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          </li>
        );
      })}
    </ol>
  );
}
