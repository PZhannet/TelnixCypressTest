import mainPage from "./mainPage.page"
export default new class SupportCenterPage extends mainPage{
    constructor () {
        super(),
        this.searchInput = ()=> cy.get('[class*="search-input o__ltr"]'),
        this.messageSearchResults = ()=>cy.get('span[class="c__light"]'),
        this.textInSearch = ()=>cy.get('[class="section__content"]'),
        this.searchCleaText = ()=> cy.get('[class*="search__clear-text"]')
    }
    clickSupportCenteLink(){
        this.supportCenteLink().click();
        this.urlPage().should('include','/support');
    }
    eneterSearchInput(text){
        this.searchInput().type(text+'{enter}')
        this.searchInput().should('have.value',text)
    }
    assertResultIsVisible(text){
        this.messageSearchResults().should('be.visible')
        this.textInSearch().contains(text).should('be.visible')
    }
    clickSupportCenteLink(){
        this.supportCenteLink().click();
        this.urlPage().should('include','/support');
    }
    eneterSearchInput(text){
        this.searchInput().type(text+'{enter}')
        this.searchInput().should('have.value',text)
    }
    clickSearchCleaText(){
        this.searchCleaText().click()
        this.searchCleaText().should('not.have.value')
    }
}
