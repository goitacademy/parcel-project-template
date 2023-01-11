import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onPromiseCreate);

function onPromiseCreate(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  let firstDelay = +formElements.delay.value;
  const stepDelay = +formElements.step.value;
  const amountStep = +formElements.amount.value;

  for (let step = 1; step <= amountStep; step++) {
    createPromise(step, firstDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    firstDelay += stepDelay;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
