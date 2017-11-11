const express = require('express');
const app = express();
const router = require('./router');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const db = require('knex')(configuration);

app.use(bodyParser.json());
app.use('/api', router);
app.set('secretKey', process.env.SECRET_KEY);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
