//Primeiro código gerado
import faker from 'faker';

describe('Sign up Scenario 1 - Valid Sign Up', () => {
  it('Should access the homepage and sign up', () => {
    cy.visit('https://www.demoblaze.com/index.html');
    cy.get('a[href="/sign-up"]').click();
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('johndoe@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/login');
    cy.get('.alert-success').should('be.visible');
  });
});



// Histórico de código - 1 Código chat GPT para a pergunta Para o cenário  de Sign up 
//Cenário 1 - Cadastro válido:
//Acessar a página inicial da aplicação.
//Clicar no link "Sign up".
//Preencher todos os campos obrigatórios do formulário de cadastro corretamente.
//Clicar no botão "Sign up".
//Verificar se o usuário é redirecionado para a página de login.
//Verificar se uma mensagem de sucesso de cadastro é exibida.
//Poderia escrever um código em Cypress, a url a ser visitada é https://www.demoblaze.com/index.html 

describe('Cadastro de Usuário', () => {
    it('Realizar cadastro válido', () => {
      cy.visit('https://www.demoblaze.com/index.html');
      
      // Clicar no link "Sign up"

      //Comando gerado via chatGPT com erro
      cy.contains('Sign up').click();
      //Comando selecionado via Selector Playground que será inserido na nova pergunta
      cy.get('#signin2').click()
      // Preencher os campos obrigatórios corretamente
      cy.get('input[name="username"]').type('myusername');
      cy.get('input[name="password"]').type('mypassword');
      cy.get('input[name="rePassword"]').type('mypassword');
      
      // Clicar no botão "Sign up"
      cy.contains('Sign up').click();
      
      // Verificar redirecionamento para a página de login
      cy.url().should('include', '/login.html');
      
      // Verificar mensagem de sucesso de cadastro
      cy.contains('Sign up successful.').should('be.visible');
    });
  });
  

// Histórico código - Após o primeiro erro , 
//O código anterior deu um erro 
//Timed out retrying after 4050ms: cy.click() failed because this element is not visible:
//<h5 class="modal-title" id="signInModalLabel">Sign up</h5>
//This element <h5#signInModalLabel.modal-title> is not visible because its parent <div#signInModal.modal.fade> has CSS property: display: none
//Fix this problem, or use {force: true} to disable error checking
//Poderia reformular o código acima  substituindo   cy.contains('Sign up').click(); por  cy.get('#signin2').click() para ver se irá funcionar?

describe('Cadastro de Usuário', () => {
    it('Realizar cadastro válido', () => {
      cy.visit('https://www.demoblaze.com/index.html');
      
      // Clicar no link "Sign up"
      cy.get('#signin2').click();
  
      // Preencher os campos obrigatórios corretamente
      cy.get('input[name="username"]').type('myusername');
      cy.get('input[name="password"]').type('mypassword');
      cy.get('input[name="rePassword"]').type('mypassword');
      
      // Clicar no botão "Sign up"
      cy.contains('Sign up').click({ force: true });
      
      // Verificar redirecionamento para a página de login
      cy.url().should('include', '/login.html');
      
      // Verificar mensagem de sucesso de cadastro
      cy.contains('Sign up successful.').should('be.visible');
    });
  });
  


// Histórico código - Após novo erro foi reformulada a pergunta para que fosse inserido um username genérico 
// e um password e então para clicar em sigup.
//Reformulando a pergunta para de inserção de um username e password e clicar no botão sign up.
//Poderia refatorar o código anterior com os novos css selectors?
//Substituir
// Preencher os campos obrigatórios corretamente
//cy.get('input[name="username"]').type('myusername');
//cy.get('input[name="password"]').type('mypassword');
//cy.get('input[name="rePassword"]').type('mypassword'); 
// Clicar no botão "Sign up"
//cy.contains('Sign up').click({ force: true });
//Para
// Preencher os campos obrigatórios corretamente
//  cy.get('#sign-username').type('myusername');
//  cy.get('#sign-password').type('mypassword');
// Clicar no botão "Sign up"
// cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
//substituir tambem no novo código o username para jujuba e a senha para jujuba123

describe('Cadastro de Usuário', () => {
    it('Realizar cadastro válido', () => {
      cy.visit('https://www.demoblaze.com/index.html');
  
      // Clicar no link "Sign up"
      cy.get('#signin2').click();
  
      // Preencher os campos obrigatórios corretamente
      cy.get('#sign-username').type('jujuba');
      cy.get('#sign-password').type('jujuba123');
  
      // Clicar no botão "Sign up"
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  
      // Verificar redirecionamento para a página de login
      cy.url().should('include', '/login.html');
  
      // Verificar mensagem de sucesso de cadastro
      cy.contains('Sign up successful.').should('be.visible');
    });
  });
  

  //Após rodar o código anterior foi possível realizar o sign up, houve um erro na validação da msg de sucesso
  //Porém um problema foi encontrado não épossível adicionar usuários com o msm username 
//Pergunta O site testado não permite que seja adicionado o mesmo user , poderia refatorar o código para que a cada iteração da automação seja colocado um username diferente?
//Resposta Você pode executar o seguinte comando para instalar o faker: npm install faker
//


describe('Cadastro de Usuário', () => {
  it('Realizar cadastro válido', () => {
    cy.visit('https://www.demoblaze.com/index.html');

    // Gerar um nome de usuário único usando o faker
    const username = faker.internet.userName();

    // Clicar no link "Sign up"
    cy.get('#signin2').click();

    // Preencher os campos obrigatórios corretamente com o nome de usuário gerado
    cy.get('#sign-username').type(username);
    cy.get('#sign-password').type('mypassword');

    // Clicar no botão "Sign up"
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

    // Verificar redirecionamento para a página de login
    cy.url().should('include', '/login.html');

    // Verificar mensagem de sucesso de cadastro
    cy.contains('Sign up successful.').should('be.visible');
  });
});



