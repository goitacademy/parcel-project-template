import refs from '../refs.js';

const { buttonScrollToUp } = refs;

buttonScrollToUp.addEventListener('click', scrollToTop);

// Слушатель на window
window.addEventListener('scroll', listenScroll);

function listenScroll() {
    let scrolled = window.pageYOffset;

    let coords = document.documentElement.clientHeight;

    if (scrolled < coords) {
        buttonScrollToUp.classList.add('show')
    }
    if (scrolled > coords) {
        buttonScrollToUp.classList.remove('show')
    }
};

function scrollToTop() {
    let scrollStep = window.pageYOffset / 20;
    if (window.pageYOffset > 0) {
    window.scrollBy(0, -(scrollStep));
    setTimeout(scrollToTop, 0);
}
};