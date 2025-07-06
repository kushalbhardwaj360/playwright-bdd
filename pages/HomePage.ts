import { Page } from 'playwright';
import { expect } from "@playwright/test"

export class HomePage {
  constructor(private page: Page) {}

  async goToHomePage() {
    await this.page.goto('https://ecommerce-playground.lambdatest.io/')
    await expect(this.page.locator("body[class='common-home']")).toBeVisible()
  }
}
