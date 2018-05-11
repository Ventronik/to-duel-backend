const knex = require('../../db/knex');

////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
////////////////////////////////////////////////////////////////////

function getAllSnacks(users_id){
  console.log('models getAllSnacks')
  return (
    knex('snacks')
  )
}



////////////////////////////////////////////////////////////////////
// DECK Nested CRUD Methods
////////////////////////////////////////////////////////////////////
function createReview(users_id, reviewName, description) {
  return (
    knex('reviews')
    .insert({ users_id, reviewName, description })
    .returning('*')
    .then(function([data]){
      return data
    })
  )
}

function getAllReviews(users_id){
  return (
    knex('reviews')
    .where({ users_id })
  )
}

function getOneReview(users_id, id){
  return (
    knex('reviews')
    .where({ users_id })
    .where({ id })
    .first()
  )
}

function editReview(users_id, id, reviewName, description){
  return (
    knex('reviews')
    .where({ users_id })
    .where({ id })
    .update({ reviewName, description })
    .returning('*')
    .then(function([data]){
      return data
    })
  )
}

function removeReview(users_id, id){
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
  getAllSnacks,
  createReview,
  getAllReviews,
  getOneReview,
  editReview,
  removeReview
}
