/// <reference types="cypress" />

describe('example bstack demo app', () => {
  beforeEach(() => {
    
    cy.visit('https://www.bstackdemo.com/signin')
  })

  it('Login to the app', () => {
    const username = 'demouser'
    const password = 'testingisfun99'
    cy.login(username, password)
  })

})
