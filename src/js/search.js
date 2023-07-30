('use strict');
import axios from 'axios';

const weatherApiKey = 'ce00f040ffac93595679fb6c48728697';
const backgroundApiKey = '38102784-37e9ad2cc652dbc0da2d9323c';
const form = document.querySelector('.form');
/* const weatherIcon = document.querySelector('.weather-icon'); */
async function getWeather(name) {
  const geoCodingResponse = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=1&appid=${weatherApiKey}`
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

let itemsSearch = [];
form.addEventListener('submit', async event => {
  event.preventDefault();
  const {
    elements: { search },
  } = event.currentTarget;
  const data = await getWeather(search.value);
  console.log(search.value);
  console.log(data);
  itemsSearch.push(search.value);
  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
  document.querySelector('.min').innerHTML =
    'min ' + Math.round(data.main.temp_min) + '°C';
  document.querySelector('.max').innerHTML =
    'max ' + Math.round(data.main.temp_max) + '°C';
  const largeImage = await getCityImage(search.value);
  document.querySelector('body').style.backgroundImage = `url(${largeImage})`;
  form.reset();
  console.log(itemsSearch);
  addLocalStorage(itemsSearch);
});

//Slider

const cityContainer = document.querySelector('.slider');
const createCityElement = name => {
  let cityDiv = document.createElement('div');
  cityDiv.className = 'slide';
  const cityName = document.createElement('h2');
  cityName.className = 'city-name';
  const cityCloseBtn = document.createElement('button');
  cityCloseBtn.className = 'city-close-btn';
  cityCloseBtn.innerText = 'x';
  cityName.innerText = name;
  cityDiv.append(cityName, cityCloseBtn);
  cityContainer.appendChild(cityDiv);
};

function addLocalStorage(searchWord) {
  localStorage.setItem('wordLocalStorage', JSON.stringify(searchWord));
}

function getLocalStorage() {
  const itemLocalStorage = JSON.parse(localStorage.getItem('wordLocalStorage'));
  console.log(itemLocalStorage);
  return itemLocalStorage;
}

window.addEventListener('load', () => {
  itemsSearch = getLocalStorage();
  itemsSearch.map(element => createCityElement(element));
  console.log(itemsSearch);
});

/*  removeItem = () => {
  window.parentNode.removeItem('wordLocalStorage');
};

cityCloseBtn.addEventListener('click', removeItem);  */

/* cityDiv.addEventListener('click', async e => {
  e.preventDefault();
  console.log(itemsSearch);
  addLocalStorage(itemsSearch);
});
 */
/* slide.addEventListener('click', e => {
  e.preventDefault();
  console.log('ce faci');
});
 */
