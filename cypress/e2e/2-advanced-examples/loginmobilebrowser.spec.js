//Cenário 1 - Logando na Aplicação
describe('login mobile browser Bradesco sucesso', () => {
    it('Realizar login', () => {
      const username = 'PSOT00001';
      const password = '10101010';
  
      cy.visit('http://m2.tu.teste.internet/mbpjlogin/login.jsf?tec=iphone');  
      cy.intercept('GET', 'http://m3.tu.teste.internet/mbpj/img/botoes/btn_continuar.png').as('signupRequest');
      //cy.wait('@signupRequest').then((interception) => {
        //const { response } = interception;
        //expect(response).to.have.property('status', 200);
     // });
      cy.log('carregou')
     // cy.get('#identificationForm\:txtUsuario').type('juliana')
     cy.get('[placeholder="Usuário"]').type(username)
     cy.get('[placeholder="Senha"]').type(password)
     cy.get('[name="identificationForm:botaoAvancar"]').click()


    });
      

  });
// Cenário 2 - Sucesso clicou em um CNPJ especifico
  describe('Clicando em um CNPJ especifico', () => {
    it('Realizar login', () => {
      const username = 'PSOT00001';
      const password = '10101010';
  
      cy.visit('http://m2.tu.teste.internet/mbpjlogin/login.jsf?tec=iphone');  
      cy.intercept('GET', 'http://m3.tu.teste.internet/mbpj/img/botoes/btn_continuar.png').as('signupRequest');
      cy.log('carregou')
     cy.get('[placeholder="Usuário"]').type(username)
     cy.get('[placeholder="Senha"]').type(password)
     cy.get('[name="identificationForm:botaoAvancar"]').click()
     cy.contains('04.387.346/0001-45').click()
    

    });
      

  });

  //Cenário- 3 Clicando em Bancos da Empresa sucesso


  describe('Clicando em um CNPJ especifico e em Bancos da Empresa', () => {
    it('Realizar login', () => {
      const username = 'PSOT00001';
      const password = '10101010';
  
      cy.visit('http://m2.tu.teste.internet/mbpjlogin/login.jsf?tec=iphone');  
      cy.intercept('GET', 'http://m3.tu.teste.internet/mbpj/img/botoes/btn_continuar.png').as('signupRequest');
      cy.log('carregou')
     cy.get('[placeholder="Usuário"]').type(username)
     cy.get('[placeholder="Senha"]').type(password)
     cy.get('[name="identificationForm:botaoAvancar"]').click()
     cy.contains('04.387.346/0001-45').click()
     cy.wait(3000)
     cy.contains('Bancos da empresa').click()
     

    });
 });
 

// Cenário 4 - Validando Mensageria de Operações de crédito no cenário sem compartilhamento
 
 describe('Validando Mensageria de Operações de crédito no cenário sem compartilhamento', () => {
    it('Realizar login', () => {
      const username = 'PSOT00001';
      const password = '10101010';
  
      cy.visit('http://m2.tu.teste.internet/mbpjlogin/login.jsf?tec=iphone');  
      cy.intercept('GET', 'http://m3.tu.teste.internet/mbpj/img/botoes/btn_continuar.png').as('signupRequest');
      cy.log('carregou')
     cy.get('[placeholder="Usuário"]').type(username)
     cy.get('[placeholder="Senha"]').type(password)
     cy.get('[name="identificationForm:botaoAvancar"]').click()
     cy.contains('04.387.346/0001-45').click()
     cy.wait(3000)
     cy.contains('Bancos da empresa').click()
     cy.wait(5000)
     cy.contains('A empresa não tem este produto ou não compartilhou esses dados com a gente').scrollIntoView().should('be.visible');
cy.log('PASS')
    });
 });
 

 //Cenário 5 - Validando VG CNPJ45

 describe('Validando Mensageria de Operações de crédito no cenário sem compartilhamento', () => {
    it('Realizar login e validar operaçoes', () => {
      const username = 'PSOT00001';
      const password = '10101010';
  
      cy.visit('http://m2.tu.teste.internet/mbpjlogin/login.jsf?tec=iphone'); 
      cy.viewport(414, 896); 
      cy.intercept('GET', 'http://m3.tu.teste.internet/mbpj/img/botoes/btn_continuar.png').as('signupRequest');
      cy.log('carregou')
     cy.get('[placeholder="Usuário"]').type(username)
     cy.get('[placeholder="Senha"]').type(password)
     cy.get('[name="identificationForm:botaoAvancar"]').click()
     cy.contains('04.387.346/0001-45').click()
     cy.wait(3000)
     cy.contains('Bancos da empresa').click()
     cy.wait(5000)
     cy.contains('A empresa não tem este produto ou não compartilhou esses dados com a gente').scrollIntoView().should('be.visible');
     cy.log('PASS')
    });

    it('ocultar o valor ', () => {
        //Clicando no icone de ocultar valor
        
        cy.get('.col-12 > .icon').click()
       //Validando se os campos estão ocultos
  
     cy.get('.mr-1.word-break.brad-title-pagina.ocultarValor').should('exist');
     cy.log('oculto')
    });


 });
 