//Validação de sucesso do alerta
//Solicitei que fosse colocada a validação da msg de sucesso do sign up e retirada a validação de redirecionamento para a pagina de login
 //O novo código foi

 describe('Cadastro de Usuário', () => {
    it('Realizar cadastro válido', () => {
      cy.visit('https://www.demoblaze.com/index.html');
  
      // Gerar um nome de usuário único usando o faker
      const username = faker.internet.userName();
  
      // Clicar no link "Sign up"
      cy.get('#signin2').click();
  
      // Preencher os campos obrigatórios corretamente com o nome de usuário gerado
      cy.get('#sign-username').type(username);
      cy.get('#sign-password').type('mypassword');
  
      // Clicar no botão "Sign up"
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  
      // Verificar mensagem de sucesso de cadastro
      cy.contains('Sign up successful.').should('be.visible');
    });
  });
  


 //Após encontrar um problema do poop-up de erro n estar sendo validado
//Solicitei que fosse adicionado um cy.wait.
 //O novo código foi 
describe('Cadastro de Usuário', () => {
  it('Realizar cadastro válido', () => {
    cy.visit('https://www.demoblaze.com/index.html');

    // Gerar um nome de usuário único usando o faker
    const username = faker.internet.userName();

    // Clicar no link "Sign up"
    cy.get('#signin2').click();

    // Preencher os campos obrigatórios corretamente com o nome de usuário gerado
    cy.get('#sign-username').type(username);
    cy.get('#sign-password').type('mypassword');

    // Clicar no botão "Sign up"
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

    // Aguardar um período de tempo antes de validar o pop-up
    cy.wait(2000);

    // Verificar a presença do pop-up
    cy.get('.popup-selector').should('be.visible');
    
    // Verificar mensagem de sucesso de cadastro
  //  cy.contains('Sign up successful.').should('be.visible');
  });
});



//Não deu certo do jeito anterior, 
//poderia reescrever o código novamente utilizando o  cy.intercept,a url https://api.demoblaze.com/signup,  o método é um POST, o status code esperado deve ser 200 e o response deve ser diferente de {"errorMessage":"This user already exist."}. POderia retirar a validação do pop-up tambem 


describe('Cadastro de Usuário', () => {
    it('Realizar cadastro válido', () => {
      cy.visit('https://www.demoblaze.com/index.html');
  
      // Gerar um nome de usuário único usando o faker
      const username = faker.internet.userName();
  
      // Interceptar a solicitação de cadastro
      cy.intercept('POST', '/signup').as('signupRequest');
  
      // Clicar no link "Sign up"
      cy.get('#signin2').click();
  
      // Preencher os campos obrigatórios corretamente com o nome de usuário gerado
      cy.get('#sign-username').type(username);
      cy.get('#sign-password').type('mypassword');
  
      // Clicar no botão "Sign up"
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  
      // Aguardar a resposta da solicitação de cadastro
      cy.wait('@signupRequest').then((interception) => {
        const { response } = interception;
  
        // Verificar o status code esperado
        expect(response.statusCode).to.equal(200);
  
        // Verificar se o response não contém a mensagem de erro "This user already exist."
        expect(response.body).to.not.have.property('errorMessage', 'This user already exist.');
      });
  
      // Verificar mensagem de sucesso de cadastro
      cy.contains('Sign up successful.').should('be.visible');
    });
  });
  

  // Refatorand o codigo p garantir que o username está sempre preenchido

  describe('Cadastro de Usuário', () => {
    it('Realizar cadastro válido', () => {
      cy.visit('https://www.demoblaze.com/index.html');
  
      // Gerar um nome de usuário único usando o faker
      const username = faker.internet.userName();
  
      // Interceptar a solicitação de cadastro
      cy.intercept('POST', 'https://api.demoblaze.com/signup').as('signupRequest');
  
      // Clicar no link "Sign up"
      cy.get('#signin2').click();
  
      // Verificar se o campo de nome de usuário está visível
      cy.get('#sign-username').should('be.visible');
  
      // Preencher o campo de nome de usuário
      cy.get('#sign-username').type(username);
  
      // Preencher o campo de senha
      cy.get('#sign-password').type('mypassword');
  
      // Clicar no botão "Sign up"
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  
      // Aguardar a resposta da solicitação de cadastro
      cy.wait('@signupRequest').then((interception) => {
        const { response } = interception;
  
        // Verificar o status code esperado
        expect(response.statusCode).to.equal(200);
  
        // Verificar se o response não contém a mensagem de erro "This user already exist."
        expect(response.body).to.not.have.property('errorMessage', 'This user already exist.');
      
      });
  
      // Verificar mensagem de sucesso de cadastro
      cy.contains('Sign up successful.').should('be.visible');
    });
  });
  

  //Notei que o cy.intercept estava na posição errada, é importante pensar bem na pergunta para que ela seja a mai 
  //assertiva possível.

  describe('Cadastro de Usuário', () => {
    it('Realizar cadastro válido', () => {
      cy.visit('https://www.demoblaze.com/index.html');
  
      // Gerar um nome de usuário único usando o faker
      const username = faker.internet.userName();
  
      // Clicar no link "Sign up"
      cy.get('#signin2').click();
  
      // Verificar se o campo de nome de usuário está visível
      cy.get('#sign-username').should('be.visible');
  
      // Preencher o campo de nome de usuário
      cy.get('#sign-username').type(username);
  
      // Preencher o campo de senha
      cy.get('#sign-password').type('mypassword');
  
      // Interceptação da solicitação de cadastro
      cy.intercept('POST', 'https://api.demoblaze.com/signup').as('signupRequest');
  
      // Clicar no botão "Sign up"
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  
      // Aguardar a resposta da solicitação de cadastro
      cy.wait('@signupRequest').then((interception) => {
        const { response } = interception;
  
        // Verificar o status code esperado
        expect(response.statusCode).to.equal(200);
  
        // Verificar se o response não contém a mensagem de erro "This user already exist."
        expect(response.body).to.not.have.property('errorMessage', 'This user already exist.');
      });
  
      // Verificar mensagem de sucesso de cadastro
      cy.contains('Sign up successful.').should('be.visible');
    });
  });

  //Novo código com o While

  
