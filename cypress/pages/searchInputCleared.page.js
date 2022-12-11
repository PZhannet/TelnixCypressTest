class checkSearchClearText{
    elements = {
        supportCenteLink: ()=> cy.contains('Support Center'),
        urlSupportCentePage: ()=>cy.url(),
        searchInput: ()=> cy.get('[class*="search-input o__ltr"]'),
        searchCleaText: ()=> cy.get('[class*="search__clear-text"]')
    }
    clickSupportCenteLink(){
        this.elements.supportCenteLink().click();
        this.elements.urlSupportCentePage().should('include','/support');
    }
    eneterSearchInput(text){
        this.elements.searchInput().type(text+'{enter}')
        this.elements.searchInput().should('have.value',text)
    }
    clickSearchCleaText(){
        this.elements.searchCleaText().click()
        this.elements.searchCleaText().should('not.have.value')
    }
}
module.exports=new checkSearchClearText();