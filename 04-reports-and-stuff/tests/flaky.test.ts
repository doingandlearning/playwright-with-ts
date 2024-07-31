import { test, expect, chromium } from "@playwright/test";

//
test("our flaky test", async ({ page }) => {
  await page.goto("https://google.com", { timeout: 60000 }); // Increase the timeout!
  await page.waitForSelector("textarea", { state: "visible" }); // Wait for an element
  // Network stability
});

// Network stability
test("simulate network conditions", async ({ page }) => {
  // await page.route("**/*", (route) => route.continue({ latency: 200 }));
  await page.goto("https://example.com");
});

test("test without fixture", async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://google.com");
  await page.waitForTimeout(5000);
  // Do everything we want to do with the page!
});
