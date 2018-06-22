var moment = require('moment');
const TABLE_NAME = 'daily_history'


exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, completed: true, dailies_id: 1, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 2, completed: true, dailies_id: 1, created_at: `${moment().day(2).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 3, completed: true, dailies_id: 2, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 4, completed: true, dailies_id: 49, created_at: `${moment().day(6).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 5, completed: true, dailies_id: 49, created_at: `${moment().day(6 - 7).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 6, completed: true, dailies_id: 49, created_at: `${moment().day(2).format("YYYY-MM-DDTH:mm:ss")}`},
        // {id: 7, completed: false, dailies_id: 49, created_at: `${moment().day(5 - 7).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 8, completed: true, dailies_id: 50, created_at: `${moment().day(5 - 7).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 9, completed: true, dailies_id: 50, created_at: `${moment().day(6 - 7).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 10, completed: true, dailies_id: 50, created_at: `${moment().day(0).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 11, completed: true, dailies_id: 50, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 12, completed: true, dailies_id: 51, created_at: `${moment().day(5).format("YYYY-MM-DDTH:mm:ss")}`},
        // {id: 13, completed: false, dailies_id: 51, created_at: `${moment().day(0).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 14, completed: true, dailies_id: 51, created_at: `${moment().day(2).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 15, completed: true, dailies_id: 51, created_at: `${moment().day(4).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 16, completed: true, dailies_id: 52, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},
        // {id: 17, completed: false, dailies_id: 52, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")`},
        {id: 18, completed: true, dailies_id: 52, created_at: `${moment().day(0).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 19, completed: true, dailies_id: 53, created_at: `${moment().day(4 - 7).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 20, completed: true, dailies_id: 53, created_at: `${moment().day(4 - 7).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 21, completed: true, dailies_id: 53, created_at: `${moment().day(4 - 7).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 22, completed: true, dailies_id: 54, created_at: `${moment().day(6 - 7).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 23, completed: true, dailies_id: 54, created_at: `${moment().day(0).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 24, completed: true, dailies_id: 54, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 25, completed: true, dailies_id: 55, created_at: `${moment().day(6 - 7).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 26, completed: true, dailies_id: 55, created_at: `${moment().day(0).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 27, completed: true, dailies_id: 55, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 28, completed: true, dailies_id: 3, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 29, completed: false, dailies_id: 3, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 30, completed: true, dailies_id: 4, created_at: `${moment().day(0).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 31, completed: true, dailies_id: 4, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 32, completed: true, dailies_id: 5, created_at: `${moment().day(6 - 7).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 33, completed: true, dailies_id: 5, created_at: `${moment().day(0).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 34, completed: true, dailies_id: 5, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 35, completed: true, dailies_id: 6, created_at: `${moment().day(0).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 36, completed: true, dailies_id: 6, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 37, completed: true, dailies_id: 7, created_at: `${moment().day(0).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 38, completed: true, dailies_id: 7, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 39, completed: true, dailies_id: 8, created_at: `${moment().day(0).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 40, completed: true, dailies_id: 8, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 41, completed: true, dailies_id: 9, created_at: `${moment().day(6 - 7).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 42, completed: true, dailies_id: 9, created_at: `${moment().day(0).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 43, completed: true, dailies_id: 9, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 44, completed: true, dailies_id: 11, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 45, completed: true, dailies_id: 12, created_at: `${moment().day(6 - 7).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 46, completed: true, dailies_id: 12, created_at: `${moment().day(0).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 47, completed: true, dailies_id: 12, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 48, completed: true, dailies_id: 13, created_at: `${moment().day(0).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 49, completed: true, dailies_id: 13, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 50, completed: true, dailies_id: 14, created_at: `${moment().day(5 - 7).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 51, completed: true, dailies_id: 14, created_at: `${moment().day(6 - 7).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 52, completed: true, dailies_id: 14, created_at: `${moment().day(0).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 53, completed: true, dailies_id: 14, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 54, completed: true, dailies_id: 15, created_at: `${moment().day(6 - 7).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 55, completed: true, dailies_id: 15, created_at: `${moment().day(0).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 56, completed: true, dailies_id: 15, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 57, completed: true, dailies_id: 16, created_at: `${moment().day(0).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 58, completed: true, dailies_id: 16, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 59, completed: true, dailies_id: 17, created_at: `${moment().day(6 - 7).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 60, completed: true, dailies_id: 17, created_at: `${moment().day(0).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 61, completed: true, dailies_id: 17, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 62, completed: true, dailies_id: 18, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 63, completed: true, dailies_id: 19, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 64, completed: true, dailies_id: 20, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 65, completed: true, dailies_id: 21, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 66, completed: true, dailies_id: 22, created_at: `${moment().day(0).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 67, completed: true, dailies_id: 22, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 68, completed: true, dailies_id: 23, created_at: `${moment().day(6 - 7).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 69, completed: true, dailies_id: 23, created_at: `${moment().day(0).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 70, completed: true, dailies_id: 23, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 71, completed: true, dailies_id: 24, created_at: `${moment().day(6 - 7).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 72, completed: true, dailies_id: 24, created_at: `${moment().day(0).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 73, completed: true, dailies_id: 24, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 74, completed: true, dailies_id: 25, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 75, completed: true, dailies_id: 26, created_at: `${moment().day(0).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 76, completed: true, dailies_id: 26, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 77, completed: true, dailies_id: 27, created_at: `${moment().day(6 - 7).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 78, completed: true, dailies_id: 27, created_at: `${moment().day(0).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 79, completed: true, dailies_id: 27, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 80, completed: true, dailies_id: 28, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 81, completed: true, dailies_id: 29, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 82, completed: true, dailies_id: 30, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 83, completed: true, dailies_id: 31, created_at: `${moment().day(0).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 84, completed: true, dailies_id: 31, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 85, completed: true, dailies_id: 32, created_at: `${moment().day(0).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 86, completed: true, dailies_id: 32, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 87, completed: true, dailies_id: 33, created_at: `${moment().day(0).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 88, completed: true, dailies_id: 33, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 89, completed: true, dailies_id: 34, created_at: `${moment().day(0).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 90, completed: true, dailies_id: 34, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 91, completed: true, dailies_id: 35, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 92, completed: true, dailies_id: 36, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 93, completed: true, dailies_id: 37, created_at: `${moment().day(0).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 94, completed: true, dailies_id: 37, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 95, completed: true, dailies_id: 38, created_at: `${moment().day(0).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 96, completed: true, dailies_id: 38, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 97, completed: true, dailies_id: 39, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 98, completed: true, dailies_id: 40, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 99, completed: true, dailies_id: 41, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 100, completed: true, dailies_id: 42, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 101, completed: true, dailies_id: 43, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 102, completed: true, dailies_id: 44, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 103, completed: true, dailies_id: 45, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 104, completed: true, dailies_id: 46, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 105, completed: true, dailies_id: 47, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 106, completed: true, dailies_id: 48, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 107, completed: true, dailies_id: 56, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 108, completed: true, dailies_id: 7, created_at: `${moment().day(2).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 109, completed: true, dailies_id: 7, created_at: `${moment().day(3).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 110, completed: true, dailies_id: 7, created_at: `${moment().day(4).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 111, completed: true, dailies_id: 8, created_at: `${moment().day(2).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 112, completed: true, dailies_id: 8, created_at: `${moment().day(3).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 113, completed: true, dailies_id: 8, created_at: `${moment().day(4).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 114, completed: true, dailies_id: 9, created_at: `${moment().day(2).format("YYYY-MM-DDTH:mm:ss")}`},
        {id: 115, completed: true, dailies_id: 9, created_at: `${moment().day(3).format("YYYY-MM-DDTH:mm:ss")}`},

        {id: 117, completed: true, dailies_id: 57, created_at: `${moment().day(1).format("YYYY-MM-DDTH:mm:ss")}`}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
