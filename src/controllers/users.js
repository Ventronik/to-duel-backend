const usersModel = require('../models/users')

////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
////////////////////////////////////////////////////////////////////

function createUser(req, res, next){
  if(!req.body.firstName){
    return next({ status: 400, message: 'Please provide firstName'})
  }
  if(!req.body.lastName){
    return next({ status: 400, message: 'Please provide lastName'})
  }
  if(!req.body.password){
    return next({ status: 400, message: 'Please provide Password'})
  }
  if(!req.body.email){
    return next({ status: 400, message: 'Please provide Email'})
  }
  usersModel.createUser(req.body.firstName, req.body.lastName, req.body.email, req.body.password)
  .then(function(data){
    return res.status(201).send({ data })
  })
  .catch(next)
}

function getAllUsers(req, res, next) {
  console.log('ctrl getAllUsers')
  usersModel.getAllUsers()
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

function getOneUser(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide id'})
  }

  usersModel.getOneUser(req.params.id)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}



////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////

module.exports = {
  createUser,
  getAllUsers,
  getOneUser
}
