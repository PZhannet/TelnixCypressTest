class signUpWithoutValidEmail{
    elements = {
        signUpLink: ()=> cy.get('span').contains('Sign up'),
        urlPage: ()=> cy.url(),
        createAccountButton: ()=> cy.contains('Create Account'),
        errorMessage: ()=> cy.contains("This field is required.")
    }
    clickSignUpLink(){
        this.elements.signUpLink().click({force: true})
        this.elements.urlPage().should('include','sign-up')
    }
    clickCreateAccountBtn(){
        this.elements.createAccountButton().click()
        this.elements.urlPage().should('include','sign-up')
        this.elements.errorMessage().should('be.visible')
    }
}
module.exports=new signUpWithoutValidEmail();