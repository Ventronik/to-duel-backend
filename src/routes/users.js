const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')

////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
////////////////////////////////////////////////////////////////////
//Users routes work

router.post('/', userController.createUser)
router.get('/', userController.getAllUsers)
router.get('/:id', userController.getOneUser)

////////////////////////////////////////////////////////////////////
// Nested Daily CRUD Methods
////////////////////////////////////////////////////////////////////

// All review routes work properly

router.post('/:id/dailies', userController.createDaily)
router.get('/:id/dailies', userController.getAllDailies)
router.get('/:id/dailies/:dailyId', userController.getOneDaily)
router.put('/:id/dailies/:dailyId', userController.editDaily)
router.delete('/:id/dailies/:dailyId', userController.removeDaily)

////////////////////////////////////////////////////////////////////
// Export
////////////////////////////////////////////////////////////////////

module.exports = router
