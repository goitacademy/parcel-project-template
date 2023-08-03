import './js/widget';
import './js/time';
import './js/citat';
import './js/chart';

import { getCityImage, getWeather } from './js/api';
import {
  getLocalStorage,
  addLocalStorage,
  removeFromLocalStorage,
} from './js/utils';
import { addBackgroundImage, updateWidget } from './js/widget';
import { createChart } from './js/chart';

import { createCityElement } from './js/searchBar';
import { sunTime } from './js/time';

const form = document.querySelector('.form');
const cityContainer = document.querySelector('.slider');

let itemsSearch = [];

//! form aici (eventListener)
form.addEventListener('submit', async event => {
  event.preventDefault();
  const {
    elements: { search },
  } = event.currentTarget;

  const data = await getWeather(search.value);
  updateWidget(data);
  const backgroundImage = await getCityImage(search.value);
  addBackgroundImage(backgroundImage);

  const citySearch = { id: Date.now(), city: search.value };
  itemsSearch.push(citySearch);

  addLocalStorage(itemsSearch);

  createCityElement(citySearch.id, citySearch.city);
  getWeather(search.value).then(data => {
    createChart(data);
    sunTime(data.city.sunrise, data.city.sunset, data.city.timezone);
  });
  // functie care face update la ora
  // clearInterval(intervalId);
  // const cityIntervalId = setInterval(() => {
  //   updateTime(data.city.sunrise, data.city.timezone);
  // }, 1000);

  form.reset();
});

//! load cand se incarca pagina
window.addEventListener('load', () => {
  itemsSearch = getLocalStorage() === null ? [] : getLocalStorage();

  // folosesc functia din wiget.js cu ultimul element din localStorage
  // itemsSearch[itemsSearch.length - 1];

  if (itemsSearch.length !== 0) {
    getCityImage(itemsSearch[itemsSearch.length - 1].city).then(data =>
      addBackgroundImage(data)
    );

    getWeather(itemsSearch[itemsSearch.length - 1].city).then(data => {
      updateWidget(data);
      sunTime(data.city.sunrise, data.city.sunset, data.city.timezone);
    });

    // setInterval(() => getDateFromInputCity(data.timezone), 1000);

    // createCityElement(itemsSearch);
    itemsSearch.map(data => createCityElement(data.id, data.city));
    // folosesc functia din wiget.js cu ultimul element din localStorage
  } else {
    getCityImage('Cluj').then(data => addBackgroundImage(data));
    getWeather('Cluj').then(data => {
      updateWidget(data);
      createChart(data);
      sunTime(data.city.sunrise, data.city.sunset, data.city.timezone);
    });
  }
});

//! incarca orasul cand apesi pe cityDiv
cityContainer.addEventListener('click', async event => {
  console.log(event.target.tagName);

  const uniqId = event.target.parentElement.dataset.id;

  if (event.target.tagName === 'BUTTON') {
    itemsSearch = itemsSearch.filter(city => +city.id !== +uniqId);
    removeFromLocalStorage(uniqId);
    event.target.parentElement.remove();
  }
  if (event.target.tagName === 'H2') {
    const searchValue = event.target.innerText;
    const data = await getWeather(searchValue);
    updateWidget(data);
    const backgroundImage = await getCityImage(searchValue);
    addBackgroundImage(backgroundImage);
  }
});
