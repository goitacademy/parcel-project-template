const refs = {
  buttonStartRef: document.querySelector('button[data-start]'),
  buttonStopRef: document.querySelector('button[data-stop]'),
};
let timerId = null;
// Вешаем disabled на кнопку и через setInterval запускаем каждую 1 секунду
// рандом цвета на боди
function randomBodyColorStart() {
  refs.buttonStartRef.disabled = true;
  timerId = setInterval(() => {
    let colorRandom = getRandomHexColor();
    document.body.style.backgroundColor = colorRandom;
  }, 1000);
}
// Снимаем disabled с кнопки старт, чистим таймер.
function randomBodyColorStop() {
  refs.buttonStartRef.disabled = false;
  clearInterval(timerId);
}
// Random
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
refs.buttonStartRef.addEventListener('click', randomBodyColorStart);
refs.buttonStopRef.addEventListener('click', randomBodyColorStop);
