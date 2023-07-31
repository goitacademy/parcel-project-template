const weatherIcon = document.querySelector('.weather-icon');

function updateWidget(data) {
  document.querySelector('.city').innerHTML = data.city.name;
  document.querySelector('.temp').innerHTML = Math.round(data.list[0].main.temp) + '°C';
  document.querySelector('.min').innerHTML =
    'min ' + Math.round(data.list[0].main.temp_min) + '°C';
  document.querySelector('.max').innerHTML =
    'max ' + Math.round(data.list[0].main.temp_max) + '°C';
}

// functie
function addBackgroundImage(url) {
  document.querySelector('body').style.backgroundImage = `url(${url})`;
}
export { addBackgroundImage, updateWidget };
