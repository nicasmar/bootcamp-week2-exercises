exports.up = async knex => knex.schema.createTable('users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('email')
    .unique()
    .notNullable()

  table.timestamps(true)
  table.date('DOB')
  table.string('username')
  table.string('password')
  table.string('bio')
  table.string('occupation')
})

exports.down = async knex => knex.schema.dropTableIfExists('users')
