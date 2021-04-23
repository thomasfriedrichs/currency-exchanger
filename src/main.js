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
    console.log(usd * exRate.AED);
    return usd * exRate.AED;
  } else if (currency === 'ANG') {
    console.log(usd * exRate.ANG);
    return usd * exRate.ANG;
  } else if (currency === 'EUR') {
    console.log(usd * exRate.EUR);
    return usd * exRate.EUR;
  } else if (currency === 'BHD') {
    console.log(usd * exRate.BHD);
    return usd * exRate.BHD; 
  } else {
    console.log('error');
  }
};


