"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

/**
 * O formulário (react-hook-form + zod + Select) é carregado só quando a seção
 * se aproxima da tela, mantendo o JavaScript inicial da página enxuto.
 */
const BookingForm = dynamic(() => import("./booking-form").then((mod) => mod.BookingForm), {
  ssr: false,
  loading: () => <FormSkeleton />,
});

function FormSkeleton() {
  return (
    <div aria-hidden="true" className="grid animate-pulse gap-5 sm:grid-cols-2">
      {["sm:col-span-2", "", "", "sm:col-span-2", "sm:col-span-2"].map((span, i) => (
        <div key={i} className={`flex flex-col gap-2 ${span}`}>
          <div className="h-3.5 w-28 rounded bg-muted" />
          <div className={`rounded-xl bg-muted ${i === 4 ? "h-28" : "h-12"}`} />
        </div>
      ))}
      <div className="h-12 rounded-full bg-muted sm:col-span-2" />
    </div>
  );
}

export function LazyBookingForm() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "800px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <div ref={ref}>{visible ? <BookingForm /> : <FormSkeleton />}</div>;
}
