const Request = require('../models/Request');
const axios = require('axios');
const key = process.env.BARCHARTS_API_KEY;
const domain = 'https://marketdata.websol.barchart.com';


exports.getQuotes = (req, res) => {
  const symbols = req.query.symbols;
  const apiRequest = new Request();

  apiRequest.getQuotes(symbols)
    .then(({data}) => {
      return res.status(200).json(data.results)
    })
    .catch(error => res.status(404).send(error))
}
