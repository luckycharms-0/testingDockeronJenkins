import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Then('Go to Google', function() {
 cy.visit("www.google.com")

})