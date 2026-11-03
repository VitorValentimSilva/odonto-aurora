import { Star } from "lucide-react";

import { site } from "@/config/site";
import { cn } from "@/lib/utils";

export function Stars({ rating, className }: { rating: number; className?: string }) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} role="img" aria-label={site.ui.starsLabel(rating)}>
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
