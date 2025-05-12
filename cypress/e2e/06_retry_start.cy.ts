it('retry', { defaultCommandTimeout: 10000 }, () => {
// akcia, ktoru chceme retryovat
  cy.visit('/board/1')

// queries, ktore sa retryuju
  cy.get('[data-cy=card]')
    .eq(2)
    .should('contain.text', 'juice') // overovania

});
