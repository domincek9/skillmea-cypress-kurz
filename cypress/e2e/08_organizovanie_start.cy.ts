beforeEach(() => {
  cy.visit('/')
  cy.log(Cypress.currentTest.title)
});


it('otvorenie aplikácie', () => {


});
it('overenie loga', () => {

  

  cy.get('[data-cy="trello-logo"]')
  .should('be.visible')

})