import faker from 'faker'

module.exports = {
  name: faker.name.firstName(),
  email: faker.internet.email(),
  username: name + "-" + faker.internet.userName(),
  password: 'testing',
  word: faker.random.word()
}

