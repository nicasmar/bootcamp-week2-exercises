const cleanup = require('../lib/cleanup')
const User = require('../models/user')
const Pet = require('../models/pet')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get an instance of a user using findById(<YOUR_ID>)
  const thea = await User.query().findOne('firstName', 'Thea')
  console.log(thea)
  // Use that instance to create a new pet related that user
  // await thea.$relatedQuery('pets')
  //   .insert({type: 'DOG', name: 'Casper'})
  // Use that instance to get all of the user's pets and children
  const pthea = await thea.$fetchGraph('pets')
  console.log(pthea)
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph

  // -----
  cleanup()
}

run()
