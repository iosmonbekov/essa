describe('Create Todo', () => {
  it('V', () => {
    cy.visit('http://127.0.0.1:5173/');

    cy.contains('Add Todo').click();

    // cy.url().should('include', 'commands/actions');

    // cy.get('.action-email')
    //   .type('islam.osmonbekov@weblabs.pro')
    //   .should('have.value', 'islam.osmonbekov@weblabs.pro')
  })
})