import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { Browser, Page, chromium } from 'playwright';
import { LoginPage } from '../pages/LoginPage';

export class CustomWorld extends World {
  browser?: Browser;
  page?: Page;
  loginPage?: LoginPage;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async openBrowser() {
    this.browser = await chromium.launch({
      headless: false
    });
    const context = await this.browser.newContext();
    this.page = await context.newPage();
    
  }

  async closeBrowser() {
    await this.page?.close();
    await this.browser?.close();
  }
}

setWorldConstructor(CustomWorld);