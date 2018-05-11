const express = require('express');
const router = express.Router();
const snacksContoller = require('../controllers/snacks')

////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
////////////////////////////////////////////////////////////////////
// getAll and getOne snack routes work properly
router.get('/', snacksContoller.getAllSnacks)
router.get('/:id', snacksContoller.getOneSnack)

////////////////////////////////////////////////////////////////////
// Nested Review CRUD Methods
////////////////////////////////////////////////////////////////////

// All review routes work properly

router.post('/:id/reviews', snacksContoller.createReview)
router.get('/:id/reviews', snacksContoller.getAllReviews)
router.get('/:id/reviews/:reviewId', snacksContoller.getOneReview)
router.put('/:id/reviews/:reviewId', snacksContoller.editReview)
router.delete('/:id/reviews/:reviewId', snacksContoller.removeReview)

////////////////////////////////////////////////////////////////////
// Export
////////////////////////////////////////////////////////////////////

module.exports = router;
