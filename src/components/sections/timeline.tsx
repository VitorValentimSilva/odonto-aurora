"use client";

import { useScroll, useSpring } from "motion/react";
import * as m from "motion/react-m";
import { useRef } from "react";

import { site } from "@/config/site";
import { getIcon } from "@/lib/icons";

const viewport = { once: true, margin: "0px 0px -80px 0px" } as const;

/**
 * Linha do tempo cuja linha "preenche" conforme a rolagem.
 * Vertical no celular/tablet e horizontal (4 colunas) no desktop.
 */
export function Timeline() {
  const { steps } = site;
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <ol ref={ref} className="relative mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-4 lg:gap-6">
      {/* trilho vertical (até lg) */}
      <div aria-hidden="true" className="absolute top-2 bottom-2 left-6 w-0.5 rounded-full bg-border lg:hidden" />
      <m.div
        aria-hidden="true"
        style={{ scaleY: progress }}
        className="absolute top-2 bottom-2 left-6 w-0.5 origin-top rounded-full bg-gradient-to-b from-primary to-warm lg:hidden"
      />
      {/* trilho horizontal (lg+) */}
      <div aria-hidden="true" className="absolute top-6 right-[12.5%] left-[12.5%] hidden h-0.5 rounded-full bg-border lg:block" />
      <m.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="absolute top-6 right-[12.5%] left-[12.5%] hidden h-0.5 origin-left rounded-full bg-gradient-to-r from-primary to-warm lg:block"
      />

      {steps.items.map((step, i) => {
        const Icon = getIcon(step.icon);
        const number = String(i + 1).padStart(2, "0");
        return (
          <li key={step.title} className="relative grid grid-cols-[3rem_1fr] gap-5 lg:flex lg:flex-col lg:items-center lg:gap-6">
            <m.span
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={viewport}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: i * 0.08 }}
              className="relative z-10 grid size-12 place-items-center rounded-2xl border-4 border-background bg-primary text-primary-foreground shadow-soft"
            >
              <Icon className="size-5" aria-hidden="true" />
            </m.span>
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="h-full w-full"
            >
              <div className="relative h-full overflow-hidden rounded-3xl border bg-card p-5 shadow-soft sm:p-6">
                <span
                  aria-hidden="true"
                  className="absolute -top-2 right-4 font-heading text-6xl font-extrabold text-primary/[0.07] select-none"
                >
                  {number}
                </span>
                <p className="relative text-xs font-semibold tracking-wide text-primary uppercase">
                  {steps.stepLabel} {number}
                </p>
                <h3 className="relative mt-1 text-lg font-bold sm:text-xl">{step.title}</h3>
                <p className="relative mt-2 text-muted-foreground">{step.description}</p>
              </div>
            </m.div>
          </li>
        );
      })}
    </ol>
  );
}
