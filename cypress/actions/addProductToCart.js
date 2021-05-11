// function checkAddedProductInformation(product) {
//     cy.get('.typo-title').then(text => {
//         expect(text.text()).to.eq('Le produit suivant a bien été ajouté')
//     })

//     cy.get('.article-quantity-field')
//         .find('input')
//         .should('have.value', product.quantity)
//     cy.get('.article-price-value').then(price => {
//             const total = parseInt(price.text().split(' ')[0])
//             expect(total).to.be.eq(product.quantity * parseInt(product.price))
//             cy.get('.sub-category-link')
//                 .should('have.attr', 'href')
//                 .and('contains', "https://")
//         })
//         .should('have.attr', 'href')
//         .and('contains', "https://")
// }

function setQuantity(quantity) {
    cy.get('.article-quantity-input')
        .clear()
        .type(quantity)
}

function addToCart() {
    cy.get('#addToCart')
        .click()
}

function searchProductByReference(product) {

    cy.get("#commande-btn").should('be.visible')
        .click()
    let ref = product.reference.split(/\s/).join('');
    cy.intercept(`**/ViewSuggestSearch-SuggestProductRefJSon?MaxAutoSuggestResults=5&ProductRef=${ref}`).as('productByReference')
    cy.get('#addProductRef').type(ref)
    cy.wait('@productByReference').its('response.body').should('be.an', 'array')
    cy.get('#checkoutListSearch >li').eq(0).click()
    cy.get('.block-article-title').click()
}

function addTocartViareference(product) {
    cy.visit('/')
        // searchProductByReference(product)
        // setQuantity(product.quantity)
        //  addToCart()
}
export { addTocartViareference }