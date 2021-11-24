/// <reference types="cypress" />
var faker = require('faker');

context('Funcionalidade Register', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
    });

    it('Register sem email preenchido', () => {
        
        var passwordRegister = faker.internet.password()
        
        cy.get('.icon-user-unfollow').click()
        cy.get('#reg_password').type(passwordRegister)
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Erro: Informe um endereço de e-mail válido.')
    });

    it('Register sem senha preenchida', () => {
        
        var emailRegister = faker.internet.email()

        cy.get('.icon-user-unfollow').click()
        cy.get('#reg_email').type(emailRegister)
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Erro: Digite a senha da conta')

    });

    it.only('Register com sucesso', () => {
        
        var emailSucess = faker.internet.email()
        var passwordSucess = faker.internet.password()
        var nomeRegister = faker.name.firstName()
        var sobrenomeRegister = faker.name.lastName()

        cy.get('.icon-user-unfollow').click()
        cy.get('#reg_email').type(emailSucess)
        cy.get('#reg_password').type(passwordSucess)
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeRegister)
        cy.get('#account_last_name').type(sobrenomeRegister)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')

    });

});