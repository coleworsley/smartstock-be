const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.get('/v1/quotes', controllers.getQuotes)

module.exports = router;
