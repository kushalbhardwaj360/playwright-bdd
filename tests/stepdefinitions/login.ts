import { Given, When, Then } from "@cucumber/cucumber"
//import { expect } from "@playwright/test"
import { LoginPage } from '../../pages/LoginPage';
//import { CustomWorld } from '../../support/world';

         Given('The user is on the hompage', async function () {
              const page = this.page!;
              this.loginPage = new LoginPage(page);
              await this.loginPage.goto();
         });
       
       
         When('the user click on Login button', async function () {
              const page = this.page!;
              this.loginPage = new LoginPage(page);
              await this.loginPage.loginBtnClick()
         });

       
         Then('the user enters the valid credentials', async function () {
              const page = this.page!;
              this.loginPage = new LoginPage(page);
              await this.loginPage.loginCredentials("kushal@email.com", "pass123")
         });
       
       
         Then('the user logs in', async function () {
              const page = this.page!;
              this.loginPage = new LoginPage(page);
              await this.loginPage.loginClick()
         });