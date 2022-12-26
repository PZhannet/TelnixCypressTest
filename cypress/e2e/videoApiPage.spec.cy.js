/// <reference types="cypress" />
import videoApiPage from "../pages/videoApiPage.page"

describe('Video API page', () => {
  it('Id 8 Check that the Video API page contains the features: Rooms API, Screen sharing, Call Recording, PSTN Dial-in, Speaker Detection, Text Chat, Multi-track, and Participants API.', () => {
    cy.visit('/')
    cy.clickAcceptAndClose()
    videoApiPage.clickVideoApiLink()
    videoApiPage.checkfeaturesOnPage()
  })
})