import { Page } from 'playwright';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://ecommerce-playground.lambdatest.io/');
  }

    async loginBtnClick() {
    await this.page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")
    await this.page.click("text=Login")
  }

    async loginCredentials(username: string, password: string) {
    await this.page.fill("input[name='email']", username)
    await this.page.fill("input[name='password']", password)
  }

    async loginClick() {
    await this.page.click("input[value='Login']")
  }
}
