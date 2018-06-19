exports.up = function(knex, Promise) {
  return knex.schema.createTable('duels', (table) => {
    table.increments();
    table.integer('u1_id').notNullable().references('users.id')
    table.integer('u2_id').notNullable().references('users.id')
    table.dateTime('start_time').notNullable()
    table.dateTime('end_time').notNullable()
    table.boolean('u2_accepted').defaultTo(false)
    table.boolean('u1_confirmed').defaultTo(false)
    table.dateTime('rejected').defaultTo(null)
    table.integer('winner_id').defaultTo(null)
    table.boolean('archived').defaultTo(false)
    table.timestamps(true, true)
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('duels')
};
