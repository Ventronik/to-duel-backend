const snacksModel = require('../models/snacks')

////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
////////////////////////////////////////////////////////////////////

function getAllSnacks(req, res, next) {
  console.log('Ctrl getAllSnacks')
  snacksModel.getAllSnacks()
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

function getOneSnack(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide id'})
  }

  snacksModel.getOneSnack(req.params.id)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

////////////////////////////////////////////////////////////////////
// Review Nested CRUD Methods
////////////////////////////////////////////////////////////////////

function createReview(req, res, next){
  // Add Conditional Gates
  console.log(req.body)
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide snacksId'})
  }
  if(!req.body.title){
    return next({ status: 400, message: 'Please provide title'})
  }
  if(!req.body.text){
    return next({ status: 400, message: 'Please provide text'})
  }
  if(!req.body.rating){
    return next({ status: 400, message: 'Please provide rating'})
  }
  if(!req.body.usersId){
    return next({ status: 400, message: 'Please provide usersId'})
  }

  snacksModel.createReview(req.params.id, req.body.title, req.body.text, req.body.rating, req.body.usersId)
  .then(function(data){
    return res.status(201).send({ data })
  })
  .catch(next)
}

function getAllReviews(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide id'})
  }
  snacksModel.getAllReviews(req.params.id)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

function getOneReview(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide id'})
  }
  if(!req.params.reviewId){
    return next({ status: 400, message: 'Please provide reviewId'})
  }

  snacksModel.getOneReview(req.params.id, req.params.reviewId)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

function editReview(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide id'})
  }
  if(!req.params.reviewId){
    return next({ status: 400, message: 'Please provide reviewId'})
  }
  if(!req.body.title){
    return next({ status: 400, message: 'Please provide title'})
  }
  if(!req.body.text){
    return next({ status: 400, message: 'Please provide text'})
  }
  if(!req.body.rating){
    return next({ status: 400, message: 'Please provide rating'})
  }
  snacksModel.editReview(req.params.id, req.params.reviewId, req.body.title, req.body.text, req.body.rating)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

function removeReview(req, res, next) {
  if(!req.params.id){
    return next({ status: 400, message: 'Please provide id'})
  }
  if(!req.params.reviewId){
    return next({ status: 400, message: 'Please provide reviewId'})
  }
  snacksModel.removeReview(req.params.id, req.params.reviewId)
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

////////////////////////////////////////////////////////////////////
// Export
////////////////////////////////////////////////////////////////////

module.exports = {
  getAllSnacks,
  getOneSnack,
  createReview,
  getAllReviews,
  getOneReview,
  editReview,
  removeReview
}
