import { test, expect } from "@playwright/test";

test("companies house title is correct", async ({ page }) => {
  // go to the webpage
  await page.goto(
    "https://www.gov.uk/government/organisations/companies-house"
  );
  // find the title
  const title = await page.title();
  // verify it is correct
  expect(title).toBe("Companies House - GOV.UK");
  await page.screenshot({
    path: "page.png",
  });
});

test("cookie banner visible when first load", async ({ page }) => {
  await page.goto(
    "https://www.gov.uk/government/organisations/companies-house"
  );
  // Capture the cookie banner
  const cookieBanner = await page.getByLabel("Cookies on GOV.UK");
  await expect(cookieBanner).toBeVisible();

  // await cookieBanner.screenshot({ path: "cookie-banner.png" });
});

test("test", async ({ page }) => {
  await page.goto(
    "https://www.gov.uk/government/organisations/companies-house"
  );
  const cookieBanner = await page.getByLabel("Cookies on GOV.UK");
  await expect(cookieBanner).toBeVisible();

  // Accept the cookies and hide the message
  await page.getByRole("button", { name: "Accept additional cookies" }).click();
  await page.getByRole("button", { name: "Hide this message" }).click();

  await expect(cookieBanner).not.toBeVisible();

  // Refresh the page
  await page.goto(
    "https://www.gov.uk/government/organisations/companies-house"
  );
  await page.reload();

  await expect(cookieBanner).not.toBeVisible();
});
