		
# qa-challenge

Olá!

Este desafio consiste em avaliar seu conhecimento e habilidades em testes automatizados, portanto esperamos que você tente resolve-lo usando toda a sua capacidade e compreensão da tecnologia aplicada.

O Desafio é o seguinte:

Acesse esse link https://qastage.buildbox.one/18/cadastro 

Desenvolva casos de teste automatizados para validar o processo de cadastro em uma Aplicação Web. Os testes devem cobrir diferentes cenários, incluindo entradas válidas e inválidas, verificação de campos obrigatórios, validação de formatos de dados, entre outros aspectos relevantes para garantir a funcionalidade da tela de cadastro.

Projetos que demonstrarem uso eficiente do Cypress, bem como a implementação de comandos personalizados, serão valorizados e receberão pontos adicionais.

Certifique-se de que seu pull request está sendo enviado no link do formulário de submissão para a vaga.

Estou ansioso para ver sua abordagem criativa e eficiente para este desafio de testes automatizados.
Boa sorte!

----

# Projeto de Automação de Testes E2E com Cypress

Descrição: Este projeto feito com o Cypress, um framework de testes end-to-end, para automatizar testes em aplicações web. Utilização também do Faker para gerar dados de teste realistas, como nomes, endereços e CPFs.

# Tecnologias Utilizadas

Cypress: Framework de testes E2E

    Versão: ^13.13.0

@testing-library/cypress: Biblioteca para auxiliar na escrita de testes mais robustos e acessíveis

    Versão: ^10.0.2

@faker-js/faker: Biblioteca para gerar dados falsos

    Versão: ^8.4.1

gerador-validador-cpf: Biblioteca para gerar CPFs válidos

    Versão: ^5.0.2

ESLint: Ferramenta para análise estática de código JavaScript

    Versão: ^9.7.0

eslint-plugin-cypress: Plugin do ESLint com regras específicas para o Cypress

    Versão: ^3.3.0

---

# Pré-requisitos

Gerenciador de Pacotes (npm ou yarn): Certifique-se de ter um gerenciador de pacotes instalado. O npm geralmente vem junto com 
o Node.js.

Node.js versão: `v20.11.1` - node -v

Executando os Testes local: `npx cypress open `

Modo Headless: `npx cypress run`

Isso executará todos os testes em modo headless (sem interface gráfica).

# Observações

Faker: O Faker é usado para gerar dados aleatórios nos testes. Lógica esta em `dataGenerator.js`

Cypress Testing Library: Utilize os comandos da Cypress Testing Library para escrever testes mais robustos e acessíveis quando não se tem o campo data-cy.

Validação de CPF: O pacote `gerador-validador-cpf` é usado para gerar CPFs válidos nos testes.