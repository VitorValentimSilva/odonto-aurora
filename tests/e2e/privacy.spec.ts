import { expect, test } from "@playwright/test";

import { localized } from "./helpers";

test("política de privacidade abre pelo rodapé", async ({ page }) => {
  await page.goto(localized("/"));
  const link = page.locator('footer a[data-testid="privacy-link"]');
  const href = (await link.getAttribute("href"))!;
  await link.click();
  await expect(page).toHaveURL(new RegExp(`${href}$`));
  // navegação no cliente: o Next mantém a página anterior oculta (Activity) para o "voltar" ser instantâneo
  await expect(page.locator("h1:visible")).toHaveCount(1);
  expect(await page.locator("main:visible h2").count()).toBeGreaterThan(2);
});

test("menu da página de privacidade leva às seções da home", async ({ page, isMobile }) => {
  test.skip(isMobile, "menu horizontal só existe no desktop");
  await page.goto(localized("/"));
  const privacy = (await page.locator('footer a[data-testid="privacy-link"]').getAttribute("href"))!;
  await page.goto(privacy);
  const href = (await page.locator("header nav a").first().getAttribute("href"))!;
  expect(href).toContain("#");
  await page.locator("header nav a").first().click();
  const id = href.slice(href.indexOf("#"));
  await expect(page).toHaveURL(new RegExp(`${id}$`));
  await expect(page.locator(id)).toBeInViewport();
});

test("formulário tem link para a política de privacidade", async ({ page }) => {
  await page.goto(localized("/"));
  await page.evaluate(() => document.querySelector('[data-section="booking"]')?.scrollIntoView({ behavior: "instant" }));
  await expect(page.getByTestId("booking-form").getByTestId("privacy-link")).toBeVisible();
});
