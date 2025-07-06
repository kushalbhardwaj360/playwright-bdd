import { When, Then } from "@cucumber/cucumber"

        When('The user clicks on Register button', async function () {
           await this.registrationPage.registerBtnClick()
         });
       
         Then('The user enters all the details in the form', async function () {
           await this.registrationPage.registrationForm()
         });
       
         Then('The user\'s account is created', async function () {
           await this.registrationPage.registrationValidation()
         });
         