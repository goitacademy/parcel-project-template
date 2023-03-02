import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea[name="message"]');

const LOCALSTORAGE_KEY = 'feedback-form-state';

populatTextarea();

form.addEventListener('input', throttle(onTextareaInput, 500));
form.addEventListener('submit', onSubmitForm);

function onTextareaInput(e) {
  const saveFormObject = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(saveFormObject));
  console.log(saveFormObject);
}

function onSubmitForm(e) {
  e.preventDefault();
  if (email.value === '' || message.value === '') {
    return alert`Wszystkie pola muszą być wypełnione`;
  }
  console.log({ email: email.value, message: message.value });
  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function populatTextarea() {
  const storageForm = localStorage.getItem(LOCALSTORAGE_KEY);
  const parsedStorageForm = JSON.parse(storageForm);

  if (storageForm) {
    email.value = parsedStorageForm.email;
    message.value = parsedStorageForm.message;
    console.log(parsedStorageForm);
  }
}