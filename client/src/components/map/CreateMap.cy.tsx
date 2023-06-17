import React from 'react'
import CreateMap from '../map/CreateMap'

describe('<CreateMap />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<CreateMap />)
    })
})