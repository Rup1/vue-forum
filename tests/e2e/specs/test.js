// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('http://localhost:8080/')
    cy.contains('Tech')
  })

  it('contains the test category', () => {
    cy.contains('test')
  })

  it('contains the test category', () => {
    cy.get('[data-test=category-li-element]').first().click()
  })
})
