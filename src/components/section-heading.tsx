import type { SectionHeading as Heading } from "@/config/types";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type Props = Heading & {
  id?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, id, align = "center", className }: Props) {
  return (
    <Reveal
      className={cn(
        "flex max-w-2xl flex-col gap-3",
        align === "center" ? "mx-auto items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <p className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold tracking-wide text-secondary-foreground uppercase">
        <span className="size-1.5 rounded-full bg-warm" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className="text-3xl leading-tight font-bold sm:text-4xl">
        {title}
      </h2>
      {description && <p className="text-base text-pretty text-muted-foreground sm:text-lg">{description}</p>}
    </Reveal>
  );
}
