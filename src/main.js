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
  let currency = parseInt($('input:checkbox[name=currency]:checked').val());
  console.log(currency);
  let exRate = response.conversion_rates;
  if (currency === 'AED'){
    return usd * exRate.AED;
  }
};


