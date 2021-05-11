function submitLogin() {
    cy.contains("Sign in").click()
}

function setCredentials(login, password) {
    cy.get("#inputusername")
        .should('be.visible')
        .clear()
        .type(login)
    cy.get("#inputpassword")
        .should('be.visible')
        .clear()
        .type(password)
}

function checkCredentials(login, password) {
    cy.get("#wrongpassword")
        .should('be.visible')

}

function checkManyincorrectCredentials(login, password) {
    cy.get("#wrongpassword")
        .should('be.visible')
        .should('contain', 'Too many failed login attempts.Account locked for 30 minutes ')

}

function checkInsupportedBrowser(login, password) {
    cy.get('#loginForm')
        .should("be.visible")
        .and("contain", "Browser not supported")


}
export { setCredentials, submitLogin, checkCredentials, checkInsupportedBrowser }