//Cenário 6 - Validando segundo login após erro 
 describe('Validando segunda entrada', () => {
    it('Realizar login e validar operaçoes', () => {
      const username = 'PSOT00001';
      const password = '10101010';
  
      cy.visit('http://m2.tu.teste.internet/mbpjlogin/login.jsf?tec=iphone'); 
      cy.viewport(414, 896); 
      cy.intercept('GET', 'http://m3.tu.teste.internet/mbpj/img/botoes/btn_continuar.png').as('signupRequest');
      cy.log('carregou')
     cy.get('[placeholder="Usuário"]').type(username)
     cy.get('[placeholder="Senha"]').type(password)
     cy.get('[name="identificationForm:botaoAvancar"]').click()
     cy.contains('04.387.346/0001-45').click()
     cy.contains('Sessão encerrada. Por motivo de segurança, acesse novamente o Bradesco Net Empresa.')
      .then(($mensagem) => {
        if ($mensagem.is(':visible')) {
          cy.log('A mensagem de sessão encerrada está visível');

          cy.visit('http://m2.tu.teste.internet/mbpjlogin/login.jsf?tec=iphone'); 
          cy.viewport(414, 896); 
          cy.intercept('GET', 'http://m3.tu.teste.internet/mbpj/img/botoes/btn_continuar.png').as('signupRequest');
          cy.log('carregou')
         cy.get('[placeholder="Usuário"]').type(username)
         cy.get('[placeholder="Senha"]').type(password)
         cy.get('[name="identificationForm:botaoAvancar"]').click()
         cy.contains('04.387.346/0001-45').click()
        } else {
            cy.visit('http://m2.tu.teste.internet/mbpjlogin/login.jsf?tec=iphone'); 
            cy.viewport(414, 896); 
            cy.intercept('GET', 'http://m3.tu.teste.internet/mbpj/img/botoes/btn_continuar.png').as('signupRequest');
            cy.log('carregou')
           cy.get('[placeholder="Usuário"]').type(username)
           cy.get('[placeholder="Senha"]').type(password)
           cy.get('[name="identificationForm:botaoAvancar"]').click()
           cy.contains('04.387.346/0001-45').click()
           cy.lo('Parei aqui')
           cy.wait(3000)
           cy.contains('Bancos da empresa').click()
           cy.wait(5000)
           cy.contains('A empresa não tem este produto ou não compartilhou esses dados com a gente').scrollIntoView().should('be.visible');
          cy.log('PASS')
    }
    });
});
});

