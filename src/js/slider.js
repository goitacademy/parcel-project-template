(() => {
  var swiper = new Swiper('#swiper-1', {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '#swiper-1 .swiper-pagination',
      clickable: true,
    },
  });
})();
