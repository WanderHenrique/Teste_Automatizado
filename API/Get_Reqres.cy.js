describe('Get Reqres', () => {
  it('Validar LIST USERS retornando 200', () => {
      cy.request({
          method: 'GET',
          url: 'https://reqres.in/api/users?page=2'
      }).then((response) => { 
          expect(response.status).to.eq(200);
      });
  });

  it('Validar body retornando no LIST USERS', ()=> {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=2'
    }).then((response) => { 
      let retorno = response.body
      cy.log(JSON.stringify(retorno, null, 2))
    })

    })
    it('Validar SINGLE USERS retornando 200', () => {
      cy.request({
          method: 'GET',
          url: 'https://reqres.in/api/users?page=2'
      }).then((response) => { 
          expect(response.status).to.eq(200);
      });
  });

  it('Validar body retornando no SINGLE USERS', ()=> {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=2'
    }).then((response) => { 
      let retorno = response.body
      cy.log(JSON.stringify(retorno, null, 2))
    })
})
})

