const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startButton.addEventListener('click', () => {
  timerId = setInterval(changeBodyColor, 1000);
});

stopButton.addEventListener('click', () => {
  clearInterval(timerId);
  startButton.disabled = false;
});

function changeBodyColor() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  startButton.disabled = true;
}
