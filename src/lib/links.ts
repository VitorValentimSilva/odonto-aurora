import { site } from "@/config/site";

/** Link wa.me com mensagem pré-preenchida. */
export function buildWhatsAppUrl(message: string = site.contact.defaultWhatsAppMessage) {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Link do Google Maps (busca pelo endereço, sem iframe). */
export function buildMapsUrl(address: string = site.address.full) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}
