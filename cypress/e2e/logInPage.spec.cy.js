/// <reference types="cypress" />
import loginPage from "../pages/loginPage.page"
import { generateString } from "../fixtures/helper/generateText"

describe('Login Page ', () => {
  beforeEach(() =>{
    cy.visit('/')
    cy.clickAcceptAndClose()
    loginPage.clickLogInLink()
  })
  it('Id 1 Check Login with valid but not registered Data in Login Page', () => {
    loginPage.enterEmail(generateString(5)+'@gmail.com')
    loginPage.enterPassword(generateString(5))
    loginPage.clickLogInButton()
    loginPage.errorMessageVisible()
  })
  it('Id 5 Check "Log in with Microsoft" button on Log In Page is visible', () => {
    loginPage.checkBtnLogInWhithMicrosoftExist()
  })
})