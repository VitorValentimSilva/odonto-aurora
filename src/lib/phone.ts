/** Mantém só dígitos (máx. 11: DDD + 9 dígitos). */
export function onlyDigits(value: string, max = 11) {
  return value.replace(/\D/g, "").slice(0, max);
}

/** Máscara brasileira: (19) 99999-9999 ou (19) 3333-4444. */
export function formatBrazilianPhone(value: string) {
  const d = onlyDigits(value);
  if (d.length === 0) return "";
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

/** Válido com DDD: 10 (fixo) ou 11 dígitos (celular começando com 9). */
export function isValidBrazilianPhone(value: string) {
  const d = onlyDigits(value, 20);
  if (d.length === 11) return d[2] === "9";
  return d.length === 10;
}
