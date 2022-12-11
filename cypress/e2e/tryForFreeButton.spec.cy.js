/// <reference types="cypress" />
import checkTryForFreeBtnWithValidEmail from "../pages/tryForFreeButton.page"
import  * as constFile from "../fixtures/helper/constFile"

describe('ID 2 Check on the main page the "Try for free" button with a valid email. ', () => {
  it('should open "Create a free account" page if valid email is entered and Press "Try for free" button is pressed', () => {
    cy.visit('/')
    cy.clickAcceptAndClose()
    checkTryForFreeBtnWithValidEmail.enterEmail(constFile.email)
    checkTryForFreeBtnWithValidEmail.checkTryForFreeBtn()
  })
})