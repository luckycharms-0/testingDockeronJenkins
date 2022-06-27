import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Then('Go to Yahoo', function() {
 cy.visit("www.Yahoo.com")
})