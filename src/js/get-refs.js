export default function getRefs() {
  return {
    movies: document.querySelector('.movies__colection'),
    containerEl: document.querySelector('.container-js'),
    checkBox: document.querySelector('.theme-switch__toggle'),
    ulTag: document.querySelector('.pagination_list'),
    pagination: document.querySelector('.pagination'),
    teamLink: document.querySelector('.team__link'),
    searchForm: document.querySelector('.search-form'),
    modalWindow: document.querySelector('.modal'),
    library: document.querySelector('.library'),
    buttonsJs: document.querySelector('.buttons-js'),
    loaderRef: document.querySelector('.loader'),
    headerCheck: document.querySelector('.check-header'),
    navHome: document.querySelector('.home'),
    bodyRef: document.querySelector('body'),
    slider: document.querySelector('.slider-js'),
    genresList: document.querySelector('.dropdown'),
    genresDropdown: document.querySelector('.submenu')
  };
}