//Nova tentativa Cenário 6 - Validando segundo login após erro - deu certo
describe('Exemplo de Sessão Encerrada', () => {
    it('Reiniciar sessão após encerramento', () => {
      // Definir usuário e senha
      const username = 'EDBT00001';
      const password = '10101010';
  
      // Visitar a URL e ajustar a visualização
      cy.visit('http://m2.tu.teste.internet/mbpjlogin/login.jsf?tec=iphone');
      cy.viewport(414, 896);
  
      // Interceptando a requisição GET
      cy.intercept('GET', 'http://m3.tu.teste.internet/mbpj/img/botoes/btn_continuar.png').as('signupRequest');
  
      // Log para indicar que a página foi carregada
      cy.log('carregou');
  
      // Preencher usuário e senha
      cy.get('[placeholder="Usuário"]').type(username);
      cy.get('[placeholder="Senha"]').type(password);
  
      // Clicar em Avançar
      cy.get('[name="identificationForm:botaoAvancar"]').click();
      cy.contains('04.387.346/0001-45').click()
      // Verificar se a mensagem específica está presente
      cy.contains('Sessão encerrada. Por motivo de segurança, acesse novamente o Bradesco Net Empresa.').then(($msg) => {
        if ($msg.length > 0) {
          // A mensagem de sessão encerrada está presente
  
          // Realizar o login novamente
          cy.visit('http://m2.tu.teste.internet/mbpjlogin/login.jsf?tec=iphone');
          cy.viewport(414, 896);
          cy.get('[placeholder="Usuário"]').clear().type(username);
          cy.get('[placeholder="Senha"]').clear().type(password);
          cy.get('[name="identificationForm:botaoAvancar"]').click();
          cy.contains('04.387.346/0001-45').click()
          cy.wait(3000)
  
          // Continuar com as ações após o login
          //cy.contains('Bancos da Empresa').click();
          cy.get('.ico-home-39').click()
          // Restante do código para interagir com a página
  
        } else {
          // A mensagem de sessão encerrada não está presente
          cy.wait(3000)
          // Continuar com as ações normais a partir deste ponto
          cy.get('.ico-home-39').click()
          //cy.contains('Bancos da Empresa').click();
          // Restante do código para interagir com a página
        }
      });
    });
  });

//Mostrar ao Ale - Cenário 7 clicando em Ver mais - cy.get('.col-3 > .ng-star-inserted > .brad-cat-mini')

describe.only('Aba Visão geral', () => {
    it('Clicando em ver mais Visão geral', () => {
      // Definir usuário e senha
      const username = 'EDBT00001';
      const password = '10101010';
  
      // Visitar a URL e ajustar a visualização
      cy.visit('https://m2.tu.teste.internet/mbpjlogin/login.jsf?tec=iphone');
      cy.viewport(414, 896);
  
      // Interceptando a requisição GET
      cy.intercept('GET', 'http://m3.tu.teste.internet/mbpj/img/botoes/btn_continuar.png').as('signupRequest');
  
      // Log para indicar que a página foi carregada
      cy.log('carregou');
  
      // Preencher usuário e senha
      cy.get('[placeholder="Usuário"]').type(username);
      cy.get('[placeholder="Senha"]').type(password);
  
      // Clicar em Avançar
      cy.get('[name="identificationForm:botaoAvancar"]').click();
      cy.contains('04.387.346/0001-45').click()
      // Verificar se a mensagem específica está presente
      cy.contains('Sessão encerrada. Por motivo de segurança, acesse novamente o Bradesco Net Empresa.').then(($msg) => {
        if ($msg.length > 0) {
          // A mensagem de sessão encerrada está presente
  
          // Realizar o login novamente
          cy.visit('https://m2.tu.teste.internet/mbpjlogin/login.jsf?tec=iphone');
          cy.viewport(414, 896);
          cy.get('[placeholder="Usuário"]').clear().type(username);
          cy.get('[placeholder="Senha"]').clear().type(password);
          cy.get('[name="identificationForm:botaoAvancar"]').click();
          cy.contains('04.387.346/0001-45').click()
          cy.wait(3000)
  
          // Continuar com as ações após o login
          //cy.contains('Bancos da Empresa').click();
          cy.get('.ico-home-39').click()
          // Restante do código para interagir com a página
          cy.wait(5000)
          cy.get('.col-3 > .ng-star-inserted > .brad-cat-mini').click()
          cy.wait(3000)
          cy.get('#popover-contas > .icon').click()

        } else {
          // A mensagem de sessão encerrada não está presente
          cy.wait(3000)
          // Continuar com as ações normais a partir deste ponto
          cy.get('.ico-home-39').click()
          cy.wait(5000)
          //cy.contains('Bancos da Empresa').click();
          // Restante do código para interagir com a página
          cy.get('.col-3 > .ng-star-inserted > .brad-cat-mini').click()
          cy.wait(3000)
          cy.get('#popover-contas > .icon').click()
        }
      });
    });
  });

