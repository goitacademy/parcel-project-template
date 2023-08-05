const rightArrow = document.querySelector('#right-arrow');
const leftArrow = document.querySelector('#left-arrow');
const daysList = document.querySelector('.days-list');

rightArrow.addEventListener('click', scrollToLeft);
leftArrow.addEventListener('click', scrollToRight);

function scrollToLeft() {
  daysList.scroll({
    left: 160,
    behavior: 'smooth',
  });
}

function scrollToRight() {
  daysList.scroll({
    left: -160,
    behavior: 'smooth',
  });
}
