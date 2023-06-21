import React from 'react';
import UserProfile from './UserProfile';
import { redirect } from 'react-router-dom';
import Home from './Home';
import { log } from 'console';
import { getPathLength } from 'geolib';

describe('<UserProfile />', () => {
  it('renders page', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<UserProfile />);

    // cy.url().should('eq', 'http://localhost:3000/');
    // cy.get('button');
  });

  it('renders profile pic', () => {
    cy.mount(<UserProfile />);
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

  // it('button check', () => {
  //   // see: https://on.cypress.io/mounting-reac

  //   cy.location().should((loc) => {
  //     expect(loc.pathname).to.contain('UserProfile');
  //   });

  //   // cy.url().should('include', '/profile');
  //   //test that homepage elements are rendered after click

  //   // cy.get('button')
  //   //   .invoke('directToHome')
  //   //   .should('eq', "(window.location.href = '/'");
  //   cy.get('button')
  //     .click()
  //     .then(() => {
  //       cy.url();
  //     });

  //   // cy.url().should('eq', 'http://localhost:3000/profile');
  // });
});
