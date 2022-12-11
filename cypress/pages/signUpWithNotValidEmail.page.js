class signUpWithNotValidEmail{
    elements = {
        signUpLink: ()=> cy.get('span').contains('Sign up'),
        urlPage: ()=> cy.url(),
        emailInput: ()=> cy.get('#email'),
        fullNameInput: ()=> cy.get('#full_name'),
        passwordInput: ()=> cy.get('#password'),
        termsAndConditionCheckbox: ()=>cy.get('#terms_and_conditions'),
        checkedBoxTermsAndCondition: ()=>cy.get('[id="terms_and_conditions"]'),
        checkedSucsessfuly: ()=> cy.get('div svg rect[xmlns="http://www.w3.org/2000/svg" ]:first'),
        createAccountButton: ()=> cy.contains('Create Account'),
        errorMessage: ()=> cy.contains("Please enter a valid email address.")
    }
    clickSignUpLink(){
        this.elements.signUpLink().click({force: true})
        this.elements.urlPage().should('include','sign-up')
    }
    eneterEmail(email){
        this.elements.emailInput().type(email)
        this.elements.emailInput().should('have.value',email)
    }
    eneterName(name){
        this.elements.fullNameInput().type(name)
        this.elements.fullNameInput().should('have.value',name)
    }
    eneterPassword(password){
        this.elements.passwordInput().type(password)
        this.elements.passwordInput().should('have.value',password)
    }
    checkTermsAndCondition(){
        this.elements.termsAndConditionCheckbox().check({force: true})
        this.elements.checkedSucsessfuly().should('have.attr','fill','#00C08B')
    }
    clickCreateAccountBtn(){
        this.elements.createAccountButton().click()
        this.elements.urlPage().should('include','sign-up')
        this.elements.errorMessage().should('be.visible')
    }
}
module.exports=new signUpWithNotValidEmail();