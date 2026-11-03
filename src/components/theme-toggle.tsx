"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

const order = ["light", "dark", "system"] as const;
type Mode = (typeof order)[number];
const icons = { light: Sun, dark: Moon, system: Monitor } satisfies Record<Mode, unknown>;

const noop = () => () => {};

/** Alterna entre claro → escuro → sistema. Só mostra o estado real depois de montar (evita divergência de hidratação). */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(noop, () => true, () => false);
  const current: Mode = mounted && order.includes(theme as Mode) ? (theme as Mode) : "system";
  const Icon = icons[current];
  const next = order[(order.indexOf(current) + 1) % order.length];
  const labels = site.ui.theme;

  return (
    <Button
      type="button"
      variant="outline"
      size="icon-lg"
      className={cn("rounded-full bg-background/70", className)}
      onClick={() => setTheme(next)}
      aria-label={labels.toggle(labels[current])}
      title={labels.toggle(labels[current])}
    >
      <Icon aria-hidden="true" />
    </Button>
  );
}
