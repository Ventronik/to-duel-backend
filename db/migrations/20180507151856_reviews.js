
exports.up = function(knex, Promise) {
    return knex.schema.createTable('reviews', table => {
        table.increments()
        table.string('title').notNullable()
        table.text('text').notNullable()
        table.integer('rating').notNullable()
        table.integer('snacks_id').notNullable().references('snacks.id')
        table.integer('users_id').notNullable().references('users.id')
        table.timestamps(true, true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('reviews')
};
