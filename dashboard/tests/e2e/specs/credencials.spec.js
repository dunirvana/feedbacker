const APP_URL = process.env.APP_URL || 'http://localhost:8080'

describe('Credencials', () => {

  function login (user, pass) {

    cy.visit(APP_URL)

    cy.get('#header-login-button').click()
    cy.get('#modal-login')

    cy.get('#email-field').type(user)
    cy.get('#password-field').type(pass)
    cy.get('#submit-button').click()

  }

  it('should generate an api_key', () => {

    login ('igor@igor.me', '1234')

    cy.wait(4000)
    cy.visit(`${APP_URL}/credencials`)
    cy.wait(2000)

    const oldApiKey = cy.get('#apikey').invoke('text')
    cy.get('#generate-apikey').click()
    cy.wait(2000)
    const newApiKey = cy.get('#apikey').invoke('text')

    expect(oldApiKey).to.not.equal(newApiKey)
  })      

})
