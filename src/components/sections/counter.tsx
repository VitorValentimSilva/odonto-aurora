"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

import type { Stat } from "@/config/types";

function format(value: number, decimals: number, locale: string) {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/** Número que conta de 0 até o valor quando entra na tela. */
export function Counter({ stat, locale }: { stat: Stat; locale: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const reduce = useReducedMotion();
  const decimals = stat.decimals ?? 0;
  const final = `${stat.prefix ?? ""}${format(stat.value, decimals, locale)}${stat.suffix ?? ""}`;

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;
    const render = (v: number) => {
      el.textContent = `${stat.prefix ?? ""}${format(v, decimals, locale)}${stat.suffix ?? ""}`;
    };
    if (reduce) {
      render(stat.value);
      return;
    }
    const controls = animate(0, stat.value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: render,
    });
    return () => controls.stop();
  }, [inView, reduce, stat, decimals, locale]);

  return (
    <>
      <span ref={ref} aria-hidden="true" className="tabular-nums">
        {`${stat.prefix ?? ""}${format(0, decimals, locale)}${stat.suffix ?? ""}`}
      </span>
      <span className="sr-only">{final}</span>
    </>
  );
}
