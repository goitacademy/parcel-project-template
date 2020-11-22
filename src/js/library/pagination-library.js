import refs from '../refs';
import getCollection from './get-local-storage';
import popularTpl from '../../templates/movies-items.hbs';
import loaderToggle from '../loader';
import fixData from '../fix-data';

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

refs.paginationEl.addEventListener('click', event => {
  if (event.target.nodeName === 'BUTTON') {
    onBtnsClick(event);
  }
});
refs.watchedBtn.addEventListener('click', () => {
  currentPage = 0;
  quntityOfPages = 1;
  watchedLibreryArray = [];
  clearPaginationMarkup();
  createPagination();
});
refs.queueBtn.addEventListener('click', () => {
  currentPage = 0;
  quntityOfPages = 1;
  watchedLibreryArray = [];
  clearPaginationMarkup();
  createPagination();
});
refs.btnClose.addEventListener('click', () => {
  quntityOfPages = 1;
  watchedLibreryArray = [];
  clearPaginationMarkup();
  createPagination();
});
refs.popup.addEventListener('click', () => {
  quntityOfPages = 1;
  watchedLibreryArray = [];
  clearPaginationMarkup();
  createPagination();
});
window.addEventListener('keyup', () => {
  quntityOfPages = 1;
  watchedLibreryArray = [];
  clearPaginationMarkup();
  createPagination();
});

function choseLibrary(chosedBtn) {
  if (
    chosedBtn === '' ||
    (localStorage.getItem(QUEUEKEY) === null &&
      localStorage.getItem(WATCHEDKEY) === null)
  ) {
    return;
  } else if (chosedBtn === WATCHEDKEY) {
    if (localStorage.getItem(WATCHEDKEY) === '[]') {
      return;
    }
    watchedLibreryArray = JSON.parse(localStorage.getItem(WATCHEDKEY));
  } else {
    if (localStorage.getItem(QUEUEKEY) === '[]') {
      return;
    }
    watchedLibreryArray = JSON.parse(localStorage.getItem(QUEUEKEY));
  }
  // console.log(watchedLibreryArray);
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

function renderPaginationMarkup(length) {
  if (watchedLibreryArray.length === 0 || watchedLibreryArray === []) {
    return;
  } else if (mediaQuery.matches) {
    renderPaginationMarkupForMobile(length);
  } else {
    renderPaginationMarkupForTabletAndDesktop(length);
  }

  refs.paginationEl.insertAdjacentHTML('beforeend', pagMarkup);
}

function renderPaginationMarkupForMobile(length) {
  pagMarkup = '';

  if (length <= BTNS_ON_PAGE) {
    for (let i = 0; i < length; i += 1) {
      pagMarkup += `<li class='pagination-item'><button class="button-number">${i + 1
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
      <li class='pagination-item'><button class="button-number">${currentPage - 1
        }</button></li>
      <li class='pagination-item'><button class="button-number">${currentPage}</button></li>
      <li class='pagination-item'><button class="button-number">${currentPage + 1
        }</button></li>
      <li class='pagination-item'><button class="button-number">${currentPage + 2
        }</button></li>
      <li class='pagination-item'><button class="button-number">${currentPage + 3
        }</button></li>
      <li class="pagination-item"><button class="right">&#8594</button></li>`;
    } else {
      pagMarkup = `<li class="pagination-item"><button class="left">&#8592</button></li>
        <li class='pagination-item'><button class="button-number">${length - 4
        }</button></li>
      <li class='pagination-item'><button class="button-number">${length - 3
        }</button></li>
      <li class='pagination-item'><button class="button-number">${length - 2
        }</button></li>
      <li class='pagination-item'><button class="button-number">${length - 1
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
      pagMarkup += `<li class='pagination-item'><button class="button-number">${i + 1
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
      <li class='pagination-item'><button class="button-number">${currentPage - 1
        }</button></li>
      <li class='pagination-item'><button class="button-number">${currentPage}</button></li>
      <li class='pagination-item'><button class="button-number">${currentPage + 1
        }</button></li>
      <li class='pagination-item'><button class="button-number">${currentPage + 2
        }</button></li>
      <li class='pagination-item'><button class="button-number">${currentPage + 3
        }</button></li>
      <li class='pagination-item'><button class="more-pages">...</button></li>
      <li class='pagination-item'><button class="button-number">${length}</button></li>
      <li class="pagination-item"><button class="right">&#8594</button></li>`;
    } else {
      pagMarkup = `<li class="pagination-item"><button class="left">&#8592</button></li>
  <li class='pagination-item'><button class="button-number">1</button></li>
      <li class='pagination-item'><button class="more-pages">...</button></li>
      <li class='pagination-item'><button class="button-number">${length - 4
        }</button></li>
      <li class='pagination-item'><button class="button-number">${length - 3
        }</button></li>
      <li class='pagination-item'><button class="button-number">${length - 2
        }</button></li>
      <li class='pagination-item'><button class="button-number">${length - 1
        }</button></li>
      <li class='pagination-item'><button class="button-number">${length}</button></li>
      <li class="pagination-item"><button class="right">&#8594</button></li>`;
    }
  }
}

function clearPaginationMarkup() {
  refs.paginationEl.innerHTML = '';
}

function setActiveBtn(event) {
  if (watchedLibreryArray.length === 0 || watchedLibreryArray === []) {
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

  loaderToggle();

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
      const fixDataFilms = fixData(films);

      if (fixDataFilms.length < 1) {
        infoMsg();
        return;
      } else if (fixDataFilms.length <= FILMS_ON_PAGE) {
        refs.moviesContainer.innerHTML = popularTpl(fixDataFilms);
      } else {
        fixDataFilms.filter((film, index) => {
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
    .then(loaderToggle)
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
  setTimeout(() => {
    findActiveBtn();
    choseLibrary(page);
    calculateQuntityOfPages(FILMS_ON_PAGE);
    renderPaginationMarkup(quntityOfPages);
    setActiveBtn();
  }, 0);
}
