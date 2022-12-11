class checkSEarchInput{
    elements = {
        supportCenteLink: ()=> cy.contains('Support Center'),
        urlSupportCentePage: ()=>cy.url(),
        searchInput: ()=> cy.get('[class*="search-input o__ltr"]'),
        messageSearchResults: ()=>cy.contains('Search results for'),
        textInSearch: ()=>cy.contains('getting')
    }
    clickSupportCenteLink(){
        this.elements.supportCenteLink().click();
        this.elements.urlSupportCentePage().should('include','/support');
    }
    eneterSearchInput(text){
        this.elements.searchInput().type(text+'{enter}')
        this.elements.searchInput().should('have.value',text)
    }
    assertResultIsVisible(){
        this.elements.messageSearchResults().should('be.visible')
        this.elements.textInSearch().should('be.visible')
    }
}
module.exports=new checkSEarchInput();