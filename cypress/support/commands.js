// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('verifyText', (locator, text) => { 
    cy.get(locator).first().should('have.text', text)
 })

 Cypress.Commands.add('login', (username, password) => { 
    
    cy.get('#react-select-2-input').type(`${username}{enter}`, { force: true })
    cy.get('#react-select-3-input').type(`${password}{enter}`, { force: true })
    cy.get('#login-btn').click({ force: true })
 })
//
//
// -- This is a child command --
Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { 
     })
//
//
// -- This is a dual command --
Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { 
    
 })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })