- Navigating to a URL: Ensures each test starts at a specific URL.
- Mocking Network Responses: Mocks network responses for isolation.
- Setting Cookies: Sets cookies before each test.
- User Authentication: Logs in a user before each test.
- Configuring Viewport: Sets the viewport size for consistent layout.
- Clearing Local Storage: Ensures local storage is empty before each test.
- Setting Up Test Data: Sets up test data by interacting with an API.
- Capturing Console Logs: Captures console logs for debugging.

```ts
import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  page.on("console", (msg) => {
    throw new Error(`Console message: ${msg}`);
  });
  await page.goto("https://www.example.com");
});

test("Verify page title", async ({ page }) => {
  const title = await page.title();
  expect(title).toBe("Example Domain");
});
```

- Emulating a Mobile Device: Sets up the page to emulate a mobile device.

```ts
import { test, devices, expect } from "@playwright/test";

test.use({
  viewport: devices["iPhone 11"].viewport,
  userAgent: devices["iPhone 11"].userAgent,
});

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.example.com");
});

test("Verify mobile layout", async ({ page }) => {
  const mobileMenu = page.locator("#mobile-menu");
  await expect(mobileMenu).toBeVisible();
});
```

- Injecting JavaScript: Injects custom JavaScript into the page.

```ts
import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.example.com");
  await page.addInitScript(() => {
    window.localStorage.setItem("example-key", "example-value");
  });
});

test("Verify custom script ran", async ({ page }) => {
  const localStorageValue = await page.evaluate(() =>
    localStorage.getItem("example-key")
  );
  expect(localStorageValue).toBe("example-value");
});
```
