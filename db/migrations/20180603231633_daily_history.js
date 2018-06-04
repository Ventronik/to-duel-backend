
exports.up = function(knex, Promise) {
  return knex.schema.createTable('daily_history', (table) => {
    table.increments();
    table.boolean('completed').notNullable()
    table.integer('dailies_id').notNullable().references('dailies.id')
    table.timestamps(true, true)
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('daily_history')
};
