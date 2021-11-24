/// <reference types="cypress" />
var faker = require('faker');

context('Funcionalidade do Login', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
    });

    it('Login com sucesso', () => {
        cy.get('.icon-user-unfollow').click()
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content').should('contain', 'Olá, aluno_ebac')
    });

    it('Tentativa de logar com email inválido', () => {
        var emailFail = faker.internet.email()

        cy.get('.icon-user-unfollow').click()
        cy.get('#username').type(emailFail)
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
    });

    it('Tentativa de logar com senha inválida', () => {
        var passwordFail = faker.internet.password()

        cy.get('.icon-user-unfollow').click()
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type(passwordFail)
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta')
    });

    it('Clicar em esqueci a senha', () => {
        cy.get('.icon-user-unfollow').click()
        cy.get('.lost_password > a').click()

        cy.get('.woocommerce-ResetPassword > :nth-child(1)').should('contain', 'Perdeu sua senha?')
    });

});