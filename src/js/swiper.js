var swiper = new Swiper('.swiper-container', {
  autoHeight: true, //enable auto height
  // spaceBetween: 20,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'swiper-pagination-bulletmy',
    bulletActiveClass: 'swiper-pagination-bullet-activemy',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
