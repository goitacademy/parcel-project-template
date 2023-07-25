('use strict');
import axios from 'axios';

function search(city) {
  const apiKey = '4f963da24624f4751fcc4375970affa0';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector('#city-input');
  search(cityInputElement.value);
}

let form = document.querySelector('#search-form');
form.addEventListener('submit', handleSubmit);
let searchBtn = document.querySelector('.location-btn');
searchBtn.addEventListener('click', handleSubmit);
