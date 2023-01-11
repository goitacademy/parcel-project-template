import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startButton = document.querySelector('[data-start]');
const daysArea = document.querySelector('[data-days]');
const hoursArea = document.querySelector('[data-hours]');
const minutesArea = document.querySelector('[data-minutes]');
const secondsArea = document.querySelector('[data-seconds]');

const timerArea = document.querySelector('.timer');

let timerId = null;
let enterDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    clearInterval(timerId);
    enterDate = Date.parse(selectedDates);
    if (enterDate < Date.now()) {
      startButton.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startButton.disabled = false;
    }
    colorStartButton();
  },
};

flatpickr('input#datetime-picker', options);
require('flatpickr/dist/themes/confetti.css');

startButton.disabled = true;
startButton.addEventListener('click', onStartTimer);

function onStartTimer() {
  Notiflix.Notify.info('Timer start!');
  startButton.disabled = true;
  colorStartButton();
  let timeStart = enterDate - Date.now();
  timerId = setInterval(() => {
    if (timeStart > 0 && timeStart < 1000) {
      clearInterval(timerId);
      Notiflix.Notify.success('Timer the end!');
    }
    colorTimeEnd(timeStart);
    const convertTimeStart = convertMs(timeStart);
    daysArea.textContent = addLeadingZero(convertTimeStart.days);
    hoursArea.textContent = addLeadingZero(convertTimeStart.hours);
    minutesArea.textContent = addLeadingZero(convertTimeStart.minutes);
    secondsArea.textContent = addLeadingZero(convertTimeStart.seconds);
    timeStart -= 1000;
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function colorStartButton() {
  if (!startButton.disabled) {
    startButton.classList.add('button-active');
  }
  if (startButton.disabled) {
    startButton.classList.remove('button-active');
  }
}

function colorTimeEnd(time) {
  if (time < 300000) {
    timerArea.classList.add('timer-end');
  } else {
    timerArea.classList.remove('timer-end');
  }
}
