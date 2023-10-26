// Nessa tela estarão as funções que irão validar a página entre em contato do portal


//Acessa a página Entre em Contato e garante que carregou
export default {
    acessarEntreEmContato() {
        cy.get('#menuHome')
            .click()
        cy.get('#item2')
            .click({ force: true })
        cy.get('h3.text-center')
            .should('have.text', 'Get In Touch')
    },

    // Verifica que o forms está vísivel
    validaFormulárioVisivel() {
        cy.get('#contact_area > div > div > div > div> form')
            .should('be.visible')
        cy.get("input[placeholder='Name']")
            .should('be.visible')
        cy.get("input[placeholder='Email']")
            .should('be.visible')
        cy.get("input[placeholder='Phone']")
            .should('be.visible')
        cy.get("input[placeholder='Subject']")
            .should('be.visible')
        cy.get("textarea[placeholder='Message']")
            .should('be.visible')
        cy.get('button')
            .should('be.visible')

    },

    //Válida título do forms
    validaTítuloFormulário() {
        cy.get('h3.text-center')
            .should('have.text', 'Get In Touch')
    },

    //Válida secção informações vísivel
    validaSecçãoInformações() {
        cy.get('.left_side_contact > ul')
            .should('be.visible')
    },

    //Métodos para preenchimento dos campos do forms
    preencheNome() {
        cy.get("input[placeholder='Name']")
            .type('Priscila Troina')
    },

    preencheEmail() {
        cy.get("input[placeholder='Email']")
            .type('teste@teste.com')
    },

    preencheTelefone() {
        cy.get("input[placeholder='Phone']")
            .type('53999875643')
    },

    preencheSubject() {
        cy.get("input[placeholder='Subject']")
            .type('Querot trabalhar na Qazando')
    },

    preencheMessage() {
        cy.get("textarea[placeholder='Message']")
            .type('Olá, meu nome é Priscila e eu gostaria de trabalhar com vocês. Poderei enviar meu currículo aonde?')
    },

    enviaFormulario() {
        cy.get('button').contains('Submit')
            .click()
    },

    //Valida msg de sucesso ao enviar o forms
    validaMensagemEnvioComSucesso() {
        cy.get('#swal2-title')
            .should('have.text', 'Thank You')
        cy.get('#swal2-html-container')
            .should('have.text', 'We Got Your Message')
    },

    //Métodos que validam a msg de obrigatoriedade dos campos
    validaObrigatoriedadeDoCampoNome() {
        cy.get("input[placeholder='Name']")
            .invoke('prop', 'validationMessage')
            .should((text) => {
                expect(
                    'Preencha este campo.'
                ).to.eq(text)
            })
    },

    validaObrigatoriedadeDoCampoEmail() {
        cy.get("input[placeholder='Email']")
            .invoke('prop', 'validationMessage')
            .should((text) => {
                expect(
                    'Preencha este campo.'
                ).to.eq(text)
            })
    },

    validaObrigatoriedadeDoCampoPhone() {
        cy.get("input[placeholder='Phone']")
            .invoke('prop', 'validationMessage')
            .should((text) => {
                expect(
                    'Preencha este campo.'
                ).to.eq(text)
            })
    },

    validaObrigatoriedadeDoCampoSubject() {
        cy.get("input[placeholder='Subject']")
            .invoke('prop', 'validationMessage')
            .should((text) => {
                expect(
                    'Preencha este campo.'
                ).to.eq(text)
            })
    }


}