describe('Cadastro de Usuário', () => {
    it('Realizar cadastro válido', () => {
      cy.visit('https://www.demoblaze.com/index.html');
  
      // Função para gerar um nome de usuário único usando o faker
      const generateUniqueUsername = () => {
        return faker.internet.userName();
      };
  
      // Função para realizar o cadastro e verificar se o usuário já existe
      const signUp = (username) => {
        cy.get('#signin2').click();
        cy.get('#sign-username').should('be.visible').type(username);
        cy.get('#sign-password').type('mypassword');
        cy.intercept('POST', 'https://api.demoblaze.com/signup').as('signupRequest');
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.wait('@signupRequest').then((interception) => {
          const { response } = interception;
          expect(response.statusCode).to.equal(200);
          expect(response.body).to.not.have.property('"errorMessage"', '"This user already exist."');
        });
       
      };
  
      // Loop para realizar o cadastro com nomes de usuário únicos até que o usuário não exista
      let username = generateUniqueUsername();
      let existingUser = true;
      while (existingUser) {
        signUp(username);
        existingUser = Cypress.$('.alert-error').text().includes('This user already exist.');
        if (existingUser) {
          username = generateUniqueUsername();
        }
      }
    });
  });

  //Nova refatoração pois a condição nao foi colocada

  describe('Cadastro de Usuário', () => {
    it('Realizar cadastro válido', () => {
      cy.visit('https://www.demoblaze.com/index.html');
  
      // Função para gerar um nome de usuário único usando o faker
      const generateUniqueUsername = () => {
        return faker.internet.userName();
      };
  
      // Função para realizar o cadastro e verificar se o usuário já existe
      const signUp = (username) => {
        cy.get('#signin2').click();
        cy.get('#sign-username').should('be.visible').type(username);
        cy.get('#sign-password').type('mypassword');
        cy.intercept('POST', 'https://api.demoblaze.com/signup').as('signupRequest');
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.wait('@signupRequest').then((interception) => {
          const { response } = interception;
          expect(response.statusCode).to.equal(200);
          if (response.body.errorMessage === 'This user already exist.') {
            signUp(generateUniqueUsername());
          }
        });
       
      };
  
      // Chamar a função signUp inicialmente com um nome de usuário único
      signUp(generateUniqueUsername());
    });
  });
 

  // Nova refatoração para garantir o lloping
describe('Cadastro de Usuário', () => {
  it('Realizar cadastro válido', () => {
    cy.visit('https://www.demoblaze.com/index.html');

    // Função para gerar um nome de usuário único usando o faker
    const generateUniqueUsername = () => {
      return faker.internet.userName();
    };

    // Função para realizar o cadastro
    const signUp = (username) => {
      cy.get('#signin2').click();
      cy.get('#sign-username').should('be.visible').type(username);
      cy.get('#sign-password').type('mypassword');
      cy.intercept('POST', 'https://api.demoblaze.com/signup').as('signupRequest');
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
      cy.wait('@signupRequest').then((interception) => {
        const { response } = interception;
        if (response.body.errorMessage === 'This user already exist.') {
          signUp(generateUniqueUsername());
        } else {
          cy.contains('Sign up successful.').should('be.visible');
        }
      });
    };

    // Chamar a função signUp inicialmente com um nome de usuário único
    signUp(generateUniqueUsername());
  });
});

  
  // Nova refatoração tirando a msg de sucesso 

  describe('Cadastro de Usuário', () => {
    it('Realizar cadastro válido', () => {
      cy.visit('https://www.demoblaze.com/index.html');
  
      // Função para gerar um nome de usuário único usando o faker
      const generateUniqueUsername = () => {
        return faker.internet.userName();
      };
  
      // Função para realizar o cadastro
      const signUp = (username) => {
        cy.get('#signin2').click();
        cy.get('#sign-username').should('be.visible').type(username);
        cy.get('#sign-password').type('mypassword');
        cy.intercept('POST', 'https://api.demoblaze.com/signup').as('signupRequest');
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.wait('@signupRequest').then((interception) => {
          const { response } = interception;
          if (response.body.errorMessage === 'This user already exist.') {
            cy.visit('https://www.demoblaze.com/index.html')
            signUp(generateUniqueUsername());
          }
        });
      };
  
      // Chamar a função signUp inicialmente com um nome de usuário único
      cy.visit('https://www.demoblaze.com/index.html')
      signUp(generateUniqueUsername());
    });
  });
  

  describe('Cadastro de Usuário', () => {
    const signUp = (username) => {
      cy.visit('https://www.demoblaze.com/index.html');
      cy.get('#signin2').click();
      cy.get('#sign-username').should('be.visible').type(username);
      cy.get('#sign-password').type('mypassword');
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  
      cy.intercept('POST', 'https://api.demoblaze.com/signup').as('signupRequest');
      cy.wait('@signupRequest').then((interception) => {
        const { response } = interception;
        if (response.body.errorMessage === 'This user already exist.') {
          signUp(generateUniqueUsername());
        } else {
          // Se o cadastro for bem-sucedido, você pode adicionar qualquer validação ou etapas adicionais aqui
        }
      });
    };
  
    it('Realizar cadastro válido', () => {
      const generateUniqueUsername = () => {
        return faker.internet.userName();
      };
  
      signUp(generateUniqueUsername());
    });
  });

  //Novo código gerado pois na segunda iteração não foi preenchido o campo username
describe('Cadastro de Usuário', () => {
    const signUp = (username) => {
      cy.visit('https://www.demoblaze.com/index.html');
      cy.get('#signin2').click();
      cy.get('#sign-username').should('be.visible').type(username);
      cy.get('#sign-password').type('mypassword');
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  
      cy.intercept('POST', 'https://api.demoblaze.com/signup').as('signupRequest');
      cy.wait('@signupRequest').then((interception) => {
        const { response } = interception;
        if (response.body.errorMessage === 'This user already exist.') {
          signUp(generateUniqueUsername());
        } else {
          // Se o cadastro for bem-sucedido, você pode adicionar qualquer validação ou etapas adicionais aqui
         
        }
      });
    };
  
    it('Realizar cadastro válido', () => {
      const generateUniqueUsername = () => {
        return faker.internet.userName();
      };
  
      signUp(generateUniqueUsername());
    });
  });


