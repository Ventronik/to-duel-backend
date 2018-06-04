const TABLE_NAME = 'dailies'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, name: 'brush teeth', streak: 2, users_id: 1},
        {id: 2, name: 'walk dog', streak: 0, users_id: 1},
        {id: 3, name: 'meditate', streak: 1, users_id: 1},
        {id: 4, name: 'go on a walk', streak: 2, users_id: 2},
        {id: 5, name: 'read a book', streak: 0, users_id: 2},
        {id: 6, name: 'review kids homework', streak: 1, users_id: 2},
        {id: 7, name: 'do dishes', streak: 2, users_id: 3},
        {id: 8, name: 'read unread emails', streak: 0, users_id: 3},
        {id: 9, name: 'read the newspaper', streak: 1, users_id: 3},
        {id: 10, name: 'exercise 15min', streak: 2, users_id: 1},
        {id: 11, name: 'drink 5 cups of water', streak: 0, users_id: 1},
        {id: 12, name: 'do Galvanize homework', streak: 1, users_id: 1},
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};