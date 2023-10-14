export default {

    // funções de validação da parte do header que é especifica apenas da área deslogada
    validarOpcaoLoginVisivel() {
        cy.get('.right_list_fix > li > a')
            .contains('Login')
            .should('be.visible')
    },

    validaRedirecionamentoLogin() {
        cy.get('.right_list_fix > li > a')
            .contains('Login')
            .click()
        cy.get('.account_form > h3')
            .should('have.text', 'Login')
    },

    validaIconeLogin() {
        cy.get('.fa-user')
            .should('be.visible')
    },

    validarOpcaoCadastroVisivel() {
        cy.get('.right_list_fix > li > a')
            .contains('Cadastro')
            .should('be.visible')
    },

    validaRedirecionamentoCadastro() {
        cy.get('.right_list_fix > li > a')
            .contains('Cadastro')
            .click()
        cy.get('.account_form > h3')
            .should('have.text', 'Cadastro de usuário')
    },

    validaIconeCadastro() {
        cy.get('.fa-lock')
            .should('be.visible')
    }
}