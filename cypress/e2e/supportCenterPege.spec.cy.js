/// <reference types="cypress" />
import supportCenterPage from '../pages/supportCenterPage.page'


describe('Support Center page', () => {
  beforeEach(() =>{
    cy.visit('/')
    cy.clickAcceptAndClose()
    supportCenterPage.clickSupportCenteLink()
  })
  it('Id 3 Check Search Input is cleared after pressing the "search clear text" icon.', () => {
    cy.fixture('example').then((data)=>{
      supportCenterPage.eneterSearchInput(data.text)
      supportCenterPage.assertResultIsVisible(data.text)
    })
  })
  it('Id 6Check Search Input is cleared after pressing the "search clear text" icon.', () => {
    cy.fixture('example').then((data)=>{
      supportCenterPage.eneterSearchInput(data.text)
    })
    supportCenterPage.clickSearchCleaText()
  })
})