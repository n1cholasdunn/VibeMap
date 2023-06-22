import React from 'react';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

describe('<Home />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Home />);
  });

  it('renders background pic', () => {
    cy.mount(<Home />);
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

  it('checks for radio buttons', () => {
    cy.mount(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    cy.location('pathname');

    cy.get('[type="radio"]').should('be.visible');

    cy.get('[type="radio"]').first().check();
  });
});
