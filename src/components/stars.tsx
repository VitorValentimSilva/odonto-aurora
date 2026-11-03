import { Star } from "lucide-react";

import { fill } from "@/lib/format";
import { cn } from "@/lib/utils";

/** Estrelas de avaliação. `labelTemplate` vem de `site.ui.starsLabel` (modelo com {rating}). */
export function Stars({ rating, labelTemplate, className }: { rating: number; labelTemplate: string; className?: string }) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} role="img" aria-label={fill(labelTemplate, { rating })}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={cn("size-4", i < Math.round(rating) ? "fill-amber-400 text-amber-400" : "fill-muted text-border")}
        />
      ))}
    </div>
  );
}
