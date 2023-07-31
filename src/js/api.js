import axios from 'axios';

const weatherApiKey = 'ce00f040ffac93595679fb6c48728697';
const backgroundApiKey = '38102784-37e9ad2cc652dbc0da2d9323c';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

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

async function getCityImage(name) {
  console.log(name);
  const imageResponse = await axios.get(
    `https://pixabay.com/api/?key=${backgroundApiKey}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1`
  );
  console.log(imageResponse.data.hits[getRandomInt(40)].largeImageURL);
  return imageResponse.data.hits[getRandomInt(40)].largeImageURL;
}

export { getWeather, getCityImage };
