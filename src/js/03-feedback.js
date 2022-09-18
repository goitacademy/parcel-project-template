
VAULT_KEY = "feedback-form-state";

const throttle = require('lodash.throttle');

const FBFormEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');

FBFormEl.addEventListener('submit', onFormSubmit);
FBFormEl.addEventListener('input', throttle(onInputChanges, 500));

onPageReload();

function onInputChanges(event) {
    const email = emailEl.value;
    const message = messageEl.value;
    const formData = { email, message,};

  localStorage.setItem(VAULT_KEY, JSON.stringify(formData));
};

function onFormSubmit(event) {
  event.preventDefault();

  const formData = {
    email: event.currentTarget.elements.email.value,
    message: event.currentTarget.elements.message.value,
  };

  console.log('onFormSubmit : formData', formData);
  event.currentTarget.reset();
  localStorage.removeItem(VAULT_KEY);
}

function onPageReload() {
  const savedData = localStorage.getItem(VAULT_KEY);
  const parsedData = JSON.parse(savedData);

  if (parsedData) {
    emailEl.value = parsedData.email;
    messageEl.value = parsedData.message;
  }
}