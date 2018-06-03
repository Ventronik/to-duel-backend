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
