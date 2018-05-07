
const TABLE_NAME = 'reviews'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, title: 'rowValue1', text: 'blah-de-blah-de-blah', rating: 3, snacks_id: 4, users_id: 1},
        {id: 2, title: 'rowValue2', text: 'blah-de-blah-de-blah', rating: 3, snacks_id: 8, users_id: 1},
        {id: 3, title: 'rowValue1', text: 'blah-de-blah-de-blah', rating: 3, snacks_id: 6, users_id: 1},
        {id: 4, title: 'rowValue2', text: 'blah-de-blah-de-blah', rating: 3, snacks_id: 9, users_id: 1},
        {id: 5, title: 'rowValue1', text: 'blah-de-blah-de-blah', rating: 3, snacks_id: 2, users_id: 1},
        {id: 6, title: 'rowValue2', text: 'blah-de-blah-de-blah', rating: 3, snacks_id: 5, users_id: 1},
        {id: 7, title: 'rowValue3', text: 'blah-de-blah-de-blah', rating: 3, snacks_id: 1, users_id: 1}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
