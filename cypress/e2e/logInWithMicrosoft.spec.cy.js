/// <reference types="cypress" />
import checkLogInWithMicrosoft from "../pages/logInWithMicrosoft.page"

describe('ID 5 Check "Log in with Microsoft" button on Log In Page', () => {
  it('should appear "Microsoft Sign in" page after the "Log in with Microsoft" button clicked', () => {
    cy.visit('/')
    cy.clickAcceptAndClose()
    checkLogInWithMicrosoft.clickLogInLink()
    checkLogInWithMicrosoft.checkBtnLogInWhithMicrosoftExist()
  })
})