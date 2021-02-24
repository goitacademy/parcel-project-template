
// Скрипт Анимаций по скроллу

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
}
// Скрипт Masonry

import Masonry from 'masonry-layout';
window.onload = () => {
  const grid = document.querySelector('.gallery');
  const masonry = new Masonry(grid, {
    itemSelector: '.gallery-image',
    gutter: 3,
    originLeft: false,
    originTop: false,
    horizontalOrder: true,
    fitWidth: true,
  });
};

// $('.gallery-container').masonry({ isFitWidth: true });

// Скрипт плавного скролла

$('a[href*="#menu"]').on('click', function (e) {
  e.preventDefault();

  const mobileMenuRef = document.querySelector('[data2-menu]');
  const menuBtnRef = document.querySelector('[data2-menu-button]');
  mobileMenuRef.classList.toggle('is-open');
  menuBtnRef.classList.toggle('is-open');

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    1000,
    'linear',
  );
});