import throttle from 'lodash.throttle';
const form = document.querySelector('form');

//load
document.addEventListener('DOMContentLoaded', () => {
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    const { email, message } = JSON.parse(storedData);
    document.querySelector("input[name='email']").value = email;
    document.querySelector("textarea[name='message']").value = message;
    console.log(storedData);
  }
});

//tracking
const saveToLocalStorage = throttle(() => {
  const emailValue = document.querySelector("input[name='email']").value;
  const messageValue = document.querySelector("textarea[name='message']").value;
  const formData = {
    email: emailValue,
    message: messageValue,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);
form.addEventListener('input', saveToLocalStorage);
//remove
form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  console.log(localStorage.getItem('feedback-form-state'));
  form.reset();
});
