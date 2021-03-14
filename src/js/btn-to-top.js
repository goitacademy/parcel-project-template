(function() {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back-to-top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back-to-top-show');
    }
  }

//   function backToTop() {
//     if (window.pageYOffset > 0) {
//       window.scrollBy(0, -80);
//       setTimeout(backToTop, 0);
//     }
//   }

  var goTopBtn = document.querySelector('.arrow');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();
