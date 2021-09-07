import getRefs from './get-refs';
const refs = getRefs();

const loaderRef = document.querySelector('.loader');

// export default function showLoader {
//     const loaderRef = document.querySelector('.loader');
// }

window.onload = function () {
  setTimeout(() => {
    loaderRef.classList.add('hide');
  }, 500);
  setTimeout(() => {
    loaderRef.classList.add('visually-hidden');
  }, 1000);
};
