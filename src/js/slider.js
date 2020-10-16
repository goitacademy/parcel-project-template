/* Индекс слайда по умолчанию */
(() => {
  var slideIndex = 1;
  var list = document.querySelector('.slider-dots');
  var dots = list.querySelectorAll('.slider-dots_item');
  var intervalId;
  var numActive =
    [...dots].findIndex(node => node.getAttribute('data-active')) + 1;
  dots[slideIndex - 1].dataset.active === '';
  function handlerActive(e) {
    var dots = e.currentTarget.children;
    [...dots].forEach(node => node.removeAttribute('data-active'));
    e.target.dataset.active = '';
    var active =
      [...dots].findIndex(node => node.getAttribute('data-active') === '') + 1;
    currentSlide(active);
    sliderStart();
  }
  list.addEventListener('click', handlerActive);
    showSlides(slideIndex);
    
  /* Функция увеличивает индекс на 1, показывает следующй слайд*/
  function plusSlide() {
    showSlides((slideIndex += 1));
    }
    
  /* Функция уменьшает индекс на 1, показывает предыдущий слайд*/
  function minusSlide() {
    showSlides((slideIndex -= 1));
    }
    
  /* Устанавливает текущий слайд */
  function currentSlide(n) {
    showSlides((slideIndex = n));
    }
    
  /* Основная функция слайдера */
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('slider-item');
    var dots = document.getElementsByClassName('slider-dots_item');
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace('active', '');
    }
    dots[slideIndex - 1].className += ' active';
    }
    
  // Функция запускает слайдер
  function sliderStart() {
    if (intervalId) {
      clearInterval(intervalId);
    }
    numActive =
      [...dots].findIndex(node => [...node.classList].includes('active')) + 1;
    intervalId = setInterval(() => {
      if (numActive !== 3) {
        numActive++;
      } else {
        numActive = 1;
      }
      currentSlide(numActive);
    }, 4000);
  }
  if (!intervalId) {
    sliderStart();
  }
})();