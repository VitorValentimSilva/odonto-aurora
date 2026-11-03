/**
 * Teste de ponta a ponta do formulário de agendamento (requer `npm run start`).
 *   npm run test:form
 * Verifica: mensagens de erro do zod, máscara de telefone e link wa.me gerado.
 */
import assert from "node:assert/strict";
import puppeteer from "puppeteer-core";

const BASE_URL = process.env.BASE_URL ?? "http://localhost:3000";
const CHROME_PATH = process.env.CHROME_PATH ?? "/usr/bin/google-chrome";

const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: true, args: ["--no-sandbox"] });
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto(`${BASE_URL}/#agendar`, { waitUntil: "networkidle0" });

  // Captura o window.open em vez de abrir uma nova aba.
  await page.evaluate(() => {
    window.__opened = [];
    window.open = (url) => {
      window.__opened.push(String(url));
      return {};
    };
  });

  const form = '[data-testid="booking-form"]';
  await page.waitForSelector(form);

  // 1) Envio vazio → erros de validação
  await page.click(`${form} button[type="submit"]`);
  await page.waitForSelector(`${form} [aria-invalid="true"]`);
  const errors = await page.$$eval(`${form} .text-destructive, ${form} [data-slot="form-message"]`, (els) => [
    ...new Set(els.map((e) => e.textContent.trim()).filter(Boolean)),
  ]);
  console.log("Erros exibidos:", errors);
  assert.ok(errors.length >= 4, "esperava ao menos 4 mensagens de erro");
  assert.equal(await page.evaluate(() => window.__opened.length), 0, "não deveria abrir o WhatsApp com erros");

  // 2) Preenche
  await page.type(`${form} input[name="name"]`, "Maria Teste");
  await page.type(`${form} input[name="phone"]`, "19987654321");
  const masked = await page.$eval(`${form} input[name="phone"]`, (el) => el.value);
  console.log("Telefone com máscara:", masked);
  assert.equal(masked, "(19) 98765-4321");

  // Abre o Select pelo teclado (também valida a acessibilidade do componente).
  await page.focus(`${form} button[role="combobox"]`);
  await page.keyboard.press("Enter");
  await page.waitForSelector('[role="option"]');
  const options = await page.$$('[role="option"]');
  await options[1].click(); // Clareamento dental
  await page.waitForFunction(() => !document.querySelector('[role="listbox"]'));

  const periodLabels = await page.$$(`${form} fieldset label`);
  await periodLabels[1].click(); // Tarde
  await page.type(`${form} textarea[name="message"]`, "Tenho sensibilidade nos dentes.");

  await page.click(`${form} button[type="submit"]`);
  await page.waitForFunction(() => window.__opened.length > 0, { timeout: 5000 });
  const url = await page.evaluate(() => window.__opened[0]);
  const parsed = new URL(url);
  const text = parsed.searchParams.get("text") ?? "";
  console.log("URL:", `${parsed.origin}${parsed.pathname}`);
  console.log("Mensagem:\n" + text);

  assert.equal(parsed.origin + parsed.pathname, "https://wa.me/5519999999999");
  for (const piece of ["Maria Teste", "(19) 98765-4321", "Clareamento dental", "Tarde", "Tenho sensibilidade"]) {
    assert.ok(text.includes(piece), `mensagem deveria conter "${piece}"`);
  }

  await page.waitForSelector("[data-sonner-toast]", { timeout: 5000 });
  const toastText = await page.$eval("[data-sonner-toast]", (el) => el.textContent);
  console.log("Toast:", toastText);
  console.log("\n✓ Formulário OK");
} finally {
  await browser.close();
}