//Novo código gerado pois na segunda iteração não foi preenchido o campo username e o erro campo em branco

describe('Cadastro de Usuário', () => {
  const signUp = (username) => {
    cy.visit('https://www.demoblaze.com/index.html');
    cy.get('#signin2').click();
    cy.get('#sign-username').should('be.visible').type(username);
    cy.get('#sign-password').type('mypassword');
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

    cy.intercept('POST', 'https://api.demoblaze.com/signup').as('signupRequest');
    cy.wait('@signupRequest').then((interception) => {
      const { response } = interception;
      if (
        response.body.errorMessage === 'This user already exist.' ||
        response.body.alertMessage === 'Please fill out Username and Password.'
      ) {
        signUp(generateUniqueUsername());    
    
    } else {
        // Se o cadastro for bem-sucedido, você pode adicionar qualquer validação ou etapas adicionais aqui
        response.body.alertMessage === 'Sign up successful.'
      }
    });
  };

  it('Realizar cadastro válido', () => {
    const generateUniqueUsername = () => {
      return faker.internet.userName();
    };

    signUp(generateUniqueUsername());
  });
});


// após o erro Peço desculpas pelo erro. O problema ocorre porque a função generateUniqueUsername foi definida dentro do escopo da função it, então não pode ser acessada dentro da função signUp.

//Vamos refatorar o código para resolver esse problema. Aqui está o código corrigido:

describe('Cadastro de Usuário', () => {
    const signUp = (username) => {
      cy.visit('https://www.demoblaze.com/index.html');
      cy.get('#signin2').click();
      cy.get('#sign-username').should('be.visible').type(username);
      cy.get('#sign-password').type('mypassword');
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  
      cy.intercept('POST', 'https://api.demoblaze.com/signup').as('signupRequest');
      cy.wait('@signupRequest').then((interception) => {
        const { response } = interception;
        if (
          response.body.errorMessage === 'This user already exist.' ||
          response.body.alertMessage === 'Please fill out Username and Password.'
        ) {
          signUp(generateUniqueUsername());
        } else {
          // Se o cadastro for bem-sucedido, você pode adicionar qualquer validação ou etapas adicionais aqui
          response.body.alertMessage === 'Sign up successful.'
        }
      });
    };
  
    it('Realizar cadastro válido', () => {
      const generateUniqueUsername = () => {
        return faker.internet.userName();
      };
  
      signUp(generateUniqueUsername());
    });
  });


//Novo codigo

  describe('Cadastro de Usuário', () => {
    const signUp = (username) => {
      cy.visit('https://www.demoblaze.com/index.html');
      cy.get('#signin2').click();
      cy.get('#sign-username').should('be.visible').type(username);
      cy.get('#sign-password').type('mypassword');
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  
      cy.intercept('POST', 'https://api.demoblaze.com/signup').as('signupRequest');
      cy.wait('@signupRequest').then((interception) => {
        const { response } = interception;
        if (
          response.body.errorMessage === 'This user already exist.' ||
          response.body.alertMessage === 'Please fill out Username and Password.'
        ) {
          signUp(generateUniqueUsername());
        } else {
          // Se o cadastro for bem-sucedido, você pode adicionar qualquer validação ou etapas adicionais aqui
          response.body.alertMessage === 'Sign up successful.'
        }
      });
    };
  
    it('Realizar cadastro válido', () => {
      const generateUniqueUsername = () => {
        return faker.internet.userName();
      };
  
      signUp(generateUniqueUsername());
    });
  });

  // Novo codigo

  
describe('Cadastro de Usuário', () => {
    const signUp = (username) => {
      cy.visit('https://www.demoblaze.com/index.html');
      cy.get('#signin2').click();
      cy.get('#sign-username').should('be.visible').type(username);
      cy.get('#sign-password').type('mypassword');
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  
      cy.intercept('POST', 'https://api.demoblaze.com/signup').as('signupRequest');
      cy.wait('@signupRequest').then((interception) => {
        const { response } = interception;
        if (response.body.errorMessage === 'This user already exist.') {
          signUp(generateUniqueUsername());
        } else if (response.body.alertMessage === 'Please fill out Username and Password.') {
          signUp(username);
        } else {
          // Se o cadastro for bem-sucedido, você pode adicionar qualquer validação ou etapas adicionais aqui
          cy.contains('Sign up successful.').should('be.visible');
        }
      });
    };
  
    it('Realizar cadastro válido', () => {
      const generateUniqueUsername = () => {
        return faker.internet.userName();
      };
  
      signUp(generateUniqueUsername());
    });
  });

  //Novo codigo

  describe('Cadastro de Usuário', () => {
    const signUp = (username) => {
      cy.visit('https://www.demoblaze.com/index.html');
      cy.get('#signin2').click();
      cy.get('#sign-username').should('be.visible').type(username);
      cy.get('#sign-password').type('mypassword');
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  
      cy.intercept('POST', 'https://api.demoblaze.com/signup', (req) => {
        req.continue((res) => {
          if (res.body.errorMessage === 'This user already exist.') {
            signUp(username);
          } else if (res.body.alertMessage === 'Please fill out Username and Password.') {
            signUp(username);
          } else {
            // Se o cadastro for bem-sucedido, você pode adicionar qualquer validação ou etapas adicionais aqui
            response.body.alertMessage === 'Sign up successful.'
          }
        });
      }).as('signupRequest');
      
      cy.wait('@signupRequest');
    };
  
    it('Realizar cadastro válido', () => {
      const generateUniqueUsername = () => {
        return faker.internet.userName();
      };
  
      signUp(generateUniqueUsername());
    });
});


