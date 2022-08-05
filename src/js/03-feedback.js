//Импорт тротл
import throttle from 'lodash.throttle';
//
const formRef = document.querySelector('.feedback-form');
const forSubmitmRef = document.querySelector('form.feedback-form');
const forInputmRef = document.querySelector('.feedback-form input');
const forTextAreamRef = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form-state';
//
const formData = {};
//получаем введенные данные, приводим к строке, записываем в local storage
function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  console.log(formData);
  let dataString = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, dataString);
}
//берем значения с local storage и парсим, присваиваем их значения forInputmRef и forTextAreamRef
function pastFormInput() {
  const savedmessage = localStorage.getItem(STORAGE_KEY);
  const parseStorageKey = JSON.parse(savedmessage);

  if (parseStorageKey) {
    forInputmRef.value = parseStorageKey.email;
    forTextAreamRef.value = parseStorageKey.message;
    console.log(parseStorageKey);
  }
}
//Дефолтное поведение формы, проверка на пустое поле, чистим LocalStorage при отправке
function onFormSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, message },
  } = e.currentTarget;
  if (email.value === '' || message.value === '') {
    return console.log('Пожалуйста, заполните все поля!');
  }
  console.log(`Email: ${email.value}, message: ${message.value}`);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
//
forSubmitmRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onFormInput, 500));
pastFormInput();
