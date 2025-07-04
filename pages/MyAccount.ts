import { Page } from "@playwright/test"
import { expect } from "@playwright/test"

export class MyAccount {
    constructor(private page: Page) {}

    async isSuccess() {
        const logoutBtn = this.page.locator('//a[normalize-space(text())="Logout"]');
        await expect(logoutBtn).toBeVisible();
  }
}
