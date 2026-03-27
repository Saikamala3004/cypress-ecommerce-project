describe('SauceDemo Checkout Flow', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')

    // Login
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })

  it('User should complete checkout successfully', () => {

    // Load test data
    cy.fixture('user').then((user) => {

      // Add product
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

      // Go to cart
      cy.get('.shopping_cart_link').click()

      // Checkout
      cy.get('[data-test="checkout"]').click()

      // Fill details
      cy.get('[data-test="firstName"]').type(user.firstName)
      cy.get('[data-test="lastName"]').type(user.lastName)
      cy.get('[data-test="postalCode"]').type(user.postalCode)

      cy.get('[data-test="continue"]').click()

      // Finish order
      cy.get('[data-test="finish"]').click()

      // Validate success
      cy.contains('Thank you for your order!').should('be.visible')

    })

  })

})