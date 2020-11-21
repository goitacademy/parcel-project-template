// import FilmsApiService from './api-service';
import refs from './refs';
import getCollection from './library/get-local-storage';
import popularTpl from '../templates/movies.hbs';

const API_KEY = '6914e86918040074e2fe382ba8e8cb5e';
const BASE_URL = 'https://api.themoviedb.org/3/';
const paginationEl = document.querySelector('ul.pagination');
const mediaQuery = window.matchMedia('(max-width: 767px)');

let pagMarkup = '';
let currentPage = 0;
let watchedLibreryArray = [];
let quntityOfPages = 1;
let page = '';
const FILMS_ON_PAGE = 20;
const BTNS_ON_PAGE = 5;
const WATCHEDKEY = 'WatchedList';
const QUEUEKEY = 'QueueList';

createPagination();

paginationEl.addEventListener('click', event => {
  if (event.target.nodeName === 'BUTTON') {
    onBtnsClick(event);
  }
});
refs.watchedBtn.addEventListener('click', () => {
  currentPage = 0;
  quntityOfPages = 1;
  clearPaginationMarkup();
  createPagination();
});
refs.queueBtn.addEventListener('click', () => {
  currentPage = 0;
  quntityOfPages = 1;
  clearPaginationMarkup();
  createPagination();
});

function choseLibrary(chosedBtn) {
  if (chosedBtn === '') {
    return;
  } else if (
    localStorage.getItem(QUEUEKEY) === null &&
    localStorage.getItem(WATCHEDKEY) === null
  ) {
    return;
  } else if (chosedBtn === WATCHEDKEY) {
    watchedLibreryArray = JSON.parse(localStorage.WatchedList);
  } else {
    watchedLibreryArray = JSON.parse(localStorage.QueueList);
  }
}

function calculateQuntityOfPages(filmsPerPage) {
  if (watchedLibreryArray.length > filmsPerPage) {
    quntityOfPages = Math.ceil(watchedLibreryArray.length / filmsPerPage);
  }
}

function findActiveBtn() {
  if (refs.watchedBtn.classList.contains('activBtn')) {
    page = WATCHEDKEY;
  } else if (refs.queueBtn.classList.contains('activBtn')) {
    page = QUEUEKEY;
  }
}

function makeFetch(page) {
  return fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${page}`);
}

function renderPaginationMarkup(length) {
  if (watchedLibreryArray.length === 0) {
    return;
  } else if (mediaQuery.matches) {
    renderPaginationMarkupForMobile(length);
  } else {
    renderPaginationMarkupForTabletAndDesktop(length);
  }

  paginationEl.insertAdjacentHTML('beforeend', pagMarkup);
}

function renderPaginationMarkupForMobile(length) {
  pagMarkup = '';

  if (length <= BTNS_ON_PAGE) {
    for (let i = 0; i < length; i += 1) {
      pagMarkup += `<li class='pagination-item'><button class="button-number">${
        i + 1
      }</button></li>`;
    }
  } else {
    if (currentPage + 1 < BTNS_ON_PAGE) {
      pagMarkup =
        '<li class="pagination-item"><button class="left">&#8592</button></li>';

      for (let i = 1; i <= BTNS_ON_PAGE; i += 1) {
        const pagItem = `<li class='pagination-item'><button class="button-number">${i}</button></li>`;
        pagMarkup += pagItem;
      }

      pagMarkup += `<li class="pagination-item"><button class="right">&#8594</button></li>`;
    } else if (
      currentPage + 1 >= BTNS_ON_PAGE &&
      currentPage + 1 < length - 3
    ) {
      pagMarkup = `<li class="pagination-item"><button class="left">&#8592</button></li>
      <li class='pagination-item'><button class="button-number">${
        currentPage - 1
      }</button></li>
      <li class='pagination-item'><button class="button-number">${currentPage}</button></li>
      <li class='pagination-item'><button class="button-number">${
        currentPage + 1
      }</button></li>
      <li class='pagination-item'><button class="button-number">${
        currentPage + 2
      }</button></li>
      <li class='pagination-item'><button class="button-number">${
        currentPage + 3
      }</button></li>
      <li class="pagination-item"><button class="right">&#8594</button></li>`;
    } else {
      pagMarkup = `<li class="pagination-item"><button class="left">&#8592</button></li>
        <li class='pagination-item'><button class="button-number">${
          length - 4
        }</button></li>
      <li class='pagination-item'><button class="button-number">${
        length - 3
      }</button></li>
      <li class='pagination-item'><button class="button-number">${
        length - 2
      }</button></li>
      <li class='pagination-item'><button class="button-number">${
        length - 1
      }</button></li>
      <li class='pagination-item'><button class="button-number">${length}</button></li>
      <li class="pagination-item"><button class="right">&#8594</button></li>`;
    }
  }
}

