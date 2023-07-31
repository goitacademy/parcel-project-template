const weatherIcon = document.querySelector('.weather-icon');

function updateWidget(data) {
  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
  document.querySelector('.min').innerHTML =
    'min ' + Math.round(data.main.temp_min) + '°C';
  document.querySelector('.max').innerHTML =
    'max ' + Math.round(data.main.temp_max) + '°C';
}

// functie
function addBackgroundImage(url) {
  document.querySelector('body').style.backgroundImage = `url(${url})`;
}
export { addBackgroundImage, updateWidget };
