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

test("cookie banner stays gone after refresh", async ({ page }) => {
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

test("test that kevin is a director of his own company", async ({ page }) => {
  await page.goto(
    "https://www.gov.uk/government/organisations/companies-house"
  );
  await page.getByRole("link", { name: "Find company information" }).click();
  await page.getByRole("button", { name: "Start now" }).click();

  // Fill in the search field with the right details
  await page
    .getByLabel("Enter company name, number or")
    .fill("doing and learning");

  await page.getByRole("button", { name: "Search" }).click();

  // Capture the company name to verify before clicking.
  const companyName = await page.getByRole("link", {
    name: "DOING AND LEARNING LTD",
  });
  await expect(companyName).toBeVisible();
  await companyName.click();

  await page
    .getByRole("link", { name: "People for DOING AND LEARNING" })
    .click();
  const name = await page.getByRole("link", {
    name: "CUNNINGHAM, Kevin Peter",
  });

  await expect(name).toBeVisible();
});
