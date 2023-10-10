export default {

    validaMensagemPromocao() {
        cy.get('.top_header_left > p')
            .should('have.text', 'Promoções especiais disponíveis.Aproveitar...')
    },

    validaRedirecionamentoAproveitar() {
        cy.get('.top_header_left > p')
            .contains('Aproveitar...')
            .click()
        cy.get('.product_shot_title > p')
            .should('have.text', 'Sort By:')
    },

    validaCorAproveitar() {
        cy.get('p > a')
            .should('have.css', 'color', 'rgb(0, 200, 207)')
    },

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