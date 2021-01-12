exports.up = async knex => knex.schema.createTable('friends', table => {
    
    table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

    table.uuid('requestor_id').references('users.id')
    table.uuid('requested_id').references('users.id')
    table.date('date')
    table.string('status')
  })
  
  exports.down = async knex => knex.schema.dropTableIfExists('friends')
  