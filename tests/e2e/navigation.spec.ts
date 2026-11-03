import { expect, test } from "@playwright/test";

import { localized } from "./helpers";

test("menu mobile abre, navega e fecha", async ({ page, isMobile }) => {
  test.skip(!isMobile, "menu em gaveta só existe no mobile");
  await page.goto(localized("/"));
  const trigger = page.locator("header button[aria-haspopup='dialog']");
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  const firstLink = dialog.locator("nav a").first();
  const href = await firstLink.getAttribute("href");
  await firstLink.click();
  await expect(dialog).toBeHidden();
  expect(page.url()).toContain(href!.slice(href!.indexOf("#")));
});

test("menu mobile fecha com Esc", async ({ page, isMobile }) => {
  test.skip(!isMobile, "menu em gaveta só existe no mobile");
  await page.goto(localized("/"));
  await page.locator("header button[aria-haspopup='dialog']").click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toBeHidden();
});

test("menu desktop marca a seção ativa ao rolar", async ({ page, isMobile }) => {
  test.skip(isMobile, "menu horizontal só existe no desktop");
  await page.goto(localized("/"));
  const links = page.locator("header nav a");
  const href = (await links.nth(1).getAttribute("href"))!;
  const id = href.slice(href.indexOf("#") + 1);
  await page.evaluate((i) => document.getElementById(i)?.scrollIntoView({ behavior: "instant" }), id);
  await expect(links.nth(1)).toHaveAttribute("aria-current", "true");
});

test("link de pular para o conteúdo é o primeiro foco", async ({ page, isMobile }) => {
  test.skip(isMobile, "teclado físico");
  await page.goto(localized("/"));
  await page.keyboard.press("Tab");
  const focused = await page.evaluate(() => document.activeElement?.getAttribute("href"));
  expect(focused).toBe("#conteudo");
});
