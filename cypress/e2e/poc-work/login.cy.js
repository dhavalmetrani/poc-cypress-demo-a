describe('poc to-do app', () => {
  beforeEach(() => {
    // cy.visit('https://hobolink-vue-app-onset.apps.davra.com/devices')
    cy.visit("/devices")
  })



  it('Log in to website and validate landing page', () => {
    cy.log(Cypress.env())
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('#loginusername').type(Cypress.env('APP_USERNAME'))

    cy.get('#loginpassword').type(Cypress.env('APP_PASSWORD'))

    cy.get('#loginformsubmit').click()

    cy.contains("Devices")
    cy.get('#navbar-avatar').should('be.visible');
    cy.get('.v-app-bar-nav-icon').should('be.visible');
    cy.get('#register-device-button').should('be.visible');
    cy.get('#card-view-button').should('be.visible');

    cy.get('#navbar-avatar').click()

    cy.get('#account-menu-logout-button').click()

  })
})
