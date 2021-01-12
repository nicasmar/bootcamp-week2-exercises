const cleanup = require('../lib/cleanup')
const User = require('../models/user')
const Pet = require('../models/pet')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the total number of users
  const total = await User.query().resultSize()
  // console.log(total)
  // Get the average age of users
  const age = await User.query().avg('age as avgAge')
  // console.log(age)
  // Get the total number of dogs
  const totalDog = await Pet.query().where('type', 'DOG').resultSize()
  console.log(totalDog)
  // -----
  cleanup()
}

run()
