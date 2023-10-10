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

const submitBtn = document.querySelector('[type="submit"]');

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const delay = parseInt(document.querySelector('[name="delay"]').value);
  const step = parseInt(document.querySelector('[name="step"]').value);
  const amount = parseInt(document.querySelector('[name="amount"]').value);

  for (let index = 0; index < amount; index++) {
    const currentDelay = delay + index * step;

    createPromise(index + 1, currentDelay)
      .then(({ position, delay }) => {
        alert(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        alert(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});
