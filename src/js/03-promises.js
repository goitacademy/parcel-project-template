import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delayInput = document.querySelector('input[name=delay]');
const stepInput = document.querySelector('input[name=step]');
const amountInput = document.querySelector('input[name=amount]');
const submitBtn = document.querySelector('button[type=submit]');

// console.log(amountInput);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    // Reject
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  const startDelay = parseInt(delayInput.value);
  const stepDelay = parseInt(stepInput.value);
  const promiseQuantity = parseInt(amountInput.value);

  for (let i = 0; i < promiseQuantity; i++) {
    if (i < 1) {
      setTimeout(() => {
        return createPromise(i + 1, startDelay);
      }, startDelay);
    } else {
      setTimeout(() => {
        return createPromise(i + 1, startDelay + stepDelay * i);
      }, startDelay + stepDelay * i);
    }
  }
});
