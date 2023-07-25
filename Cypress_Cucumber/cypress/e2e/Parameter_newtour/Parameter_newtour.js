/// <reference types="Cypress" />

import { Before, After, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Before(()=>
{
  //  cy.reload()
})

After(()=>
{
    //cy.reload()
})

Given("open newtours application", ()=>
{
    cy.visit("https://demo.guru99.com/test/newtours/")
})

When("provide valid {string} and {string}", (userName, password)=>
{
    cy.get('[name=userName]').type(userName)
    cy.get('[name=password]').type(password)
   // cy.title().should('eq', 'Welcome: Mercury Tours')
})

Then("click on submit button", ()=>
{
    cy.get('[name=submit]').click()
})

And("verify title should be {string}", (title)=>
{
   // cy.title().should('eq', 'Login: Mercury Tours')
 cy.title().should('eq', title)
})