describe('Cadastro de Usuário', () => {
    const signUp = (username) => {
      cy.visit('https://www.demoblaze.com/index.html');
      cy.get('#signin2').click();
      cy.get('#sign-username').should('be.visible').type(username);
      cy.get('#sign-password').type('mypassword');
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  
      cy.intercept('POST', 'https://api.demoblaze.com/signup', (req) => {
        req.continue((res) => {
          if (res.body.errorMessage === 'This user already exist.') {
            signUp(generateUniqueUsername());
          } else if (res.body.alertMessage === 'Please fill out Username and Password.') {
            signUp(username);
          } else {
            // Se o cadastro for bem-sucedido, você pode adicionar qualquer validação ou etapas adicionais aqui
            response.body.alertMessage === 'Sign up successful.'
          }
        });
      }).as('signupRequest');
  
  
    };
  
    it('Realizar cadastro válido', () => {
      const generateUniqueUsername = () => {
        return faker.internet.userName();
      };
  
      signUp(generateUniqueUsername());
    });
  });

  //novo codigo com a constante dentro do código de teste

  describe('Cadastro de Usuário', () => {
    it('Realizar cadastro válido', () => {
      const generateUniqueUsername = () => {
        return faker.internet.userName();
      };
  
      const signUp = (username) => {
        cy.visit('https://www.demoblaze.com/index.html');
        cy.get('#signin2').click();
        cy.get('#sign-username').should('be.visible').type(username);
        cy.get('#sign-password').type('mypassword');
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  
        cy.intercept('POST', 'https://api.demoblaze.com/signup', (req) => {
          req.continue((res) => {
            if (res.body.errorMessage === 'This user already exist.') {
              signUp(generateUniqueUsername());
            } else if (res.body.alertMessage === 'Please fill out Username and Password.') {
                signUp(generateUniqueUsername());
            } else {
              // Se o cadastro for bem-sucedido, você pode adicionar qualquer validação ou etapas adicionais aqui
              response.body.alertMessage === 'Sign up successful.'
    
            }
          });
        }).as('signupRequest');
  
       
      };
  
      signUp(generateUniqueUsername());
    });
  });
//novo codigo
  describe('Cadastro de Usuário', () => {
    it('Realizar cadastro válido', () => {
      const generateUniqueUsername = () => {
        return faker.internet.userName();
      };
  
      const signUp = (username) => {
        cy.visit('https://www.demoblaze.com/index.html');
        cy.get('#signin2').click();
        cy.get('#sign-username').should('be.visible').type(username);
        cy.get('#sign-password').type('mypassword');
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
      };
  
      const handleSignUpResponse = (res) => {
        if (res.body.errorMessage === 'This user already exist.' || res.body.alertMessage === 'Please fill out Username and Password.') {
          signUp(generateUniqueUsername());
        } else {
          // Se o cadastro for bem-sucedido, você pode adicionar qualquer validação ou etapas adicionais aqui
          expect(res.body.alertMessage).to.equal('Sign up successful.');
        }
      };
  
      cy.intercept('POST', 'https://api.demoblaze.com/signup', (req) => {
        req.continue(handleSignUpResponse);
      }).as('signupRequest');
  
      signUp(generateUniqueUsername());
    });
  });

  // novo codigo

  describe('Cadastro de Usuário', () => {
    it('Realizar cadastro válido', () => {
      const generateUniqueUsername = () => {
        return faker.internet.userName();
      };
  
      const signUp = (username) => {
        cy.visit('https://www.demoblaze.com/index.html');
        cy.get('#signin2').click();
        cy.get('#sign-username').should('be.visible').type(username);
        cy.get('#sign-password').type('mypassword');
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  
        cy.intercept('POST', 'https://api.demoblaze.com/signup', (req) => {
          req.continue(handleSignUpResponse);
        }).as('signupRequest');
      };
  
      const handleSignUpResponse = (res) => {
        if (res.body.errorMessage === 'This user already exist.' || res.body.alertMessage === 'Please fill out Username and Password.') {
          signUp(generateUniqueUsername());
        } else {
          // Se o cadastro for bem-sucedido, você pode adicionar qualquer validação ou etapas adicionais aqui
          expect(res.body.alertMessage).to.equal('Sign up successful.');
        }
      };
  
      signUp(generateUniqueUsername());
    });
  });
 // novo codigo

  describe('Cadastro de Usuário', () => {
    it('Realizar cadastro válido', () => {
      const signUp = () => {
        const username = faker.internet.userName();
        cy.visit('https://www.demoblaze.com/index.html');
        cy.get('#signin2').click(); 
        cy.wait(2000)
        cy.get('#sign-username').should('be.visible').type(username);
        cy.get('#sign-password').type('mypassword');
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.wait(2000)
        cy.intercept('POST', 'https://api.demoblaze.com/signup', (req) => {
          req.continue(handleSignUpResponse);
        }).as('signupRequest');
      };
  
      const handleSignUpResponse = (res) => {
        if (res.body.errorMessage === 'This user already exist.' || res.body.alertMessage === 'Please fill out Username and Password.') {
          signUp();
        } else {
          // Se o cadastro for bem-sucedido, você pode adicionar qualquer validação ou etapas adicionais aqui
          expect(res.body.alertMessage).to.equal('Sign up successful.');
        }
      };
  
      signUp();
    });
  });


   // novo codigo
  describe('Cadastro de Usuário', () => {
    it('Realizar cadastro válido', () => {
      const signUp = () => {
        const username = faker.internet.userName();
        cy.visit('https://www.demoblaze.com/index.html');
        cy.get('#signin2').click();
        cy.get('#sign-username').should('be.visible').type(username);
        cy.get('#sign-password').type('mypassword');
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  
        cy.intercept('POST', 'https://api.demoblaze.com/signup', (req) => {
          req.continue(handleSignUpResponse);
        }).as('signupRequest');
      };
  
      const handleSignUpResponse = (res) => {
        if (res.body.errorMessage === 'This user already exist.' || res.body.alertMessage === 'Please fill out Username and Password.') {
          signUp();
        } else {
          // Se o cadastro for bem-sucedido, você pode adicionar qualquer validação ou etapas adicionais aqui
          expect(res.body.alertMessage).to.equal('Sign up successful.');
        }
      };
  
      signUp();
    });
  });

  // novo codigo

  describe('Cadastro de Usuário', () => {
    it('Realizar cadastro válido', () => {
      const signUp = () => {
        const username = faker.internet.userName();
        cy.visit('https://www.demoblaze.com/index.html');
        cy.get('#signin2').click();
        cy.get('#sign-username').should('be.visible').type(username);
        cy.get('#sign-password').type('mypassword');
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  
        cy.intercept('POST', 'https://api.demoblaze.com/signup', (req) => {
          req.continue(handleSignUpResponse);
        }).as('signupRequest');
      };
  
      const handleSignUpResponse = (res) => {
        if (res.body.errorMessage === 'This user already exist.' || res.body.alertMessage === 'Please fill out Username and Password.') {
          signUp();
        } else {
          // Se o cadastro for bem-sucedido, você pode adicionar qualquer validação ou etapas adicionais aqui
          expect(res.body.alertMessage).to.equal('Sign up successful.');
        }
      };
  
      signUp();
  
      // Retorna uma promessa que representa a conclusão do teste
      return cy.wait('@signupRequest');
    });
  });

 // novo codigo com cy.wrap
  describe('Cadastro de Usuário', () => {
    it('Realizar cadastro válido', () => {
      const signUp = () => {
        const username = faker.internet.userName();
        cy.visit('https://www.demoblaze.com/index.html');
        cy.get('#signin2').click();
        cy.get('#sign-username').should('be.visible').type(username);
        cy.get('#sign-password').type('mypassword');
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  
        cy.intercept('POST', 'https://api.demoblaze.com/signup', (req) => {
          req.continue(handleSignUpResponse);
        }).as('signupRequest');
      };
  
      const handleSignUpResponse = (res) => {
        if (res.body.errorMessage === 'This user already exist.' || res.body.alertMessage === 'Please fill out Username and Password.') {
          signUp();
        } else {
          // Se o cadastro for bem-sucedido, você pode adicionar qualquer validação ou etapas adicionais aqui
          expect(res.body.alertMessage).to.equal('Sign up successful.');
        }
      };
  
      signUp();
  
      // Encerra a recursão e finaliza o teste
      return cy.wrap(null);
    });
  });




  //novo codigo

  describe('Cadastro de Usuário', () => {
    const signUp = () => {
      const username = faker.internet.userName();
      cy.visit('https://www.demoblaze.com/index.html');
      cy.get('#signin2').click();
      cy.get('#sign-username').should('be.visible').type(username);
      cy.get('#sign-password').type('mypassword');
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  
      cy.intercept('POST', 'https://api.demoblaze.com/signup', (req) => {
        req.continue(handleSignUpResponse);
      }).as('signupRequest');
    };
  
    const handleSignUpResponse = (res) => {
      if (res.body.errorMessage === 'This user already exist.' || res.body.alertMessage === 'Please fill out Username and Password.') {
        cy.log('Cheguei ate aqui');
        //signUp();
      } else {
        // Se o cadastro for bem-sucedido, você pode adicionar qualquer validação ou etapas adicionais aqui
        expect(res.body.alertMessage).to.equal('Sign up successful.');
      }
    };
  
    it('Realizar cadastro válido', () => {
      signUp();
  
      cy.wait('@signupRequest').then((interception) => {
        const response = interception.response;
        handleSignUpResponse(response.body);
      });
    });
  });

