const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const userPets = await User.query().withGraphFetched('pets')
  // console.dir(userPets, {depth: null})
  // Get all users, their pets, AND their children
  const usersPetsChildren = await User.query().withGraphFetched('children.pets')
  // console.dir(usersPetsChildren, {depth: null})
  // Get all users, their parents, and their grandparents
  const userParents = await User.query().withGraphFetched('parents.parents')
  // console.dir(userParents, {depth: null})
  // Get all users, their pets, their chilren, and their childrens' pets
  const userPetsChildrenPets = await User.query().withGraphFetched('[pets, children.pets]')
  console.dir(userPetsChildrenPets, {depth: null})
  // -----
  cleanup()
}

run()
