"use client";

import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

import type { Stat } from "@/config/types";

function format(stat: Stat, value: number, locale: string) {
  const decimals = stat.decimals ?? 0;
  const n = new Intl.NumberFormat(locale, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(value);
  return `${stat.prefix ?? ""}${n}${stat.suffix ?? ""}`;
}

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - 2 ** (-10 * t));

/** Número que conta de 0 até o valor quando entra na tela. */
export function Counter({ stat, locale, duration = 1600 }: { stat: Stat; locale: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;
    if (reduce) {
      el.textContent = format(stat, stat.value, locale);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      el.textContent = format(stat, stat.value * easeOutExpo(t), locale);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, stat, locale, duration]);

  return (
    <>
      <span ref={ref} aria-hidden="true" className="tabular-nums">
        {format(stat, 0, locale)}
      </span>
      <span className="sr-only">{format(stat, stat.value, locale)}</span>
    </>
  );
}
