import { Page } from 'playwright';
import { expect } from "@playwright/test"

export class Registration {
  constructor(private page: Page) {}

    async registerBtnClick() {
    await this.page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")
    const registerButton = this.page.locator('text=Register')
    await expect(registerButton).toBeVisible()
    await this.page.click("text=Register")
  }

  async selectNewsletterOption(option: 'yes' | 'no'): Promise<boolean> {
  const selector = option === 'yes'
    ? 'label[for=input-newsletter-yes]'
    : 'label[for=input-newsletter-no]';
  const radioButton = this.page.locator(selector);
  if (await radioButton.isVisible()) {
    await radioButton.click();
    return true;
  }
  return false;
}

  async registrationForm() {
    const firstName = this.page.locator("input[id=input-firstname]")
    await expect(firstName).toBeVisible();
    await firstName.fill("Kushal")
    const lastName = this.page.locator("input[id=input-lastname]")
    await expect(lastName).toBeVisible();
    await lastName.fill("Bhardwaj")
    const email = this.page.locator("input[id=input-email]")
    await expect(email).toBeVisible();
    await email.fill("testemail123@email.com")
    const telephone = this.page.locator("input[id=input-telephone]")
    await expect(telephone).toBeVisible();
    await telephone.fill("1234567890")
    const password = this.page.locator("input[id=input-password]")
    await expect(password).toBeVisible();
    let pwd = "1234567890"
    await password.fill(pwd)
    const passwordConfirm = this.page.locator("input[id=input-confirm]")
    await expect(passwordConfirm).toBeVisible();
    await passwordConfirm.fill(pwd)
    this.selectNewsletterOption('no')
    const readAndAgreePoliciesCheckBox = this.page.locator("label[for=input-agree]")
    await expect(readAndAgreePoliciesCheckBox).toBeVisible();
    await readAndAgreePoliciesCheckBox.click()
    const continueBtn = this.page.locator("input[value=Continue]")
    await expect(continueBtn).toBeVisible();
    await continueBtn.click()
  }

  async registrationValidation() {
  await expect(this.page.locator('h1.page-title')).toHaveText(' Your Account Has Been Created!');
  }
}