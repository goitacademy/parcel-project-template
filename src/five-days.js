'use strict';
import {
  formatDate,
  getDayOfWeek,
  createCardsMarkup,
  getDailyData,
  moreInfoData,
  createMoreInfoMarkup,
  iconMapping,
  snowSvg,
  sunSvg,
  cloudsAndSunSvg,
  cloudySvg,
} from './utilsForFiveDays.js';
let selectedDay;
const moreInfoCards = document.querySelector('.more-info-container');
const cardsList = document.querySelector('.days-cards');
const sectionTitle = document.querySelector('.five-days-section__title');
const moreInfoContainer = document.querySelector('.more-info-container');

const APIKEY = '072ec51636e5141423703ba32d12100f';
const urlForFiveDaysWeather = (lat, lon) => {
  return `https://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric&lang=en`;
};

//de modificat city cu orasul din input
const city = 'Bucuresti';
sectionTitle.textContent = city;
//url pentru a afla coordonatele orasului din input(doar trebuie modificat pe linia 22)
const urlForCoordinates = () => {
  return `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${APIKEY}`;
};
//aflare coordonate
const cityCoordinates = async () => {
  const response = await fetch(urlForCoordinates());
  const data = await response.json();
  const coordinates = { lat: data[0].lat, lon: data[0].lon };
  return coordinates;
};
//popularea cardurilor din sectiunea five-days
const getWeatherData = async () => {
  const { lat, lon } = await cityCoordinates();
  const response = await fetch(urlForFiveDaysWeather(lat, lon));
  const weather = await response.json();
  const dailyData = [];
  weather.list.forEach(item => {
    getDailyData(item, dailyData);
  });
  cardsList.innerHTML = '';
  dailyData.forEach((item, index) => {
    //aceasta conditie este pentru a elimina ziua curenta, deja este vizibila pe homepage
    if (index === 0) {
      return;
    }
    createCardsMarkup(item, cardsList, iconMapping);
  });
};

getWeatherData();
//functie pentru popularea cardurilor more-info
const getMoreInfoData = async () => {
  const { lat, lon } = await cityCoordinates();
  const response = await fetch(urlForFiveDaysWeather(lat, lon));
  const weather = await response.json();

  const moreInfo = [];
  weather.list.forEach(item => {
    moreInfoData(item, moreInfo);
  });
  const dataForDay = moreInfo[selectedDay];
  createMoreInfoMarkup(dataForDay, moreInfoContainer, iconMapping);
};
//event listener pentru a afla pe care buton "more-info" s-a dat click pentru a arata informatii pentru ziua relevanta
cardsList.addEventListener('click', event => {
  if (event.target.classList.contains('card__button')) {
    const clickedDay = event.target.value;

    if (
      moreInfoCards.classList.contains('hidden') ||
      selectedDay !== clickedDay
    ) {
      selectedDay = clickedDay;
      moreInfoCards.classList.remove('hidden');
      getMoreInfoData().catch(err => {
        console.log(err);
      });
    } else {
      moreInfoCards.classList.add('hidden');
    }
  }
});
