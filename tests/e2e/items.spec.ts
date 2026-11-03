import { expect, test } from "@playwright/test";

import { localized } from "./helpers";

/** Links dos cards da seção de tratamentos/cardápio para as páginas de item. */
async function itemLinks(page: import("@playwright/test").Page) {
  await page.goto(localized("/"));
  return page.evaluate(() => [
    ...new Set(
      [...document.querySelectorAll<HTMLAnchorElement>("main section a[href^='/']")]
        .map((a) => a.getAttribute("href")!)
        .filter((h) => /^(\/en)?\/[^/#]+\/[^/#]+$/.test(h) && !/^\/en\/[^/#]+$/.test(h)),
    ),
  ]);
}

test("cada card da home leva a uma página de item completa", async ({ page }) => {
  const links = await itemLinks(page);
  expect(links.length).toBeGreaterThanOrEqual(3);

  for (const href of links) {
    const res = await page.goto(href);
    expect(res?.status(), href).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("nav ol li[aria-current='page']")).toBeVisible();
    // JSON-LD com item, trilha e FAQ
    const types = await page.evaluate(() =>
      [...document.querySelectorAll('script[type="application/ld+json"]')].flatMap((s) =>
        [JSON.parse(s.textContent!)].flat().map((o: { "@type": string }) => o["@type"]),
      ),
    );
    expect(types).toEqual(expect.arrayContaining(["BreadcrumbList", "FAQPage"]));
    expect(await page.title()).not.toBe("");
  }
});

test("FAQ da página de item abre e mostra a resposta", async ({ page }) => {
  const [first] = await itemLinks(page);
  await page.goto(first);
  const trigger = page.locator("#item-faq-title ~ div button").first();
  await trigger.click();
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
});

test("item inexistente responde 404", async ({ page }) => {
  const [first] = await itemLinks(page);
  const base = first.slice(0, first.lastIndexOf("/"));
  const res = await page.goto(`${base}/item-que-nao-existe`);
  expect(res?.status()).toBe(404);
});
