/// <reference types="cypress" /> 
import developersPage from "../pages/developersPage"

describe('Developers page', () => {
  it('ID 10 Check that the "Create Account" button on the Developers page works.', () => {
    cy.visit('/')
    cy.clickAcceptAndClose()
    developersPage.clickDevelopersDocLink();
    developersPage.clickCreateAccount();
    developersPage.urlPage().should('include','/sign-up')
  })
})