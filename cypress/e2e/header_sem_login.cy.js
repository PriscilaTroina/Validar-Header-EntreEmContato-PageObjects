import { faker } from '@faker-js/faker';

import header_deslogado from "../support/Pages/header_deslogado_page"
import commum_page from "../support/Pages/commum_page"

describe('Validação header', () => {

    beforeEach('Acessar a home do site', () => {
      commum_page.acessarHome()
    })

    it('Header Visivel no portal', () => {
        commum_page.validaHeaderVisivel()
    })

    it('Validação de mensagem de Promoções', () => {
        header_deslogado.validaMensagemPromocao()
        header_deslogado.validaCorAproveitar()
        
    })

    it('Validação direcionamento do link Aproveitar', () => {
       header_deslogado.validaRedirecionamentoAproveitar()
        
    })

    it('Validar opção Login disponível', () => {
        header_deslogado.validarOpcaoLoginVisivel()
        header_deslogado.validaIconeLogin()
    })

    it('Validar direcionamento Login', () => {
       header_deslogado.validaRedirecionamentoLogin()
    }) 

    
    it('Validar opção Cadastro disponível', () => {
        header_deslogado.validarOpcaoCadastroVisivel()
        header_deslogado.validaIconeCadastro()
    })

    it('Validar direcionamento Cadastro', () => {
       header_deslogado.validaRedirecionamentoCadastro()
    }) 
    

})