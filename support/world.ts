import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber'
import { Browser, Page, chromium } from 'playwright'
import { LoginPage } from '../pages/LoginPage'
import { MyAccount } from '../pages/MyAccount'
import { HomePage } from '../pages/HomePage'
import { Registration } from '../pages/Registration'

export class CustomWorld extends World {
  browser?: Browser
  page?: Page
  private _loginPage?: LoginPage
  private _myAccount?: MyAccount
  private _homePage?: HomePage
  private _registerPage?: Registration

  constructor(options: IWorldOptions) {
    super(options);
  }

  async openBrowser() {
      this.browser = await chromium.launch({
      headless: false
    })
    const context = await this.browser.newContext({
      recordVideo: {
        dir: 'reports/videos/'
      }
    })
    this.page = await context.newPage()
  }

  async closeBrowser() {
    await this.page?.close()
    await this.browser?.close()
  }

  get homePage(): HomePage {
    if (!this._homePage) {
      this._homePage = new HomePage(this.page!);
    }
    return this._homePage
  }

  get loginPage(): LoginPage {
    if (!this._loginPage) {
      this._loginPage = new LoginPage(this.page!);
    }
    return this._loginPage
  }

  get myAccount(): MyAccount {
    if (!this._myAccount) {
      this._myAccount = new MyAccount(this.page!);
    }
     return this._myAccount
  }

  get registrationPage(): Registration {
    if (!this._registerPage) {
      this._registerPage = new Registration(this.page!);
    }
    return this._registerPage
  }
}

setWorldConstructor(CustomWorld)