import { expect, test } from "@playwright/test";

import { localized } from "./helpers";

test("formulário valida campos e abre o WhatsApp com a mensagem montada", async ({ page }) => {
  await page.addInitScript(() => {
    (window as unknown as { __opened: string[] }).__opened = [];
    window.open = ((url?: string | URL) => {
      (window as unknown as { __opened: string[] }).__opened.push(String(url));
      return {} as Window;
    }) as typeof window.open;
  });
  await page.goto(localized("/"));
  await page.evaluate(() => document.querySelector('[data-section="booking"]')?.scrollIntoView({ behavior: "instant" }));

  const form = page.getByTestId("booking-form");
  await expect(form).toBeVisible();

  // 1) envio vazio → mensagens de erro, nada é aberto
  await form.locator('button[type="submit"]').click();
  await expect(form.locator('[aria-invalid="true"]').first()).toBeVisible();
  const errorCount = await form.locator('[data-slot="form-message"], #period-error').count();
  expect(errorCount).toBeGreaterThanOrEqual(4);
  expect(await page.evaluate(() => (window as unknown as { __opened: string[] }).__opened.length)).toBe(0);

  // 2) preenche
  await form.locator('input[name="name"]').fill("Maria Teste");
  await form.locator('input[name="phone"]').pressSequentially("19987654321");
  await expect(form.locator('input[name="phone"]')).toHaveValue("(19) 98765-4321");

  const combobox = form.getByRole("combobox");
  await combobox.focus();
  await page.keyboard.press("Enter");
  const option = page.getByRole("option").nth(1);
  const optionLabel = (await option.textContent())!.trim();
  await option.click();

  const period = form.locator("fieldset label").nth(1);
  const periodLabel = (await period.textContent())!.trim();
  await period.click();
  await form.locator('textarea[name="message"]').fill("Mensagem de teste automatizado.");

  const waHref = (await page.locator('a[href^="https://wa.me/"]').first().getAttribute("href"))!;
  const expectedBase = new URL(waHref).origin + new URL(waHref).pathname;

  await form.locator('button[type="submit"]').click();
  await expect.poll(() => page.evaluate(() => (window as unknown as { __opened: string[] }).__opened.length)).toBe(1);

  const opened = new URL(await page.evaluate(() => (window as unknown as { __opened: string[] }).__opened[0]));
  expect(opened.origin + opened.pathname).toBe(expectedBase);
  const text = opened.searchParams.get("text") ?? "";
  for (const piece of ["Maria Teste", "(19) 98765-4321", optionLabel, periodLabel, "Mensagem de teste"]) {
    expect(text).toContain(piece);
  }
  await expect(page.locator("[data-sonner-toast]")).toBeVisible();
});
