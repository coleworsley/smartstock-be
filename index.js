const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const https = require('https');
const axios = require('axios');
const router = require('./router');
const app = express();
const PORT = process.env.PORT || 5000;
const db = require('./knex');
require('dotenv').config();

app.use(bodyParser.json());
app.use('/api', router);
app.set('secretKey', process.env.SECRET_KEY);

axios.get('https://marketdata.websol.barchart.com/getQuote.json', {
  params: {
    apikey: process.env.BARCHARTS_API_KEY,
    symbols: 'AAPL,GOOG',
    fields: 'fiftyTwoWkHigh,fiftyTwoWkHighDate,fiftyTwoWkLow,fiftyTwoWkLowDate',
    mode: 'I',
    jerq: 'false',
  }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
