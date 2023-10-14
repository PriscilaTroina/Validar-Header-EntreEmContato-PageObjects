// Nessa tela estarão as funções que poderão ser utilizadas em mais de uma Page, ou seja, funções que são utilizadas na page do header sem login, com login, Entre em contato ou qualquer outra página futura do site que possa vir a ser automatizada.


//Acessa a home e garente que a página carregou
export default {
    acessarHome() {
        cy.visit('/')
        cy.get(' li > a > .logo').should('be.visible')
    },

//Valida se o header está visível
    validaHeaderVisivel() {
        cy.get('#top_header')
            .should('be.visible')
    },


// Aqui serão feitas as funções da parte do header que é comum tanto para área logada quanto para área deslogada

 
//Valida mensagem de Promoção no canto superior esquerdo
    validaMensagemPromocao() {
        cy.get('.top_header_left > p')
            .should('have.text', 'Promoções especiais disponíveis.Aproveitar...')
    },

//Valida redirecionamento do link 'Aproveitar' dentro da frase de promoções
    validaRedirecionamentoAproveitar() {
        cy.get('.top_header_left > p')
            .contains('Aproveitar...')
            .click()
        cy.get('.product_shot_title > p')
            .should('have.text', 'Sort By:')
    },

//Valida a cor do link 'Aproveitar'
    validaCorAproveitar() {
        cy.get('p > a')
            .should('have.css', 'color', 'rgb(0, 200, 207)')
    },



}






