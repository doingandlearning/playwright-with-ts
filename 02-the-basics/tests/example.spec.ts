import { test, expect } from "@playwright/test"; // Destructuring

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("our own test title", async ({ page }) => {
  // our test code in here
  // Given/Arrange
  // When/Act
  // Then/Assert
});

async function add(a: number, b: number) {
  return a + b;
}

// ->

const add1 = async (a: number, b: number) => {
  return a + b;
};

const add2 = async (a: number, b: number) => a + b;

add(1, 2);
add1(1, 2);
add2(1, 2);

// test(a, b);

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible(); // matchers

  // await expect( page.getByRole("heading", { name: "Installation" })).toBe()
});
