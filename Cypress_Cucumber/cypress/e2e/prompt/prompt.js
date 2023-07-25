/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given('tabs', ()=>
{
    cy.visit("https://www.amazon.com/ref=nav_logo")
    cy.get('.nav-line-1-container').invoke('show')
    cy.contains('Sign in').click({ force: true })
    
})

When("prompt", ()=>
{
   
   // cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
   /* cy.window().then(function(p){
        // win is the remote window
        // of the page at: http://localhost:8080/app
            cy.stub( p , "prompt").returns("netsol")
            cy.get(':nth-child(3)>button').click()
            cy.get('#result').contains('You entered: netsol')
        })
        */
})

Then("testable outcome", ()=>
{
  /*  cy.visit("https://the-internet.herokuapp.com/windows")
    cy.title().should('eq', 'The Internet')
    cy.get('.example > a').invoke('removeAttr','target').click()
    cy.url().should('include',"https://the-internet.herokuapp.com/windows/new")
    cy.go('back')*/
})

/*And("verify title of the web page", ()=>
{
    cy.title().should('eq', 'Login: Mercury Tours')
})*/





