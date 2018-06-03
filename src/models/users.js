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

function createDaily(users_id, name,
  // text,
  // rating,
  users_id ) {
  return (
    knex('reviews')
    .insert({ name,
      // text,
      // rating,
      users_id, users_id})
    .returning('*')
    .then(function([data]){
      return data
    })
  )
}

function getAllDailies(users_id){
  return (
    knex('reviews')
    .where({ users_id })

    .join('users', 'users.id', 'reviews.users_id')
    .select(
      'reviews.id as id',
      'reviews.name as name',
      // 'reviews.text as text',
      // 'reviews.rating as rating',
      'reviews.users_id as users_id',
      'reviews.users_id as users_id',
      'users.first_name'
    )
  )
}

function getOneDaily(users_id, id){
  return (
    knex('reviews')
    .where({ users_id })
    .where({ id })
    .first()
  )
}

function editDaily(users_id, id, name, text, rating){
  return (
    knex('reviews')
    .where({ users_id })
    .where({ id })
    .update({ name, 
      text, rating
    })
    .returning('*')
    .then(function([data]){
      return data
    })
  )
}

function removeDaily(users_id, id){
  return (
    knex('reviews')
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
// Export
////////////////////////////////////////////////////////////////////

module.exports = {
  createUser,
  getAllUsers,
  getOneUser,
  getUserByEmail
}
