const express = require('express')
const controller = require('../controllers/analytics')
const router = express.Router()

router.get('/analytics', controller.analytics)
router.post('/overview', controller.overview)

module.exports = router