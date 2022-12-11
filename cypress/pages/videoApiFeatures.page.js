class checkVideoApiPageContainsFeatures{
    elements = {
        videoApiLink: ()=> cy.get('[class*="knOJT itoSBG"]').contains('Video API'),
        urlLogInPage: ()=>cy.url(),
        featuresOnPage: ()=> cy.get('[class="sc-7cdb0d42-7 gGKJdh"]'),
    }
    clickVideoApiLink(){
        this.elements.videoApiLink().click()
        this.elements.urlLogInPage().should('include','video-api');
    }
    checkfeaturesOnPage(){
        this.elements.featuresOnPage().should('be.visible')
    }
}
module.exports=new checkVideoApiPageContainsFeatures();