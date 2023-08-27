new Swiper(".sellers-swiperbuy",{
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".sellers-swiper-pagination",
        clickable: !0
    }
});
new Swiper(".myswipernav",{
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
        el: ".swiper-pagination",
        clickable: !0
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 18
        },
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
(() => {
    const review = {
      openModalBtn: document.querySelectorAll('[reviews-data-modal-open]'),
      closeModalBtn: document.querySelector('[reviews-data-modal-close]'),
      modal: document.querySelector('[reviews-data-modal]'),
      submitBtn: document.querySelector('.submit-btn'),
      form: document.querySelector('form'),
    };
    review.openModalBtn.forEach(btn => {
      btn.addEventListener('click', toggleModal);
    });
    review.closeModalBtn.addEventListener('click', toggleModal);
    review.submitBtn.addEventListener('click', handleSubmitWithTransition);
    function toggleModal() {
      review.modal.classList.toggle('is-hidden');
      document.body.style.overflow = review.modal.classList.contains('is-hidden')
        ? 'auto'
        : 'hidden';
    }
    function handleSubmitWithTransition(event) {
      event.preventDefault();
      if (review.form.checkValidity()) {
        review.modal.classList.add('is-hidden');
        setTimeout(() => {
          review.form.submit();
        }, 300);
      } else {
        review.form.reportValidity();
      }
    }
  })();
  

  
  
  
  
  
  
  
  
  