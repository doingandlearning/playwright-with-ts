import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.locator("body").click();
  await page.locator("html").click();
  await page.goto(
    "https://www.csm-testcenter.org/test?do=test&subdo=file_upload"
  );
  await expect(
    page.getByRole("cell", { name: "File successfully uploaded" })
  ).toBeVisible();
  await page.getByRole("cell", { name: "File successfully uploaded" }).click();
  await page
    .getByRole("cell", { name: "File successfully uploaded" })
    .dblclick();
});
