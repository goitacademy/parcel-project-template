import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
let formData = {};

form.addEventListener(
  'input',
  throttle(e => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 500)
);
const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  const savedFormData = JSON.parse(savedData);
  formData = { ...formData, ...savedFormData };
  emailInput.value = formData.email || '';
  messageInput.value = formData.message || '';
}
