const TABLE_NAME = 'duel_dailies'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, duel_id: 1, dailies_id: 1},
        {id: 2, duel_id: 1, dailies_id: 2},
        {id: 3, duel_id: 1, dailies_id: 3},
        {id: 4, duel_id: 1, dailies_id: 4},
        {id: 5, duel_id: 1, dailies_id: 5},
        {id: 6, duel_id: 1, dailies_id: 6},
        {id: 7, duel_id: 3, dailies_id: 7},
        {id: 8, duel_id: 3, dailies_id: 8},
        {id: 9, duel_id: 3, dailies_id: 9},
        {id: 10, duel_id: 3, dailies_id: 10},
        {id: 11, duel_id: 3, dailies_id: 11},
        {id: 12, duel_id: 3, dailies_id: 12},
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
