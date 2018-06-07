const TABLE_NAME = 'dailies'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, name: 'brush teeth', streak: 2, users_id: 1, archived: false},
        {id: 2, name: 'walk dog', streak: 0, users_id: 1, archived: false},
        {id: 3, name: 'meditate', streak: 1, users_id: 1, archived: false},
        {id: 4, name: 'go on a walk', streak: 2, users_id: 2, archived: false},
        {id: 5, name: 'read a book', streak: 0, users_id: 2, archived: false},
        {id: 6, name: 'review kids homework', streak: 1, users_id: 2, archived: false},
        {id: 7, name: 'do dishes', streak: 2, users_id: 3, archived: false},
        {id: 8, name: 'read unread emails', streak: 0, users_id: 3, archived: false},
        {id: 9, name: 'read the newspaper', streak: 1, users_id: 3, archived: false},
        {id: 10, name: 'exercise 15min', streak: 2, users_id: 1, archived: false},
        {id: 11, name: 'drink 5 cups of water', streak: 0, users_id: 1, archived: false},
        {id: 12, name: 'Rake the yard', streak: 0, users_id: 4, archived: false},
        {id: 13, name: 'Water Plants', streak: 3, users_id: 4, archived: false},
        {id: 14, name: 'Clear walk way', streak: 1, users_id: 4, archived: false},
        {id: 15, name: 'Work towards Toppling global currencies', streak: 4, users_id: 5, archived: false},
        {id: 16, name: 'Gain the trust of the electorate', streak: 6, users_id: 5, archived: false},
        {id: 17, name: 'Make myself a low calorie lunch', streak: 1, users_id: 5, archived: false},
        {id: 18, name: 'Weigh myself', streak: 8, users_id: 6, archived: false},
        {id: 19, name: 'Hold back the crippling anxiety of a chaotic universe and not cry', streak: 1, users_id: 6, archived: false},
        {id: 20, name: 'Blog my fake emotions that everything is okay', streak: 9, users_id: 6, archived: false},
        {id: 21, name: 'Use my candles', streak: 1, users_id: 7, archived: false},
        {id: 22, name: 'Watch the grass grow', streak: 2, users_id: 7, archived: false},
        {id: 23, name: 'Smell the flowers', streak: 1, users_id: 7, archived: false},
        {id: 24, name: 'Discover a new recipe', streak: 5, users_id: 8, archived: false},
        {id: 25, name: 'Read long news article, NO MORE LISTICLES', streak: 1, users_id: 8, archived: false},
        {id: 26, name: 'Spend less time on Instagram', streak: 6, users_id: 8, archived: false},
        {id: 27, name: 'Work on golf swing', streak: 1, users_id: 9, archived: false},
        {id: 28, name: 'Spend 10 minutes everyday working at the bank', streak: 7, users_id: 9, archived: false},
        {id: 29, name: 'Hold back the Proletariat', streak: 1, users_id: 9, archived: false},
        {id: 30, name: 'Eat more Candy', streak: 2, users_id: 10, archived: false},
        {id: 31, name: 'Sped more time playing', streak: 2, users_id: 10, archived: false},
        {id: 32, name: 'Pull Jessica hair until she notices me', streak: 0, users_id: 10, archived: false},
        {id: 33, name: 'meditate', streak: 1, users_id: 11, archived: false},
        {id: 34, name: 'go on a walk', streak: 2, users_id: 11, archived: false},
        {id: 35, name: 'read a book', streak: 0, users_id: 11, archived: false},
        {id: 36, name: 'review kids homework', streak: 12, users_id: 2, archived: false},
        {id: 37, name: 'do dishes', streak: 12, users_id: 3, archived: false},
        {id: 38, name: 'read unread emails', streak: 0, users_id: 12, archived: false},
        {id: 39, name: 'read the newspaper', streak: 1, users_id: 13, archived: false},
        {id: 40, name: 'exercise 15min', streak: 13, users_id: 1, archived: false},
        {id: 41, name: 'drink 5 cups of water', streak: 0, users_id: 13, archived: false},
        {id: 42, name: 'Go for a walk', streak: 0, users_id: 13, archived: false},
        {id: 43, name: 'Go for a run', streak: 3, users_id: 14, archived: false},
        {id: 44, name: 'Pray', streak: 1, users_id: 14, archived: false},
        {id: 45, name: 'Help someone', streak: 4, users_id: 14, archived: false},
        {id: 46, name: 'Pick up litter', streak: 6, users_id: 15, archived: false},
        {id: 47, name: 'Dust a shelf', streak: 1, users_id: 15, archived: false},
        {id: 48, name: 'Shave', streak: 8, users_id: 15, archived: false},
        {id: 49, name: 'Dance with wolves', streak: 1, users_id: 16, archived: false},
        {id: 50, name: 'See how high the sycamore grows', streak: 9, users_id: 16, archived: false},
        {id: 51, name: 'Hear the wolf cry to the blue corn moon', streak: 1, users_id: 16, archived: false},
        {id: 52, name: 'Ask the bobcat why he grinned', streak: 2, users_id: 16, archived: false},
        {id: 53, name: 'Sing with all the voices of the mountain', streak: 1, users_id: 16, archived: false},
        {id: 54, name: 'Paint with all the colors of the wind', streak: 5, users_id: 16, archived: false},
        {id: 55, name: 'Avoid Disney Lawyers', streak: 1, users_id: 16, archived: false},
        {id: 56, name: 'Make a sandwich', streak: 6, users_id: 18, archived: false},
        {id: 57, name: 'Make another sandwich', streak: 1, users_id: 18, archived: false},
        {id: 58, name: 'Eat both sandwiches', streak: 7, users_id: 18, archived: false},
        {id: 59, name: 'Make another sandwich', streak: 1, users_id: 18, archived: false}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
