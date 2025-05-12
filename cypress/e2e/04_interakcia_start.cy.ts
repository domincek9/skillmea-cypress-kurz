it('vytvorenie karty', () => {
  // Add meaningful test steps here or remove this test case if not needed
});

it.only('bookmarknutie boardu', () => {

  cy.visit('/')

  cy.get('[data-cy="star"]')
    .eq(0)
    .click({force: true})

});