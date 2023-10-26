import header_deslogado from "../support/Pages/entre_em_contato_page"
import commum_page from "../support/Pages/commum_page"
import entre_em_contato from "../support/Pages/entre_em_contato_page"

describe('Validação tela entre em contato 2', () => {

    beforeEach('Acessar a página Entre em Contato', () => {
        commum_page.acessarHome()
        entre_em_contato.acessarEntreEmContato()

    })

    it('Req-01-a-b Acesso Página Entre em Contato e verifica existência do formulário de acesso com seu título', () => {
        entre_em_contato.validaFormulárioVisivel()
        entre_em_contato.validaTítuloFormulário()
    })

    it('Req-01-c Acesso Página Entre em Contato e verifica existência da secção informações', () => {
        entre_em_contato.validaSecçãoInformações()
    })

    it('Req-02 Envio do formulário com sucesso', () => {
        entre_em_contato.acessarEntreEmContato()
        entre_em_contato.preencheNome()
        entre_em_contato.preencheEmail()
        entre_em_contato.preencheTelefone()
        entre_em_contato.preencheSubject()
        entre_em_contato.preencheMessage()
        entre_em_contato.enviaFormulario()
        entre_em_contato.validaMensagemEnvioComSucesso()
    })

    it('Req-03 Envio do formulário com nome faltante', () => {
        entre_em_contato.acessarEntreEmContato()
        entre_em_contato.preencheEmail()
        entre_em_contato.preencheTelefone()
        entre_em_contato.preencheSubject()
        entre_em_contato.preencheMessage()
        entre_em_contato.enviaFormulario()
        entre_em_contato.validaObrigatoriedadeDoCampoNome()
    })

    it('Req-03 Envio do formulário com e-mail faltante', () => {
        entre_em_contato.acessarEntreEmContato()
        entre_em_contato.preencheNome()
        entre_em_contato.preencheTelefone()
        entre_em_contato.preencheSubject()
        entre_em_contato.preencheMessage()
        entre_em_contato.enviaFormulario()
        entre_em_contato.validaObrigatoriedadeDoCampoEmail()
    })

    it('Req-03 Envio do formulário com telefone faltante', () => {
        entre_em_contato.acessarEntreEmContato()
        entre_em_contato.preencheNome()
        entre_em_contato.preencheEmail()
        entre_em_contato.preencheSubject()
        entre_em_contato.preencheMessage()
        entre_em_contato.enviaFormulario()
        entre_em_contato.validaObrigatoriedadeDoCampoPhone()
    })

    it('Req-03 Envio do formulário com Subject faltante', () => {
        entre_em_contato.acessarEntreEmContato()
        entre_em_contato.preencheNome()
        entre_em_contato.preencheEmail()
        entre_em_contato.preencheTelefone()
        entre_em_contato.preencheMessage()
        entre_em_contato.enviaFormulario()
        entre_em_contato.validaObrigatoriedadeDoCampoSubject()
    })




})