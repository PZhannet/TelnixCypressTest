/// <reference types="cypress" />
import checkSEarchInput from '../pages/searchInput.page'
import  * as constFile from "../fixtures/helper/constFile"

describe('ID 3 Check Search Input with valid Data in the Support Center page', () => {
  it('shoud check Search Input with valid Data in the Support Center page', () => {
    cy.visit('/')
    cy.clickAcceptAndClose()
    checkSEarchInput.clickSupportCenteLink()
    checkSEarchInput.eneterSearchInput(constFile.text)
    checkSEarchInput.assertResultIsVisible()
  })
})