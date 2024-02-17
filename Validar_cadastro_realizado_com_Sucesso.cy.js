describe('Funcionalidade Login', () => {
  it('Validar login realizado com Sucesso', () => {

    //Acessar a pagina
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')

    //Preencher os campos
    cy.get(':nth-child(2) > td > input').type('usuario')
    cy.get(':nth-child(4) > td > input').type('senha')
    cy.get(':nth-child(6) > td > input').type('nome')

    //Clicar no botão enviar
    cy.get('td > .btn').click()

    // Verificar se o cadastro foi realizado com sucesso
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text','nome')
  })
  })