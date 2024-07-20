const { faker } = require('@faker-js/faker');
const cpf = require('gerador-validador-cpf');

function generateUserData() {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const birthDate = faker.date.birthdate({ min: 18, max: 65, mode: 'age' });
  const formattedBirthDate = ('0' + birthDate.getDate()).slice(-2) + ('0' + (birthDate.getMonth() + 1)).slice(-2) + birthDate.getFullYear();
  const validCpf = cpf.generate();
  const email = faker.internet.email();
  const password = faker.internet.password();

  return {
    firstName,
    lastName,
    formattedBirthDate,
    validCpf,
    email,
    password,
  };
}

function generateExistingUserData() {
  return {
    firstName: 'João',
    lastName: 'Silva',
    formattedBirthDate: '01011990',
    cpf: '123.456.789-00',
    email: 'joao.silva@example.com',
    password: 'senhaForte123'
  };
}

module.exports = {
  generateUserData,
  generateExistingUserData
};
