import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from '../src/js/exchange-service.js';

$('.submit').on('click', (event) => {
  event.preventDefault();
  let usd = $('#usd').val();
  let currency = $('#currency').val();
  ExchangeService.getRate(usd, currency)
    .then(function(response) {
      getExchange(response);
    });
});

const getExchange = (response) => {
  let usd = $('#usd').val();
  let currency = $('#currency').val();
  console.log(usd,currency);
  let exRate = response.conversion_rates;
  if (currency === 'AED'){
    console.log(usd * exRate.AED);
    return usd * exRate.AED;
  }
};


