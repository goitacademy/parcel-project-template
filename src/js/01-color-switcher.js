const btnStartRef = document.querySelector('[data-start]');
const btnStopRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');
let timerId = null;
btnStopRef.disabled = true;

btnStartRef.addEventListener('click', () => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
    console.log('Color: ' + bodyRef.style.backgroundColor);
  }, 1000);
  btnStartRef.disabled = true;
  btnStopRef.disabled = false;
});

btnStopRef.addEventListener('click', () => {
  clearInterval(timerId);
  console.log(`Interval with id ${timerId} has stopped!`);
  btnStartRef.disabled = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
