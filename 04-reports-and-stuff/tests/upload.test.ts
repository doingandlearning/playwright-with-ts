import { test, expect } from "@playwright/test";
import { resolve } from "node:path";
test("test", async ({ page }) => {
  await page.goto(
    "https://www.csm-testcenter.org/test?do=show&subdo=common&test=file_upload"
  );

  const filePath = resolve("tests/test-data.json");
  await page
    .locator("tbody")
    .filter({
      hasText:
        "File to upload Enable re-download (requires cookies) Start HTTPS upload",
    })
    .getByRole("textbox")
    .setInputFiles(filePath);
  await page.getByRole("button", { name: "Start HTTPS upload" }).click();
  await expect(page.getByText("File successfully uploaded")).toBeVisible();
});
