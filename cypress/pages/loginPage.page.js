import mainPage from "./mainPage.page"
export default new class LoginPage extends mainPage{
    constructor () {
        super(),
        this.inputBussnesEmail = ()=> cy.get('[name="email"]:first',{timeout:20*1000}),
        this.inputPassword = ()=>  cy.get('[type="password"]'),
        this.loginInButton = ()=> cy.get('[class*="fhXOmx eazkBi"]'),
        this.errorMessage = ()=> cy.get('[data-testid="login.signin.message"]'),
        this.btnLogInWithMicrosoft = ()=> cy.get('[action="https://api.telnyx.com/users/auth/microsoft_graph"]')
    }
    clickLogInLink(){
        this.logInLink().click();
        this.urlPage().should('exist');
    }
    enterEmail(email){
        this.inputBussnesEmail().type(email);
        this.inputBussnesEmail().should('have.value',email)
    }
    enterPassword(password){
        this.inputPassword().type(password);
        this.inputPassword().should('have.value',password)
    }
    clickLogInButton(){
        this.loginInButton().click()
    }
    errorMessageVisible(){
        cy.fixture('example').then((data) => {
            this.errorMessage().should('be.visible')
            .and('have.text',data.body)
        })
    }
    checkBtnLogInWhithMicrosoftExist(){
        this.btnLogInWithMicrosoft().should('exist')
    }
}
