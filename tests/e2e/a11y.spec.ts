import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

import { scrollThrough } from "./helpers";

for (const colorScheme of ["light", "dark"] as const) {
  test(`sem violações de acessibilidade sérias ou críticas (axe, tema ${colorScheme})`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce", colorScheme });
    await page.goto("/");
    await scrollThrough(page);
    await page.waitForTimeout(800);
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
    const serious = results.violations.filter((v) => v.impact === "serious" || v.impact === "critical");
    expect(serious.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).slice(0, 3).join(", ")}`)).toEqual([]);
  });
}
