/// <reference types="cypress" /> 
import clickCreateAccountBtn from "../pages/createAccount.page"

describe('ID 10 Check that the "Create Account" button on the Developers page works.', () => {
  it('should that the "Create Account" button on the Developers page works', () => {
    cy.visit('/')
    cy.clickAcceptAndClose()
    clickCreateAccountBtn.clickDevelopersDocLink();
    clickCreateAccountBtn.clickCreateAccount();
    cy.url().should('include','/sign-up')
  })
})