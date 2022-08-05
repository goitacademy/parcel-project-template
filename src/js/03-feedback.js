import throttle from 'lodash.throttle';
const formRef = document.querySelector('.feedback-form');
const forSubmitmRef = document.querySelector('form.feedback-form');
const forInputmRef = document.querySelector('.feedback-form input');
const forTextAreamRef = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form-state';

forSubmitmRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onFormInput, 500));
pastFormInput();
const formData = {};

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(e) {
  e.preventDefault();
  formData[e.target.name] = e.target.value;
  let dataString = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, dataString);
}

function pastFormInput() {
  const savedmessage = localStorage.getItem(STORAGE_KEY);
  const parseStorageKey = JSON.parse(savedmessage);

  if (parseStorageKey) {
    console.log(parseStorageKey);
    forInputmRef.value = parseStorageKey.email;
    forTextAreamRef.value = parseStorageKey.message;
  }
}
