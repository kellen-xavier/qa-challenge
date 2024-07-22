const { generateUserData } = require('../../support/dataGenerator');

describe('Dado que usuário deseja realizar um cadastro, Quando preencher o formulário, Então deve ser redirecionado para uma tela de sucesso', () => {
  beforeEach(() => {
    cy.visit('https://qastage.buildbox.one/18/cadastro/');
  });

  it('Validar o cadastro de um novo usuário com sucesso', () => {
    const userData = generateUserData();

    cy.get('[data-cy="button-btn-enroll"]').click();
    cy.get('[data-cy="input-signup-personal-data-firstName"]').type(userData.firstName);
    cy.get('[data-cy="input-signup-personal-data-lastName"]').type(userData.lastName);
    cy.get('[data-cy="input-signup-personal-data-birthDate"]').type(userData.formattedBirthDate);
    cy.get('[data-cy="input-signup-personal-data-cpf"]').type(userData.validCpf);
    cy.get('[data-cy="input-signup-personal-data-email"]').type(userData.email);
    cy.get('[data-cy="input-signup-personal-data-email-confirm"]').type(userData.email);
    cy.get('[data-cy="input-signup-personal-data-password"]').type(userData.password);
    cy.get('[data-cy="input-signup-personal-data-password-confirm"]').type(userData.password);

    cy.get('button[type="button"][aria-controls="dropdown-button-1"]').should('be.visible').click();    
    cy.findByText('Beginner').should('be.visible').click();
    cy.wait(2000);
    cy.get('[data-cy="input-signup-personal-data-lgpd"]').click();
    cy.get('[data-cy="button-signup_submit_button_1"]').click();
    cy.get('[data-cy="input-signup-address-neighborhood"]').type('Cristo Redentor');
    cy.get('[data-cy="input-signup-address-cep"]').type('91350240');
    cy.get('[data-cy="input-signup-address-number"]').type('54');
    cy.get('[data-cy="input-signup-address-complement"]').type('Apto lar 1');
    cy.get('[data-cy="button-signup_submit_button_3"]').should('be.visible').click();
    cy.wait(2000);
    cy.contains('Thank you for joining us!').should('exist');
  });
});
