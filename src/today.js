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

  if (data.weather[0].main == 'Clouds') {
    weatherIcon.src = './images/cloudy-today.jpg';
  } else if (data.weather[0].main == 'Clear') {
    weatherIcon.src = './images/sunny-today.png';
  } else if (data.weather[0].main == 'Rain') {
    weatherIcon.src = './images/snowy-today.png';
  }
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
