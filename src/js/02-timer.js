import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector("#datetime-picker");
const startButton = document.querySelector("[data-start]");
const daysElement = document.querySelector("[data-days]");
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");

let countdownInterval;

const convertMs = (ms) => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

const updateTimerDisplay = (ms) => {
  const { days, hours, minutes, seconds } = convertMs(ms);

  daysElement.textContent = days.toString().padStart(2, "0");
  hoursElement.textContent = hours.toString().padStart(2, "0");
  minutesElement.textContent = minutes.toString().padStart(2, "0");
  secondsElement.textContent = seconds.toString().padStart(2, "0");
};

startButton.addEventListener("click", () => {
  const selectedDate = input._flatpickr.selectedDates[0];
  if (!selectedDate || selectedDate <= new Date()) {
    alert("Please choose a date in the future.");
    return;
  }
  let timeRemaining
  const targetDate = selectedDate.getTime();
  const currentDate = Date.now();
  timeRemaining = targetDate - currentDate;

  if (timeRemaining <= 0) {
    alert("Please choose a date in the future.");
    return;
  }

  clearInterval(countdownInterval);
  updateTimerDisplay(timeRemaining);

  countdownInterval = setInterval(() => {
    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      updateTimerDisplay(0);
    } else {
      updateTimerDisplay(timeRemaining);
      timeRemaining -= 1000;
    }
  }, 1000);
});

flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
});
