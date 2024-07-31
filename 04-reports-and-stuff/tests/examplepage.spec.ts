import { test, expect } from "@playwright/test";
import { ExamplePage } from "./ExamplePage";

test("title is correct", async ({ page }) => {
  const examplePage = new ExamplePage(page);

  await expect(examplePage.getTitle("https://google.com")).toBe("Google");
});
