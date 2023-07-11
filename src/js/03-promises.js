import Notiflix from 'notiflix';
const formUrl = document.querySelector('form');
const btnStartUrl = document.querySelector('button');
let timerId = null;

const localObject = {
  delay: [],
  step: [],
  amount: [],
};

formUrl.addEventListener('input', event => {
  const { name, value } = event.target;
  localObject[name] = value;
});

formUrl.addEventListener('submit', event => {
  event.preventDefault();

  let count = 0;
  setTimeout(() => {
    timerId = setInterval(() => {
      let steps = Number(localObject.delay) + Number(localObject.step) * count;
      createPromise(count + 1, steps)
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
      count += 1;
      if (localObject.amount == count) {
        clearInterval(timerId);
        formUrl.reset();
      }
    }, localObject.step);
  }, localObject.delay);
  console.log(localObject);
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const objectPromise = { position, delay };
    const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      resolve(objectPromise);
    } else {
      reject(objectPromise);
    }
  });
}

// createPromise(2, 1500)
//   .then(() => {
//     Promise.resolve(
//       console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
//     );
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
