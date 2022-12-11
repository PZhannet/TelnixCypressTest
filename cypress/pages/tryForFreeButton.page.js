class checkTryForFreeBtnWithValidEmail{
    elements = {
        emailInput: ()=> cy.get('[type="email"]'),
        urlLogInPage: ()=>cy.url(),
        tryForFreeBtn: ()=> cy.get('[type="submit"]'),
        createFreeAccountmessge:() => cy.contains('Create a free account')
    }
    enterEmail(email){
        this.elements.emailInput().type(email);
        this.elements.emailInput().should('have.value',email);
    }
    checkTryForFreeBtn(){
        this.elements.tryForFreeBtn().click()
        this.elements.urlLogInPage().should('include','sign-up')
        this.elements.createFreeAccountmessge().should('be.visible')
    }
}
module.exports=new checkTryForFreeBtnWithValidEmail();