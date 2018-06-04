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
// Nested Dailies CRUD Methods
////////////////////////////////////////////////////////////////////

// All dailies routes work properly

router.post('/:id/dailies', userController.createDaily)
router.get('/:id/dailies', userController.getAllDailies)
router.get('/:id/dailies/:dailyId', userController.getOneDaily)
router.put('/:id/dailies/:dailyId', userController.editDaily)
router.delete('/:id/dailies/:dailyId', userController.removeDaily)

////////////////////////////////////////////////////////////////////
// Nested Daily History CRUD Methods
////////////////////////////////////////////////////////////////////

// Post and get work

router.post('/:id/dailies/:dailyId/dailyHistory', userController.createDailyHistory)
router.get('/:id/dailies/:dailyId/dailyHistory', userController.getAllDailyHistory)
// router.get('/:id/dailies/:dailyId/dailyHistory/:dailyHistoryId', userController.getOneDailyHistory)
// router.put('/:id/dailies/:dailyId/dailyHistory/:dailyHistoryId', userController.editDailyHistory)
// router.delete('/:id/dailies/:dailyId/dailyHistory/:dailyHistoryId', userController.removeDailyHistory)


////////////////////////////////////////////////////////////////////
// Export
////////////////////////////////////////////////////////////////////

module.exports = router
