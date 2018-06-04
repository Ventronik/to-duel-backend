
const TABLE_NAME = 'users'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, first_name: 'Bryan', last_name: 'Kai', email: 'brykai123@gmail.com', hashed_password: '$2a$10$NgghJcyXJQk5ZZ5iobhX2OznHh6RiXUanGsIGa1CALUJYXq/hsjH2'},
        {id: 2, first_name: 'Dustin', last_name: 'Ruskell', email: 'dustin@gmail.com', hashed_password: '$2a$10$NgghJcyXJQk5ZZ5iobhX2OznHh6RiXUanGsIGa1CALUJYXq/hsjH2'},
        {id: 3, first_name: 'Roger', last_name: 'Schmidt', email: 'roger@gmail.com', hashed_password: '$2a$10$NgghJcyXJQk5ZZ5iobhX2OznHh6RiXUanGsIGa1CALUJYXq/hsjH2'}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};

// user email brykai123@gmail.com
// user password 123
