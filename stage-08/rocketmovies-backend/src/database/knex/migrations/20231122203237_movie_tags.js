exports.up = knex =>
  knex.schema.createTable('movie_tags', table => {
    table.increments('id').primary()

    table.text('name').notNullable()

    table.integer('user_id').references('id').inTable('users').notNullable()
    table
      .integer('note_id')
      .references('id')
      .inTable('movie_notes')
      .notNullable()
      .onDelete('CASCADE')
  })

exports.down = knex => knex.schema.dropTable('movie_tags')
