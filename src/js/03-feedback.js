'use strict';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

const saveFeedbackState = () => {
  const feedbackState = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackState));
};

email.addEventListener('input', throttle(saveFeedbackState, 500));
message.addEventListener('input', throttle(saveFeedbackState, 500));

const storedFeedbackState = JSON.parse(
  localStorage.getItem('feedback-form-state')
);

if (storedFeedbackState) {
  email.value = storedFeedbackState.email;
  message.value = storedFeedbackState.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();

  localStorage.removeItem('feedback-form-state');

  email.value = '';
  message.value = '';

  console.log('Feedback state:', storedFeedbackState);
});
