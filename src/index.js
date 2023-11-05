
//SlideShow for Reviews
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


//SlideShow for Products

var productSlideIndex = 0;
var numProducts;
var products = document.querySelectorAll('.card-products li');
var productBullets = document.querySelectorAll('.swiper-bullets-products');

function showProducts() {
    var width = window.innerWidth;

    if (width >= 1158) {
        numProducts = 4;
    } else if (width >= 768 && width < 1158) {
        numProducts = 3;
    } else {
        numProducts = 1;
    }

    for (var i = 0; i < products.length; i++) {
        if (i < productSlideIndex || i >= productSlideIndex + numProducts) {
            products[i].style.display = 'none';
        } else {
            products[i].style.display = 'flex';
        }
    }
}

showProducts();

function currentProductDiv(n) {
    productSlideIndex = n;
    showProducts();

    for (var i = 0; i < productBullets.length; i++) {
        if (i === n) {
            productBullets[i].classList.add('active');
        } else {
            productBullets[i].classList.remove('active');
        }
    }
}

window.addEventListener('resize', function () {
    showProducts();
});

for (var i = 0; i < productBullets.length; i++) {
    productBullets[i].addEventListener('click', function () {
        var currentProductBullet = this;
        var index = Array.from(productBullets).indexOf(currentProductBullet);
        currentProductDiv(index);
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
    const openModalBtnReviews = document.querySelector("[data-modal-open-reviews]");
    const closeModalBtnReviews = document.querySelector("[data-modal-close-reviews]");
    const modalReviews = document.querySelector("[data-modal-reviews]");

    const openModalBtnSubscribe = document.querySelector("[data-modal-open-subscribe]");
    const closeModalBtnSubscribe = document.querySelector("[data-modal-close-subscribe]");
    const modalSubscribe = document.querySelector("[data-modal-subscribe]");

    const openModalBtnBuy = document.querySelector("[data-modal-open-buy]");
    const closeModalBtnBuy = document.querySelector("[data-modal-close-buy]");
    const modalBuy = document.querySelector("[data-modal-buy]");


    openModalBtnReviews.addEventListener("click", toggleModal.bind(null, modalReviews));
    closeModalBtnReviews.addEventListener("click", toggleModal.bind(null, modalReviews));

    openModalBtnSubscribe.addEventListener("click", toggleModal.bind(null, modalSubscribe));
    closeModalBtnSubscribe.addEventListener("click", toggleModal.bind(null, modalSubscribe));

    openModalBtnBuy.addEventListener("click", toggleModal.bind(null, modalBuy));
    closeModalBtnBuy.addEventListener("click", toggleModal.bind(null, modalBuy));

    function toggleModal(modal) {
        modal.classList.toggle("is-hidden");
    }
})();

