/**
 * Tira prints de página inteira do site rodando em produção.
 *
 *   npm run build && npm run start   # em outro terminal
 *   npm run screenshots              # gera docs/screenshots/{mobile,desktop}.png
 *
 * Variáveis: CHROME_PATH (binário do Chrome/Chromium) e BASE_URL (padrão http://localhost:3000).
 */
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";

const BASE_URL = process.env.BASE_URL ?? "http://localhost:3000";
const CHROME_PATH = process.env.CHROME_PATH ?? "/usr/bin/google-chrome";
const OUT = fileURLToPath(new URL("../docs/screenshots/", import.meta.url));

const targets = [
  { name: "mobile", width: 375, height: 812, mobile: true, save: true },
  { name: "desktop", width: 1440, height: 900, mobile: false, save: true },
  // larguras extras: só verificam rolagem horizontal
  { name: "360", width: 360, height: 780, mobile: true },
  { name: "768", width: 768, height: 1024, mobile: true },
  { name: "1024", width: 1024, height: 768, mobile: false },
];

/** Lista elementos que vazam a largura da janela (ignorando os que estão dentro de containers com overflow escondido). */
function findOverflowing() {
  const vw = document.documentElement.clientWidth;
  const clipped = (el) => {
    for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
      const o = getComputedStyle(p).overflowX;
      if (o === "hidden" || o === "clip" || o === "auto" || o === "scroll") return true;
    }
    return false;
  };
  return [...document.querySelectorAll("body *")]
    .filter((el) => {
      const r = el.getBoundingClientRect();
      return r.width > 0 && (r.right > vw + 1 || r.left < -1) && !clipped(el) && getComputedStyle(el).position !== "fixed";
    })
    .slice(0, 10)
    .map((el) => `${el.tagName.toLowerCase()}.${String(el.className).slice(0, 60)}`);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function scrollThrough(page) {
  // Rola a página aos poucos para disparar as animações de entrada.
  await page.evaluate(async () => {
    const step = window.innerHeight / 2;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo({ top: y, behavior: "instant" });
      await new Promise((r) => setTimeout(r, 150));
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  });
  await sleep(1800);
}

await mkdir(OUT, { recursive: true });
const browser = await puppeteer.launch({
  executablePath: CHROME_PATH,
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

try {
  for (const t of targets) {
    const page = await browser.newPage();
    await page.setViewport({ width: t.width, height: t.height, deviceScaleFactor: t.mobile ? 2 : 1, isMobile: t.mobile, hasTouch: t.mobile });
    await page.goto(BASE_URL, { waitUntil: "networkidle0" });
    await page.evaluate(() => document.fonts.ready);
    await scrollThrough(page);

    const offenders = await page.evaluate(findOverflowing);
    console.log(`${t.name} (${t.width}px): ${offenders.length ? "⚠️ elementos vazando:\n  " + offenders.join("\n  ") : "sem rolagem horizontal ✓"}`);
    if (!t.save) {
      await page.close();
      continue;
    }

    const file = `${OUT}${t.name}.png`;
    await page.screenshot({ path: file, fullPage: true });
    console.log(`✓ ${file}`);
    await page.close();
  }
} finally {
  await browser.close();
}
