const casual = require('casual')

casual.define('user', () => ({
  id: casual.uuid,
  email: casual.email,
  created_at: casual.moment,
  updated_at: casual.moment,
  DOB: casual.date(),
  username: casual.username,
  password: casual.password,
  bio: casual.sentence,
  occupation: casual.word
}))


const userData = []

for (let i = 0; i < 20; ++i) {
  userData.push(casual.user)
}

module.exports = userData
