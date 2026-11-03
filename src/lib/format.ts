/** Preenche um modelo como "Avaliação: {rating}" com os valores dados. */
export function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
}

/** Monta a mensagem do WhatsApp a partir dos rótulos do site.ts (sem campos vazios). */
export function buildWhatsAppMessage(
  template: { intro: string; fields: Record<string, string> },
  values: Record<string, string | undefined>,
) {
  const lines = Object.entries(template.fields)
    .filter(([key]) => values[key])
    .map(([key, label]) => `*${label}:* ${values[key]}`);
  return [template.intro, "", ...lines].join("\n");
}
