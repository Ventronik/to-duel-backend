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
// Review Nested CRUD Methods
////////////////////////////////////////////////////////////////////
function createReview(snacks_id, title, text, rating, users_id ) {
  return (
    knex('reviews')
    .insert({ title, text, rating, snacks_id, users_id})
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

function editReview(users_id, id, title, text, rating){
  return (
    knex('reviews')
    .where({ users_id })
    .where({ id })
    .update({ title, text, rating})
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
