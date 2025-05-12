it('premenné', () => {

  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .invoke('text')
    .as('boardName')

  cy.get('[data-cy=board-item]')
    .click()

  cy.get('@boardName') // Corrected alias name
    .then(text => {

      cy.get('[data-cy=board-title]') // Fixed string literal
        .should('have.value', text) // Corrected syntax
    })

})