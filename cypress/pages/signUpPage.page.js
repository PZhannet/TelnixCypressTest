import mainPage from "./mainPage.page"
export default new class SignUpPage extends mainPage{
    constructor () {
        super(),
        this.emailInput = ()=> cy.get('#email'),
        this.fullNameInput = ()=> cy.get('#full_name'),
        this.passwordInput = ()=> cy.get('#password'),
        this.termsAndConditionCheckbox = ()=>cy.get('#terms_and_conditions'),
        this.checkedBoxTermsAndCondition = ()=>cy.get('[id="terms_and_conditions"]'),
        this.checkedSucsessfuly = ()=> cy.get('div svg rect[xmlns="http://www.w3.org/2000/svg" ]:first'),
        this.createAccountButton = ()=> cy.get('[type="submit"]'),
        this.errorMessageWorkEmail = () => cy.get('#email_error'),
        this.errorMessageFullName = ()=> cy.get('#full_name_error')
    }
    clickSignUpBtn(){
        this.signUpBtn().click({force: true})
        this.urlPage().should('include','sign-up')
    }
    eneterEmail(email){
        this.emailInput().type(email)
        this.emailInput().should('have.value',email)
    }
    eneterName(name){
        this.fullNameInput().type(name)
        this.fullNameInput().should('have.value',name)
    }
    eneterPassword(password){
        this.passwordInput().type(password)
        this.passwordInput().should('have.value',password)
    }
    checkTermsAndCondition(){
        this.termsAndConditionCheckbox().check({force: true})
        this.checkedSucsessfuly().should('have.attr','fill','#00C08B')
    }
    clickCreateAccountBtn(){
        this.createAccountButton().click()
        this.urlPage().should('include','sign-up')
    }
    clickSignUpLink(){
        this.signUpLink().click({force: true})
        this.urlPage().should('include','sign-up')
    }
    errorMessageFullNameVisible(){
        this.errorMessageFullName().should('be.visible')
    }
    errorMessageWorkEmailVisisble(){
        this.errorMessageWorkEmail().should('be.visible')
    }
}
