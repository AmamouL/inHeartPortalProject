import * as login from '../actions/login'

describe('login tests', () => {
    let loginFeeder = require('../fixtures/loginFeeder.json')
    const credentials = dataFeeder.credentials
    beforeEach(() => {
        cy.visit("/", { failOnStatusCode: false })
        cy.contains("Back to dashboard page").click()
        cy.contains("Sign in")
    })

    it('Insupported browser Web"#Req3"', () => {
        checkInsupportedBrowser()

    })
})