import { cacheLife } from "next/cache";

/** Ano atual para o rodapé (em cache por um dia, mantém as páginas estáticas). */
export async function currentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}
