const weatherIcon = document.querySelector('.weather-icon');
import imgClouds from '../images/008-sunrise.png';

function updateWidget(data) {
  document.querySelector('.city').innerHTML = data.city.name;
  document.querySelector('.temp').innerHTML =
    Math.round(data.list[0].main.temp) + '°C';
  document.querySelector('.min').innerHTML =
    'min ' + Math.round(data.list[0].main.temp_min) + '°C';
  document.querySelector('.max').innerHTML =
    'max ' + Math.round(data.list[0].main.temp_max) + '°C';

  weatherIcon.src = imgClouds;
}

// functie
function addBackgroundImage(url) {
  document.querySelector('body').style.backgroundImage = `url(${url})`;
}
export { addBackgroundImage, updateWidget };
