const casual = require('casual')
const userData = require('./users')
const postData = require('./posts')

casual.define('comment', ({ user1Id, post1Id }) => ({
  id: casual.uuid,
  text: casual.sentence,
  date: casual.date(),
  num_of_likes: casual.integer(from = 0, to = 100),
  user_id: user1Id,
  post_id: post1Id

}))


const commentsData = []

for (let i = 0; i < 10; ++i) {
  const user1Id = casual.random_element(userData).id
  const post1Id = casual.random_element(postData).id
  commentsData.push(casual.comment({ user1Id, post1Id }))
}

module.exports = commentsData
