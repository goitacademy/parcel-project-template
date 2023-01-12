import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const state = JSON.parse(localStorage.getItem('feedback-form-state'));

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onFormSubmit);

const formData = {};

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(e) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.preventDefault();
  if (e.target.email.value === '' || e.target.message.value === '') {
    alert('Заполните поле');
    return;
  }

  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
