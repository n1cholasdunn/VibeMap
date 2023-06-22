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
});
