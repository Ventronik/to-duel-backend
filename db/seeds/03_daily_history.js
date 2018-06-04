const TABLE_NAME = 'daily_history'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, completed: true, dailies_id: 1, created_at: '2018-06-02T18:23:44.046Z'},
        {id: 2, completed: true, dailies_id: 1, created_at: '2018-06-02T18:23:44.046Z'},
        {id: 3, completed: true, dailies_id: 2, created_at: '2018-06-02T18:23:44.046Z'},
        {id: 4, completed: true, dailies_id: 2, created_at: '2018-06-02T18:23:44.046Z'},
        {id: 5, completed: true, dailies_id: 3},
        {id: 6, completed: true, dailies_id: 3},
        {id: 7, completed: true, dailies_id: 1},
        {id: 8, completed: true, dailies_id: 2},
        {id: 9, completed: true, dailies_id: 3},
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
