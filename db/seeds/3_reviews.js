
const TABLE_NAME = 'reviews'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, title: 'Great!', text: 'This tastes great!', rating: 5, snacks_id: 4, users_id: 1},
        {id: 2, title: 'Mehh', text: 'I dont like this stuff.', rating: 2, snacks_id: 1, users_id: 1},
        {id: 3, title: 'YMMV', text: 'I personally do not find it tasty, but others do.', rating: 3, snacks_id: 6, users_id: 1},
        {id: 4, title: 'Good', text: 'Pretty good stuff', rating: 4, snacks_id: 2, users_id: 1},
        {id: 5, title: 'Bad', text: 'This stuff is gross.', rating: 2, snacks_id: 2, users_id: 2},
        {id: 6, title: 'So-so', text: 'I have had better.', rating: 3, snacks_id: 5, users_id: 1},
        {id: 7, title: 'Delicious!', text: 'Best I have ever tried.', rating: 5, snacks_id: 1, users_id: 3},
        {id: 8, title: 'Scrumptious :)', text: 'This stuff is amazing!', rating: 5, snacks_id: 6, users_id: 1},
        {id: 9, title: 'Gross!!!!', text: 'Skip this one!', rating: 1, snacks_id: 1, users_id: 2},
        {id: 10, title: 'The best filling eva', text: 'Pie + Cherry = Awesome!', rating: 5, snacks_id: 2, users_id: 3},
        {id: 11, title: 'Good stuff', text: 'I like this one a lot!', rating: 4, snacks_id: 5, users_id: 2},
        {id: 12, title: 'Amazazing!', text: 'You have to try this!', rating: 5, snacks_id: 1, users_id: 2}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
