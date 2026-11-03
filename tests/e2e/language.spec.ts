import { expect, test } from "@playwright/test";

import { localized } from "./helpers";

/** Abre a página, segue o seletor de idioma e volta: deve cair na mesma página de origem. */
async function roundTrip(page: import("@playwright/test").Page, path: string) {
  await page.goto(path);
  const langBefore = await page.locator("html").getAttribute("lang");
  const switcher = page.locator("header a[hreflang]").first();
  const target = (await switcher.getAttribute("href"))!;

  const res = await page.goto(target);
  expect(res?.status(), target).toBe(200);
  expect(await page.locator("html").getAttribute("lang")).not.toBe(langBefore);
  await expect(page.locator("h1:visible")).toHaveCount(1);

  const back = (await page.locator("header a[hreflang]").first().getAttribute("href"))!;
  expect(back).toBe(path);
}

test("seletor de idioma leva à home equivalente e volta", async ({ page }) => {
  await roundTrip(page, localized("/"));
});

test("seletor de idioma mantém a página de item e a de privacidade", async ({ page }) => {
  await page.goto(localized("/"));
  const item = await page.locator("main section a[href*='/']").evaluateAll((as) =>
    as.map((a) => a.getAttribute("href")!).find((h) => /^(\/en)?\/[^/#]+\/[^/#]+$/.test(h) && !/^\/en\/[^/#]+$/.test(h)),
  );
  const privacy = (await page.locator('footer a[data-testid="privacy-link"]').getAttribute("href"))!;
  await roundTrip(page, item!);
  await roundTrip(page, privacy);
});

test("páginas declaram hreflang dos dois idiomas", async ({ page }) => {
  await page.goto(localized("/"));
  const langs = await page.locator('link[rel="alternate"][hreflang]').evaluateAll((ls) => ls.map((l) => l.getAttribute("hreflang")));
  expect(langs).toEqual(expect.arrayContaining(["pt-BR", "en", "x-default"]));
});

test("/pt redireciona para a versão sem prefixo", async ({ request }) => {
  const res = await request.get("/pt", { maxRedirects: 0 });
  expect(res.status()).toBe(308);
  expect(res.headers().location).toMatch(/\/$/);
});
