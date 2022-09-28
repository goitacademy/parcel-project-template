const burgerBtnRef = document.querySelector('.header__burger');
const crossBtnRef = document.querySelector('.header__cross');
const mobilMenuRef = document.querySelector('.header__mobil');

burgerBtnRef.addEventListener('click', onMobilMenuOpen);
crossBtnRef.addEventListener('click', onMobilMenuClose);

function onMobilMenuOpen(evt) {
  mobilMenuRef.classList.remove('is-hidden');
}

function onMobilMenuClose(evt) {
  mobilMenuRef.classList.add('is-hidden');
}
