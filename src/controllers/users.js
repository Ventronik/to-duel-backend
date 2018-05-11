const userModel = require('../models/users')

////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
////////////////////////////////////////////////////////////////////

function createUser(req, res, next){
  if(!req.body.name){
    return next({ status: 400, message: 'Invalid Name'})
  }
  if(!req.body.password){
    return next({ status: 400, message: 'Invalid Password'})
  }
  userModel.createUser(req.body.name, req.body.email, req.body.password)
  .then(function(data){
    return res.status(201).send({ data })
  })
  .catch(next)
}

function getAllUsers(req, res, next) {
  console.log('ctrl getAllUsers')
  userModel.getAllUsers()
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

function getOneUser(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide id'})
  }

  userModel.getOneUser(req.params.id)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}



////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////

module.exports = {
  // createUser,
  getAllUsers,
  getOneUser
}
