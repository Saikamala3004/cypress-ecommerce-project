describe('SauceDemo Cart Tests', () => {

  beforeEach(() => {
  cy.visit('https://www.saucedemo.com/')
  cy.login('standard_user', 'secret_sauce')
})

  it('User should add product to cart successfully', () => {

    // Add product
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    // Go to cart
    cy.get('.shopping_cart_link').click()

    // Verify product is added
    cy.contains('Sauce Labs Backpack').should('be.visible')

  })

  it('User should remove product from cart', () => {

  cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
  cy.get('.shopping_cart_link').click()

  // Remove item
  cy.get('[data-test="remove-sauce-labs-bike-light"]').click()

  // Verify cart is empty
  cy.get('.cart_item').should('not.exist')

})

})