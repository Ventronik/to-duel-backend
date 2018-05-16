<<<<<<< HEAD
const db = require('../../db')
=======
>>>>>>> ef89495e5cb76d0a8e4a5e7c94f27fac0179c26f
const bcrypt = require('bcrypt-as-promised')
const userModel = require('./users')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
// Login
//
// 1. Check to see if user already exists
//   a. if not, return a 400 with appropriate error message
// 2. compare password in the database with the password provided by user
// 3. If the passwords do not match, respond with 401 Unauthorized
// 4. strip hashed password away from object
// 5. "return/continue" promise
//////////////////////////////////////////////////////////////////////////////

<<<<<<< HEAD
function login(username, password){
  let user

  // 1. Check to see if user already exists
  return userModel.getOneByUserName(username)
  .then(function(data){
    // 1a. if not, return a 400 with appropriate error message
    if(!data) throw { status: 400, message: "Bad Request"}

    // save user for later use
    user = data

    // 2. compare password in the database with the password provided by user
    return bcrypt.compare(password, data.password)
  })
  .catch(bcrypt.MISMATCH_ERROR, function(){
    // 3. If the passwords do not match, respond with 401 Unauthorized
=======
function login(email, password){
  let user
  console.log('models login')
  console.log(email)
  // 1. Check to see if user already exists
  return userModel.getUserByEmail(email)
  .then(function(data){
    // 1a. if not, return a 400 with appropriate error message
    if(!data) throw { status: 400, message: "Bad Request"}
    // save user for later use
    user = data
    // 2. compare password in the database with the password provided by user
    return bcrypt.compare(password, data.password)
    // password is not hashed. bcrypt hashes it then compares it
    // data.password is hashed
  })
  .catch(bcrypt.MISMATCH_ERROR, function(){
    // 3. If the passwords do not match, respond with 401 Unauthorized
    console.log('mismatch')
>>>>>>> ef89495e5cb76d0a8e4a5e7c94f27fac0179c26f
    throw { status: 401, message: "Unauthorized"}
  })
  .then(function(){
    // 4. strip hashed password away from object
    delete user.password
    // 5. "return/continue" promise
    return user
  })
}

module.exports = {
  login
}
