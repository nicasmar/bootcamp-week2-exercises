const { getMaxListeners } = require('../lib')
const cleanup = require('../lib/cleanup')
const User = require('../models/user')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey
  const graph = await User.query().insertGraph({
    firstName: 'Peter',
    lastName: 'Bynum',
    email: 'peterbyunum@gmail.com',
    pets: [
      {
        name: 'Rocco',
        type: 'DOG'
      },
      {
        name: 'Rosey',
        type: 'DOG'
      }
    ]
  })
  console.log(graph)
  // -----
  cleanup()
}

run()
