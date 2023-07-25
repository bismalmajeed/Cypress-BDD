
Feature: newtours validation

Background:
Given open newtours application

@smoke
Scenario: Home Page
 When provide valid 'mercury' and 'mercury'
 Then click on submit button
 And verify title should be 'Login: Mercury Tours'

Scenario: Verifying my title
 When provide valid 'mercury' and 'mercury'
 Then click on submit button
 And verify title should be 'Login: Mercury Tours'
