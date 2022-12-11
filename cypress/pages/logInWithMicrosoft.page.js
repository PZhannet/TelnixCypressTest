class checkLogInWithMicrosoft{
    elements = {
        logInLink: ()=> cy.get('div>a[href="https://portal.telnyx.com/"]:first'),
        urlLogInPage: ()=>cy.url(),
        btnLogInWithMicrosoft: ()=> cy.contains('Log in with Microsoft')
    }
    clickLogInLink(){
        this.elements.logInLink().click();
        this.elements.urlLogInPage().should('exist');
    }
    checkBtnLogInWhithMicrosoftExist(){
        this.elements.btnLogInWithMicrosoft().should('exist')
    }
}
module.exports=new checkLogInWithMicrosoft();