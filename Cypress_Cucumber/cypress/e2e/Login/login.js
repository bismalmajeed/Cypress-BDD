/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given('precondition', ()=>
{
    cy.visit("https://demo.guru99.com/test/newtours/")
})

When("action", ()=>
{
    cy.get('[name=userName]').type('mercury')
    cy.get('[name=password]').type('mercury')
   // cy.title().should('eq', 'Welcome: Mercury Tours')
})

Then("testable outcome", ()=>
{
    cy.get('[name=submit]').click()
})

/*And("verify title of the web page", ()=>
{
    cy.title().should('eq', 'Login: Mercury Tours')
})*/





