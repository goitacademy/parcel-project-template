import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const { email, message } = feedbackForm;
const LOCALSTORAGE_KEY = 'feedback-form-state';

if (localStorage.getItem('feedback-form-state') !== null) {
  const localData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  email.value = localData.email;
  message.value = localData.message;
}
const updateLocalStorage = () => {
  localStorage.setItem(
    LOCALSTORAGE_KEY,
    JSON.stringify({ email: email.value, message: message.value })
  );
};
feedbackForm.addEventListener('input', throttle(updateLocalStorage, 500));

feedbackForm.addEventListener('submit', e => {
  e.preventDefault();
  console.log('Email:', email.value, 'Message:', message.value);
  localStorage.removeItem(LOCALSTORAGE_KEY);
  feedbackForm.reset();
});
