import { Given, When, Then } from "@cucumber/cucumber"

         Given('The user is on the hompage', async function () {
              await this.homePage.goToHomePage()
         });
       
         When('the user clicks on Login button', async function () {
              await this.loginPage.loginBtnClick()
         });

         Then('the user enters the valid credentials and clicks login', async function () {
              await this.loginPage.loginCredentials("kushalbhardwaj@email.com", "Password123")
              await this.loginPage.loginClick()
         });

         Then('the user lands on My Account page', async function () {
              await this.myAccount.isSuccess()
         });