class clickCreateAccountBtn{
    elements = {
        developersDocLink: ()=> cy.contains('Developer Docs'),
        developersTitle: ()=>  cy.get('[class*=" iDoGJD mchNoDecorate"]'),        
        createAccountBtn: ()=>  cy.contains('Create Account')
    }
    clickDevelopersDocLink(){
        this.elements.developersDocLink().click({force:true});
        this.elements.developersTitle().should('exist');
    }
    clickCreateAccount(){
        this.elements.createAccountBtn().click()
    }
}
module.exports=new clickCreateAccountBtn();