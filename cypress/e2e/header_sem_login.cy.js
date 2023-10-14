

import header_deslogado from "../support/Pages/header_deslogado_page"
import commum_page from "../support/Pages/commum_page"

describe('Validação header sem login de usuário', () => {

    beforeEach('Acessar a home do site', () => {
        commum_page.acessarHome()
    })

    it('Req-01 Header Visivel no portal', () => {
        commum_page.validaHeaderVisivel()
    })

    it('Req-02 Validação de mensagem de Promoções', () => {
        commum_page.validaMensagemPromocao()
        commum_page.validaCorAproveitar()
        commum_page.validaRedirecionamentoAproveitar()

    })

    it('Req-03 Validar opção Login disponível', () => {
        header_deslogado.validarOpcaoLoginVisivel()
        header_deslogado.validaIconeLogin()
        header_deslogado.validaRedirecionamentoLogin()
    })

    it('Req-04 Validar opção Cadastro disponível', () => {
        header_deslogado.validarOpcaoCadastroVisivel()
        header_deslogado.validaIconeCadastro()
        header_deslogado.validaRedirecionamentoCadastro()
    })


})