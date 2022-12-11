/// <reference types="cypress" />
import typeLoginInData from "../pages/loginInPage.page"
import { generateString } from "../fixtures/helper/generateText"

describe('ID 1 Check Login Page with valid but not registered data', () => {
  it('should appear error message after valid but not registered data is entered in Log In page', () => {
    cy.visit('/')
    cy.clickAcceptAndClose()
    typeLoginInData.clickLogInLink()
    typeLoginInData.enterEmail(generateString(5)+'@gmail.com')
    typeLoginInData.enterPassword(generateString(5))
    typeLoginInData.clickLogInButton()
    cy.contains('That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.').should('be.visible')
  })
})