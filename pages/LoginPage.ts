import { Page } from 'playwright';
import { expect } from "@playwright/test"

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://ecommerce-playground.lambdatest.io/')
    await expect(this.page.locator("body[class='common-home']")).toBeVisible()
  }

  async loginBtnClick() {
    await this.page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")
    const loginButton = this.page.locator('text=Login')
    await expect(loginButton).toBeVisible()
    await this.page.click("text=Login")
  }

  async loginCredentials(username: string, password: string) {
    const userName = this.page.locator("input[name='email']")
    const passWord = this.page.locator("input[name='password']")
    await expect(userName).toBeVisible()
    await userName.fill(username)
    await expect(passWord).toBeVisible()
    await passWord.fill(password)
  }

  async loginClick() {
    const loginBtn = this.page.locator("input[value='Login']")
    await expect(loginBtn).toBeVisible()
    await loginBtn.click()
  }
}
