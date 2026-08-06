import { chromium } from "playwright";
const OUT = "/private/tmp/claude-501/-Users-amir-Documents-anthony-massage/9a7bf099-f2b8-4c65-83f8-632ba54d2930/scratchpad/";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1500, height: 950 } });
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
for (let i = 0; i < 30; i++) { await page.mouse.wheel(0, 900); await page.waitForTimeout(160); }
await page.waitForTimeout(2500);

const bg = async (sel) =>
  await page.locator(sel).evaluate((el) => getComputedStyle(el).backgroundColor);
console.log("our-approach:", await bg("#our-approach"));
console.log("testimonials:", await bg("#testimonials"));
console.log("faq        :", await bg("#faq"));

await page.locator("#testimonials").scrollIntoViewIfNeeded();
await page.waitForTimeout(2500);
await page.screenshot({ path: OUT + "seam-top.png" });
await page.locator("#faq").scrollIntoViewIfNeeded();
await page.waitForTimeout(2500);
await page.screenshot({ path: OUT + "seam-faq.png" });
await page.keyboard.press("End");
await page.waitForTimeout(3000);
await page.screenshot({ path: OUT + "seam-footer.png" });
await browser.close();
