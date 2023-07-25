

const formEl = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';
const throttleInput = require('lodash.throttle');

const {
  elements: { email, message },
} = formEl;

formEl.addEventListener('input', throttleInput(saveDataForm, 500));

function saveDataForm() {
  const formData = {
    email: '',
    message: '',
  };

  formData.email = email.value;
  formData.message = message.value;
  localStorage.setItem(storageKey, JSON.stringify(formData));
}

document.addEventListener('DOMContentLoaded', loadDataForm);

function loadDataForm() {
  if (!localStorage.getItem(storageKey)) {
    email.removeAttribute('value');
    message.textContent = '';
  } else {
    const savedDataFormObj = JSON.parse(localStorage.getItem(storageKey));
    if (savedDataFormObj.email) {
      email.setAttribute('value', savedDataFormObj.email);
    }
    message.textContent = savedDataFormObj.message;
  }
}

formEl.addEventListener('submit', update);

function update(event) {
  event.preventDefault();

  if (!localStorage.getItem(storageKey) || !message.value || !email.value) {
    return;
  } else {
    console.log(JSON.parse(localStorage.getItem(storageKey)));
    localStorage.clear();
    formEl.reset();
    loadDataForm();
  }
}