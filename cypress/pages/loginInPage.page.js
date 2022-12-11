class typeLoginInData{
    elements = {
        logInLink: ()=> cy.get('div>a[href="https://portal.telnyx.com/"]:first'),
        urlLogInPage: ()=>cy.url(),
        inputBussnesEmail: ()=> cy.get('[name="email"]:first',{timeout:20*1000}),
        inputPassword: ()=>  cy.get('[type="password"]'),
        loginInButton: ()=> cy.get('[class*="fhXOmx eazkBi"]')
       
    }
    clickLogInLink(){
        this.elements.logInLink().click();
        this.elements.urlLogInPage().should('exist');
    }
    enterEmail(email){
        this.elements.inputBussnesEmail().type(email);
        this.elements.inputBussnesEmail().should('have.value',email)
    }
    enterPassword(password){
        this.elements.inputPassword().type(password);
        this.elements.inputPassword().should('have.value',password)
    }
    clickLogInButton(){
        this.elements.loginInButton().click()
    }
}
module.exports=new typeLoginInData();