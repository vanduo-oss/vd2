import { chromium } from "@playwright/test";

const OUT = "/private/tmp/claude-501/-Users-misteruser-Documents-GitHub-0-vanduo/76d0c579-1fb9-42a8-95ac-d4a0ab3fb2dc/scratchpad";
const base = "http://localhost:8787";
const url = `${base}/guides/runtime-architecture`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });

// Vue 3 (default)
await page.goto(url, { waitUntil: "networkidle" });
await page.waitForTimeout: 500;
await page.waitForTimeout(500);
const v3 = page.locator("#runtime-architecture");
console.log("vue3 active badge text:", await page.locator(".runtime-active-badge").first().innerText());
console.log("vue3 first card title:", await page.locator(".vd-row .vd-card-header h6").first().innerText());
// order check: which column is visually first?
const colsV3 = await page.locator(".vd-row").first().locator(":scope > div").evaluateAll(els =>
  els.map(e => ({ order: getComputedStyle(e).order, title: e.querySelector("h6")?.innerText.trim() })));
console.log("vue3 column orders:", JSON.stringify(colsV3));
await page.screenshot({ path: `${OUT}/20-runtime-vue3.png`, clip: { x: 280, y: 120, width: 1110, height: 640 } });

// Vanilla — set the stored engine and reload
await page.evaluate(() => localStorage.setItem("vanduo-docs-engine", "vanilla"));
await page.reload({ waitUntil: "networkidle" });
await page.waitForTimeout(600);
console.log("vanilla active badge text:", await page.locator(".runtime-active-badge").first().innerText());
const colsVan = await page.locator(".vd-row").first().locator(":scope > div").evaluateAll(els =>
  els.map(e => ({ order: getComputedStyle(e).order, title: e.querySelector("h6")?.innerText.trim() })));
console.log("vanilla column orders:", JSON.stringify(colsVan));
await page.screenshot({ path: `${OUT}/21-runtime-vanilla.png`, clip: { x: 280, y: 120, width: 1110, height: 640 } });

await browser.close();
console.log("done");
