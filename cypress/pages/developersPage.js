import mainPage from "./mainPage.page"
export default new class DevelopersPage extends mainPage{
    constructor () {
        super(),
        this.developersTitle = ()=>  cy.get('[class*=" iDoGJD"]:first'),        
        this.createAccountBtn = ()=>  cy.get('[class*="hfOuzl"]')
    }
    clickDevelopersDocLink(){
        this.developersDocLink().should($developersBtn => {
            $developersBtn.attr('target', '_self')
          }).click({force:true});
        this.developersTitle().should('exist');
    }
    clickCreateAccount(){
        this.createAccountBtn().click()
    }
}
