import React from 'react'
import TripSearch from '../map/TripSearch'

describe('<TripSearch />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<TripSearch selectedTripOption={''} />)
    })
})