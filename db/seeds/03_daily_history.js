const TABLE_NAME = 'daily_history'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, completed: true, dailies_id: 1, created_at: '2018-06-07T18:23:44.046Z'},
        {id: 2, completed: true, dailies_id: 1, created_at: '2018-06-18T18:23:44.046Z'},

        {id: 3, completed: true, dailies_id: 2, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 4, completed: true, dailies_id: 49, created_at: '2018-06-16T18:23:44.046Z'},
        {id: 5, completed: true, dailies_id: 49, created_at: '2018-06-17T18:23:44.046Z'},
        {id: 6, completed: true, dailies_id: 49, created_at: '2018-06-18T18:23:44.046Z'},
        // {id: 7, completed: false, dailies_id: 49, created_at: '2018-06-04T18:23:44.046Z'},

        {id: 8, completed: true, dailies_id: 50, created_at: '2018-06-04T18:23:44.046Z'},
        {id: 9, completed: true, dailies_id: 50, created_at: '2018-06-05T18:23:44.046Z'},
        {id: 10, completed: true, dailies_id: 50, created_at: '2018-06-06T18:23:44.046Z'},
        {id: 11, completed: true, dailies_id: 50, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 12, completed: true, dailies_id: 51, created_at: '2018-06-17T18:23:44.046Z'},
        // {id: 13, completed: false, dailies_id: 51, created_at: '2018-06-06T18:23:44.046Z'},
        {id: 14, completed: true, dailies_id: 51, created_at: '2018-06-18T18:23:44.046Z'},
        {id: 15, completed: true, dailies_id: 51, created_at: '2018-06-19T18:23:44.046Z'},
        {id: 16, completed: true, dailies_id: 52, created_at: '2018-06-07T18:23:44.046Z'},
        // {id: 17, completed: false, dailies_id: 52, created_at: '2018-06-07T18:23:44.046Z'},
        {id: 18, completed: true, dailies_id: 52, created_at: '2018-06-06T18:23:44.046Z'},
        
        {id: 19, completed: true, dailies_id: 53, created_at: '2018-06-02T18:23:44.046Z'},
        {id: 20, completed: true, dailies_id: 53, created_at: '2018-06-02T18:23:44.046Z'},
        {id: 21, completed: true, dailies_id: 53, created_at: '2018-06-02T18:23:44.046Z'},

        {id: 22, completed: true, dailies_id: 54, created_at: '2018-06-05T18:23:44.046Z'},
        {id: 23, completed: true, dailies_id: 54, created_at: '2018-06-06T18:23:44.046Z'},
        {id: 24, completed: true, dailies_id: 54, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 25, completed: true, dailies_id: 55, created_at: '2018-06-05T18:23:44.046Z'},
        {id: 26, completed: true, dailies_id: 55, created_at: '2018-06-06T18:23:44.046Z'},
        {id: 27, completed: true, dailies_id: 55, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 28, completed: true, dailies_id: 3, created_at: '2018-06-07T18:23:44.046Z'},
        {id: 29, completed: false, dailies_id: 3, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 30, completed: true, dailies_id: 4, created_at: '2018-06-06T18:23:44.046Z'},
        {id: 31, completed: true, dailies_id: 4, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 32, completed: true, dailies_id: 5, created_at: '2018-06-05T18:23:44.046Z'},
        {id: 33, completed: true, dailies_id: 5, created_at: '2018-06-06T18:23:44.046Z'},
        {id: 34, completed: true, dailies_id: 5, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 35, completed: true, dailies_id: 6, created_at: '2018-06-06T18:23:44.046Z'},
        {id: 36, completed: true, dailies_id: 6, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 37, completed: true, dailies_id: 7, created_at: '2018-06-06T18:23:44.046Z'},
        {id: 38, completed: true, dailies_id: 7, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 39, completed: true, dailies_id: 8, created_at: '2018-06-06T18:23:44.046Z'},
        {id: 40, completed: true, dailies_id: 8, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 41, completed: true, dailies_id: 9, created_at: '2018-06-05T18:23:44.046Z'},
        {id: 42, completed: true, dailies_id: 9, created_at: '2018-06-06T18:23:44.046Z'},
        {id: 43, completed: true, dailies_id: 9, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 44, completed: true, dailies_id: 11, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 45, completed: true, dailies_id: 12, created_at: '2018-06-05T18:23:44.046Z'},
        {id: 46, completed: true, dailies_id: 12, created_at: '2018-06-06T18:23:44.046Z'},
        {id: 47, completed: true, dailies_id: 12, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 48, completed: true, dailies_id: 13, created_at: '2018-06-06T18:23:44.046Z'},
        {id: 49, completed: true, dailies_id: 13, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 50, completed: true, dailies_id: 14, created_at: '2018-06-04T18:23:44.046Z'},
        {id: 51, completed: true, dailies_id: 14, created_at: '2018-06-05T18:23:44.046Z'},
        {id: 52, completed: true, dailies_id: 14, created_at: '2018-06-06T18:23:44.046Z'},
        {id: 53, completed: true, dailies_id: 14, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 54, completed: true, dailies_id: 15, created_at: '2018-06-05T18:23:44.046Z'},
        {id: 55, completed: true, dailies_id: 15, created_at: '2018-06-06T18:23:44.046Z'},
        {id: 56, completed: true, dailies_id: 15, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 57, completed: true, dailies_id: 16, created_at: '2018-06-06T18:23:44.046Z'},
        {id: 58, completed: true, dailies_id: 16, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 59, completed: true, dailies_id: 17, created_at: '2018-06-05T18:23:44.046Z'},
        {id: 60, completed: true, dailies_id: 17, created_at: '2018-06-06T18:23:44.046Z'},
        {id: 61, completed: true, dailies_id: 17, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 62, completed: true, dailies_id: 18, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 63, completed: true, dailies_id: 19, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 64, completed: true, dailies_id: 20, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 65, completed: true, dailies_id: 21, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 66, completed: true, dailies_id: 22, created_at: '2018-06-06T18:23:44.046Z'},
        {id: 67, completed: true, dailies_id: 22, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 68, completed: true, dailies_id: 23, created_at: '2018-06-05T18:23:44.046Z'},
        {id: 69, completed: true, dailies_id: 23, created_at: '2018-06-06T18:23:44.046Z'},
        {id: 70, completed: true, dailies_id: 23, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 71, completed: true, dailies_id: 24, created_at: '2018-06-05T18:23:44.046Z'},
        {id: 72, completed: true, dailies_id: 24, created_at: '2018-06-06T18:23:44.046Z'},
        {id: 73, completed: true, dailies_id: 24, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 74, completed: true, dailies_id: 25, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 75, completed: true, dailies_id: 26, created_at: '2018-06-06T18:23:44.046Z'},
        {id: 76, completed: true, dailies_id: 26, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 77, completed: true, dailies_id: 27, created_at: '2018-06-05T18:23:44.046Z'},
        {id: 78, completed: true, dailies_id: 27, created_at: '2018-06-06T18:23:44.046Z'},
        {id: 79, completed: true, dailies_id: 27, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 80, completed: true, dailies_id: 28, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 81, completed: true, dailies_id: 29, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 82, completed: true, dailies_id: 30, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 83, completed: true, dailies_id: 31, created_at: '2018-06-06T18:23:44.046Z'},
        {id: 84, completed: true, dailies_id: 31, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 85, completed: true, dailies_id: 32, created_at: '2018-06-06T18:23:44.046Z'},
        {id: 86, completed: true, dailies_id: 32, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 87, completed: true, dailies_id: 33, created_at: '2018-06-06T18:23:44.046Z'},
        {id: 88, completed: true, dailies_id: 33, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 89, completed: true, dailies_id: 34, created_at: '2018-06-06T18:23:44.046Z'},
        {id: 90, completed: true, dailies_id: 34, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 91, completed: true, dailies_id: 35, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 92, completed: true, dailies_id: 36, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 93, completed: true, dailies_id: 37, created_at: '2018-06-06T18:23:44.046Z'},
        {id: 94, completed: true, dailies_id: 37, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 95, completed: true, dailies_id: 38, created_at: '2018-06-06T18:23:44.046Z'},
        {id: 96, completed: true, dailies_id: 38, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 97, completed: true, dailies_id: 39, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 98, completed: true, dailies_id: 40, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 99, completed: true, dailies_id: 41, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 100, completed: true, dailies_id: 42, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 101, completed: true, dailies_id: 43, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 102, completed: true, dailies_id: 44, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 103, completed: true, dailies_id: 45, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 104, completed: true, dailies_id: 46, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 105, completed: true, dailies_id: 47, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 106, completed: true, dailies_id: 48, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 107, completed: true, dailies_id: 56, created_at: '2018-06-07T18:23:44.046Z'},

        {id: 108, completed: true, dailies_id: 7, created_at: '2018-06-12T18:23:44.046Z'},
        {id: 109, completed: true, dailies_id: 7, created_at: '2018-06-13T18:23:44.046Z'},
        {id: 110, completed: true, dailies_id: 7, created_at: '2018-06-14T18:23:44.046Z'},

        {id: 111, completed: true, dailies_id: 8, created_at: '2018-06-12T18:23:44.046Z'},
        {id: 112, completed: true, dailies_id: 8, created_at: '2018-06-13T18:23:44.046Z'},
        {id: 113, completed: true, dailies_id: 8, created_at: '2018-06-14T18:23:44.046Z'},

        {id: 114, completed: true, dailies_id: 9, created_at: '2018-06-12T18:23:44.046Z'},
        {id: 115, completed: true, dailies_id: 9, created_at: '2018-06-13T18:23:44.046Z'},

        {id: 117, completed: true, dailies_id: 57, created_at: '2018-06-07T18:23:44.046Z'}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
