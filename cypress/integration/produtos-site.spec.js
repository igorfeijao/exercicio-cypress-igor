/// <reference types="cypress" />
var faker = require('faker');

context('Funcionalidade Produtos', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
    });

    it('Selecionar um produto', () => {
        
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('[class="product-block grid"]').first().click()

        cy.get('.woocommerce-product-rating').should('contain', 'customer reviews')

    });

    it.only('Adicionar produto no carrinho', () => {
        
        var quantidadeProduto = 4
        
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('[class="product-block grid"]').first().click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidadeProduto)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho.')

    });

});