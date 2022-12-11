/// <reference types="cypress" />
import checkSearchClearText from '../pages/searchInputCleared.page'
import  * as constFile from "../fixtures/helper/constFile"

describe('ID 6 Check Search Input is cleared after pressing the "search clear text" icon on the Support Center page.', () => {
    it('should check Search Input is cleared after pressing the "search clear text" icon', () => {
      cy.visit('/')
      cy.clickAcceptAndClose()
      checkSearchClearText.clickSupportCenteLink()
      checkSearchClearText.eneterSearchInput(constFile.text)
      checkSearchClearText.clickSearchCleaText()
    })
  })