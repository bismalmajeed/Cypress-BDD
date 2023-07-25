/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given('dropdown', ()=>
{
    cy.visit("https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm#")
})

When("action", ()=>
{
    cy.get('[name=continents]').select('Australia')
})

Then("testable outcome", ()=>
{
  
})







