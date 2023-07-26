'use strict';
const moreDaysCards = document.querySelector('.days-cards');
const arrowLeft = document.querySelector('.left');
const arrowRight = document.querySelector('.right');
const moreInfoCards = document.querySelector('.more-info-container');

arrowRight.addEventListener('click', carouselRight);
arrowLeft.addEventListener('click', carouselLeft);

function carouselRight() {
  moreDaysCards.style.transform = 'translateX(-41%)';
  moreInfoCards.style.transform = 'translateX(-29%)';
}

function carouselLeft() {
  moreDaysCards.style.transform = 'translateX(0%)';
  moreInfoCards.style.transform = 'translateX(0%)';
}
