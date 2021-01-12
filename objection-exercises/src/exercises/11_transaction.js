const cleanup = require('../lib/cleanup')
const User = require('../models/user')
const Pet = require('../models/pet')
// Import models

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */
    const trans = await User.transaction(async trx => {
      const nick = await User.query(trx).insert({
        firstName: 'Nick',
        lastName: 'Castillo',
        email: 'nicasmar@gmail.com'
      })
      const addPet = await nick.$relatedQuery('pets', trx)
        .insert({
          name: "Pop",
          type: 'DOG'
        })
      const total = await Pet.query(trx).resultSize()

      if (total > 15) {
        const del = await Pet.query(trx).delete().where('type', 'BIRD')
      } 
    })

  // -----
  cleanup()
}

run()
