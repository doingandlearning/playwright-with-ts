### Session 4: Running, Debugging, and Integrating Tests

#### 1. Running and Debugging Tests

##### Running Tests in Different Browsers

- **Playwright's Browser Support**:

  ```typescript
  import { test, expect, chromium, firefox, webkit } from "@playwright/test";

  test("run in Chromium", async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto("https://example.com");
    expect(await page.title()).toBe("Example Domain");
    await browser.close();
  });

  test("run in Firefox", async () => {
    const browser = await firefox.launch();
    const page = await browser.newPage();
    await page.goto("https://example.com");
    expect(await page.title()).toBe("Example Domain");
    await browser.close();
  });

  test("run in WebKit", async () => {
    const browser = await webkit.launch();
    const page = await browser.newPage();
    await page.goto("https://example.com");
    expect(await page.title()).toBe("Example Domain");
    await browser.close();
  });
  ```

##### Running Tests in Headless Mode

- **Headless Mode**:

  ```typescript
  import { test, expect, chromium } from "@playwright/test";

  test("run in headless mode", async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto("https://example.com");
    expect(await page.title()).toBe("Example Domain");
    await browser.close();
  });
  ```

##### Debugging Playwright Tests Using VSCode

- **Debugging in VSCode**:
  - Add the following configuration to your `.vscode/launch.json` file:
    ```json
    {
      "version": "0.2.0",
      "configurations": [
        {
          "name": "Playwright Test",
          "type": "node",
          "request": "launch",
          "program": "${workspaceFolder}/node_modules/@playwright/test/lib/cli.js",
          "args": ["test"],
          "console": "integratedTerminal",
          "internalConsoleOptions": "neverOpen"
        }
      ]
    }
    ```
  - Use breakpoints and the VSCode debugger to step through your tests.

##### Troubleshooting Common Issues

- **Common Issues and Fixes**:
  - **Timeouts**: Increase timeout settings for slower pages.
  - **Selectors Not Found**: Ensure selectors are correct and elements are visible.
  - **Network Issues**: Handle network conditions with appropriate Playwright settings.

#### 2. Test Reports

##### Configuring Playwright to Generate Test Reports

- **Playwright Reporters**:

  ```typescript
  import { defineConfig } from "@playwright/test";

  export default defineConfig({
    reporter: [["list"], ["html", { outputFolder: "playwright-report" }]],
  });
  ```

##### Types of Reports (HTML, JSON, etc.)

- **HTML Report**:
  ```sh
  npx playwright show-report
  ```
- **JSON Report**:
  ```typescript
  export default defineConfig({
    reporter: [["json", { outputFile: "test-results.json" }]],
  });
  ```

##### Interpreting and Using Test Report Data

- **HTML Report**: Open the generated HTML file to view a detailed report of your test runs.
- **JSON Report**: Parse the JSON file to programmatically analyze test results.

##### Integrating Test Reports with Other Tools

- **Integration**: Use CI/CD tools to capture and display Playwright reports.
  - Example: Publish HTML reports as artifacts in GitHub Actions or Jenkins.

#### 3. CI/CD Integration

##### Overview of CI/CD Concepts

- **CI/CD**: Continuous Integration (CI) and Continuous Deployment/Delivery (CD) automate testing and deployment.
  - **CI**: Automatically test code changes.
  - **CD**: Automatically deploy tested code to production.

##### Setting Up a CI/CD Pipeline with Popular Tools

- **GitHub Actions**:

  ```yaml
  name: Playwright Tests

  on: [push]

  jobs:
    test:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v2
        - uses: actions/setup-node@v2
          with:
            node-version: "14"
        - run: npm install
        - run: npx playwright install
        - run: npx playwright test
  ```

- **Jenkins**:
  - Use Jenkins plugins to set up a pipeline.
  - Example Jenkinsfile:
    ```groovy
    pipeline {
      agent any
      stages {
        stage('Install') {
          steps {
            sh 'npm install'
          }
        }
        stage('Test') {
          steps {
            sh 'npx playwright test'
          }
        }
      }
    }
    ```

##### Running Playwright Tests in CI/CD Environments

- Ensure all dependencies are installed.
- Use headless mode for tests to run in CI environments.

