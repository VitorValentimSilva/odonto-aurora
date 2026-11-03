import { createElement, type SVGProps } from "react";

import { icons, type IconName } from "@/lib/icons";

/** Renderiza um ícone do mapa `src/lib/icons.ts` pelo nome (útil quando o nome vem do site.ts). */
export function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  return createElement(icons[name], { "aria-hidden": true, ...props });
}
