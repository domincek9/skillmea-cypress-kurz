it('vytvorenie novej karty', () => {

  
});

it('odstránenie karty', () => {

  
});

it.only('v boarde nie sú žiadne zoznamy', () => {

  cy.intercept('GET', '/list/')
    .as('getLists')

  cy.visit('/board/1')

  cy.wait('@getLists')

  cy.get('[data-cy=lists]')
    .should('not.exist')

});

