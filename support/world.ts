import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber'
import { Browser, Page, chromium } from 'playwright'
import { LoginPage } from '../pages/LoginPage'
import { MyAccount } from '../pages/MyAccount'

export class CustomWorld extends World {
  browser?: Browser
  page?: Page
  private _loginPage?: LoginPage
  private _myAccount?: MyAccount

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

  get loginPage(): LoginPage {
    if (!this._loginPage) {
      this._loginPage = new LoginPage(this.page!);
    }
    return this._loginPage;
  }

  get myAccount(): MyAccount {
    if (!this._myAccount) {
      this._myAccount = new MyAccount(this.page!);
    }
     return this._myAccount
  }
  
}

setWorldConstructor(CustomWorld)