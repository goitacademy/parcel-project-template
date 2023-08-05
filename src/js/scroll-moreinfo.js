const btnMoreInfo = document.querySelector('.five-days__info');
const btnShowRight = document.querySelector('.show-more__right');
let moreInfoClicked = false;
window.addEventListener('resize', checkButtonVisibility);
btnMoreInfo.addEventListener('click', () => {
  moreInfoClicked = true;
  checkButtonVisibility();
});
function checkButtonVisibility() {
  if (window.innerWidth < 768) {
    btnShowRight.classList.remove('is-hidden');
  } else if (window.innerWidth >= 768 && moreInfoClicked) {
    btnShowRight.classList.remove('is-hidden');
  } else {
    btnShowRight.classList.add('is-hidden');
  }
}

checkButtonVisibility();
