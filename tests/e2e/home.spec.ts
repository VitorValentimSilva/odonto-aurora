import { expect, test } from "@playwright/test";

import { collectErrors, scrollThrough } from "./helpers";

test.describe("página inicial", () => {
  test("carrega sem erros de console e com um único h1", async ({ page }) => {
    const errors = collectErrors(page);
    await page.goto("/");
    await scrollThrough(page);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(1);
    expect(errors).toEqual([]);
  });

  test("todos os links internos (#) apontam para elementos existentes", async ({ page }) => {
    await page.goto("/");
    const broken = await page.evaluate(() =>
      [...document.querySelectorAll<HTMLAnchorElement>('a[href*="#"]')]
        .map((a) => new URL(a.href))
        .filter((u) => u.pathname === location.pathname && u.hash.length > 1)
        .map((u) => decodeURIComponent(u.hash.slice(1)))
        .filter((id) => !document.getElementById(id)),
    );
    expect(broken).toEqual([]);
  });

  test("links externos abrem em nova aba com rel seguro", async ({ page }) => {
    await page.goto("/");
    const unsafe = await page.evaluate(() =>
      [...document.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]')]
        .filter((a) => !a.rel.includes("noopener"))
        .map((a) => a.href),
    );
    expect(unsafe).toEqual([]);
  });

  for (const width of [360, 768, 1024, 1440]) {
    test(`sem rolagem horizontal em ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/");
      await scrollThrough(page);
      const overflowing = await page.evaluate(() => {
        const vw = document.documentElement.clientWidth;
        const clipped = (el: Element) => {
          for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
            if (["hidden", "clip", "auto", "scroll"].includes(getComputedStyle(p).overflowX)) return true;
          }
          return false;
        };
        return [...document.querySelectorAll("body *")]
          .filter((el) => {
            const r = el.getBoundingClientRect();
            return r.width > 0 && (r.right > vw + 1 || r.left < -1) && getComputedStyle(el).position !== "fixed" && !clipped(el);
          })
          .slice(0, 5)
          .map((el) => `${el.tagName.toLowerCase()}.${String(el.className).slice(0, 50)}`);
      });
      expect(overflowing).toEqual([]);
    });
  }
});

test("página 404 responde com status 404 e conteúdo localizado", async ({ page }) => {
  const response = await page.goto("/pagina-que-nao-existe");
  expect(response?.status()).toBe(404);
  await expect(page.locator("h1")).toBeVisible();
  await expect(page.getByRole("link").filter({ hasText: /\S/ }).first()).toBeVisible();
  expect(await page.title()).not.toMatch(/could not be found/i);
});

test("cabeçalhos de segurança presentes", async ({ request }) => {
  const res = await request.get("/");
  const headers = res.headers();
  expect(headers["content-security-policy"]).toContain("frame-ancestors 'none'");
  expect(headers["x-content-type-options"]).toBe("nosniff");
  expect(headers["referrer-policy"]).toBeTruthy();
  expect(headers["x-powered-by"]).toBeUndefined();
});

test("arquivos de SEO respondem", async ({ request }) => {
  for (const path of ["/privacidade", "/robots.txt", "/sitemap.xml", "/manifest.webmanifest", "/opengraph-image", "/icon"]) {
    const res = await request.get(path);
    expect(res.status(), path).toBe(200);
  }
});
