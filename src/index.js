// Hamburger modal mobile menu
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    mobileMenu.classList.toggle('is-open');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
});

// Modal-form
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// Carousel 3d rotation
/*
 * My adaptation of:
 *   Flux 3D Carousel
 *   Author: Dean Coulter
 *   Licensed under the MIT license
 *   Version 0.1
 *
 *   - Changed from figure element cards to any html.
 *   - Removed use of id, to allow multiple carousels.
 *   - Blocking of events on cards in the background.
 *   - Dimming of cards in the background.
 *   - Fixed continuous rotation.
 *   - Added functionality for multiple carousels.
 *   - Adding clickable arrow icon buttons on the sides.
 */
function cardCarousel3d(carousels) {
  var rotateHandler = function (evt) {
    var carousel = this.parentElement;
    if (carousel.classList.contains('card-carousel') === false) {
      var carousel = carousel.parentElement;
    }
    var rotate_int = parseInt(carousel.dataset.rotateInt || 0);
    if (this.classList.contains('counterclockwise')) {
      rotate_int += 1;
    } else if (this.classList.contains('clockwise')) {
      rotate_int -= 1;
    }
    carousel.dataset.rotateInt = rotate_int;
    animate_slider(carousel);
  };
  for (var i = 0; i < carousels.length; i++) {
    var carousel = carousels[i];
    var inner = carousel.querySelector('.inner-carousel');
    var cards = carousel.querySelectorAll('.inner-carousel > div');
    var size = cards.length;
    var panelSize = inner.clientWidth;
    var translateZ = Math.round(panelSize / 2 / Math.tan(Math.PI / size)) * 1.7;
    inner.style.transform = 'rotateY(0deg) translateZ(-' + translateZ + 'px)';
    var btnLeft = carousel.querySelector('.button-spin.counterclockwise');
    if (btnLeft !== null) {
      btnLeft.addEventListener('click', rotateHandler, false);
    }
    var btnRight = carousel.querySelector('.button-spin.clockwise');
    if (btnRight !== null) {
      btnRight.addEventListener('click', rotateHandler, false);
    }
    animate_slider(carousel);
  }

  function animate_slider(carousel) {
    var rotate_int = parseInt(carousel.dataset.rotateInt || 0);
    var inner = carousel.querySelector('.inner-carousel');
    var cards = carousel.querySelectorAll('.inner-carousel > div');
    var size = cards.length;
    var panelSize = inner.clientWidth;
    var translateZ = Math.round(panelSize / 2 / Math.tan(Math.PI / size)) * 1.7;
    var rotateY = 0;
    var ry = 360 / size;
    rotateY = ry * rotate_int;

    for (var i = 0; i < size; i++) {
      var z = rotate_int * ry + i * ry;
      var child = cards[i];
      child.style.transform =
        'rotateY(' +
        z +
        'deg) translateZ(' +
        translateZ +
        'px) rotateY(' +
        (-z).toString() +
        'deg)';
      child.classList.remove('clockwise');
      child.classList.remove('front');
      child.classList.remove('counterclockwise');
      child.removeEventListener('click', rotateHandler, false);
      var zz = z % 360;
      if (zz === 0) {
        child.classList.add('front');
      } else if (zz === ry || zz === -360 + ry) {
        child.classList.add('clockwise');
        child.addEventListener('click', rotateHandler, false);
      } else if (zz === 360 - ry || zz === 0 - ry) {
        child.classList.add('counterclockwise');
        child.addEventListener('click', rotateHandler, false);
      }
    }
  }
}

cardCarousel3d(document.querySelectorAll('.card-carousel'));
