// Aqui estarão as funções para validar o header logado do site


export default {

    //Nesse ponto serão implementadas as funções para fazer um cadastro de usuário 

    acessarTelaCadastro() {
        cy.get('.fa-lock').click()
    },

    preencheNome(nome) {
        cy.get('#user').type(nome)
    },

    preencheEmail(email) {
        cy.get('#email').type(email)
    },

    preencheSenha(senha) {
        cy.get('#password').type(senha)
    },

    //Nesse ponto serão implementadas as funções para fazer o login no site

    acessaLogin() {
        cy.get('.fa-user').click()
    },

    preencheEmailLogin(email) {
        cy.get('#user').type(email)
    },

    botaoLogin() {
        cy.get('#btnLogin').click()
    },

    fechaMsgLoginSucesso() {
        cy.get('.swal2-confirm').click()
    },

    //Nesse pontos serão implementadas as funções para validar a parte logada do header 

    validarOpcaoAcompanheSeuPedidoVisivel() {
        cy.get('.right_list_fix > li > a')
            .contains('Acompanhe seu pedido')
            .should('be.visible')
    },

    validaRedirecionamentoAcompanheSeuPedido() {
        cy.get('.right_list_fix > li > a')
            .contains('Acompanhe seu pedido')
            .click()
        cy.get('.order_tracking_wrapper > h4')
            .should('have.text', 'Order Tracking')
    },

    validaIconeAcompanheSeuPedido() {
        cy.get('.fa-truck')
            .should('be.visible')
    },

    validaEmailEmTela(email) {
        cy.get('#userLogged')
            .should('contain', email)
    },

    validaOpcoesPainel() {
        //busca ícone ao lado do e-mail e clica nele para acessar a lista de opções
        cy.get('#userLogged > .fa-angle-down')
            .click()
        //clica na opção Meus pedidos
        cy.get('#userLogged > ul > li:nth-child(2) > a')
            .click({ force: true })
        //busca ícone ao lado do e-mail e clica nele para acessar a lista de opções
        cy.get('#userLogged > .fa-angle-down')
            .click()
        //Clica na opção Painel
        cy.get('#userLogged > ul > li:nth-child(1) > a')
            .click({ force: true })
        cy.get('.vendor_top_box > h4')
            .should('contain', 'Total Orders')
    },

    validaOpcaoMeusPedidos() {
        //busca ícone ao lado do e-mail e clica nele para acessar a lista de opções
        cy.get('#userLogged > .fa-angle-down')
            .click()
        //clica na opção Meus pedidos
        cy.get('#userLogged > ul > li:nth-child(2) > a')
            .click({ force: true })
        //verifica se fez o redirecionamento corretamente
        cy.get('.myaccount-content > h4')
            .should('have.text', 'Orders ')
    },

    validaOpcaoLogoff() {
        //busca ícone ao lado do e-mail e clica nele para acessar a lista de opções
        cy.get('#userLogged > .fa-angle-down')
            .click()
        //clica na opção Sair
        cy.get('#userLogged > ul > li:nth-child(3) > a')
            .click({ force: true })
        //Verifica se o logout foi realizado
        cy.get('#swal2-title')
            .should('contain', 'Logout realizado')
    }

}






