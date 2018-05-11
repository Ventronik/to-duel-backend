const knex = require('../../db/knex');
// const bcrypt = require('bcrypt-as-promised')

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
//
// function createUser(name, email, password){
//   return getUserByEmail(email)
//   .then(function(data){
//     if(data) throw { status: 400, message:'Email already being used'}
//     return bcrypt.hash(password, 10)
//   })
//   .then(function(hashedPassword){
//     return (
//       knex('users')
//       .insert({ name, email, password: hashedPassword })
//       .returning('*')
//       .then(function([data]){
//         return data
//       })
//     )
//   })
// }


////////////////////////////////////////////////////////////////////
// Export
////////////////////////////////////////////////////////////////////

module.exports = {
  // createUser,
  getAllUsers,
  getOneUser,
  getUserByEmail
}
