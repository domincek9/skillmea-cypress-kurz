it('class, id, attr', { baseUrl: null }, () => {

  cy.visit('./mini-apps/rainbow.html')

  cy.get('h1')

})