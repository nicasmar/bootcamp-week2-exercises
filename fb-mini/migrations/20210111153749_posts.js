exports.up = async knex => knex.schema.createTable('posts', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
  
    table
      .string('text')
      .unique()
      .notNullable()
  
    table.date('date')
    table.integer('num_of_likes')
    table.uuid('user_id').references('users.id')
  })
  
  exports.down = async knex => knex.schema.dropTableIfExists('posts')
  