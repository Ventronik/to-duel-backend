const TABLE_NAME = 'duels'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, u1_id: 1, u2_id: 2, startTime:'2018-05-28T00:00:00.000Z', endTime: '2018-06-01T23:59:59.999Z', u2_accepted: true, u1_confirmed: false, rejected: false, winnerId: 0},
        {id: 2, u1_id: 2, u2_id: 3, startTime:'2018-06-04T00:00:00.000Z', endTime: '2018-06-08T23:59:59.999Z', u2_accepted: true, u1_confirmed: true, rejected: false, winnerId: 3},
        {id: 3, u1_id: 16, u2_id: 4, startTime:'2018-06-04T00:00:00.000Z', endTime: '2018-06-08T23:59:59.999Z', u2_accepted: false, u1_confirmed: true, rejected: true, winnerId: null},
        {id: 4, u1_id: 16, u2_id: 5, startTime:'2018-05-28T00:00:00.000Z', endTime: '2018-06-01T23:59:59.999Z', u2_accepted: true, u1_confirmed: true, rejected: false, winnerId: 5},
        {id: 5, u1_id: 16, u2_id: 4, startTime:'2018-06-04T00:00:00.000Z', endTime: '2018-06-08T23:59:59.999Z', u2_accepted: true, u1_confirmed: true, rejected: false, winnerId: null},
        {id: 6, u1_id: 16, u2_id: 3, startTime:'2018-06-04T00:00:00.000Z', endTime: '2018-06-08T23:59:59.999Z', u2_accepted: true, u1_confirmed: true, rejected: false, winnerId: null},
        {id: 7, u1_id: 16, u2_id: 2, startTime:'2018-06-04T00:00:00.000Z', endTime: '2018-06-08T23:59:59.999Z', u2_accepted: true, u1_confirmed: true, rejected: false, winnerId: null},
        {id: 8, u1_id: 6, u2_id: 16, startTime:'2018-06-04T00:00:00.000Z', endTime: '2018-06-08T23:59:59.999Z', u2_accepted: true, u1_confirmed: false, rejected: false, winnerId: null},
        {id: 9, u1_id: 7, u2_id: 16, startTime:'2018-06-04T00:00:00.000Z', endTime: '2018-06-08T23:59:59.999Z', u2_accepted: false, u1_confirmed: false, rejected: false, winnerId: null},
        {id: 10, u1_id: 3, u2_id: 8, startTime:'2018-06-04T00:00:00.000Z', endTime: '2018-06-08T23:59:59.999Z', u2_accepted: true, u1_confirmed: false, rejected: false, winnerId: null},
        {id: 11, u1_id: 3, u2_id: 9, startTime:'2018-06-04T00:00:00.000Z', endTime: '2018-06-08T23:59:59.999Z', u2_accepted: false, u1_confirmed: false, rejected: false, winnerId: null},
        {id: 12, u1_id: 4, u2_id: 10, startTime:'2018-06-04T00:00:00.000Z', endTime: '2018-06-08T23:59:59.999Z', u2_accepted: true, u1_confirmed: true, rejected: false, winnerId: null},
        {id: 13, u1_id: 4, u2_id: 11, startTime:'2018-06-04T00:00:00.000Z', endTime: '2018-06-08T23:59:59.999Z', u2_accepted: true, u1_confirmed: false, rejected: false, winnerId: null},
        {id: 14, u1_id: 5, u2_id: 12, startTime:'2018-06-04T00:00:00.000Z', endTime: '2018-06-08T23:59:59.999Z', u2_accepted: false, u1_confirmed: false, rejected: false, winnerId: null},
        {id: 15, u1_id: 6, u2_id: 13, startTime:'2018-06-04T00:00:00.000Z', endTime: '2018-06-08T23:59:59.999Z', u2_accepted: true, u1_confirmed: true, rejected: false, winnerId: null},
        {id: 16, u1_id: 7, u2_id: 14, startTime:'2018-06-04T00:00:00.000Z', endTime: '2018-06-08T23:59:59.999Z', u2_accepted: false, u1_confirmed: false, rejected: false, winnerId: null},
        {id: 17, u1_id: 7, u2_id: 15, startTime:'2018-06-04T00:00:00.000Z', endTime: '2018-06-08T23:59:59.999Z', u2_accepted: true, u1_confirmed: false, rejected: false, winnerId: null}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
