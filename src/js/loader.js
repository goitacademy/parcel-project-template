import getRefs from './get-refs';
const refs = getRefs();

class Loader {
  constructor(loaderRef) {
    this.totalCards = 20;
    this.loaderRef = loaderRef;
    this.cards = 0;
    this.promise = null;
  }

  show(numberOfCardsToBeLoaded) {
    this.totalCards = numberOfCardsToBeLoaded;
    this.cards = 0;
    this.loaderRef.classList.remove('visually-hidden');
    this.loaderRef.classList.remove('hide');
  }

  onCardLoaded() {
    this.cards += 1;
    this.check();
  }

  check() {
    if (this.cards === this.totalCards) {
      this.hide();
    }
  }

  hide() {
    this.loaderRef.classList.add('hide');
    setTimeout(() => {
      this.loaderRef.classList.add('visually-hidden');
    }, 500);

    //////////Если мы в галерее - показываем пагинацию
    if (refs.library.classList.contains('site-nav__link--current-page')) {
      refs.ulTag.innerHTML = '';
    } else {
      refs.pagination.classList.remove('load-more');
      window.newPagination.createPagination();
    }
  }
}

window.loader = new Loader(refs.loaderRef);
