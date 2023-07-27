('use strict');
import axios from 'axios';

const weatherApiKey = 'ce00f040ffac93595679fb6c48728697';
const backgroundApiKey = '38102784-37e9ad2cc652dbc0da2d9323c';
const form = document.querySelector('.form');
const weatherIcon = document.querySelector('.weather-icon');
async function getWeather(name) {
  const geoCodingResponse = await axios.get(
    `https://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=1&appid=${weatherApiKey}`
  );
  const lat = geoCodingResponse.data[0].lat;
  const lon = geoCodingResponse.data[0].lon;
  const weatherResponse = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`
  );
  return weatherResponse.data;
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
async function getCityImage(name) {
  const imageResponse = await axios.get(
    `https://pixabay.com/api/?key=${backgroundApiKey}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1`
  );
  return imageResponse.data.hits[getRandomInt(40)].largeImageURL;
}
form.addEventListener('submit', async event => {
  event.preventDefault();
  const {
    elements: { search },
  } = event.currentTarget;
  const data = await getWeather(search.value);
  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
  document.querySelector('.min').innerHTML =
    'min ' + Math.round(data.main.temp_min) + '°C';
  document.querySelector('.max').innerHTML =
    'max ' + Math.round(data.main.temp_max) + '°C';
  const largeImage = await getCityImage(search.value);
  document.querySelector('body').style.backgroundImage = `url(${largeImage})`;
  form.reset();
});
