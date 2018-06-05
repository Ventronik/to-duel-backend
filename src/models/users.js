const knex = require('../../db/knex');
const bcrypt = require('bcrypt-as-promised')

////////////////////////////////////////////////////////////////////
// USERS
////////////////////////////////////////////////////////////////////


function getAllUsers(users_id){
  return (
    knex('users')
  )
}

function getUserByEmail(email){
  return (
    knex('users')
    .where({ email })
    .first()
  )
}

function getOneUser(id){
  return (
    knex('users')
    .where({ id })
    .first()
  )
}

function createUser(first_name, last_name, email, password){
  return getUserByEmail(email)
  .then(function(data){
    if(data) throw { status: 400, message:'Email already being used'}
    const hp = bcrypt.hash(password, 10)
    return hp
  })
  .then(function(hashedPassword){
    return (
      knex('users')
      .insert({ first_name, last_name, email, hashed_password: hashedPassword })
      .returning('*')
      .then(function([data]){
        return data
      })
    )
  })
}

////////////////////////////////////////////////////////////////////
// DAILIES
////////////////////////////////////////////////////////////////////

function createDaily(users_id, name, streak ) {
  return (
    knex('dailies')
    .insert({ name, streak, users_id})
    .returning('*')
    .then(function([data]){
      return data
    })
  )
}

function getAllDailies(users_id){
  return (
    knex('dailies')
    .where({ users_id })
    .join('users', 'users.id', 'dailies.users_id')
    .select(
      'dailies.id as id',
      'dailies.name as name',
      'dailies.streak as streak',
      'dailies.users_id as users_id',
      'dailies.archived as archived',
      'dailies.created_at as created_at',
      'dailies.updated_at as updated_at',
      'users.first_name'
    )
  )
}

function getOneDaily(users_id, id){
  return (
    knex('dailies')
    .where({ users_id })
    .where({ id })
    .first()
  )
}

function editDaily(users_id, id, name, streak){
  return (
    knex('dailies')
    .where({ id })
    .update({ name, streak })
    .returning('*')
    .then(function([data]){
      return data
    })
  )
}

function patchDaily(id, body){
  return (
    knex('dailies')
    .where({ id })
    .update(body)
    .returning('*')
    .then(function([data]){
      return data
    })
  )
}

////////////////////////////////////////////////////////////////////
// DAILY HISTORY
////////////////////////////////////////////////////////////////////

function createDailyHistory(
  // users_id,
  dailies_id,
  completed,
) {
  return (
    knex('daily_history')
    .insert({ completed, dailies_id})
    .returning('*')
    .then(function([data]){
      return data
    })
  )
}

function getAllDailyHistory(users_id, dailies_id){
  return (
    knex('daily_history')
    .where({ dailies_id })
    .join('dailies', 'dailies.id', 'daily_history.dailies_id')
    // .where({ users_id })
    .join('users', 'users.id', 'dailies.users_id')
    .select(
      'daily_history.id as id',
      'daily_history.completed as completed',
      'daily_history.dailies_id as dailies_id',
      'daily_history.created_at as created_at',
      'daily_history.updated_at as updated_at',
      'dailies.users_id as users_id',
      'dailies.name as name',
      'users.first_name'
    )
  )
}

function getOneDailyHistory(users_id, dailies_id, id){
  return (
    knex('daily_history')
    .where({ id })
    .first()
  )
}

// function removeDailyHistory(users_id, dailies_id, id){
//   return (
//     knex('daily_history')
//     .where({ id })
//     .del()
//     .returning('*')
//     .then(function([data]){
//       delete data.id
//       return data
//     })
//   )
// }

////////////////////////////////////////////////////////////////////
// DUELS
////////////////////////////////////////////////////////////////////

function createDuel(u1_id, u2_id, startTime, endTime, u2_accepted, u1_confirmed, rejected, winnerId ) {
  return (
    knex('duels')
    .insert({ u1_id, u2_id, startTime, endTime, u2_accepted, u1_confirmed, rejected, winnerId })
    .returning('*')
    .then(function([data]){
      return data
    })
  )
}

function getAllUserDuels(users_id){
  return (
    knex('duels')
    .where(function () {
      this
        .where('u1_id', users_id)
        .orWhere('u2_id', users_id)
    })
    .join('users', 'users.id', 'duels.u2_id')
    .select(
      'duels.id as id',
      'duels.u1_id as u1_id',
      'duels.u2_id as u2_id',
      'duels.startTime as startTime',
      'duels.endTime as endTime',
      'duels.u2_accepted as u2_accepted',
      'duels.u1_confirmed as u1_confirmed',
      'duels.rejected as rejected',
      'duels.winnerId as winnerId',
      'duels.created_at as created_at',
      'duels.updated_at as updated_at',
      'users.first_name as opponent_name'
    )
  )
}

// function removeDuel(id){
//   return (
//     knex('duels')
//     .where({ id })
//     .del()
//     .returning('*')
//     .then(function([data]){
//       delete data.id
//       return data
//     })
//   )
// }

////////////////////////////////////////////////////////////////////
// DUEL_DAILIES
////////////////////////////////////////////////////////////////////

function getAllDuelDailies(duel_id){
  return (
    knex('duel_dailies')
    .where({ duel_id })
    .join('dailies', 'dailies.id', 'duel_dailies.dailies_id')
    .select(
      'duel_dailies.id as id',
      'duel_dailies.dailies_id as dailies_id',
      'duel_dailies.duel_id as duel_id',
      'dailies.users_id as users_id'
    )
  )
}

////////////////////////////////////////////////////////////////////
// Export
////////////////////////////////////////////////////////////////////

module.exports = {
  // Users
  createUser,
  getAllUsers,
  getOneUser,
  // Dailies
  createDaily,
  getAllDailies,
  getOneDaily,
  editDaily,
  patchDaily,
  // Daily History
  createDailyHistory,
  getAllDailyHistory,
  getOneDailyHistory,
  // Duels
  createDuel,
  getAllUserDuels,
  // Duel dailies
  getAllDuelDailies
}
