const knex = require('../../db/knex');
const bcrypt = require('bcrypt-as-promised')

////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
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
// Daily Nested CRUD Methods
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
    .where({ users_id })
    .where({ id })
    .update({ name, streak })
    .returning('*')
    .then(function([data]){
      return data
    })
  )
}

function removeDaily(users_id, id){
  return (
    knex('dailies')
    .where({ users_id })
    .where({ id })
    .del()
    .returning('*')
    .then(function([data]){
      delete data.id
      return data
    })
  )
}

////////////////////////////////////////////////////////////////////
// Daily Nested CRUD Methods
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


////////////////////////////////////////////////////////////////////
// Export
////////////////////////////////////////////////////////////////////

module.exports = {
  createUser,
  getAllUsers,
  getOneUser,
  getUserByEmail,
  createDaily,
  getAllDailies,
  getOneDaily,
  editDaily,
  removeDaily,
  createDailyHistory,
  getAllDailyHistory,
}
