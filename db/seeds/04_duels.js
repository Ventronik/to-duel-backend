const TABLE_NAME = 'duels'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, u1_id: 1, u2_id: 2, start_time:'2018-05-28T00:00:00.000Z', end_time: '2018-06-01T23:59:59.999Z', u2_accepted: true, u1_confirmed: false, rejected: null, winner_id: 0},
        {id: 2, u1_id: 2, u2_id: 3, start_time:'2018-06-11T00:00:00.000Z', end_time: '2018-06-15T23:59:59.999Z', u2_accepted: true, u1_confirmed: true, rejected: null, winner_id: 3},
        {id: 3, u1_id: 16, u2_id: 4, start_time:'2018-06-11T00:00:00.000Z', end_time: '2018-06-15T23:59:59.999Z', u2_accepted: false, u1_confirmed: true, rejected: '2018-06-06T23:59:59.999Z', winner_id: null},
        {id: 4, u1_id: 16, u2_id: 5, start_time:'2018-05-28T00:00:00.000Z', end_time: '2018-06-01T23:59:59.999Z', u2_accepted: true, u1_confirmed: true, rejected: null, winner_id: 5},
        {id: 5, u1_id: 16, u2_id: 4, start_time:'2018-05-28T00:00:00.000Z', end_time: '2018-06-01T23:59:59.999Z', u2_accepted: true, u1_confirmed: true, rejected: null, winner_id: null},
        {id: 6, u1_id: 16, u2_id: 3, start_time:'2018-06-11T00:00:00.000Z', end_time: '2018-06-15T23:59:59.999Z', u2_accepted: true, u1_confirmed: true, rejected: null, winner_id: null},
        {id: 7, u1_id: 16, u2_id: 2, start_time:'2018-06-04T00:00:00.000Z', end_time: '2018-06-08T23:59:59.999Z', u2_accepted: true, u1_confirmed: true, rejected: null, winner_id: null},
        {id: 8, u1_id: 6, u2_id: 16, start_time:'2018-06-11T00:00:00.000Z', end_time: '2018-06-15T23:59:59.999Z', u2_accepted: true, u1_confirmed: false, rejected: null, winner_id: null},
        {id: 9, u1_id: 7, u2_id: 16, start_time:'2018-06-11T00:00:00.000Z', end_time: '2018-06-15T23:59:59.999Z', u2_accepted: false, u1_confirmed: false, rejected: null, winner_id: null},
        {id: 10, u1_id: 3, u2_id: 8, start_time:'2018-06-18T00:00:00.000Z', end_time: '2018-06-22T23:59:59.999Z', u2_accepted: true, u1_confirmed: false, rejected: null, winner_id: null},
        {id: 11, u1_id: 3, u2_id: 9, start_time:'2018-06-18T00:00:00.000Z', end_time: '2018-06-22T23:59:59.999Z', u2_accepted: false, u1_confirmed: false, rejected: null, winner_id: null},
        {id: 12, u1_id: 16, u2_id: 10, start_time:'2018-06-18T00:00:00.000Z', end_time: '2018-06-22T23:59:59.999Z', u2_accepted: true, u1_confirmed: true, rejected: null, winner_id: null},
        {id: 13, u1_id: 16, u2_id: 11, start_time:'2018-06-18T00:00:00.000Z', end_time: '2018-06-22T23:59:59.999Z', u2_accepted: true, u1_confirmed: false, rejected: null, winner_id: null},
        {id: 14, u1_id: 16, u2_id: 12, start_time:'2018-06-18T00:00:00.000Z', end_time: '2018-06-22T23:59:59.999Z', u2_accepted: false, u1_confirmed: false, rejected: null, winner_id: null},
        {id: 15, u1_id: 16, u2_id: 13, start_time:'2018-06-25T00:00:00.000Z', end_time: '2018-06-29T23:59:59.999Z', u2_accepted: true, u1_confirmed: true, rejected: null, winner_id: null},
        {id: 16, u1_id: 14, u2_id: 16, start_time:'2018-06-25T00:00:00.000Z', end_time: '2018-06-29T23:59:59.999Z', u2_accepted: true, u1_confirmed: false, rejected: null, winner_id: null},
        {id: 17, u1_id: 7, u2_id: 15, start_time:'2018-06-04T00:00:00.000Z', end_time: '2018-06-08T23:59:59.999Z', u2_accepted: true, u1_confirmed: false, rejected: null, winner_id: null}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
