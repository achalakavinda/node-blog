const express = require('express');
const router = express.Router()

const blogController = require('../../controllers/blog')

router.get('/',blogController.getAllAsync);

module.exports = router;