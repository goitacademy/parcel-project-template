import throttle from 'lodash.throttle';

const form = document.querySelector("#feedback-form");
const output = document.querySelector("#output");
const LOCALSTORAGE_KEY = "feedback-form-state";

updateOutput();
form.addEventListener("submit", saveMessage);

function saveMessage(evt) {
  evt.preventDefault();
  localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
  updateOutput();
  form.reset();
}

function updateOutput() {
  output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || "";
}
