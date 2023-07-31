'use strict';

const todayBtn = document.getElementById('today-button');
const fiveDaysBtn = document.getElementById('5-days-button');
const btnContainer = document.querySelector('.buttons');

const todayWeatherContainer = document.querySelector('.weather-container');
const todayDateContainer = document.querySelector('.date-quote-container');
const fiveDaySecion = document.querySelector('.five-days-section');

todayBtn.addEventListener('click', showTodayData);
fiveDaysBtn.addEventListener('click', showFiveDayData);

function showTodayData() {
  if (!todayBtn.classList.contains('buttons__active')) {
    todayBtn.classList.add('buttons__active');
    fiveDaysBtn.classList.remove('buttons__active');
    todayWeatherContainer.classList.remove('hidden');
    todayDateContainer.classList.remove('hidden');
    fiveDaySecion.classList.add('hidden');
    btnContainer.style.marginTop = '0px';
  }
}

function showFiveDayData() {
  if (!fiveDaysBtn.classList.contains('buttons__active')) {
    fiveDaysBtn.classList.add('buttons__active');
    todayBtn.classList.remove('buttons__active');
    fiveDaySecion.classList.remove('hidden');
    todayWeatherContainer.classList.add('hidden');
    todayDateContainer.classList.add('hidden');

    btnContainer.style.marginTop = '50px';
  }
}
