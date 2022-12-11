/// <reference types="cypress" />
import checkVideoApiPageContainsFeatures from "../pages/videoApiFeatures.page"

describe('ID 8 Check that the Video API page contains the features: Rooms API, Screen sharing, Call Recording, PSTN Dial-in, Speaker Detection, Text Chat, Multi-track, Participants API.', () => {
  it('should check that the Video API page contains the features', () => {
    cy.visit('/')
    cy.clickAcceptAndClose()
    checkVideoApiPageContainsFeatures.clickVideoApiLink()
    checkVideoApiPageContainsFeatures.checkfeaturesOnPage()
  })
})