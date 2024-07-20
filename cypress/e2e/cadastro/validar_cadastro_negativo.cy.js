const { generateUserData } = require('../../support/dataGenerator');
const { generateExistingUserData } = require('../../support/dataGenerator');

    Cypress.on('uncaught:exception', (_err, _runnable) => {
        return false;
    });

describe('Dado que usuário deseja realizar um cadastro, Quando preencher o formulário, Então deve ser redirecionado para uma tela de sucesso', () => {
  beforeEach(() => {
    cy.visit('https://qastage.buildbox.one/18/cadastro/');
  });

  it('Deve exibir erro quando tentar cadastrar com Dados já existente', () => {
    const existingUserData = generateExistingUserData();

    cy.get('[data-cy="button-btn-enroll"]').click();
    cy.get('[data-cy="input-signup-personal-data-firstName"]').type(existingUserData.firstName);
    cy.get('[data-cy="input-signup-personal-data-lastName"]').type(existingUserData.lastName);
    cy.get('[data-cy="input-signup-personal-data-birthDate"]').type(existingUserData.formattedBirthDate);
    cy.get('[data-cy="input-signup-personal-data-cpf"]').type(existingUserData.cpf);
    cy.get('[data-cy="input-signup-personal-data-email"]').type(existingUserData.email);
    cy.get('[data-cy="input-signup-personal-data-email-confirm"]').type(existingUserData.email);
    cy.get('[data-cy="input-signup-personal-data-password"]').type(existingUserData.password);
    cy.get('[data-cy="input-signup-personal-data-password-confirm"]').type(existingUserData.password);
    cy.get('[data-cy="input-signup-personal-data-lgpd"]').click();
    cy.get('[data-cy="button-signup_submit_button_1"]').click();
    cy.contains('CPF inválido.').should('be.visible');
    cy.contains('Este email já está em uso.').should('be.visible');
  });

});
