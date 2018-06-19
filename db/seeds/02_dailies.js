const TABLE_NAME = 'dailies'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, name: 'brush teeth', users_id: 1, archived: false},
        {id: 2, name: 'walk dog', users_id: 1, archived: false},
        {id: 3, name: 'meditate', users_id: 1, archived: false},
        {id: 4, name: 'go on a walk', users_id: 2, archived: false},
        {id: 5, name: 'read a book', users_id: 2, archived: false},
        {id: 6, name: 'review kids homework', users_id: 2, archived: false},
        {id: 7, name: 'do dishes', users_id: 3, archived: false},
        {id: 8, name: 'read unread emails', users_id: 3, archived: false},
        {id: 9, name: 'read the newspaper', users_id: 3, archived: false},
        {id: 10, name: 'exercise 15min', users_id: 1, archived: false},
        {id: 11, name: 'drink 5 cups of water', users_id: 1, archived: false},
        {id: 12, name: 'Rake the yard', users_id: 4, archived: false},
        {id: 13, name: 'Water Plants', users_id: 4, archived: false},
        {id: 14, name: 'Clear walk way', users_id: 4, archived: false},
        {id: 15, name: 'Work towards Toppling global currencies', users_id: 5, archived: false},
        {id: 16, name: 'Gain the trust of the electorate', users_id: 5, archived: false},
        {id: 17, name: 'Make myself a low calorie lunch', users_id: 5, archived: false},
        {id: 18, name: 'Weigh myself', users_id: 6, archived: false},
        {id: 19, name: 'Hold back the crippling anxiety of a chaotic universe and not cry', users_id: 6, archived: false},
        {id: 20, name: 'Blog my fake emotions that everything is okay', users_id: 6, archived: false},
        {id: 21, name: 'Use my candles', users_id: 7, archived: false},
        {id: 22, name: 'Watch the grass grow', users_id: 7, archived: false},
        {id: 23, name: 'Smell the flowers', users_id: 7, archived: false},
        {id: 24, name: 'Discover a new recipe', users_id: 8, archived: false},
        {id: 25, name: 'Read long news article, NO MORE LISTICLES', users_id: 8, archived: false},
        {id: 26, name: 'Spend less time on Instagram', users_id: 8, archived: false},
        {id: 27, name: 'Work on golf swing', users_id: 9, archived: false},
        {id: 28, name: 'Spend 10 minutes everyday working at the bank', users_id: 9, archived: false},
        {id: 29, name: 'Hold back the Proletariat', users_id: 9, archived: false},
        {id: 30, name: 'Eat more Candy', users_id: 10, archived: false},
        {id: 31, name: 'Sped more time playing', users_id: 10, archived: false},
        {id: 32, name: 'Pull Jessica hair until she notices me', users_id: 10, archived: false},
        {id: 33, name: 'meditate', users_id: 11, archived: false},
        {id: 34, name: 'go on a walk', users_id: 11, archived: false},
        {id: 35, name: 'read a book', users_id: 11, archived: false},
        {id: 36, name: 'review kids homework', users_id: 12, archived: false},
        {id: 37, name: 'do dishes', users_id: 3, archived: false},
        {id: 38, name: 'read unread emails', users_id: 12, archived: false},
        {id: 39, name: 'read the newspaper', users_id: 13, archived: false},
        {id: 40, name: 'exercise 15min', users_id: 12, archived: false},
        {id: 41, name: 'drink 5 cups of water', users_id: 13, archived: false},
        {id: 42, name: 'Go for a walk', users_id: 13, archived: false},
        {id: 43, name: 'Go for a run', users_id: 14, archived: false},
        {id: 44, name: 'Pray', users_id: 14, archived: false},
        {id: 45, name: 'Help someone', users_id: 14, archived: false},
        {id: 46, name: 'Pick up litter', users_id: 15, archived: false},
        {id: 47, name: 'Dust a shelf', users_id: 15, archived: false},
        {id: 48, name: 'Shave', users_id: 15, archived: false},
        {id: 49, name: 'Dance with wolves', users_id: 16, archived: false},
        {id: 50, name: 'See how high the sycamore grows', users_id: 16, archived: false},
        {id: 51, name: 'Hear the wolf cry to the blue corn moon', users_id: 16, archived: false},
        {id: 52, name: 'Ask the bobcat why he grinned', users_id: 16, archived: false},
        {id: 53, name: 'Sing with all the voices of the mountain', users_id: 16, archived: false},
        {id: 54, name: 'Paint with all the colors of the wind', users_id: 16, archived: false},
        {id: 55, name: 'Avoid Disney Lawyers', users_id: 16, archived: false},
        {id: 56, name: 'Make a sandwich', users_id: 18, archived: false},
        {id: 57, name: 'Make another sandwich', users_id: 18, archived: false},
        {id: 58, name: 'Eat both sandwiches', users_id: 18, archived: false},
        {id: 59, name: 'Make another sandwich', users_id: 18, archived: false}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
