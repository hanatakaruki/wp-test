describe('Rymera check price Test', () => {
    it('it should $150!', () => {
        cy.visit('http://localhost/rymera/shop/')
        //login
        cy.contains('My account').click()
        cy.get('#username').type('rymeracustomer')
        cy.get('#password').type('cBkfubUCEoehvKqUWKkldD(v')
        cy.get('.woocommerce-button').click()
        //go to shop
        cy.contains('Shop').click()
        //open spigen detail
        cy.contains('SPIGEN Galaxy S10 Plus Ultra Hybrid').click()
        //assert the price
        cy.get('bdi').should(($p)=>{
            expect($p).to.contain('$150')
        })
    })
  })