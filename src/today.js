const API_KEY = '07aed853a2b3116bf7e19dfeee63b968';
const API_URL_BASE =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const weatherIcon = document.querySelector('.hero-weather__emoji');
const todayBtn = document.querySelector('.today-btn');
const fiveDaysBtn = document.querySelector('.five-days');

export async function todayWeather(cityName) {
  try {
    const response = await fetch(`${API_URL_BASE}${cityName}&appid=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    var data = await response.json();

  const heroWeatherIcon = document.querySelector('.hero-weather');
  let iconToday = document.createElement('img');
  const iconApi = data.weather[0].icon;
  const iconLink = 'https://openweathermap.org/img/wn/${iconApi}@2x.png';
  iconToday.classList.add('hero-weather__emoji');
  iconToday.innerHTML = `
  src="${iconLink}"
  alt="${data.weather[0].description}"`;
  heroWeatherIcon.prepend(iconToday);
    
    // Update the DOM with new data
    document.querySelector('.hero-weather__city').textContent = data.name;
    document.querySelector('.hero-weather__degrees').textContent =
      Math.round(data.main.temp) + '°';
    document.querySelector('.values__min h5').textContent =
      Math.round(data.main.temp_min) + '°';
    document.querySelector('.values__max h5').textContent =
      Math.round(data.main.temp_max) + '°';

    // Update the weather icon based on the weather data
    if (data.weather[0].main == 'Clouds') {
      weatherIcon.src = './images/cloudy-today.jpg';
    } else if (data.weather[0].main == 'Clear') {
      weatherIcon.src = './images/sunny-today.png';
    } else if (data.weather[0].main == 'Rain') {
      weatherIcon.src = './images/rainy-today.png';
    }
  } catch (error) {
    console.error('There was an error fetching the weather data:', error);
  }
}

// Event listeners for buttons
todayBtn.addEventListener('click', e => {
  e.preventDefault();
  todayBtn.style.background = 'white';
  fiveDaysBtn.style.background = 'rgba(255, 255, 255, 0.5)';
  document.querySelector('.today-weather').style.display = 'block';
  todayWeather(cityName);
});

fiveDaysBtn.addEventListener('click', e => {
  e.preventDefault();
  fiveDaysBtn.style.background = 'white';
  todayBtn.style.background = 'rgba(255, 255, 255, 0.5)';
  document.querySelector('.today-weather').style.display = 'none';
  // Here you would call a function to display five days forecast
});
