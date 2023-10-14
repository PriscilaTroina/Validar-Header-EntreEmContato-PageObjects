import { faker } from '@faker-js/faker';

import header_logado from "../support/Pages/header_logado_page"
import commum_page from "../support/Pages/commum_page"

describe('Validação header', () => {

    //Gera dados aleatórios para cadastro de usuário
    const nome = faker.person.fullName()
    const email = faker.internet.email()
    const senha = 123456

    beforeEach('Acessar a área logada do site na página Painel', () => {

        //Acessa a home do site
        commum_page.acessarHome()

        //Faz o cadastro de usuario
        header_logado.acessarTelaCadastro()
        header_logado.preencheNome(nome)
        header_logado.preencheEmail(email)
        header_logado.preencheSenha(senha)

        //Faz o login
        header_logado.acessaLogin()
        header_logado.preencheEmailLogin(email)
        header_logado.preencheSenha(senha)
        header_logado.botaoLogin()
        header_logado.fechaMsgLoginSucesso()
    })

    it('Req-01 Header Visivel no portal com usuário logado', () => {
        commum_page.validaHeaderVisivel()
    })

    it('Req-02 Validação de mensagem de Promoções com usuário logado', () => {
        commum_page.validaMensagemPromocao()
        commum_page.validaCorAproveitar()
        commum_page.validaRedirecionamentoAproveitar()
    })


    it('Req-03 Validação Opção Acompanhe seu pedido disponível', () => {
        header_logado.validarOpcaoAcompanheSeuPedidoVisivel()
        header_logado.validaIconeAcompanheSeuPedido()
        header_logado.validaRedirecionamentoAcompanheSeuPedido()
    })


    it('Req-04-a Valida se e-mail em tela é o mesmo e-mail usado para login', () => {
        header_logado.validaEmailEmTela(email)
    })

    it('Req-04-b-1 Valida opção Painel e seu redirecionamento', () => {
        header_logado.validaOpcoesPainel()
    })
    it('Req-04-b-2 Valida opção Meus pedidos e seu redirecionamento', () => {
        header_logado.validaOpcaoMeusPedidos()
    })

    it('Req-04-b-3 Valida opção Sair e seu redirecionamento', () => {
        header_logado.validaOpcaoLogoff()
    })


})