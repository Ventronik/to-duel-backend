const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')

////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
////////////////////////////////////////////////////////////////////

// router.post('/', userController.createUser)
router.get('/', userController.getAllUsers)
router.get('/:id', userController.getOneUser)

module.exports = router
