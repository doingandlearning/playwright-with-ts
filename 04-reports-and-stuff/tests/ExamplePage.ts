import { Page } from "@playwright/test";

export class ExamplePage {
  constructor(private page: Page) {
    // Add cookies, add auth or local
    this.page.goto("https://www.example.com");
  }

  async getTitle(url: string) {
    await this.page.goto(url);
    return this.page.title();
  }
}