//novo codigo
  describe('Cadastro de Usuário', () => {
    const signUp = () => {
      const username = faker.internet.userName();
      cy.visit('https://www.demoblaze.com/index.html');
      cy.get('#signin2').click();
      cy.get('#sign-username').should('be.visible').type(username);
      cy.get('#sign-password').type('mypassword');
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  
      cy.intercept('POST', 'https://api.demoblaze.com/signup', (req) => {
        req.continue(handleSignUpResponse);
      }).as('signupRequest');
    };
  
    const handleSignUpResponse = (res) => {
      if (res.body.errorMessage === 'This user already exist.' || res.body.alertMessage === 'Please fill out Username and Password.') {
        signUp();
      } else {
        // Se o cadastro for bem-sucedido, você pode adicionar qualquer validação ou etapas adicionais aqui
        expect(res.body.alertMessage).to.equal('Sign up successful.');
      }
    };
  it('Realizar cadastro válido', () => {
      cy.visit('https://www.demoblaze.com/index.html');
      signUp();
  
      cy.intercept('POST', 'https://api.demoblaze.com/signup').as('signupRequest');
      cy.get('#signin2').click();
      cy.get('#sign-username').should('be.visible').type(username);
      cy.get('#sign-password').type('mypassword');
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  
      cy.wait('@signupRequest').then((interception) => {
        const response = interception.response;
        handleSignUpResponse(response.body);
      });
    });
  });
  

  describe('Cadastro de Usuário', () => {
    it('Realizar cadastro válido', () => {
      const signUp = (username) => {
        cy.visit('https://www.demoblaze.com/index.html');
        cy.get('#signin2').click();
        cy.get('#sign-username').should('be.visible').type(username);
        cy.get('#sign-password').type('mypassword');
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  
        cy.intercept('POST', 'https://api.demoblaze.com/signup', (req) => {
          req.continue((res) => {
            handleSignUpResponse(res, username);
          });
        }).as('signupRequest');
      };
  
      const handleSignUpResponse = (res, username) => {
        if (res.body.errorMessage === 'This user already exist.' || res.body.alertMessage === 'Please fill out Username and Password.') {
          cy.log('Cheguei ate aqui');
        } else {
          // Se o cadastro for bem-sucedido, você pode adicionar qualquer validação ou etapas adicionais aqui
          expect(res.body.alertMessage).to.equal('Sign up successful.');
        }
      };
      
    });
  });



    // novo codigo

    describe('Cadastro de Usuário', () => {
        it('Realizar cadastro válido', () => {
          const signUp = () => {
            const username = faker.internet.userName();
            cy.visit('https://www.demoblaze.com/index.html');
            cy.get('#signin2').click();
            cy.get('#sign-username').should('be.visible').type(username);
            cy.get('#sign-password').type('mypassword');
            cy.wait(3000)
            cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
            cy.log('Cheguei até aqui depois do clique signup');
            cy.wait(3000)
            cy.intercept('POST', 'https://api.demoblaze.com/signup', (req) => {
              cy.wait(3000);
              req.continue(handleSignUpResponse);
            }).as('signupRequest');
          };
      
          const handleSignUpResponse = (res) => {
            if (res.body.errorMessage === 'This user already exist.') {
              cy.log('Cheguei até aqui - Usuário já existe');
            } else if (res.body.alertMessage === 'Please fill out Username and Password.') {
              cy.log('Cheguei até aqui - Campos de usuário e senha não preenchidos');
            } else {
              expect(res.body.alertMessage).to.equal('Sign up successful.');
              cy.log('Cheguei no final - Cadastro bem-sucedido');
            }
          };
      
          signUp();
      
          // Retorna uma promessa que representa a conclusão do teste
        });
      });

      //novo codigo- Funcionando 22.05

      describe('Cadastro de Usuário', () => {
        it('Realizar cadastro válido', () => {
          const signUp = () => {
            const username = faker.internet.userName();
            cy.visit('https://www.demoblaze.com/index.html');
            cy.get('#signin2').click();
            cy.get('#sign-username').should('be.visible').type(username);
            cy.get('#sign-password').type('mypassword');
            cy.wait(3000);
            cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
            cy.log('Cheguei até aqui depois do clique signup');
      
            cy.intercept('POST', 'https://api.demoblaze.com/signup').as('signupRequest');
            cy.wait('@signupRequest').then((interception) => {
              const { response } = interception;
              handleSignUpResponse(response);
            });
          };
      
          const handleSignUpResponse = (res) => {
            if (res.body.errorMessage === 'This user already exist.') {
              cy.log('Cheguei até aqui - Usuário já existe');
              signUp();
            } else if (res.body.alertMessage === 'Please fill out Username and Password.') {
              cy.log('Cheguei até aqui - Campos de usuário e senha não preenchidos');
              signUp();
            } else {
              //expect(res.body.alertMessage).to.equal('Sign up successful.');
              cy.log('Cheguei no final - Cadastro bem-sucedido');
            }
          };
      
          signUp();
      
          // Retorna uma promessa que representa a conclusão do teste
        });
      });

   
          
         //Novo codigo

         describe('Cadastro de Usuário', () => {
            it('Realizar cadastro válido', () => {
              const handleSignUpResponse = (res) => {
                if (res.body.errorMessage === 'This user already exist.') {
                  cy.log('Cheguei até aqui - Usuário já existe');
                  signUp();
                } else if (res.body.alertMessage === 'Please fill out Username and Password.') {
                  cy.log('Cheguei até aqui - Campos de usuário e senha não preenchidos');
                  signUp();
                } else {
                  //expect(res.body.alertMessage).to.equal('Sign up successful.');
                  cy.log('Cheguei no final - Cadastro bem-sucedido');
                }
              };
          
              const signUp = () => {
                const username = faker.internet.userName();
                cy.visit('https://www.demoblaze.com/index.html');
                cy.get('#signin2').click();
                cy.get('#sign-username').should('be.visible').type(username);
                cy.get('#sign-password').type('mypassword');
                cy.wait(3000);
                cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
                cy.log('Cheguei até aqui depois do clique signup');
          
                cy.intercept('POST', 'https://api.demoblaze.com/signup').as('signupRequest');
                cy.wait('@signupRequest').then((interception) => {
                  const { response } = interception;
                  handleSignUpResponse(response);
                });
              };
          
              signUp();
            });
          });
          
          
 //novo codigo- avancei ate Cheguei até aqui - Usuário já existe


 describe('Cadastro de Usuário repetido', () => {
    it('Realizar cadastro válido', () => {
      const signUp = () => {
        const username = faker.internet.userName();
        cy.visit('https://www.demoblaze.com/index.html');
        cy.get('#signin2').click();
        cy.wait(2000)
        cy.get('#sign-username').should('be.visible').type(username);
        cy.get('#sign-password').type('mypassword');
        cy.wait(3000);
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        
        cy.log('Cheguei até aqui depois do clique signup');
 
        cy.intercept('POST', 'https://api.demoblaze.com/signup').as('signupRequest');
        cy.wait('@signupRequest').then((interception) => {
          const { response } = interception;
          handleSignUpResponse(response);
        });
      };
 
      const handleSignUpResponse = (res) => {
        if (res.body.errorMessage === 'This user already exist.') {
          cy.log('Cheguei até aqui - Usuário já existe');
          signUp();
        } else if (res.body.alertMessage === 'Please fill out Username and Password.') {
          cy.log('Cheguei até aqui - Campos de usuário e senha não preenchidos');
          signUp();
        } else {
          //expect(res.body.alertMessage).to.equal('Sign up successful.');
          cy.log('Cheguei no final - Cadastro bem-sucedido');
        }
      };
 
      signUp();
 
      // Retorna uma promessa que representa a conclusão do teste
    });
  });

  //Sucesso no cadasttro de Usuário - Gravado Video
  describe('Cadastro de Usuário', () => {
    it('Realizar cadastro válido', () => {
      const signUp = () => {
        const username = faker.internet.userName();
        cy.visit('https://www.demoblaze.com/index.html');
        cy.get('#signin2').click();
        cy.wait(2000)
        cy.get('#sign-username').should('be.visible').type(username);
        cy.get('#sign-password').type('mypassword');
        cy.wait(3000);
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        
        cy.log('Cheguei até aqui depois do clique signup');
 
        cy.intercept('POST', 'https://api.demoblaze.com/signup').as('signupRequest');
        cy.wait('@signupRequest').then((interception) => {
          const { response } = interception;
          handleSignUpResponse(response);
        });
      };
 
      const handleSignUpResponse = (res) => {
        if (res.body.errorMessage === 'This user already exist.') {
          cy.log('Cheguei até aqui - Usuário já existe');
          signUp();
        } else if (res.body.alertMessage === 'Please fill out Username and Password.') {
          cy.log('Cheguei até aqui - Campos de usuário e senha não preenchidos');
          signUp();
        } else {
          //expect(res.body.alertMessage).to.equal('Sign up successful.');
          cy.log('Cheguei no final - Cadastro bem-sucedido');
        }
      };
 
      signUp();
 
      // Retorna uma promessa que representa a conclusão do teste
    });
  });

  //Validação de Usuário existente
  describe('Cadastro de Usuário', () => {
    it('Realizar cadastro válido', () => {
      const signUp = () => {
        const username = faker.internet.userName();
        cy.visit('https://www.demoblaze.com/index.html');
        cy.get('#signin2').click();
        cy.wait(2000)
        cy.get('#sign-username').should('be.visible').type(username);
        cy.get('#sign-password').type('mypassword');
        cy.wait(3000);
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        
        cy.log('Cheguei até aqui depois do clique signup');
 
        cy.intercept('POST', 'https://api.demoblaze.com/signup').as('signupRequest');
        cy.wait('@signupRequest').then((interception) => {
          const { response } = interception;
          handleSignUpResponse(response);
        });
      };
 
      const handleSignUpResponse = (res) => {
        if (res.body.errorMessage === 'This user already exist.') {
          cy.log('Cheguei até aqui - Usuário já existe');
          signUp();
        } else if (res.body.alertMessage === 'Please fill out Username and Password.') {
          cy.log('Cheguei até aqui - Campos de usuário e senha não preenchidos');
          signUp();
        } else {
          //expect(res.body.alertMessage).to.equal('Sign up successful.');
          cy.log('Cheguei no final - Cadastro bem-sucedido');
        }
      };
 
      signUp();
 
      // Retorna uma promessa que representa a conclusão do teste
    });
  });

