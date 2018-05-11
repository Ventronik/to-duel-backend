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

////////////////////////////////////////////////////////////////////
// Review Nested CRUD Methods
////////////////////////////////////////////////////////////////////

function createReview(req, res, next){
  // Add Conditional Gates
  if(!req.params.reviewId){
    return next({ status: 400, message: 'Please provide reviewId'})
  }

  snacksModel.createReview(req.params.id, req.body.reviewName, req.body.description)
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
  if(!req.body.reviewName){
    return next({ status: 400, message: 'Please provide reviewName'})
  }
  if(!req.body.description){
    return next({ status: 400, message: 'Please provide description'})
  }
  snacksModel.editReview(req.params.id, req.params.reviewId, req.body.reviewName, req.body.description)
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
  createReview,
  getAllReviews,
  getOneReview,
  editReview,
  removeReview
}
