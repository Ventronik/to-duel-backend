exports.up = function(knex, Promise) {
  return knex.schema.createTable('dailies', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('')
    table.float('streak').defaultTo(0);
    table.integer('users_id').notNullable().references('users.id');
    table.boolean('archived').notNullable().defaultTo(false);
    table.timestamps(true, true)
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dailies')
};
