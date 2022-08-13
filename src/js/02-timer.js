import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
const refs = {
  inputTextDate: document.querySelector('input#datetime-picker'),
  buttonStart: document.querySelector('button[data-start]'),
  spanDays: document.querySelector('span[data-days]'),
  spanHours: document.querySelector('span[data-hours]'),
  spanMinutes: document.querySelector('span[data-minutes]'),
  spanSeconds: document.querySelector('span[data-seconds]'),
};
//
buttonStartDisabled();
defaultNumberCalendar();
const currentTime = Date.now();
let timerId = null;
let dateInInput = '';
const options = {
  enableTime: true, // Включает выбор времени
  time_24hr: true, //   Отображает средство выбора времени в 24-часовом режиме без выбора AM/PM
  defaultDate: new Date(), //   Устанавливает начальную выбранную дату
  minuteIncrement: 1, //   	Регулирует шаг ввода минут
  onClose(selectedDates) {
    if (selectedDates[0] <= currentTime) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    refs.buttonStart.disabled = false;
    dateInInput = selectedDates[0];
  },
  onChange() {
    if (timerId !== null) {
      defaultNumberCalendar();
    }
    clearInterval(timerId);
    return;
  },
};

function buttonStartDisabled() {
  refs.buttonStart.disabled = true;
}

function buttonActiveStartTimer() {
  timerId = setInterval(() => {
    const scienceTime = Date.now();
    const { days, hours, minutes, seconds } = convertMs(
      dateInInput - scienceTime
    );
    timerDate({ days, hours, minutes, seconds });
    if (scienceTime >= dateInInput) {
      defaultNumberCalendar();
      clearInterval(timerId);
      return;
    }
  }, 1000);
}
function defaultNumberCalendar() {
  refs.spanDays.textContent = '00';
  refs.spanHours.textContent = '00';
  refs.spanMinutes.textContent = '00';
  refs.spanSeconds.textContent = '00';
}
function timerDate ({ days, hours, minutes, seconds }) {
  refs.spanDays.textContent = days;
  refs.spanHours.textContent = hours;
  refs.spanMinutes.textContent = minutes;
  refs.spanSeconds.textContent = seconds;
}
function pad(value) {
  return String(value).padStart(2, '0');
}
refs.buttonStart.addEventListener('click', buttonActiveStartTimer);
const flatpickr = flatpickr(refs.inputTextDate, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
