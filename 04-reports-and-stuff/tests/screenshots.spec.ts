import { test, expect } from "@playwright/test";

test("Take a screenshot", async ({ page }) => {
  await page.goto(
    "https://www.gov.uk/government/organisations/companies-house"
  );

  // Default screenshot of the full viewport
  await page.screenshot({ path: `screenshot-${new Date().getTime()}.png` });
  await page.screenshot({
    path: `full-screenshot-${new Date().getTime()}.png`,
    fullPage: true,
  });

  // Screenshot of a specific element
  const cookieBanner = page.locator("#global-cookie-message");
  await cookieBanner.screenshot({ path: `banner-${new Date().getTime()}.png` });

  await page.setViewportSize({ width: 640, height: 480 });
  await page.screenshot({
    path: `mobile-full-screenshot-${new Date().getTime()}.png`,
    fullPage: true,
  });
});

test("toHaveScreenshot() to check visual regression", async ({ page }) => {
  await page.goto(
    "https://www.gov.uk/government/organisations/companies-house"
  );

  await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });
});
