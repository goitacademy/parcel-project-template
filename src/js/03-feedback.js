var _ = require('lodash');

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const messageEl = document.querySelector('.feedback-form textarea');
let FORM_OBJECT = localStorage.getItem('feedback-form-state');
let parseFormObject = JSON.parse(FORM_OBJECT);
let inputValue = '';
let messageValue = '';
formEl.addEventListener('submit', clickOnSubmitBtn);
messageEl.addEventListener('input', _.debounce(getMessageValue, 1000));
inputEl.addEventListener('input', _.debounce(getInputValue, 1000));

if (parseFormObject.email !== '' || parseFormObject.message !== '') {
  inputEl.value = `${parseFormObject.email}`;
  messageEl.value = `${parseFormObject.message}`;
}
inputValue = inputEl.value;
messageValue = messageEl.value;

function getInputValue(event) {
  inputValue = event.target.value;
}
function getMessageValue(event) {
  messageValue = event.target.value;
}
function clickOnSubmitBtn(event) {
  event.preventDefault();
  localStorage.clear();
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ message: `${messageValue}`, email: `${inputValue}` })
  );
  console.log(localStorage.getItem('feedback-form-state'));
  inputEl.value = '';
  messageEl.value = '';
}
