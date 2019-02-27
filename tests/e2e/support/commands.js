// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('createCategory', (authorizationToken, categoryName) => {
  const mutation = (cat) => {
    return `mutation createCategory{createCategory(title: "${cat}"){id title }}`
  }
  cy.request({
    method: 'POST',
    url: 'http://localhost:4000',
    headers: {
      "authorization": authorizationToken
    },
    body: {
      query: mutation(categoryName)
    },
    failOnStatusCode: false
  })
})

Cypress.Commands.add('login', () => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:4000',
    body: {
      query: `mutation authenticate{authenticate(email:"Dakota_Ruecker91@gmail.com", password:"testing")}`
    },
    failOnStatusCode: false
  }).then(res => {
    window.localStorage.setItem('token', res.body.data.authenticate)
  })
})

