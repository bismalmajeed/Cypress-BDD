/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given('classlocators', ()=>
{
    //cy.visit("https://www.google.com/")
    cy.visit("https://demo.guru99.com/test/newtours/")
   
   // cy.visit("https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm#")

    //cy.get('[value="Manual Tester"]').check().should('be.checked').and('have.value','Manual Tester')
  //  cy.get('[type="checkbox"]').check(['RC','Selenium IDE','Selenium Webdriver'])
})

When("class locator", ()=>
{
    //cy.visit("https://www.google.com/")
    // use to press enter key from the keyboard type('{enter}')
   // cy.get('.gLFyf').type('cypress').type('{enter}')
})

Then("testable outcome", ()=>
{
   // cy.visit("https://demo.guru99.com/test/newtours/")


// video link https://www.youtube.com/watch?v=yuviRDQv_-s&list=PLQKDzuA2cCjoZigzUCOYs1esHedCTCLUr&index=13

        cy.get('[name=userName]').type('mercury').should('be.visible').and('be.enabled').type('mercury')
     cy.get('[name=password]').type('mercury').should('be.visible').and('be.enabled').type('mercury')
    
     cy.get('[name=submit]').click()
     cy.get('[href="reservation.php"]').click()
    //radio button
   // cy.get('[value="roundtrip"]').should('be.visible').and('be.checked') 
     //cy.get('[value="oneway"]').click()
     cy.get('[name="toMonth"]').select('February')

    })






