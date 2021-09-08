export default function getRefs() {
  return {
    container: document.querySelector('.container-js'),
    watchedBtn: document.querySelector('.watchedBtn-js'),
    queueBtn: document.querySelector('.queueBtn-js'),
    movies: document.querySelector('.movies__colection'),
    containerEl: document.querySelector('.container-js'),
    checkBox: document.getElementById('theme-switch-toggle'),
    backdrop: document.querySelector('[data-modal]'),
    ulTag: document.querySelector('.pagination_list'),
    closeModalBtn: document.querySelector('.modal__close-btn'),
    teamLink: document.querySelector('.team__link'),
    searchForm: document.querySelector('.search-form'),
    modalWindow: document.querySelector('.modal'),
    library: document.querySelector('.library'),
    buttonsJs: document.querySelector('.buttons-js'),
    headerCheck: document.querySelector('.check-header'),
    headerLib: document.querySelector('.header'),
    navHome: document.querySelector('.home'),
    navLibrary: document.querySelector('.library'),
  };
}