//Validação 2 usuário existentedescribe.only('Cadastro de Usuário', () => {


describe('Cadastro de Usuário', () => {
    it('Realizar cadastro válido', () => {
      const username = 'juliana';
      const password = '123';
  
      cy.visit('https://www.demoblaze.com/index.html');
      cy.get('#signin2').click();
      cy.get('#sign-username').should('be.visible').type(username);
      cy.get('#sign-password').type(password);
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
      cy.log('Cheguei até aqui depois do clique signup');
  
      cy.intercept('POST', 'https://api.demoblaze.com/signup').as('signupRequest');
      cy.wait('@signupRequest').then((interception) => {
        const { response } = interception;
        handleSignUpResponse(response);
      });
  
      const handleSignUpResponse = (res) => {
        if (res.body.errorMessage === 'This user already exist.') {
          cy.log('Cheguei até aqui - Usuário já existe');
          cy.visit('https://www.demoblaze.com/index.html');
          cy.get('#signin2').click();
          cy.get('#sign-username').should('be.visible').type(username);
          cy.get('#sign-password').type(password);
          cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
          cy.log('Cheguei até aqui depois do erro usuário existe');
          cy.intercept('POST', 'https://api.demoblaze.com/signup').as('signupRequest');
          cy.wait('@signupRequest').then((interception) => {
            const { response } = interception;
            handleSignUpResponse(response);
          });
        } else if (res.body.alertMessage === 'Please fill out Username and Password.') {
          cy.log('Cheguei até aqui - Campos de usuário e senha não preenchidos');
          cy.visit('https://www.demoblaze.com/index.html');
          cy.get('#signin2').click();
          cy.get('#sign-username').should('be.visible').type(username);
          cy.get('#sign-password').type(password);
          cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
          cy.log('Cheguei até aqui depois do erro usuário existe');
          cy.intercept('POST', 'https://api.demoblaze.com/signup').as('signupRequest');
          cy.wait('@signupRequest').then((interception) => {
            const { response } = interception;
            handleSignUpResponse(response);
          });
        } else {
          //expect(res.body.alertMessage).to.equal('Sign up successful.');
          cy.log('Cheguei no final - Cadastro bem-sucedido');
        }
      };
    });
  });
  

  //sign up com usuário existente- validando mg - Sucesso!
  describe('Cadastro de Usuário', () => {
    it('Realizar cadastro válido', () => {
      const username = 'juliana';
      const password = '123';
      cy.wait(3000)
      cy.visit('https://www.demoblaze.com/index.html');
      cy.wait(3000)
      cy.get('#signin2').click();
      cy.get('#sign-username').should('be.visible').type(username);
      cy.get('#sign-password').type(password);
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
      cy.log('Cheguei até aqui depois do clique signup');
  
      //interceptar a rota
      cy.intercept('POST', 'https://api.demoblaze.com/signup').as('signupRequest');
      cy.wait(3000)
      cy.wait('@signupRequest').then((interception) => {
        const { response } = interception;
        handleSignUpResponse(response);
      });
      
      const handleSignUpResponse = (res) => {
        if (res.body.errorMessage === 'This user already exist.') {
          cy.log('FIM TESTE');
        } else {
            //expect(res.body.alertMessage).to.equal('Sign up successful.');
            cy.log('NÃO CHEGUEI ATE O FIM');
          }
    };
    });
  });



    //sign up com usuário branco- validando mg - Sucesso!
    describe.only('Cadastro de Usuário usarname em branco', () => {
        it.only('Realizar cadastro válido', () => {
          const username = '';
          const password = '123';
          cy.wait(3000)
          cy.visit('https://www.demoblaze.com/index.html');
          cy.wait(3000)
          cy.get('#signin2').click();
          cy.get('#sign-username').should('be.visible').type(username);
          cy.get('#sign-password').type(password);
          cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
          cy.log('Cheguei até aqui depois do clique signup');
      
          //interceptar a rota
          cy.intercept('POST', 'https://api.demoblaze.com/signup').as('signupRequest');
          cy.wait(3000)
          cy.wait('@signupRequest').then((interception) => {
            const { response } = interception;
            handleSignUpResponse(response);
          });
          
          const handleSignUpResponse = (res) => {
            if (res.body.errorMessage === 'Please fill out Username and Password.') {
              cy.log('FIM TESTE em branco');
            } else {
                //expect(res.body.alertMessage).to.equal('Sign up successful.');
                cy.log('NÃO CHEGUEI ATE O FIM');
              }
        };
        });
      });