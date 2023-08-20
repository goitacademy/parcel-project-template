var swiper1 = new Swiper('.swiper1', {
  
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,

  },
  slidesPerView: 1,
  spaceBetween: 18,
  // Responsive breakpoints
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 18
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 18
    }
  },
  autoplay: {
    delay: 5000,
  }
});

var swiper2 = new Swiper('.swiper2', {
  
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,

  },
  slidesPerView: 1,
  spaceBetween: 16,
  // Responsive breakpoints
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 28
    }
  }
});
