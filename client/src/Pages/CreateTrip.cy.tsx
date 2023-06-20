import React from 'react'
import CreateTrip from './CreateTrip'

describe('<CreateTrip />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CreateTrip />)
  })
})