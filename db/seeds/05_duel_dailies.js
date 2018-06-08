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
        {id: 7, duel_id: 3, dailies_id: 12},
        {id: 8, duel_id: 3, dailies_id: 13},
        {id: 9, duel_id: 3, dailies_id: 14},
        {id: 10, duel_id: 3, dailies_id: 49},
        {id: 11, duel_id: 3, dailies_id: 50},
        {id: 12, duel_id: 3, dailies_id: 51},
        {id: 13, duel_id: 2, dailies_id: 4},
        {id: 14, duel_id: 2, dailies_id: 5},
        {id: 15, duel_id: 2, dailies_id: 6},
        {id: 16, duel_id: 2, dailies_id: 7},
        {id: 17, duel_id: 2, dailies_id: 8},
        {id: 18, duel_id: 2, dailies_id: 9},
        {id: 19, duel_id: 4, dailies_id: 53},
        {id: 20, duel_id: 4, dailies_id: 54},
        {id: 21, duel_id: 4, dailies_id: 55},
        {id: 22, duel_id: 4, dailies_id: 15},
        {id: 23, duel_id: 4, dailies_id: 16},
        {id: 24, duel_id: 4, dailies_id: 17},
        {id: 25, duel_id: 5, dailies_id: 12},
        {id: 26, duel_id: 5, dailies_id: 13},
        {id: 27, duel_id: 5, dailies_id: 14},
        {id: 28, duel_id: 5, dailies_id: 49},
        {id: 29, duel_id: 5, dailies_id: 50},
        {id: 30, duel_id: 5, dailies_id: 51},
        {id: 31, duel_id: 6, dailies_id: 7},
        {id: 32, duel_id: 6, dailies_id: 8},
        {id: 33, duel_id: 6, dailies_id: 9},
        {id: 34, duel_id: 6, dailies_id: 51},
        {id: 35, duel_id: 6, dailies_id: 53},
        {id: 36, duel_id: 6, dailies_id: 52},
        {id: 37, duel_id: 7, dailies_id: 52},
        {id: 38, duel_id: 7, dailies_id: 53},
        {id: 39, duel_id: 7, dailies_id: 54},
        {id: 40, duel_id: 7, dailies_id: 4},
        {id: 41, duel_id: 7, dailies_id: 5},
        {id: 42, duel_id: 7, dailies_id: 6},
        {id: 43, duel_id: 8, dailies_id: 50},
        {id: 44, duel_id: 8, dailies_id: 51},
        {id: 45, duel_id: 8, dailies_id: 49},
        {id: 46, duel_id: 8, dailies_id: 18},
        {id: 47, duel_id: 8, dailies_id: 19},
        {id: 48, duel_id: 8, dailies_id: 20},
        {id: 49, duel_id: 9, dailies_id: 51},
        {id: 50, duel_id: 9, dailies_id: 52},
        {id: 51, duel_id: 9, dailies_id: 53},
        {id: 52, duel_id: 9, dailies_id: 21},
        {id: 53, duel_id: 9, dailies_id: 22},
        {id: 54, duel_id: 9, dailies_id: 23},
        {id: 55, duel_id: 10, dailies_id: 7},
        {id: 56, duel_id: 10, dailies_id: 8},
        {id: 57, duel_id: 10, dailies_id: 9},
        {id: 58, duel_id: 10, dailies_id: 24},
        {id: 59, duel_id: 10, dailies_id: 25},
        {id: 60, duel_id: 10, dailies_id: 26},
        {id: 61, duel_id: 11, dailies_id: 7},
        {id: 62, duel_id: 11, dailies_id: 8},
        {id: 63, duel_id: 11, dailies_id: 9},
        {id: 64, duel_id: 11, dailies_id: 27},
        {id: 65, duel_id: 11, dailies_id: 28},
        {id: 66, duel_id: 11, dailies_id: 29},
        {id: 67, duel_id: 12, dailies_id: 12},
        {id: 68, duel_id: 12, dailies_id: 13},
        {id: 69, duel_id: 12, dailies_id: 14},
        {id: 70, duel_id: 12, dailies_id: 30},
        {id: 71, duel_id: 12, dailies_id: 31},
        {id: 72, duel_id: 12, dailies_id: 32},
        {id: 73, duel_id: 13, dailies_id: 12},
        {id: 74, duel_id: 13, dailies_id: 13},
        {id: 75, duel_id: 13, dailies_id: 14},
        {id: 76, duel_id: 13, dailies_id: 34},
        {id: 77, duel_id: 13, dailies_id: 35},
        {id: 78, duel_id: 13, dailies_id: 33},
        {id: 79, duel_id: 14, dailies_id: 17},
        {id: 80, duel_id: 14, dailies_id: 18},
        {id: 81, duel_id: 14, dailies_id: 16},
        {id: 82, duel_id: 14, dailies_id: 36},
        {id: 83, duel_id: 14, dailies_id: 37},
        {id: 84, duel_id: 14, dailies_id: 38},
        {id: 85, duel_id: 15, dailies_id: 18},
        {id: 86, duel_id: 15, dailies_id: 20},
        {id: 87, duel_id: 15, dailies_id: 19},
        {id: 88, duel_id: 15, dailies_id: 40},
        {id: 89, duel_id: 15, dailies_id: 39},
        {id: 90, duel_id: 15, dailies_id: 41},
        {id: 91, duel_id: 16, dailies_id: 21},
        {id: 92, duel_id: 16, dailies_id: 22},
        {id: 93, duel_id: 16, dailies_id: 23},
        {id: 94, duel_id: 16, dailies_id: 43},
        {id: 95, duel_id: 16, dailies_id: 44},
        {id: 96, duel_id: 16, dailies_id: 4},
        {id: 97, duel_id: 17, dailies_id: 21},
        {id: 98, duel_id: 17, dailies_id: 22},
        {id: 99, duel_id: 17, dailies_id: 23},
        {id: 100, duel_id: 17, dailies_id: 47},
        {id: 101, duel_id: 17, dailies_id: 48},
        {id: 102, duel_id: 17, dailies_id: 46}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
