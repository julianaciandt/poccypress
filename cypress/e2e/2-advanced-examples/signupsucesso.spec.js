import faker from 'faker';

describe('Cadastro de Usuário', () => {
  it('Realizar cadastro válido', () => {
    cy.intercept('POST', 'https://api.demoblaze.com/signup').as('signupRequest');
    const signUp = () => {
      const username = faker.internet.userName();
      cy.visit('https://www.demoblaze.com/index.html');
      cy.get('#signin2').click();
      cy.wait(2000);
      cy.get('#sign-username').should('be.visible').type(username);
      cy.get('#sign-password').type('mypassword');
      cy.wait(3000);
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
      cy.log('Cheguei até aqui depois do clique signup');

      //API validation

      cy.wait('@signupRequest').then((interception) => {

       // const handleSignUpResponse = (res) => {
          if (interception.response.body.alertMessage === 'This user already exist.') {
            cy.log('Cheguei até aqui - Usuário já existe');
            signUp();
         } else if (interception.response.body.alertMessage === 'Please fill out Username and Password.') {
        
            cy.log('Cheguei até aqui - Campos de usuário e senha não preenchidos');
            signUp();
          } else {
            expect(interception.response.body.alertMessage ==='Sign up successful.');
            cy.log('Cheguei no final - Cadastro bem-sucedido');
          }
       // };

       // const { response } = interception;
       // handleSignUpResponse(response);
      });
    };

    signUp();
  });
});

describe.only('Cadastro de Usuário repetido', () => {
  it.only('Realizar cadastro válido', () => {
    const username = 'juliana';
    const password = '123';

   // const signUp = () => {
      cy.intercept('POST', 'https://api.demoblaze.com/signup').as('signupRequest');
      cy.visit('https://www.demoblaze.com/index.html');
      cy.get('#signin2').click();
      cy.get('#sign-username').should('be.visible').type(username);
      cy.get('#sign-password').type(password);
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
      cy.log('Cheguei até aqui depois do clique signup');

      // Interceptar a rota
      cy.wait('@signupRequest').then((interception) => {
        expect(interception.response.body.alertMessage === 'This user already exist.');
        //if (interception.response.body.alertMessage === 'This user already exist.') {
          cy.log('Passou no Teste');
         // signUp();
      });
   // };

   // signUp();
  });
});
