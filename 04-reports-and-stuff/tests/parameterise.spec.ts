import { test, expect } from "@playwright/test";
import testData from "./test-data.json";

test("check that the titles are right", async ({ page }) => {
  const urls = [
    { url: "https://google.com", title: "Google" },
    {
      url: "https://www.gov.uk/government/organisations/companies-house",
      title: "Companies House - GOV.UK",
    },
  ];

  for (const { url, title } of urls) {
    await page.goto(url);
    const actualTitle = await page.title();
    expect(actualTitle).toBe(title);
  }

  for (const item of urls) {
    await page.goto(item.url);
    const actualTitle = await page.title();
    expect(actualTitle).toBe(item.title);
  }
});

test("check that the titles are right (with import)", async ({ page }) => {
  for (const { url, title } of testData) {
    await page.goto(url);
    const actualTitle = await page.title();
    expect(actualTitle).toBe(title);
  }
});
