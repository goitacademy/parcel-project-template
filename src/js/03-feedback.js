import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const dataObject = {};

updateFormData();

form.addEventListener('input', throttle(saveFormData, 500));
form.addEventListener('submit', sendForm);

function saveFormData(event) {
  event.preventDefault();
  dataObject.email = form.elements.email.value;
  dataObject.message = form.elements.message.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataObject));
}

function updateFormData() {
  const formData = localStorage.getItem(LOCALSTORAGE_KEY);
  const email = form.elements.email;
  const message = form.elements.message;

  try {
    const formValue = JSON.parse(formData);
    email.value = formValue.email || '';
    message.value = formValue.message || '';
  } catch (error) {
    console.log('localStorage data error');
  }
}

function sendForm(event) {
  event.preventDefault();
  dataObject.email = form.elements.email.value;
  dataObject.message = form.elements.message.value;
  console.log(dataObject);

  localStorage.removeItem(LOCALSTORAGE_KEY);
  form.reset();
}
