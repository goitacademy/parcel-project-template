'use strict';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dateInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes');
const timerSeconds = document.querySelector('[data-seconds');

let selectedDate;
let timeDifference;

let actualDate = new Date();

startBtn.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    selectedDate = selectedDates[0];
    if (selectedDate.getTime() >= actualDate.getTime()) {
      startBtn.removeAttribute('disabled');
    } else {
      Notify.failure('Please choose a date in the future');
    }
    timeDifference = selectedDate.getTime() - actualDate.getTime();
  },
};

flatpickr(dateInput, options);

const addLeadingZero = value => {
  return value.padStart(2, '0');
};

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

startBtn.addEventListener('click', () => {
  let calculatedTime = convertMs(timeDifference);

  startBtn.setAttribute('disabled', '');

  const timer = setInterval(() => {
    actualDate = new Date();
    timeDifference = selectedDate.getTime() - actualDate.getTime();
    calculatedTime = convertMs(timeDifference);

    if (timeDifference > 0) {
      timerDays.innerHTML = addLeadingZero(String(calculatedTime.days));
      timerHours.innerHTML = addLeadingZero(String(calculatedTime.hours));
      timerMinutes.innerHTML = addLeadingZero(String(calculatedTime.minutes));
      timerSeconds.innerHTML = addLeadingZero(String(calculatedTime.seconds));
    } else {
      Notify.success(`Time's up`);
      clearInterval(timer);
    }
  }, 1000);
});
