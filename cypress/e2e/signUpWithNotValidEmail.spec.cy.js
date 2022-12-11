/// <reference types="cypress" />
import { generateString } from "../fixtures/helper/generateText"
import signUpWithNotValidEmail from "../pages/signUpWithNotValidEmail.page"
import  * as constFile from "../fixtures/helper/constFile"

describe('ID 4 Check registration with a not valid email and valid data in Sign up link on the Main page	', () => {
  it('should check registration with not valid email and valid data in Sign up link on the Main page', () => {
    cy.visit('/')
    cy.clickAcceptAndClose()
    signUpWithNotValidEmail.clickSignUpLink()
    signUpWithNotValidEmail.eneterEmail(constFile.notValidEmail)
    signUpWithNotValidEmail.eneterName(generateString(10))
    signUpWithNotValidEmail.eneterPassword(generateString(15)+'@Qs1')
    signUpWithNotValidEmail.checkTermsAndCondition()
    signUpWithNotValidEmail.clickCreateAccountBtn()
  })
})