// Novo codigo - Tentando comparar o Back com o Front
describe('Aba Visão geral', () => {
    it('Clicando em ver mais Visão geral', () => {
      // Definir usuário e senha
      const username = 'EDBT00001';
      const password = '10101010';
  
      // Visitar a URL e ajustar a visualização
      cy.visit('https://m2.tu.teste.internet/mbpjlogin/login.jsf?tec=iphone');
      cy.viewport(414, 896);
  
      // Interceptando a requisição GET
      cy.intercept('GET', 'https://m3.tu.teste.internet/mbpj/img/botoes/btn_continuar.png').as('signupRequest');
  
      // Log para indicar que a página foi carregada
      cy.log('carregou');
  
      // Preencher usuário e senha
      cy.get('[placeholder="Usuário"]').type(username);
      cy.get('[placeholder="Senha"]').type(password);
  
      // Clicar em Avançar
      cy.get('[name="identificationForm:botaoAvancar"]').click();
      cy.contains('04.387.346/0001-45').click()
      // Verificar se a mensagem específica está presente
      cy.contains('Sessão encerrada. Por motivo de segurança, acesse novamente o Bradesco Net Empresa.').then(($msg) => {
        if ($msg.length > 0) {
          // A mensagem de sessão encerrada está presente
  
          // Realizar o login novamente
          cy.visit('http://m2.tu.teste.internet/mbpjlogin/login.jsf?tec=iphone');
          cy.viewport(414, 896);
          cy.get('[placeholder="Usuário"]').clear().type(username);
          cy.get('[placeholder="Senha"]').clear().type(password);
          cy.get('[name="identificationForm:botaoAvancar"]').click();
          cy.contains('04.387.346/0001-45').click()
          cy.wait(3000)
  
          // Continuar com as ações após o login
          //cy.contains('Bancos da Empresa').click();
          cy.get('.ico-home-39').click()
          // Restante do código para interagir com a página
          cy.wait(5000)
          cy.get('.col-3 > .ng-star-inserted > .brad-cat-mini').click()
          cy.wait(3000)
          cy.get('#popover-contas > .icon').click()
         
          cy.intercept('GET', 'https://api.gfpj.tu.prebanco.com.br/efm-accounts/api/v1/list/brands/summary').as('getData');

          // Realize a ação que faz a solicitação GET
          
          cy.wait('@getData').then((interception) => {
            const { response } = interception;
            const amountTotalBackEnd = response.body.data.sumAllBrand.balances.amountTotal;
          
            cy.get('.brad-cat-mini').eq(1).should('contain', '136.934.285,79').then((amountTotalFrontEnd) => {
              // Remova os caracteres indesejados do texto do front-end para comparação
              const cleanedAmountTotalFrontEnd = parseFloat(amountTotalFrontEnd.replace(/\./g, '').replace(',', '.'));
             
         // Formatando o número com separadores de milhares e vírgula decimal
           
          
              // Compare os valores
              expect(amountTotalBackEnd).to.equal(cleanedAmountTotalFrontEnd);
            });
          });









          cy.log('Pass')















        } else {
          // A mensagem de sessão encerrada não está presente
          cy.wait(3000)
          // Continuar com as ações normais a partir deste ponto
          cy.get('.ico-home-39').click()
          cy.wait(5000)
          //cy.contains('Bancos da Empresa').click();
          // Restante do código para interagir com a página
          cy.get('.col-3 > .ng-star-inserted > .brad-cat-mini').click()
          cy.wait(3000)
          cy.get('#popover-contas > .icon').click()
          cy.intercept('GET', 'url').as('getData');

// Realize a ação que faz a solicitação GET

cy.wait('@getData').then((interception) => {
  const { response } = interception;
  // Verifique se o campo amountTotal não está vazio
  expect(response.body.data.sumAllBrand.balances.amountTotal).to.not.be.empty;
});
        }
      });
    });
  });