##### Handling Environment-Specific Configurations and Secrets

- **Environment Variables**:
  - Store sensitive information like API keys in environment variables.
  - Use them in tests:
    ```typescript
    const apiKey = process.env.API_KEY;
    ```

#### 4. Wrap-Up and Q&A

##### Recap Key Points from the Day

- **Recap**: Review key concepts, techniques, and best practices covered throughout the workshop.

##### Additional Resources for Learning

- **Playwright Documentation**: [Playwright Docs](https://playwright.dev/docs/intro)
- **TypeScript Documentation**: [TypeScript Docs](https://www.typescriptlang.org/docs/)
- **Further Learning**:
  - Online courses
  - Playwright GitHub repository for examples
  - Community forums and discussions

#### Hands-On Exercise

**Objective**: Run tests in various modes, generate and interpret test reports.

1. **Run Tests in Different Browsers**:

   - Write tests to run in Chromium, Firefox, and WebKit.

2. **Run Tests in Headless Mode**:

   - Modify existing tests to run in headless mode.

3. **Generate and Interpret Test Reports**:
   - Configure Playwright to generate HTML and JSON reports.
   - Run tests and analyze the generated reports.

**Exercise Example**:

1. **Run Tests in Different Browsers**:

   ```typescript
   import { test, chromium, firefox, webkit } from "@playwright/test";

   test("run in Chromium", async () => {
     const browser = await chromium.launch();
     const page = await browser.newPage();
     await page.goto("https://example.com");
     expect(await page.title()).toBe("Example Domain");
     await browser.close();
   });

   test("run in Firefox", async () => {
     const browser = await firefox.launch();
     const page = await browser.newPage();
     await page.goto("https://example.com");
     expect(await page.title()).toBe("Example Domain");
     await browser.close();
   });

   test("run in WebKit", async () => {
     const browser = await webkit.launch();
     const page = await browser.newPage();
     await page.goto("https://example.com");
     expect(await page.title()).toBe("Example Domain");
     await browser.close();
   });
   ```

2. **Run Tests in Headless Mode**:

   ```typescript
   import { test, chromium } from "@playwright/test";

   test("run in headless mode", async () => {
     const browser = await chromium.launch({ headless: true });
     const page = await browser.newPage();
     await page.goto("https://example.com");
     expect(await page.title()).toBe("Example Domain");
     await browser.close();
   });
   ```

3. **Generate and Interpret Test Reports**:

   ```typescript
   import { defineConfig } from "@playwright/test";

   export default defineConfig({
     reporter: [
       ["html", { outputFolder: "playwright-report" }],
       ["json", { outputFile: "test-results.json" }],
     ],
   });

   // Run the tests and open the HTML report
   // Command: npx playwright show-report
   ```

**Expected Outcome**: Participants will be able to run tests in different browsers and modes, generate and interpret test reports, and integrate Playwright tests into a CI/CD pipeline.

### Handling Flaky Tests

Flaky tests are those that sometimes pass and sometimes fail, often due to issues such as timing, network instability, or resource contention. Here are some strategies to handle flaky tests in Playwright:

1. **Increase Timeout**: Sometimes tests fail because elements take longer to load. Increase the timeout to allow more time for operations to complete.

   ```typescript
   test("test with increased timeout", async ({ page }) => {
     await page.goto("https://example.com", { timeout: 60000 });
   });
   ```

2. **Use Retry Mechanism**: Use the built-in retry mechanism to rerun failed tests.

   ```typescript
   import { defineConfig } from "@playwright/test";

   export default defineConfig({
     retries: 2, // Number of retries for flaky tests
   });
   ```

3. **Wait for Elements**: Explicitly wait for elements to be in the desired state before interacting with them.

   ```typescript
   test("wait for element", async ({ page }) => {
     await page.goto("https://example.com");
     await page.waitForSelector("#element-id", { state: "visible" });
   });
   ```

4. **Network Stability**: Use network conditions to simulate stable or unstable networks and handle variations.
   ```typescript
   test("simulate network conditions", async ({ page }) => {
     await page.route("**/*", (route) => route.continue({ latency: 200 }));
     await page.goto("https://example.com");
   });
   ```
