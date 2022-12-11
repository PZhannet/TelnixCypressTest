/// <reference types="cypress" />
import checkSeeAllProducts from "../pages/seeAllProducts.page"

describe('ID 9 Check that the "See all Products" link on the Products popover to display works.', () => {
  it('should check that the "See all Products" link on the Products popover to display works.', () => {
    cy.visit('/')
    cy.clickAcceptAndClose()
    checkSeeAllProducts.mouseoverkproductsPageLink()
    checkSeeAllProducts.checkSeeAllProductsLink()
  })
})