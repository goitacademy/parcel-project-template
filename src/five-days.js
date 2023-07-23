'use strict';
const moreInfoBtns = document.querySelectorAll('.card__button');
const moreInfoCards = document.querySelector('.more-info-container');
moreInfoBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    moreInfoCards.classList.toggle('hidden');
  });
});
