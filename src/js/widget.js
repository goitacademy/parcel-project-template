
const widgetIcon = document.querySelector('.widget-icon');

function updateWidget(data) {
  document.querySelector('.city').innerHTML = data.city.name + "," + data.city.country;
  document.querySelector('.temp').innerHTML = Math.round(data.list[0].main.temp) + '°C';

  document.querySelector('.min').innerHTML =
    'min ' + Math.round(data.list[0].main.temp_min) + '°C';
  document.querySelector('.max').innerHTML =
    'max ' + Math.round(data.list[0].main.temp_max) + '°C';


  if(data.list[0].weather[0].main == "Clouds"){
    widgetIcon.src = "/src/images/001-cloudy.png";
  }
  else if(data.list[0].weather[0].main == "Clear"){
    widgetIcon.src = "/src/images/002-sun.png";
  }
  else if(data.list[0].weather[0].main == "Rain"){
    widgetIcon.src = "/src/images/011-rain.png";
  }
  else if(data.list[0].weather[0].main == "Snow"){
    widgetIcon.src = "/src/images/006-snow.png";
  }
}

// functie
function addBackgroundImage(url) {
  document.querySelector('body').style.backgroundImage = `url(${url})`;
}
export { addBackgroundImage, updateWidget };
