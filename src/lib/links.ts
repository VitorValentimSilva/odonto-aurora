import type { SiteConfig } from "@/config/types";

/** Link wa.me com mensagem pré-preenchida. */
export function buildWhatsAppUrl(site: Pick<SiteConfig, "contact">, message?: string) {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message ?? site.contact.defaultWhatsAppMessage)}`;
}

/** Link do Google Maps (busca pelo endereço, sem iframe). */
export function buildMapsUrl(site: Pick<SiteConfig, "address">) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.full)}`;
}
