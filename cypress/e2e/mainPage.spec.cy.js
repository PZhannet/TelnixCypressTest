/// <reference types="cypress" />
import MainPage from "../pages/mainPage.page"
const mainPage = new MainPage()

describe('TelnyxPage ', () => {
  beforeEach(() =>{
    cy.visit('/')
    cy.clickAcceptAndClose()
  })
  it('ID 2 Check on the main page the "Try for free" button with a valid email.', () => {
    cy.fixture('example').then((data)=>{
      mainPage.enterEmail(data.email)
    })
    mainPage.checkTryForFreeBtn()
  })
  it('ID 9 Check that the "See all Products" link on the Products popover to display works.', () => {
    mainPage.mouseoverkproductsPageLink()
    mainPage.checkSeeAllProductsLink()
  })
})