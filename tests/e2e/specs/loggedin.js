import selector from '../support/selectors.json'
import fake from '../support/fake'

describe('When user is logged in', () => {
  beforeEach(() => {
    cy.login()
  })

  specify('Clicking on a category loads posts for that category', () => {
    cy
      .visit('http://localhost:8080/')
      .get(selector.categories)
      .contains('test')
      .click()
      .get(selector.threads)
      .then(el => {
        expect(el.length).to.be.at.least(1)
      })
  })

  // specify('User can create a category', () => {
  //   cy
  //     .visit('http://localhost:8080')
  //     .get(selector.input)
  //     .type(fake.word)
  //     .get(selector.btn)
  //     .click()
  //     .get(selector.categories)
  //     .then(el => {
  //       cy.contains(fake.word)
  //         .then(el => {
  //           expect(el).to.have.contain(fake.word)
  //         })
  //     })
  // })

  // specify('User can create a thread', () => {

  // })
})