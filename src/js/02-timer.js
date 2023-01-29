import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
//////////////////////////////////
const bodyUrl = document.querySelector('body');
const dateChoiseUrl = bodyUrl.querySelector('#datetime-picker');
const btnStart = bodyUrl.querySelector('[data-start]');
const timerUrl = bodyUrl.querySelector('.timer');
btnStart.disabled = true;
////////////////////////////////
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    const date = new Date(dateChoiseUrl.value);
    if (date.getTime() <= Date.now()) {
      // btnStart.disabled = true;
      dateChoiseUrl.style.color = 'red';

      setTimeout(
        () => Notiflix.Notify.failure('Please select a date future'),
        20
      );
    } else {
      btnStart.disabled = false;
      dateChoiseUrl.style.color = 'green';
      setTimeout(
        () => Notiflix.Notify.success('Selected date in the future'),
        20
      );
    }
  },
};

////////////////////////
flatpickr(dateChoiseUrl, options);

btnStart.addEventListener('click', () => {
  const date = new Date(dateChoiseUrl.value);
  const timerId = setInterval(() => {
    const diff = date.getTime() - Date.now();
    convertMs(diff);
    // console.log(diff);
    if (diff <= 200) {
      clearInterval(timerId);
      btnStart.disabled = dateChoiseUrl.disabled = false;
      Notiflix.Notify.success('Timer ready to start new time');
    }
  }, 0);
  btnStart.disabled = dateChoiseUrl.disabled = true;
});

////////////////////////////////
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

  function addLeadingZero(value) {
    if (value < 10) {
      value = `0${value}`;
    }
    return value;
  }

  return (timerUrl.innerHTML = `${addLeadingZero(days)} days  ${addLeadingZero(
    hours
  )} hours  ${addLeadingZero(minutes)} minutes  ${addLeadingZero(
    seconds
  )} seconds`);
}
