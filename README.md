
Projeto Cypress 002: Validação header com e sem login de usuário e também validação da página 'Entre em Contato'.

💡 Esse é um projeto próprio e feito do zero que consiste em automatizar os fluxos do header do site QAZando que tem duas versões: Usuário deslogado e usuário logado. Além disso, irei validar também o formulário de contato na página Entre em Contato.
Link do site:  https://automationpratice.com.br/

💡 **Objetivo do Projeto**: Faz algum tempo que eu estudo Cypress. No entanto, sinto que precisava de um projeto próprio e feito do zero para demonstrar conhecimento sobre o framework. Sinto que ficar enchendo o repositório de projetos de cursos talvez não seja a forma mais eficaz. Portanto, ainda que o projeto leve algum tempo para se tornar bem bacana, desde a escrita de requisitos até a implementação dos cenários, acredito que é a melhor maneira de me desafiar e mostrar as pessoas interessadas o meu processo de evolução. Além disso, ressalto sempre que estou em processo de aprendizado, então se você chegar aqui e tiver alguma dica de melhoria, entre em contato. ;)

📌 Seguem algumas informações do projeto: 

💡 Projeto desenvolvido em padrão Page Objects utilizando funções do JavaScript.

-- **O projeto de forma geral está concluído, mas uma vez que eu tenha tempo entre meus estudos estarei refatorando o código**

📌 **O que foi feito até o momento:**

✅ Simulação de escrita de requisitos do header com e sem login e também do formulário entre em contato: https://docs.google.com/document/d/16mRGoGVqPzPToMSuWISCN9x5b4GT6Jzn_jVLputOWVU/edit?usp=sharing

✅ Escrita dos cenários de Testes do header com e sem login e também do formulário entre em contato: https://docs.google.com/spreadsheets/d/1pX3kLjYLo7gWFXqZVTFu0mZcjnMpZWAJjplTsEBdWso/edit?usp=sharing

✅ Desenvolvimento dos cenários de Teste do header com e sem login e na página Entre em Contato os cenários referentes ao formulário.

✅ Configuração de um Workflow simples com o Cypress Cloud. Por enquanto, configurado apenas com o navegador padrão do Cypress:

<img src="/.github/Resultados.png">

📌 **Os cenários de testes podem ser encontrados dentro da pasta e2e.**

📌 **Já dentro da pasta support/Pages podem ser encontrados as Pages**

🖥️ **Instalação do Projeto**

1. Faça um clone do projeto;

2. Instale o Node.js no computador;

3. Acesse a pasta onde clonou o repositório via terminal;

4. Execute o seguinte comando para instalar as dependências do projeto:
    * npm install;

5. Execute o seguinte comando para abrir o Cypress:
     * npx cypress open


