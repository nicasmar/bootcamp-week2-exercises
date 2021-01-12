const casual = require('casual')
const userData = require('./users')

casual.define('post', ({ user1Id }) => ({
  id: casual.uuid,
  text: casual.sentence,
  date: casual.date(),
  num_of_likes: casual.integer(from = 0, to = 1000),
  user_id: user1Id

}))


const postData = []

for (let i = 0; i < 10; ++i) {
  const user1Id = casual.random_element(userData).id
  postData.push(casual.post({ user1Id }))
}

module.exports = postData
