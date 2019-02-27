import selector from '../support/selectors.json'
import fake from '../support/fake'

describe('User can sign up', () => {
  specify('User completes signup form and submits', () => {
    cy
      .visit('http://localhost:8080/signup')
      .get(selector.name).type(fake.name)
      .get(selector.email).type(fake.email)
      .get(selector.password).type(fake.password)
      .get(selector.username).type(fake.username)
      .get(selector.submit).click()
      .then(() => {
        // cy.wait(200) //remove this and test will fail
        cy.on('window:alert', (str) => {
          expect(str).to.equal(`${fake.name} was registered successfully`)
        })
      })
  })

  specify('Loads forum categories after signup', () => {
    cy
      .get(selector.categories)
      .then(el => {
        expect(el.length).to.be.at.least(1)
      })
  })
})