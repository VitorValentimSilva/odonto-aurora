import { expect, test } from "@playwright/test";

test("tema segue o sistema por padrão", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  await expect(page.locator("html")).toHaveClass(/dark/);
});

test("botão alterna claro → escuro → sistema e lembra a escolha", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/");
  const html = page.locator("html");
  const toggle = page.locator("header").getByRole("button", { name: /:/ }).first();

  await toggle.click(); // sistema → claro
  await expect(html).not.toHaveClass(/dark/);
  await toggle.click(); // claro → escuro
  await expect(html).toHaveClass(/dark/);

  await page.reload();
  await expect(html).toHaveClass(/dark/);
});
