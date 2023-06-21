describe('template spec', () => {
  it('checks current path', () => {
    cy.visit('http://localhost:3000/profile');

    cy.location('pathname').should('equal', '/profile');
    cy.contains('Create Map +');
  });

  it('checks that button redirects', () => {
    cy.visit({ url: 'http://localhost:3000/profile' });
    cy.get('button').should('exist');
    cy.get('button')
      .click()
      .then(() => {
        cy.location('pathname').should('equal', '/');
      });
  });

  it('checks that images are loading', () => {
    cy.visit({ url: 'http://localhost:3000/profile' });
    cy.get('img').each(($img) => {
      cy.wrap($img)
        .scrollIntoView()
        .should('be.visible')
        .and(($img) => {
          expect(($img[0] as HTMLImageElement).naturalWidth).to.be.greaterThan(
            0
          );
        });
    });
  });

  it('checks that user info is loading', () => {
    cy.visit({ url: 'http://localhost:3000/profile' });
    cy.get('h3').each(($name) => {
      cy.wrap($name).should('be.visible');
    });
    cy.get('h4').each(($info) => {
      cy.wrap($info).should('be.visible');
    });
    cy.get('.py-5').each(($info) => {
      cy.wrap($info).should('be.visible');
    });
  });
});
