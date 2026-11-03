import { expect, test } from "@playwright/test";

test("política de privacidade abre pelo rodapé", async ({ page }) => {
  await page.goto("/");
  await page.locator('footer a[href="/privacidade"]').click();
  await expect(page).toHaveURL(/\/privacidade$/);
  await expect(page.locator("h1")).toBeVisible();
  expect(await page.locator("main h2").count()).toBeGreaterThan(2);
});

test("menu da página de privacidade leva às seções da home", async ({ page, isMobile }) => {
  test.skip(isMobile, "menu horizontal só existe no desktop");
  await page.goto("/privacidade");
  const href = (await page.locator("header nav a").first().getAttribute("href"))!;
  expect(href.startsWith("/#")).toBe(true);
  await page.locator("header nav a").first().click();
  await expect(page).toHaveURL(new RegExp(`/${href.slice(1)}$`));
  await expect(page.locator(href.slice(1))).toBeInViewport();
});

test("formulário tem link para a política de privacidade", async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => document.querySelector('[data-section="booking"]')?.scrollIntoView({ behavior: "instant" }));
  await expect(page.getByTestId("booking-form").locator('a[href="/privacidade"]')).toBeVisible();
});
