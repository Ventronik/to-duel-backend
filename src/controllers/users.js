const usersModel = require('../models/users')

////////////////////////////////////////////////////////////////////
// USERS
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
// DAILIES
////////////////////////////////////////////////////////////////////

function createDaily(req, res, next){
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide userId'})
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
    return next({ status: 400, message: 'Please provide userId'})
  }
  usersModel.getAllDailies(req.params.id)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

function getOneDaily(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide userId'})
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
    return next({ status: 400, message: 'Please provide userId'})
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
// DAILY HISTORY
////////////////////////////////////////////////////////////////////

function createDailyHistory(req, res, next){
  // if(!req.params.id){
  //   return next({ status: 400, message: 'Please provide userId'})
  // }
  if(!req.params.dailyId){
    return next({ status: 400, message: 'Please provide dailyId'})
  }
  if(!req.body.completed){
    return next({ status: 400, message: 'Please provide completed status'})
  }

  usersModel.createDailyHistory(
    // req.params.id,
    req.params.dailyId, req.body.completed)
  .then(function(data){
    return res.status(201).send({ data })
  })
  .catch(next)
}

function getAllDailyHistory(req, res, next) {
  console.log('ctrl getAllDailyHistory')
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide userId'})
  }
  if(!req.params.dailyId){
    return next({ status: 400, message: 'Please provide dailyId'})
  }
  usersModel.getAllDailyHistory(
    req.params.id,
    req.params.dailyId)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

////////////////////////////////////////////////////////////////////
// DUELS
////////////////////////////////////////////////////////////////////

function createDuel(req, res, next){
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide userId'})
  }
  if(!req.body.u2_id){
    return next({ status: 400, message: 'Please provide u2_id'})
  }
  if(!req.body.startTime){
    return next({ status: 400, message: 'Please provide startTime'})
  }
  if(!req.body.endTime){
    return next({ status: 400, message: 'Please provide endTime'})
  }
  if(!req.body.u2_accepted){
    return next({ status: 400, message: 'Please provide u2_accepted'})
  }
  if(!req.body.u1_confirmed){
    return next({ status: 400, message: 'Please provide u1_confirmed'})
  }
  if(!req.body.rejected){
    return next({ status: 400, message: 'Please provide rejected'})
  }
  if(!req.body.winnerId){
    return next({ status: 400, message: 'Please provide winnerId'})
  }

  usersModel.createDuel(
    req.params.id,
    req.body.u2_id,
    req.body.startTime,
    req.body.endTime,
    req.params.u2_accepted,
    req.body.rejected,
    req.body.winnerId
  )
  .then(function(data){
    return res.status(201).send({ data })
  })
  .catch(next)
}

function getAllUserDuels(req, res, next) {
  console.log('ctrl getAllUserDuels')
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide userId'})
  }
  usersModel.getAllUserDuels(req.params.id)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

function removeDuel(req, res, next) {
  if(!req.params.duelId){
    return next({ status: 400, message: 'Please provide duelId'})
  }
  usersModel.removeDuel(req.params.duelId)
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
  removeDaily,
  createDailyHistory,
  getAllDailyHistory,
  createDuel,
  getAllUserDuels,
  removeDuel,
}
