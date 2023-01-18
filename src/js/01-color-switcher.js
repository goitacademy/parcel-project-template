'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let intervalID = null;

stopBtn.setAttribute('disabled', '');

startBtn.addEventListener('click', () => {
  stopBtn.removeAttribute('disabled');
  startBtn.setAttribute('disabled', '');

  intervalID = setInterval(() => {
    let color = getRandomHexColor();
    body.setAttribute('style', `background-color: ${color}`);
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', '');

  clearInterval(intervalID);
});
