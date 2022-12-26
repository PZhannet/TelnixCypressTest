## Project description

    Test different functionality for https://telnyx.com/

## Technologies

    Node.js: 16.14.2

## Project set up 

    To run progect
    
    $ git clone https://github.com/PZhannet/TelnixCypressTest.org
    $ $ npm install

## Running Tests
    To Run tests, open Cypress App: npx cypress open
    Then should be chosen E2E testing option and Browser. 
    Choose the necessary test on the Specs to run it.

## Running Tests in headless mode

    To Run test: npx cypress run
    To run a single test file: npx cypress run -- spec "cypress/e2e/**.spec.cy.js"
    Choose the necessary test on the Specs to run it.
## Reports

    During the running tests, reports are generated automatically. You can see the results in the video and screenshots folder. The screenshots folder contains screenshots of the failed tests. 