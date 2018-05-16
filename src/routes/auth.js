const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////
<<<<<<< HEAD

router.get('/token', authController.isAuthenticated, authController.getAuthStatus)
router.post('/token', authController.login)



module.exports = router
=======
// Don't know if these work properly.
router.get('/token', authController.isAuthenticated, authController.getAuthStatus)
router.post('/token', authController.login)

module.exports = router
>>>>>>> ef89495e5cb76d0a8e4a5e7c94f27fac0179c26f
