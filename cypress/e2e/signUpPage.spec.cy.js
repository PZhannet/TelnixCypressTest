/// <reference types="cypress" />
import { generateString } from "../fixtures/helper/generateText"
import signUpPage from "../pages/signUpPage.page"


describe('Sign up page', () => {
  beforeEach(() =>{
    cy.visit('/')
    cy.clickAcceptAndClose()
    signUpPage.clickSignUpBtn()
  })
  it('Id 4 Check registration with a not valid email and valid data in Sign up page', () => {
    cy.fixture('example').then((data) => {
      signUpPage.eneterEmail(data.notValidEmail)
    })
    signUpPage.eneterName(generateString(10))
    signUpPage.eneterPassword(generateString(15)+'@Qs1')
    signUpPage.checkTermsAndCondition()
    signUpPage.clickCreateAccountBtn()
    signUpPage.errorMessageWorkEmailVisisble()
  })
  it('Id 7 Check that it is not possible to register a new user without entering an email on the Sign Up page.', () => {
    signUpPage.clickCreateAccountBtn()
    signUpPage.errorMessageWorkEmailVisisble()
    signUpPage.errorMessageFullNameVisible()
  })
})