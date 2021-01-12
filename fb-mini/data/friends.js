const casual = require('casual')
const userData = require('./users')

casual.define('friend', ({ user1Id, user2Id }) => ({
  id: casual.uuid,
  requestor_id: user1Id,
  requested_id: user2Id,
  status: casual.random_element(['accepted', 'rejected', 'pending']),
  date: casual.date()

}))


const friendData = []

for (let i = 0; i < 10; ++i) {
  const user1Id = casual.random_element(userData).id
  const user2Id = casual.random_element(userData).id
  friendData.push(casual.friend({ user1Id, user2Id }))
}

module.exports = friendData
