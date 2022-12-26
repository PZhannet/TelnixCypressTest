export default class MainPage {
    constructor () {
        this.urlPage = ()=> {return cy.url({ timeout: 10000 })},
        this.emailInput = ()=> cy.get('[type="email"]'),
        this.tryForFreeBtn = ()=> cy.get('[type="submit"]'),
        this.createFreeAccountmessge =() => cy.get('h1[class*="gkWopw gjiitA"]'),
        this.productsPageLink = ()=> cy.get('[class="sc-7b3980dc-6 gdETaM"]:first'),
        this.productsPopover= ()=>  cy.get('[class="sc-7b3980dc-8 iWLbyI"]'),
        this.seeAllProductsLink = ()=> cy.get('div>a[href="/products"] span'),
        this.supportCenteLink = ()=> cy.get('[class*="blLdCs mchNoDecorate"][href*="support.telnyx"]'),
        this.signUpBtn = ()=> cy.get('ul>div a[href="/sign-up"]'),
        this.videoApiLink = ()=> cy.get(':nth-child(5)>.sc-3e56386e-4'),
        this.developersDocLink = ()=> cy.get('footer [href*="https://developers.telnyx"]'),
        this.logInLink = ()=> cy.get('div>a[href="https://portal.telnyx.com/"]:first')

       /* this.acceptCookiesBtn = () => {return cy.get('[class*="cSsJix fqfWHQ eUnEoi itIjRb"]')},
        
        this.careersLink = ()=> {return cy.get('a[href="/company/careers"] span>span')},
        this.wirelessLink = ()=> {return cy.get('li~li~li~li~li~li span[class*="dlshfZ"]').contains('Wireless')},
        this.numberLookupLink = ()=> {return cy.get('li>a[href="/number-lookup"]')},
        this.readCustomerStoryLink = ()=> {return cy.get('a[href*="/lightspeed"]')} ,
        ,
        this.nextItem = () => {return cy.get('[aria-label="Next Item"]')}
        this.picture = () => {return cy.get('[class="sc-9cd1e3e2-2 fCiTXY"]:first',{timeout:20*1000})}
        this.textRelatedToThePicture = () => { return cy.get('[class*="fCiTXY"][aria-hidden="false"]')}
        this.urlPage = ()=> {return cy.url({timeout:30*1000})}
        this.talkToAnExpertBtn = ()=> {return cy.get('li>div a[href="/contact-us"]')},
        this.pricingPopover = ()=> {return  cy.get('[class*="iWLbyI"]')},
        this.menuBarLink = ()=> {return cy.get('[class*="gdETaM"]')},
        this.resourcesPopover = ()=>  {return cy.get('[class="sc-7b3980dc-9 ctVOEX"]')}, 
        this.logInLink = ()=> {return cy.get('div>a[href="https://portal.telnyx.com/"]:first')}*/
    }
    enterEmail(email){
        this.emailInput().type(email);
        this.emailInput().should('have.value',email);
    }
    checkTryForFreeBtn(){
        this.tryForFreeBtn().click()
        this.urlPage().should('include','sign-up')
        this.createFreeAccountmessge().should('be.visible')
    }
    mouseoverkproductsPageLink(){
        this.productsPageLink().trigger('mouseover',{force: true})
        this.productsPopover().should('exist');
    }
    checkSeeAllProductsLink(){
        this.seeAllProductsLink().click({force: true})
        this.urlPage().should('include','/products')
    }
}
   /* openMainPage(){
        cy.visit('/');
    }
    acceptCookies() {
        this.acceptCookiesBtn().click()
    }
    clickReadCustomerStoryLink(){
        this.readCustomerStoryLink().click();
        this.urlPage().should('include','/lightspeed');
    }
    open(){
        this.openTelnyx();
        this.acceptAndCloseBtn();
    }
    clicknextItem(){
        this.nextItem().click({force: true});
        this.picture().should('have.attr','aria-hidden','true');
        this.textRelatedToThePicture().should('include.text',"Matt Herrera")
    }
    secondclicknextItem(){
        this.nextItem().click({force: true});
    }
    clickTalkToAnExpertBtn(){
        this.talkToAnExpertBtn().click();
    }
    clickLogInLink(){
        this.logInLink().click();
      }
    mouseoverResourcesPageLink(link){
        this.menuBarLink().contains(link).trigger('mouseover',{force: true});
        this.resourcesPopover().should('exist');
    }
    mouseoverPricingPageLink(link){
        this.menuBarLink().contains(link).trigger('mouseover',{force: true});
        this.pricingPopover().should('exist');
    }
    clickSignUpBtn(){
        this.signUpBtn().click({force: true});
        this.urlPage().should('include','/sign-up')
    }
    clickCareersLink(){
        this.careersLink().click();
        this.urlPage().should('include','/careers')
    }
    clickNumberLookupLink(){
        this.numberLookupLink().click();
        this.urlPage().should('include','/number-lookup');
    }*/
  