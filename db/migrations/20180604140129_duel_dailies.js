exports.up = function(knex, Promise) {
  return knex.schema.createTable('duel_dailies', (table) => {
    table.increments();
    table.integer('duel_id').notNullable().references('duels.id')
    table.integer('dailies_id').notNullable().references('dailies.id')
    table.timestamps(true, true)
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('duel_dailies')
};
