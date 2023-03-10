import { throttle } from 'lodash';
let inputForm = document.querySelector('.feedback-form');
let emailInput = document.querySelector('input');
let messageInput = document.querySelector('textarea');

inputForm.addEventListener(
  'input',
  throttle(() => {
    let dataInput = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(dataInput));
  }, 500)
);

let dataOutput = JSON.parse(localStorage.getItem('feedback-form-state'));

if (
  dataOutput &&
  (dataOutput.hasOwnProperty('email') === true ||
    dataOutput.hasOwnProperty('message') === true)
) {
  if (dataOutput.email !== '' || dataOutput.message !== '') {
    emailInput.value = dataOutput.email;
    messageInput.value = dataOutput.message;
  }
} else {
  emailInput.value = '';
  messageInput.value = '';
}

inputForm.addEventListener('submit', event => {
  event.preventDefault();
  console.log(localStorage.getItem('feedback-form-state'));
  emailInput.value = '';
  messageInput.value = '';
  localStorage.removeItem('feedback-form-state');
});