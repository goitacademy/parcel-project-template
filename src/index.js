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

import $ from 'jquery';

// Now you can use jQuery in your code
$(document).ready(function () {
  console.log('jQuery is ready!');
});

$(document).ready(function () {
  $('.slick-carousel').slick({
    // Default settings
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,

    // Responsive settings
    responsive: [
      {
        breakpoint: 1024, // Breakpoint for tablets
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // Breakpoint for mobile
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // Breakpoint for very small mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can add more breakpoints as needed
    ],
  });
});
