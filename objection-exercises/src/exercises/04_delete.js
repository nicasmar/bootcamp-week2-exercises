const cleanup = require('../lib/cleanup')
const Pet = require('../models/Pet')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Delete all CATS
  const cat = await Pet.query().delete().where('type', 'CAT')
  console.log(cat)
  // -----
  cleanup()
}

run()
