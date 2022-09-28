const burgerBtnRef = document.querySelector('.header__burger');
const crossBtnRef = document.querySelector('.header__cross');
const mobilMenuRef = document.querySelector('.header__mobil');
const favoriteDeskRef = document.querySelector('.js-nav__link--desk');
const favoriteMobilRef = document.querySelector('.js-nav__link--mobil');
const navDeskRef = document.querySelector('.nav__links--desktop');
const navMobileRef = document.querySelector('.nav__links--mobil');

burgerBtnRef.addEventListener('click', removeIsHiden);
crossBtnRef.addEventListener('click', addIsHiden);
favoriteDeskRef.addEventListener('click', toggleIsHidenn);
favoriteMobilRef.addEventListener('click', toggleIsHiden);

function removeIsHiden(evt) {
  mobilMenuRef.classList.remove('is-hidden');
}

function addIsHiden(evt) {
  mobilMenuRef.classList.add('is-hidden');
}
function toggleIsHiden(evt) {
  navMobileRef.classList.toggle('is-hidden');
}
function toggleIsHidenn(evt) {
  navDeskRef.classList.toggle('is-hidden');
}
