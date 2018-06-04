const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')

////////////////////////////////////////////////////////////////////
// USERS
////////////////////////////////////////////////////////////////////
//Users routes work

router.post('/', userController.createUser)
router.get('/', userController.getAllUsers)
router.get('/:id', userController.getOneUser)

////////////////////////////////////////////////////////////////////
// DAILIES
////////////////////////////////////////////////////////////////////

// All dailies routes work properly

router.post('/:id/dailies', userController.createDaily)
router.get('/:id/dailies', userController.getAllDailies)
router.get('/:id/dailies/:dailyId', userController.getOneDaily)
router.put('/:id/dailies/:dailyId', userController.editDaily)
router.delete('/:id/dailies/:dailyId', userController.removeDaily)

////////////////////////////////////////////////////////////////////
// DAILY HISTORY
////////////////////////////////////////////////////////////////////

// Post and get work

router.post('/:id/dailies/:dailyId/dailyHistory', userController.createDailyHistory)
router.get('/:id/dailies/:dailyId/dailyHistory', userController.getAllDailyHistory)
// router.get('/:id/dailies/:dailyId/dailyHistory/:dailyHistoryId', userController.getOneDailyHistory)
// router.put('/:id/dailies/:dailyId/dailyHistory/:dailyHistoryId', userController.editDailyHistory)
// router.delete('/:id/dailies/:dailyId/dailyHistory/:dailyHistoryId', userController.removeDailyHistory)

////////////////////////////////////////////////////////////////////
// DUELS
////////////////////////////////////////////////////////////////////

router.post('/:id/duels', userController.createDuel)
router.get('/:id/duels', userController.getAllUserDuels)
// router.get('/:id/duels/:duelId', userController.getOnDuel)
// router.put('/:id/duels/:duelId', userController.editDuel)
router.delete('/:id/duels/:duelId', userController.removeDuel)



////////////////////////////////////////////////////////////////////
// Export
////////////////////////////////////////////////////////////////////

module.exports = router
