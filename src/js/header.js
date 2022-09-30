const burgerBtnRef = document.querySelector('.header__burger');
const crossBtnRef = document.querySelector('.header__cross');
export const mobilMenuRef = document.querySelector('.header__mobil');
const favoriteDeskRef = document.querySelector('.js-nav__link--desk');
const favoriteMobilRef = document.querySelector('.js-nav__link--mobil');
const navDeskRef = document.querySelector('.nav__links--desktop');
const navMobileRef = document.querySelector('.nav__links--mobil');

burgerBtnRef.addEventListener('click', removeIsHiden);
crossBtnRef.addEventListener('click', addIsHiden);
favoriteMobilRef.addEventListener('click', mobilNavHide);
favoriteDeskRef.addEventListener('click', desktopNavHide);

function removeIsHiden(evt) {
  mobilMenuRef.classList.remove('is-hidden');
}

function addIsHiden(evt) {
  mobilMenuRef.classList.add('is-hidden');
}

function mobilNavHide(evt) {
  toggleClassIsHiden(navMobileRef);
}
function desktopNavHide(evt) {
  toggleClassIsHiden(navDeskRef);
}
function toggleClassIsHiden(element) {
  element.classList.toggle('is-hidden');
}

document.addEventListener('click', function (event) {
  if (
    window.matchMedia('(min-width: 1280px)').matches &&
    !favoriteDeskRef.contains(event.target)
  ) {
    navDeskRef.classList.add('is-hidden');
  } else if (
    window.matchMedia('(max-width: 1279px)').matches &&
    !favoriteMobilRef.contains(event.target)
  ) {
    navMobileRef.classList.add('is-hidden');
  }
});
