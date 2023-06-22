import { find } from 'cypress/types/lodash';

describe('template spec', () => {
  it('renders home page', () => {
    cy.visit('http://localhost:3000/');
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
          .type('Fallsview Casino Resort')
          .then(() => {
            cy.get('[class="pac-container pac-logo"]').first().click();
            cy.get('button').click();
            cy.url().should('eq', 'http://localhost:3000/create');
          });
      });
  });
});
