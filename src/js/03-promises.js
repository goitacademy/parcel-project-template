import Notiflix from 'notiflix';
refs = {
  firstDelayInput: document.querySelector('.form [name=delay]'),
  stepDelayInput: document.querySelector('.form [name=step]'),
  amountInput: document.querySelector('.form [name=amount]'),
  formRef: document.querySelector('.form'),
};
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position: position, delay: delay });
      } else {
        reject({ position: position, delay: delay });
      }
    }, delay);
  });
  return promise;
}

function doPromises(data) {
  const amount = Number(refs.amountInput.value);
  const delay = Number(refs.firstDelayInput.value);
  const step = Number(refs.stepDelayInput.value);
  let currDelay = step;
  currDelay = delay;

  for (let i = 0; i < amount; i++) {
    const promise = createPromise(i + 1, currDelay);
    promise
      .then(data => {
        const { position, delay } = data;
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(data => {
        const { position, delay } = data;
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    currDelay += step;
  }
}
refs.formRef.addEventListener('submit', ev => {
  ev.preventDefault();
  const data = {
    position: 1,
    form: ev.currentTarget,
  };
  doPromises(data);
});

// import Notiflix from 'notiflix';
// refs = {
//   firstDelayInput: document.querySelector('.form [name=delay]'),
//   stepDelayInput: document.querySelector('.form [name=step]'),
//   amountInput: document.querySelector('.form [name=amount]'),
//   button: document.querySelector('button'),
//   formRef: document.querySelector('.form'),
// };

// function createPromise(position, delay) {
//   const timeOut = Number(refs.firstDelayInput.value);
//   const timeInterval = Number(refs.stepDelayInput.value);
//   const amount = Number(refs.amountInput.value);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.3;
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
// function submitButton(e) {
//   e.preventDefault();
// }
// refs.button = addEventListener('submit', createPromise);
// refs.formRef = addEventListener('submit', submitButton);