function renderPaginationMarkupForTabletAndDesktop(length) {
  pagMarkup = '';

  if (length <= BTNS_ON_PAGE) {
    for (let i = 0; i < length; i += 1) {
      pagMarkup += `<li class='pagination-item'><button class="button-number">${
        i + 1
      }</button></li>`;
    }
  } else {
    if (currentPage + 1 < BTNS_ON_PAGE) {
      pagMarkup =
        '<li class="pagination-item"><button class="left">&#8592</button></li>';

      for (let i = 1; i <= BTNS_ON_PAGE; i += 1) {
        const pagItem = `<li class='pagination-item'><button class="button-number">${i}</button></li>`;
        pagMarkup += pagItem;
      }

      pagMarkup += `<li class='pagination-item'><button class="more-pages">...</button></li>
      <li class='pagination-item'><button class="button-number">${length}</button></li>
      <li class="pagination-item"><button class="right">&#8594</button></li>`;
    } else if (
      currentPage + 1 >= BTNS_ON_PAGE &&
      currentPage + 1 < length - 3
    ) {
      pagMarkup = `<li class="pagination-item"><button class="left">&#8592</button></li>
      <li class='pagination-item'><button class="button-number">1</button></li>
      <li class='pagination-item'><button class="more-pages">...</button></li>
      <li class='pagination-item'><button class="button-number">${
        currentPage - 1
      }</button></li>
      <li class='pagination-item'><button class="button-number">${currentPage}</button></li>
      <li class='pagination-item'><button class="button-number">${
        currentPage + 1
      }</button></li>
      <li class='pagination-item'><button class="button-number">${
        currentPage + 2
      }</button></li>
      <li class='pagination-item'><button class="button-number">${
        currentPage + 3
      }</button></li>
      <li class='pagination-item'><button class="more-pages">...</button></li>
      <li class='pagination-item'><button class="button-number">${length}</button></li>
      <li class="pagination-item"><button class="right">&#8594</button></li>`;
    } else {
      pagMarkup = `<li class="pagination-item"><button class="left">&#8592</button></li>
  <li class='pagination-item'><button class="button-number">1</button></li>
      <li class='pagination-item'><button class="more-pages">...</button></li>
      <li class='pagination-item'><button class="button-number">${
        length - 4
      }</button></li>
      <li class='pagination-item'><button class="button-number">${
        length - 3
      }</button></li>
      <li class='pagination-item'><button class="button-number">${
        length - 2
      }</button></li>
      <li class='pagination-item'><button class="button-number">${
        length - 1
      }</button></li>
      <li class='pagination-item'><button class="button-number">${length}</button></li>
      <li class="pagination-item"><button class="right">&#8594</button></li>`;
    }
  }
}

function clearPaginationMarkup() {
  paginationEl.innerHTML = '';
}

function setActiveBtn(event) {
  if (watchedLibreryArray.length === 0) {
    return;
  }
  const numberBtnsEl = document.querySelectorAll('button.button-number');
  const btnsArray = [...numberBtnsEl];

  if (currentPage === 0) {
    numberBtnsEl[0].classList.add('active-pagination');
  } else {
    let targetBtnValue = 0;

    if (event.target.textContent === '→' || event.target.textContent === '←') {
      targetBtnValue = currentPage + 1;
    } else {
      targetBtnValue = Number(event.target.textContent);
    }

    btnsArray.find((btn, index) => {
      if (btn.classList.contains('active-pagination')) {
        numberBtnsEl[index].classList.remove('active-pagination');
      }
    });

    btnsArray.find((btn, index) => {
      if (Number(btn.textContent) === targetBtnValue) {
        numberBtnsEl[index].classList.add('active-pagination');
      }
    });
  }
}

function onNumberBtnClick(event) {
  currentPage = Number(event.target.textContent) - 1;
}

function onRightBtnClick() {
  currentPage += 1;
}

function onLeftBtnClick() {
  currentPage -= 1;
}

function onBtnsClick(event) {
  const paginationBtnsList = document.querySelectorAll('button.button-number');
  const lastPage = Number(
    paginationBtnsList[paginationBtnsList.length - 1].textContent,
  );

  if (Number(event.target.textContent)) {
    onNumberBtnClick(event);
  } else if (event.target.textContent === '→' && currentPage < lastPage - 1) {
    onRightBtnClick();
  } else if (event.target.textContent === '←' && currentPage > 0) {
    onLeftBtnClick();
  } else {
    return;
  }

  clearPaginationMarkup();
  clearMovieContainer();

  getCollection(page)
    .then(films => {
      const filteredFilms = [];

      if (films.length < 1) {
        infoMsg();
        return;
      } else if (films.length <= 20) {
        refs.moviesContainer.innerHTML = popularTpl(films);
      } else {
        films.filter((film, index) => {
          if (
            index > FILMS_ON_PAGE * currentPage &&
            index <= FILMS_ON_PAGE * (currentPage + 1)
          ) {
            filteredFilms.push(film);
          }
        });
        refs.moviesContainer.innerHTML = popularTpl(filteredFilms);
      }
    })
    .then(renderPaginationMarkup(quntityOfPages))
    .then(setActiveBtn(event))
    .then(goToTop);
}

function clearMovieContainer() {
  refs.moviesContainer.innerHTML = '';
}

function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function createPagination() {
  findActiveBtn();
  choseLibrary(page);
  calculateQuntityOfPages(FILMS_ON_PAGE);
  renderPaginationMarkup(quntityOfPages);
  setActiveBtn();
}
// ПРОБЛЕМЫ:
// 1. Запросы за фильмами работают не из api-service.js по причине сложных методов класса FilmsApiService
