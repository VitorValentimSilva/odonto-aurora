import { test, type Page } from "@playwright/test";

/** Rola a página inteira para disparar as animações/carregamentos sob demanda. */
export async function scrollThrough(page: Page) {
  await page.evaluate(async () => {
    const step = Math.max(300, window.innerHeight / 2);
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo({ top: y, behavior: "instant" });
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  });
}

/** Coleta erros de console e exceções da página. */
export function collectErrors(page: Page) {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(err.message));
  return errors;
}

/** Prefixo do idioma do projeto atual ("" para português, "/en" para inglês). */
export function prefix() {
  return (test.info().project.metadata?.prefix as string | undefined) ?? "";
}

/** Caminho no idioma do projeto ("/" → "/" ou "/en"). */
export function localized(path: string) {
  const p = prefix();
  if (!p) return path;
  return path === "/" ? p : `${p}${path}`;
}
