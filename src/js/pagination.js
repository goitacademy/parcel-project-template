// import FilmsApiService from './api-service';
import markupPopularMovies from './get-popular';
import refs from './refs';

const API_KEY = '6914e86918040074e2fe382ba8e8cb5e';
const BASE_URL = 'https://api.themoviedb.org/3/';
const paginationEl = document.querySelector('ul.pagination');
const mediaQuery = window.matchMedia('(max-width: 767px)');

let pagMarkup = '';
let currentPage = 0;
const BTNS_ON_PAGE = 5;

makeFetch(currentPage + 1)
  .then(response => response.json())
  .then(({ total_pages }) => {
    renderPaginationMarkup(total_pages);
  });

paginationEl.addEventListener('click', event => {
  if (event.target.nodeName === 'BUTTON') {
    onBtnsClick(event);
  }
});

function makeFetch(page) {
  return fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${page}`);
}

function renderPaginationMarkup(length) {
  if (mediaQuery.matches) {
    renderPaginationMarkupForMobile(length);
  } else {
    renderPaginationMarkupForTabletAndDesktop(length);
  }

  paginationEl.insertAdjacentHTML('beforeend', pagMarkup);
}

function renderPaginationMarkupForMobile(length) {
  if (currentPage + 1 < BTNS_ON_PAGE) {
    pagMarkup =
      '<li class="pagination-item"><button class="left">&#8592</button></li>';

    for (let i = 1; i <= BTNS_ON_PAGE; i += 1) {
      const pagItem = `<li class='pagination-item'><button class="button-number">${i}</button></li>`;
      pagMarkup += pagItem;
    }

    pagMarkup += `<li class="pagination-item"><button class="right">&#8594</button></li>`;
  } else if (currentPage + 1 >= BTNS_ON_PAGE && currentPage + 1 < length - 3) {
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

function renderPaginationMarkupForTabletAndDesktop(length) {
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
  } else if (currentPage + 1 >= BTNS_ON_PAGE && currentPage + 1 < length - 3) {
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

function clearPaginationMarkup() {
  paginationEl.innerHTML = '';
}

function setActiveBtn(event) {
  // const numberBtnsEl = document.querySelectorAll(".button-number");
  // const btnsArray = [...numberBtnsEl];
  // if (currentPage === 0) {
  // numberBtnsEl[0].classList.add("active-pagination");
  // } else {
  // btnsArray.find((btn, index) => {
  //   if (btn.classList.contains("active-pagination")) {
  //     numberBtnsEl[index].classList.remove("active-pagination");
  //   }
  // });
  //   event.target.classList.add('active-pagination');
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

  makeFetch(currentPage + 1)
    .then(response => response.json())
    .then(({ total_pages, results }) => {
      renderPaginationMarkup(total_pages);
      markupPopularMovies(results);
    })
    .then(setActiveBtn(event));
}

function clearMovieContainer() {
  refs.moviesContainer.innerHTML = '';
}

// ПРОБЛЕМЫ:
// 1. Не подсвечивается активная страница(кнопка)
// 2. Запросы за фильмами работают не из api-service.js по причине сложных методов класса FilmsApiService
// 3. Заменить адрес запросов на странице Избранного
console.log(document);
