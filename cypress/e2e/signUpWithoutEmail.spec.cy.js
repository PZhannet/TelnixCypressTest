/// <reference types="cypress" />
import signUpWithoutValidEmail from "../pages/signUpWithoutEmail.page"

describe('ID 7 Check that it is not possible to register a new user without entering an email on the Sign Up page..', () => {
  it('should check that it is not possible to register a new user without entering an email.', () => {
    cy.visit('/')
    cy.clickAcceptAndClose()
    signUpWithoutValidEmail.clickSignUpLink()
    signUpWithoutValidEmail.clickCreateAccountBtn()
  })
})