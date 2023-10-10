function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
const startbtn = document.querySelector("[data-start]");
const stopbtn = document.querySelector("[data-stop]");
let timerId = null;

startbtn.addEventListener('click', () => {
    timerId = setInterval(() => {
    const changecolor = getRandomHexColor();
    document.body.style.backgroundColor = changecolor;
    startbtn.disabled = true;
    stopbtn.disabled = false;
}, 1000);
})
stopbtn.addEventListener("click", () => {
    clearInterval(timerId);
    startbtn.disabled = false;
    stopbtn.disabled = true;
  });

  stopbtn.disabled = true;