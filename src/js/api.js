// Import the axios library for making HTTP requests
import axios from 'axios';

// Import the cityName variable (or function) from the widget module
import { cityName } from './widget';

// Define API keys for OpenWeatherMap and Pixabay APIs
const weatherApiKey = 'ce00f040ffac93595679fb6c48728697';
const backgroundApiKey = '38102784-37e9ad2cc652dbc0da2d9323c';

// Define a function to generate a random integer within a given range
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Define an asynchronous function to fetch weather forecast data
async function getWeather(name) {
  // Make a GET request to the OpenWeatherMap GeoCoding API to get latitude, longitude, and country data for the provided city name
  const geoCodingResponse = await axios.get(
    `https://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=1&appid=${weatherApiKey}`
  );

  // Extract latitude, longitude, and country from the response data
  const lat = geoCodingResponse.data[0].lat;
  const lon = geoCodingResponse.data[0].lon;
  const country = geoCodingResponse.data[0].country;

  // Make a GET request to the OpenWeatherMap API to fetch weather forecast data based on latitude, longitude, and API key
  const weatherResponse = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`
  );

  // Return the fetched weather forecast data
  return weatherResponse.data;
}

// Define an asynchronous function to fetch an image of a city
async function getCityImage(name) {
  // Make a GET request to the Pixabay API to fetch images of the provided city name
  const imageResponse = await axios.get(
    `https://pixabay.com/api/?key=${backgroundApiKey}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1`
  );

  // Return a randomly selected large image URL from the response data
  return imageResponse.data.hits[getRandomInt(imageResponse.data.hits.length)]
    .largeImageURL;
}

// Variables for weather processing
let req = '';
let fiveDayData = {};
let moreInfoData = {};

// Variables for api
const OWM = 'https://api.openweathermap.org/data/2.5/';
const apiKey = '8601181a914c11cc995b00a13512046c';

// Getting the right link
const GetOWM_Request = RequestType =>
  OWM + RequestType + '?q=' + cityName + '&appid=' + apiKey;

// Make a request to the server and get the data
const getWeatherData = async url => axios.get(url);

const getFiveDayData = () => {
  req = GetOWM_Request('forecast');
  return getWeatherData(req).then(response => {
    return dataProcessingFiveDays(response.data);
  });
};

// Data processing for 5 days
const getDate = data => {
  const timestampInSeconds = data.dt;
  const timestampInMilliseconds = timestampInSeconds * 1000;
  const date = new Date(timestampInMilliseconds);
  return date.getDate();
};

// We get the day of the week
const weekDayNow = data => {
  const date = new Date(data * 1000);
  const weekDay = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(
    date
  );
  return weekDay;
};
// We get a month
const monthNow = data => {
  const date = new Date(data * 1000);
  const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
  return month;
};
// Get icon data object
const getIconData = data => {
  const date = new Date(data[0].dt * 1000);
  date.setMilliseconds(0);
  date.setSeconds(0);
  date.setMinutes(0);
  date.setHours(12);
  const getTimeObj = data.find(e => e.dt == date.getTime() / 1000);
  const iconInfo = {};
  if (getTimeObj) {
    const weather = getTimeObj.weather[0];
    const icon = 'http://openweathermap.org/img/wn/' + weather.icon + '.png';
    iconInfo.icon = icon;
    iconInfo.iconDescription = weather.description;
    return iconInfo;
  } else {
    let weather = {};
    if (data[3]) {
      weather = data[3].weather[0];
    } else {
      weather = data[0].weather[0];
    }
    const icon = 'http://openweathermap.org/img/wn/' + weather.icon + '.png';
    iconInfo.icon = icon;
    iconInfo.iconDescription = weather.description;
    return iconInfo;
  }
};

// Calculation of min/max temperature
const mathTemp = data => {
  data = data.map(e => Math.floor(e.main.temp - 273.15));
  const temp = {
    TempMin: Math.min(...data),
    TempMax: Math.max(...data),
  };
  return temp;
};

// Add the missing 0
function addZero(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

// Get the current time
const getCurrentTime = data => {
  const dataTime = new Date(data * 1000);
  return addZero(dataTime.getHours()) + ':' + addZero(dataTime.getMinutes());
};

const dataProcessingFiveDays = response => {
  const dates = response.list
    .map(element => getDate(element))
    .filter((el, idx, arr) => arr.indexOf(el) === idx);

  const list = dates
    .map(el => {
      return response.list.filter(elem => getDate(elem) === el);
    })
    .map(element => {
      return {
        DayNum: getDate(element[0]),
        Day: weekDayNow(element[0].dt),
        Month: monthNow(element[0].dt),
        date: element[0].dt,
        icon: getIconData(element),
        forecast: element,
        temp: mathTemp(element),
      };
    });

  if (list.length > 5) {
    list.shift();
  }

  const changedData = { ...response, list };

  fiveDayData = changedData;

  return fiveDayData;
};

// Data processing for more info block
const dataProcessingMoreInfo = () => {
  moreInfoData = fiveDayData.list.map(e => ({
    date: e.date,
    DayNum: e.DayNum,
    forecast: e.forecast.map(e => ({
      time: getCurrentTime(e.dt),
      temp: Math.floor(e.main.temp - 273.15),
      humidity: e.main.humidity,
      pressure: e.main.pressure,
      speed: Number(e.wind.speed.toFixed(1)),
      icon: 'http://openweathermap.org/img/wn/' + e.weather[0].icon + '.png',
      iconDescription: e.weather[0].description,
    })),
  }));

  return moreInfoData;
};

export { getWeather, getCityImage, getFiveDayData, dataProcessingMoreInfo };
