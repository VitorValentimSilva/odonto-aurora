import { WhatsAppIcon } from "@/components/icons/brand-icons";
import { site } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/links";

export function WhatsAppFab() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${site.ui.whatsappFab} ${site.ui.externalLinkHint}`}
      className="group fixed right-4 bottom-4 z-40 grid size-14 animate-in place-items-center rounded-full bg-[#1f9d55] text-white shadow-lift transition-transform duration-300 fade-in zoom-in-50 [animation-delay:1.2s] [animation-duration:500ms] fill-mode-both hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <span aria-hidden="true" className="absolute inset-0 animate-soft-ping rounded-full bg-[#1f9d55]" />
      <WhatsAppIcon className="relative size-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden rounded-full bg-foreground px-3 py-1.5 text-xs font-medium whitespace-nowrap text-background opacity-0 shadow-soft transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
        {site.ui.whatsappFab}
      </span>
    </a>
  );
}
