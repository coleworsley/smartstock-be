const axios = require('axios');

class Requests {
  constructor() {
    this.key = process.env.BARCHARTS_API_KEY;
    this.domain = 'https://marketdata.websol.barchart.com';
  }

  getQuotes(quotes) {
    return axios.get(`${this.domain}/getQuote.json`, {
      params: {
        apikey: this.key,
        symbols: quotes.join(','),
        fields: 'fiftyTwoWkHigh,fiftyTwoWkHighDate,fiftyTwoWkLow,fiftyTwoWkLowDate',
        mode: 'I',
        jerq: 'false',
      }
    })
  }
}

module.exports = StockData;
