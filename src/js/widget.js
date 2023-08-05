const widgetIcon = document.querySelector('.widget-icon');

function updateWidget(data) {
  document.querySelector('.city').innerHTML =
    data.city.name + ',' + data.city.country;
  document.querySelector('.temp').innerHTML =
    Math.round(data.list[0].main.temp) + '°C';

  document.querySelector('.min').innerHTML =
    'min ' + Math.round(data.list[0].main.temp_min) + '°C';
  document.querySelector('.max').innerHTML =
    'max ' + Math.round(data.list[0].main.temp_max) + '°C';

  widgetIcon.src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
}

// functie
function addBackgroundImage(url) {
  document.querySelector('body').style.backgroundImage = `url(${url})`;
}
export { addBackgroundImage, updateWidget };
