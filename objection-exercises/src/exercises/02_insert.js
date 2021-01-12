const cleanup = require('../lib/cleanup')
const casual = require('casual')
const User = require('../models/User')
const Pet = require('../models/Pet')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table
  // const me = await User.query().insert({
  //   id: casual.uuid,
  //   email:'nicasmar@gmail.com',
  //   firstName: 'Nick',
  //   lastName: 'Castillo',
  //   age: 18,
  //   created_at: casual.moment,
  //   updated_at: casual.moment
  // })
  // console.log(me)
  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  const pet = await Pet.query().insert({
    id: casual.uuid,
    ownerId: '2afc2fa2-5e5b-4a43-bd9c-224c74aa201d',
    type: 'DOG',
    name: 'Casper',
    created_at: casual.moment,
    updated_at: casual.moment,
  })
  // -----
  cleanup()
}

run()
