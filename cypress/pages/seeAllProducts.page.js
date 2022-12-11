class checkSeeAllProducts{
    elements = {
        productsPageLink: ()=> cy.get('[class="sc-7b3980dc-6 gdETaM"]:first'),
        productsPopover: ()=>  cy.get('[class="sc-7b3980dc-8 iWLbyI"]'),
        seeAllProductsLink: ()=> cy.contains('See all Products'),
        urlProductsPage: ()=> cy.url()
    }
    mouseoverkproductsPageLink(){
        this.elements.productsPageLink().trigger('mouseover',{force: true})
        this.elements.productsPopover().should('exist');
    }
    checkSeeAllProductsLink(){
        this.elements.seeAllProductsLink().click({force: true})
        this.elements.urlProductsPage().should('include','/products')
    }
}
module.exports=new checkSeeAllProducts();