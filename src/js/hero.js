

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

 // Navigation arrows
 navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'custom',
    renderCustom: function (swiper, current, total) {
        return ('0' + current) + '<span class="line"></span>' + ('0' + total);
    }
  },

effect: "cube"

});
