beforeEach(() => {

  cy.session('login', () => {

  cy.visit('/login')

  cy.get('[data-cy="login-email"]')
    .type('domincek84@gmail.com')

  cy.get('[data-cy="login-password"]')
    .type('domino{enter}')

    cy.location('pathname')
      .should('eq', '/')

})
});

// beforeEach(() => {

//   cy.request({
//     method: 'POST',
//     url: '/api/login',
//     body: {
//       email: 'domincek84@gmail.com',
//       password: 'domino'
//     }
//   }).then((res) => {

//     cy.setCookie('auth_token', res.body.accessToken) 
//   })
// });

it('autentifikacia', () => {

  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .should('have.length', 2);

}); 