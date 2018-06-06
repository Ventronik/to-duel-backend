const TABLE_NAME = 'duels'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, u1_id: 1, u2_id: 2, startTime:'2018-06-04T00:00:00.000Z', endTime: '2018-06-08T23:59:59.999Z', u2_accepted: true, u1_confirmed: false, rejected: false, winnerId: 0},
        {id: 2, u1_id: 2, u2_id: 3, startTime:'2018-06-04T00:00:00.000Z', endTime: '2018-06-08T23:59:59.999Z', u2_accepted: true, u1_confirmed: true, rejected: false, winnerId: 3},
        {id: 3, u1_id: 3, u2_id: 1, startTime:'2018-06-04T00:00:00.000Z', endTime: '2018-06-08T23:59:59.999Z', u2_accepted: false, u1_confirmed: true, rejected: false, winnerId: 3},
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
