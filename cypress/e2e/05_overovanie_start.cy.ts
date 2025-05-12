it('overovanie', () => {

  cy.visit('/board/1')

  //cy.get('[data-cy="new-card"]')
   // .click()

  //cy.get('[data-cy=new-card-input]')
   // .type('new card{enter}')

  cy.get('[data-cy="card-checkbox"]')
    .eq(0)
    .should('be.checked')

    cy.get('[data-cy=due-date]')
      .should('have.class', 'completed')

    

})