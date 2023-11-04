var slideIndex = 0;
var numReviews;
var reviews = document.querySelectorAll('.reviews');
var bullets = document.querySelectorAll('.swiper-bullets');

function showReviews() {
    var width = window.innerWidth;

    if (width >= 1158) {
        numReviews = 3;
    } else if (width >= 768 && width < 1158) {
        numReviews = 2;
    } else {
        numReviews = 1;
    }

    for (var i = 0; i < reviews.length; i++) {
        if (i < slideIndex || i >= slideIndex + numReviews) {
            reviews[i].style.display = 'none';
        } else {
            reviews[i].style.display = 'flex';
        }
    }
}

showReviews();

function currentDiv(n) {
    slideIndex = n;
    showReviews();

    for (var i = 0; i < bullets.length; i++) {
        if (i === n) {
            bullets[i].classList.add('active');
        } else {
            bullets[i].classList.remove('active');
        }
    }
}

window.addEventListener('resize', function () {
    showReviews();
});

for (var i = 0; i < bullets.length; i++) {
    bullets[i].addEventListener('click', function () {
        var currentBullet = this;
        var index = Array.from(bullets).indexOf(currentBullet);
        currentDiv(index);
    });
}









(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');

    const toggleMenu = () => {
        const isMenuOpen =
            openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
        openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
        mobileMenu.classList.toggle('is-open');

        const scrollLockMethod = !isMenuOpen
            ? 'disableBodyScroll'
            : 'enableBodyScroll';
        bodyScrollLock[scrollLockMethod](document.body);
    };

    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);

    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
        if (!e.matches) return;
        mobileMenu.classList.remove('is-open');
        openMenuBtn.setAttribute('aria-expanded', false);
        bodyScrollLock.enableBodyScroll(document.body);
    });
})();





(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();