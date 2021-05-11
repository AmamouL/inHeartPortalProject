import * as login from '../actions/login'

describe('login tests', () => {
    let credentialsFeeder = require('../fixtures/loginFeeder.json')
    const credentials = credentialsFeeder.credentials
    beforeEach(() => {
        cy.visit("/", { failOnStatusCode: false })
        cy.contains("Back to dashboard page").click()
        cy.contains("Sign in")
    })
    it('Wrong password credential "#Req1"', () => {
        login.setCredentials(credentials[0].login, credentials[0].password)
        login.submitLogin()
        login.checkCredentials()

    })
    it('Six incorrect password "#Req2"', () => {
        credentials.forEach((credential) => {
            login.setCredentials(credential.login, credential.password)
            login.submitLogin()
            login.checkCredentials()

        })
    })
})