import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from '../src/js/exchange-service.js';

//UI logic
$('#submit').on('click', (event) => {
  event.preventDefault();
  ExchangeService.getRate()
    .then(function(response) {
      getExchange(response);
    });
});

//Business logic
const getExchange = (response) => {
  let usd = $('#usd').val();
  let currency = $('#currency').val();
  let exRate = response.conversion_rates;
  if (currency === 'AED'){
    $('.result').append(`<li>${usd * exRate.AED}</li>`);
  } else if (currency === 'ANG') {
    $('.result').append(`<li>${usd * exRate.ANG}</li>`);
  } else if (currency === 'EUR') {
    $('.result').append(`<li>${usd * exRate.EUR}</li>`);
  } else if (currency === 'BHD') {
    $('.result').append(`<li>${usd * exRate.BHD}</li>`); 
  } else if (currency === 'AUD') {
    $('.result').append(`<li>${usd * exRate.AUD}</li>`);
  } else if (currency === 'BUCK') {
    $('.notcurrency').show();
  }  else {
    $('.showerrors').text(`<p>There was an error: ${response.result}`);
  }
};
