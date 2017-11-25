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


close
:
174.67
dayCode
:
"0"
exchange
:
"NASDAQ"
fiftyTwoWkHigh
:
176.24
fiftyTwoWkHighDate
:
"2017-11-08"
fiftyTwoWkLow
:
104.08
fiftyTwoWkLowDate
:
"2016-11-14"
flag
:
"s"
high
:
175.38
lastPrice
:
174.67
low
:
174.27
mode
:
"d"
name
:
"Apple Inc"
netChange
:
-1.21
open
:
175.11
percentChange
:
-0.69
serverTimestamp
:
"2017-11-10T00:00:00-06:00"
symbol
:
"AAPL"
tradeTimestamp
:
"2017-11-10T00:00:00-06:00"
unitCode
:
"2"
volume
:
25145500
