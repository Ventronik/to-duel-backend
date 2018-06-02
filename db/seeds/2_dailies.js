const TABLE_NAME = 'dailies'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, name: 'brush teeth', streak: 2, users_id: 1},
        {id: 2, name: 'walk dog', streak: 0, users_id: 1},
        {id: 3, name: 'meditate', streak: 1, users_id: 2 },
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
