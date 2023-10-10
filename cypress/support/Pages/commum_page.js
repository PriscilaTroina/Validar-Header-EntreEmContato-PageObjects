// aqui eu adicionei comandos que poderão ser utilizados para testes de outras telas, caso o projeto evolua.

export default {
    acessarHome() {
        cy.visit('/')
        cy.get(' li > a > .logo').should('be.visible')
    },

    validaHeaderVisivel() {
        cy.get('#top_header')
            .should('be.visible')
    }


}






