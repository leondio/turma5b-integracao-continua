/// <reference types="cypress" />
 
context('Torne-se um programador', () => {
  
  it('Acessar a página do google', () => {
    cy.visit('http://google.com.br')
  })

  it('Deve buscar por torne-se um programador no google',() =>{
    cy.get('input[name="q"]').type('Torne-se um programador')
    cy.get('form').submit()
  })

  it('Deve abrir o site do Torne-se um programador',() =>{
    let links = cy.get('#search .rc a[href="http://www.torneseumprogramador.com.br/"').click()
  })
})