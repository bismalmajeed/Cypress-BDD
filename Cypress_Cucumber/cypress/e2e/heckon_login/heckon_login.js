/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given('login internet herokuapp', ()=>
{
   cy.visit("https://the-internet.herokuapp.com/login")
  // cy.visit("/login")
   // find username by ID then input the text
    let usernameElem = cy.get("#username") 
    usernameElem.type("tomsmith")
   // find password by attribute name then input the text 
   cy.get("[name='password']").type("SuperSecretPassword!")
   // find login btn by attribute and tag name then click 
   cy.get("button[type='submit']").click()
   // DEBUG purpose only

})

When("action", ()=>
{
    
})

Then("testable outcome", ()=>
{

    })






