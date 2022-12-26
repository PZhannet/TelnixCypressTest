import mainPage from "./mainPage.page"
export default new class SupportCenterPage extends mainPage{
    constructor () {
        super(),
        this.featuresOnPage = ()=> cy.get('[class="sc-7cdb0d42-7 gGKJdh"]')
    }
    clickVideoApiLink(){
        this.videoApiLink().click()
        this.urlPage().should('include','video-api');
    }
    checkfeaturesOnPage(){
        this.featuresOnPage().should('be.visible')
    }
}
