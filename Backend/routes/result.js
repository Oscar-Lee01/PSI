const express = require('express')
const {
    createResult,
    getResults,
    getResult,
    deleteResult,
    updateResult
} = require('../contollers/resultController')
// const requireAuth = require('../middleware/requireAuth')

// creates an instance of the router
const router = express.Router()

// require auth for all result routes
// router.use(requireAuth)

//attaching a handler (GET ALL results)
router.get('/ViewResults', getResults)

// GET a single result
router.get('/:id', getResult)

// POST a new result
router.post('/CreateResult', createResult)

// router.post('/CreateResult/100L-first-semester', createResult)
// router.post('/CreateResult/100L-second-semester', createResult)
// router.post('/CreateResult/200L-first-semester', createResult)
// router.post('/CreateResult/200L-second-semester', createResult)
// router.post('/CreateResult/300L-first-semester', createResult)
// router.post('/CreateResult/300L-second-semester', createResult)
// router.post('/CreateResult/400L-first-semester', createResult)
// router.post('/CreateResult/400L-second-semester', createResult)

// DELETE a workout
router.delete('/:id', deleteResult)

// UPDATE a result
router.patch('/:id', updateResult)

//export router
module.exports = router