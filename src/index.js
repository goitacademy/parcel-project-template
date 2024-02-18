const swiper = new Swiper('.swipper-review', {
  slidesPerView: 1,
  spaceBetween: 16,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination-r',
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    },
  },
});

function changeImages(n) {
  const elements = document.getElementsByClassName('btn-item');
  for (let i = 0; i < elements.length; i++) {
    let item = elements[i];
    item.classList.remove('btn-item-sel');
  }
  elements[n].classList.add('btn-item-sel');
  let id = n + 1;
  let card = document.getElementById('card' + id);
  card.scrollIntoView();
}
