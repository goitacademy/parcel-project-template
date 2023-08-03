const btnMoreInfo = document.querySelector('.five-days__info');
const btnShowRight = document.querySelector('.show-more__right');
if (window.innerWidth >= 768) {
  btnShowRight.classList.add('is-hidden');
}

btnMoreInfo.addEventListener('click', () => {
  if (window.innerWidth >= 768) {
    btnShowRight.classList.remove('is-hidden');
  } else {
    btnShowRight.classList.add('is-hidden');
  }
});
