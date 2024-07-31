import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.gov.uk/");
  await page.getByRole("button", { name: "Accept additional cookies" }).click();
  await page.getByRole("button", { name: "Hide this message" }).click();
  await page.getByLabel("Search", { exact: true }).click();
  await page.getByLabel("Search", { exact: true }).fill("companies house");
  await page.getByLabel("Search", { exact: true }).press("Enter");
  await page
    .getByRole("link", { name: "Companies House", exact: true })
    .click();
  await page.getByRole("link", { name: "Find company information" }).click();
});
