import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from '../src/js/exchange-service.js';

$('#submit').on('click', (event) => {
  event.preventDefault();
  ExchangeService.getRate()
    .then(function(response) {
      getExchange(response);
    });
});

const getExchange = (response) => {
  let usd = $('#usd').val();
  let currency = $('#currency').val();
  let exRate = response.conversion_rates;
  if (currency === 'AED'){
    return usd * exRate.AED;
  } else if (currency === 'ANG') {
    return usd * exRate.ANG;
  } else if (currency === 'EUR') {
    return usd * exRate.EUR;
  } else if (currency === 'BHD') {
    return usd * exRate.BHD; 
  } else {
    $('.showerrors').text(`<p>There was an error: ${response.statusText}`);
  }
};
