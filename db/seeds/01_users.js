
const TABLE_NAME = 'users'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, first_name: 'Bryan', last_name: 'Kai', email: 'brykai123@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe'},
        {id: 2, first_name: 'Dustin', last_name: 'Ruskell', email: 'dustin@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe'},
        {id: 3, first_name: 'Roger', last_name: 'Schmidt', email: 'roger@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe'},
        {id: 4, first_name: 'Boger', last_name: 'Schmidt', email: 'boger@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe'},
        {id: 5, first_name: 'Coger', last_name: 'Schmidt', email: 'coger@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe'},
        {id: 6, first_name: 'Doger', last_name: 'Schmidt', email: 'doger@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe'},
        {id: 7, first_name: 'Foger', last_name: 'Schmidt', email: 'foger@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe'},
        {id: 8, first_name: 'Goger', last_name: 'Schmidt', email: 'goger@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe'},
        {id: 9, first_name: 'Hoger', last_name: 'Schmidt', email: 'hoger@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe'},
        {id: 10, first_name: 'Koger', last_name: 'Schmidt', email: 'koger@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe'},
        {id: 11, first_name: 'Loger', last_name: 'Schmidt', email: 'loger@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe'},
        {id: 12, first_name: 'Moger', last_name: 'Schmidt', email: 'moger@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe'},
        {id: 13, first_name: 'Noger', last_name: 'Schmidt', email: 'noger@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe'},
        {id: 14, first_name: 'Poger', last_name: 'Schmidt', email: 'poger@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe'},
        {id: 15, first_name: 'Soger', last_name: 'Schmidt', email: 'soger@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe'},
        {id: 16, first_name: 'Toger', last_name: 'Schmidt', email: 'toger@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe'},
        {id: 17, first_name: 'Voger', last_name: 'Schmidt', email: 'voger@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe'},
        {id: 18, first_name: 'Woger', last_name: 'Schmidt', email: 'woger@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe'},
        {id: 19, first_name: 'Zoger', last_name: 'Schmidt', email: 'zoger@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe'},
        {id: 20, first_name: 'Hank', last_name: 'Schmidt', email: 'hank@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe'},
        {id: 21, first_name: 'Rank', last_name: 'Schmidt', email: 'rank@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe'},
        {id: 22, first_name: 'Lank', last_name: 'Schmidt', email: 'lank@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe'}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};

// user email brykai123@gmail.com
// user password 123
