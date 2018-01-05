const axios = require('axios');

class Request {
  constructor() {
    this.key = process.env.BARCHARTS_API_KEY;
    this.domain = 'https://marketdata.websol.barchart.com';
  }

  getQuotes(symbols) {
    return axios.get(`${this.domain}/getQuote.json`, {
      params: {
        apikey: this.key,
        symbols,
        fields: 'fiftyTwoWkHigh,fiftyTwoWkHighDate,fiftyTwoWkLow,fiftyTwoWkLowDate',
        mode: 'I',
        jerq: 'false',
      }
    })
  }
}

module.exports = Request;
