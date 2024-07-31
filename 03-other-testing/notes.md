### Session 3: Advanced Test Management

#### 1. Hooks: beforeEach and afterEach

##### Introduction to Hooks in Playwright

- **Hooks**: Special functions that run before or after each test.
  - **beforeEach**: Runs before each test to set up preconditions.
  - **afterEach**: Runs after each test to clean up.

##### Using beforeEach to Set Up Test Preconditions

- **Purpose**: Ensure consistent starting state for each test.
- **Example**:

  ```typescript
  import { test } from "@playwright/test";

  test.beforeEach(async ({ page }) => {
    await page.goto(
      "https://www.gov.uk/government/organisations/companies-house"
    );
  });

  test("check title", async ({ page }) => {
    const title = await page.title();
    expect(title).toBe("Companies House - GOV.UK");
  });
  ```

##### Using afterEach to Clean Up After Tests

- **Purpose**: Clean up actions after each test to ensure isolation.
- **Example**:

  ```typescript
  import { test } from "@playwright/test";

  test.afterEach(async ({ page }) => {
    // Example clean up action
    await page.close();
  });

  test("check title", async ({ page }) => {
    const title = await page.title();
    expect(title).toBe("Companies House - GOV.UK");
  });
  ```

##### Practical Examples and Best Practices

- **Consistent Setup**: Use `beforeEach` to navigate to the starting URL.
- **Clean Slate**: Use `afterEach` to close the page or clean local storage.

#### 2. Parameterization

##### Writing Flexible and Reusable Tests with Parameterization

- **Purpose**: Make tests flexible by running them with different sets of data.
- **Example**:

  ```typescript
  import { test, expect } from "@playwright/test";

  const urls = [
    { url: "https://www.gov.uk", title: "Welcome to GOV.UK" },
    { url: "https://www.gov.uk/contact", title: "Contact GOV.UK" },
  ];

  for (const { url, title } of urls) {
    test(`verify title for ${url}`, async ({ page }) => {
      await page.goto(url);
      const pageTitle = await page.title();
      expect(pageTitle).toBe(title);
    });
  }
  ```

##### Using External Data Sources for Test Parameters

- **Purpose**: Load test data from external sources like JSON files or APIs.
- **Example**:

  ```typescript
  import { test, expect } from "@playwright/test";
  import testData from "./test-data.json";

  for (const { url, title } of testData) {
    test(`verify title for ${url}`, async ({ page }) => {
      await page.goto(url);
      const pageTitle = await page.title();
      expect(pageTitle).toBe(title);
    });
  }
  ```

- **Sample `test-data.json`**:
  ```json
  [
    { "url": "https://www.gov.uk", "title": "Welcome to GOV.UK" },
    { "url": "https://www.gov.uk/contact", "title": "Contact GOV.UK" }
  ]
  ```

##### Implementing Parameterized Tests in Playwright

- **Approach**: Use loops and data-driven techniques to run tests with multiple data sets.
- **Example**:

  ```typescript
  import { test, expect } from "@playwright/test";

  const testData = [
    { searchTerm: "Companies House", expected: "Companies House" },
    { searchTerm: "HMRC", expected: "HM Revenue & Customs" },
  ];

  testData.forEach(({ searchTerm, expected }) => {
    test(`search for ${searchTerm}`, async ({ page }) => {
      await page.goto("https://www.gov.uk/search");
      await page.fill('input[name="q"]', searchTerm);
      await page.click('button[type="submit"]');
      const result = await page.textContent("h1");
      expect(result).toContain(expected);
    });
  });
  ```

#### Hands-On Exercise

**Objective**: Implement `beforeEach` and `afterEach` hooks, and create parameterized tests with external data.

1. **Implement `beforeEach` and `afterEach` Hooks**:

   - Set up a test that navigates to a specific page before each test.
   - Clean up actions after each test, such as closing the page.

2. **Create Parameterized Tests**:
   - Write tests that use multiple sets of data.
   - Load test data from an external JSON file.

**Exercise Example**:

1. **`beforeEach` and `afterEach` Hooks**:

   ```typescript
   import { test, expect } from "@playwright/test";

   test.beforeEach(async ({ page }) => {
     await page.goto("https://www.gov.uk");
   });

   test.afterEach(async ({ page }) => {
     await page.close();
   });

   test("check homepage title", async ({ page }) => {
     const title = await page.title();
     expect(title).toBe("Welcome to GOV.UK");
   });
   ```

2. **Parameterized Tests**:

   ```typescript
   import { test, expect } from "@playwright/test";
   import testData from "./test-data.json";

   testData.forEach(({ url, title }) => {
     test(`verify title for ${url}`, async ({ page }) => {
       await page.goto(url);
       const pageTitle = await page.title();
       expect(pageTitle).toBe(title);
     });
   });
   ```

**Expected Outcome**: Participants will learn how to use hooks for setup and cleanup, and create flexible tests using parameterization with external data sources.

```ts
test("Take a screenshot", async ({ page }) => {
  await page.goto(
    "https://www.gov.uk/government/organisations/companies-house"
  );

  // Default screenshot of the full viewport
  await page.screenshot({ path: "screenshot.png" });

  // Screenshot of a specific element
  const cookieBanner = page.locator("#global-cookie-message");
  await cookieBanner.screenshot({ path: "cookie-banner.png" });

  // Full page screenshot
  await page.screenshot({ path: "fullpage-screenshot.png", fullPage: true });

  // Screenshot with specific viewport size
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.screenshot({ path: "viewport-screenshot.png" });
});
```
