import React from 'react'
import SignUp from '../user/SignUp'

describe('<SignUp />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<SignUp />)
    })
})