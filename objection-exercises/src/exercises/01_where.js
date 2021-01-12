const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users with a specific name (pick it from your database)
  const Khalid = await User.query().where('firstName', 'Khalid')
  // console.log(Khalid)
  // Do the same with object notation
  const Brady = await User.query().where({firstName: 'Brady'})
  // console.log(Brady)
  // Get all DOGS and BIRDS
  const dogsBirds = await Pet.query().where({type: 'DOG'}).orWhere({type: 'BIRD'})
  console.log(dogsBirds)
  // -----
  cleanup()
}

run()
