const usersModel = require('../models/users')

////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
////////////////////////////////////////////////////////////////////

function createUser(req, res, next){
  if(!req.body.first_name){
    return next({ status: 400, message: 'Please provide first_name'})
  }
  if(!req.body.last_name){
    return next({ status: 400, message: 'Please provide last_name'})
  }
  if(!req.body.password){
    return next({ status: 400, message: 'Please provide password'})
  }
  if(!req.body.email){
    return next({ status: 400, message: 'Please provide email'})
  }
  usersModel.createUser(req.body.first_name, req.body.last_name, req.body.email, req.body.password)
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
// Daily Nested CRUD Methods
////////////////////////////////////////////////////////////////////

function createDaily(req, res, next){
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide snacksId'})
  }
  if(!req.body.name){
    return next({ status: 400, message: 'Please provide name'})
  }
  if(!req.body.streak){
    return next({ status: 400, message: 'Please provide streak'})
  }

  usersModel.createDaily(req.params.id, req.body.name, req.body.streak)
  .then(function(data){
    return res.status(201).send({ data })
  })
  .catch(next)
}

function getAllDailies(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide id'})
  }
  usersModel.getAllDailies(req.params.id)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

function getOneDaily(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide id'})
  }
  if(!req.params.dailyId){
    return next({ status: 400, message: 'Please provide dailyId'})
  }

  usersModel.getOneDaily(req.params.id, req.params.dailyId)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

function editDaily(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide id'})
  }
  if(!req.params.dailyId){
    return next({ status: 400, message: 'Please provide dailyId'})
  }
  if(!req.body.name){
    return next({ status: 400, message: 'Please provide name'})
  }
  if(!req.body.streak){
    return next({ status: 400, message: 'Please provide streak'})
  }
  usersModel.editDaily(
    req.params.id,
    req.params.dailyId,
    req.body.name,
    req.body.streak
  )
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

function removeDaily(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide id'})
  }
  if(!req.params.dailyId){
    return next({ status: 400, message: 'Please provide dailyId'})
  }
  usersModel.removeDaily(req.params.id, req.params.dailyId)
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
  getOneUser,
  createDaily,
  getAllDailies,
  getOneDaily,
  editDaily,
  removeDaily
}
