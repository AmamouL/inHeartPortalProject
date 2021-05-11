//To add app actions import * as common from '../actions/addProductToCart'
import * as cart from '../actions/addProductToCart'

describe('Project Scenarii', () => {
    let dataFeeder = require('../fixtures/dataFeeder.json')
    const product = dataFeeder.product
    beforeEach(() => {
        cy.log("beforeEach")
    })
    afterEach(() => {
        cy.log("afterEach")
    })
    it('Scenario referenceSearch', () => {
        cart.addTocartViareference(product[0])

    })
})