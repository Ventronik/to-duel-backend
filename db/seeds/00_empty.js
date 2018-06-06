exports.seed = function(knex, Promise) {
  // Deletes ALL data from each of the tables
  // This is necessary so you can seed multiple times
  // Goes in reverse order so it deletes the children before the parent
  return knex('duel_dailies').del()
    .then(function() {
      return knex('duels').del()
    })
    .then(function() {
      return knex('daily_history').del()
    })
    .then(function() {
      return knex('dailies').del()
    })
    .then(function() {
      return knex('users').del()
    })
};
