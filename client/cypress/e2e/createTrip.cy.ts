describe('template spec', () => {
  it('renders home page', () => {
    cy.visit('http://localhost:3000/');
  });

  it('can redirect to profile page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[class="w-10 rounded-full"')
      .click()
      .then(() => {
        cy.get(
          '[class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-40 z-[1]"'
        )
          .find('a')
          .first()
          .click();
      });
    cy.location('pathname').should('equal', '/profile');
  });

  it('radio buttons should be visible and allow user to input location', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[type="radio"]').should('be.visible');
    cy.get('[value="oneWay"]')
      .click()
      .then(() => {
        cy.get('[name="start"]').should('be.visible');
        cy.get('[name="end"]').should('be.visible');
        cy.get('button').should('be.visible');
      });
    cy.get('[value="singleDestination"]')
      .click()
      .then(() => {
        cy.get('[name="start"]').should('be.visible');
        cy.get('button').should('be.visible');
      });
    cy.get('[value="loopTrip"]')
      .click()
      .then(() => {
        cy.get('[name="start"]').should('be.visible');
        cy.get('[name="midpoint"]').should('be.visible');
        cy.get('[name="end"]').should('be.visible');
        cy.get('button').should('be.visible');
      });
  });

  it('tests single destination', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[value="singleDestination"]')
      .click()
      .then(() => {
        cy.get('[name="start"]')
          .type(
            'Fallsview Casino Resort, Fallsview Boulevard, Niagara Falls, ON, Canada'
          )
          .wait(2000)
          .then(() => {
            cy.get('[class="pac-container pac-logo"]')
              .first()
              .click()
              .wait(2000)
              .then(() => {
                cy.get('button', { timeout: 50000 }).click();
                cy.url().should('eq', 'http://localhost:3000/create');
              });
          });
      });
    cy.get('[id=":r0:"]')
      .click()
      .then(() => {
        cy.get('[id=":r0:-option-0"]').click();
        cy.get('[id=":r0:"]')
          .click()
          .then(() => {
            cy.get(
              '[class="overflow-scroll overflow-y-scroll no-scrollbar h-[500px]"]'
            ).should('be.visible');
            cy.get('[class="flex flex-row"]').each(($pTag) => {
              cy.wrap($pTag).should('contain', 'Adventure');
            });
          });
      });
  });
});
