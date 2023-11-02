const API_KEY = '07aed853a2b3116bf7e19dfeee63b968';
const API_URL =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=cluj';
const weatherIcon = document.querySelector('.hero-weather__emoji');
const todayBtn = document.querySelector('.today-btn');
const fiveDaysBtn = document.querySelector('.five-days');
// const cityName = searchBarInput.value.trim();
async function todayWeather(cityName) {
  const response = await fetch(API_URL + `&appid=${API_KEY}`);
  var data = await response.json();

  console.log(data);
  document.querySelector('.hero-weather__city').innerHTML = data.name;
  document.querySelector('.hero-weather__degrees').innerHTML =
    Math.round(data.main.temp) + '°';
  document.querySelector('.values__min h5').innerHTML =
    Math.round(data.main.temp_min) + '°';
  document.querySelector('.values__max h5').innerHTML =
    Math.round(data.main.temp_max) + '°';

  const heroWeatherIcon = document.querySelector('.hero-weather');
  let iconToday = document.createElement('img');
  const iconApi = data.weather[0].icon;
  const iconLink = 'https://openweathermap.org/img/wn/${iconApi}@2x.png';
  iconToday.classList.add('hero-weather__emoji');
  iconToday.innerHTML = `
  src="${iconLink}"
  alt="${data.weather[0].description}"`;
  heroWeatherIcon.prepend(iconToday);
}

todayWeather();

todayBtn.addEventListener('click', e => {
  e.preventDefault();
  todayBtn.style.background = 'white';
  fiveDaysBtn.style.background = 'rgba(255, 255, 255, 0.5)';
  document.querySelector('.today-weather').style.display = 'block';
});

fiveDaysBtn.addEventListener('click', e => {
  e.preventDefault();
  fiveDaysBtn.style.background = 'white';
  todayBtn.style.background = 'rgba(255, 255, 255, 0.5)';
  document.querySelector('.today-weather').style.display = 'none';
});
