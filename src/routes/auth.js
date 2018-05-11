const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////
// Don't know if these work properly.
router.get('/token', authController.isAuthenticated, authController.getAuthStatus)
router.post('/token', authController.login)

module.exports = router
