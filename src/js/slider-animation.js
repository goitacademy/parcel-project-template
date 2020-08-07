var slideIndex = 0;

const nextBtn = document.querySelector('[next-btn]');
const prevBtn = document.querySelector('[prev-btn]');

const slider1 = document.querySelector('[slider1]');
const slider2 = document.querySelector('[slider2]');
const slider3 = document.querySelector('[slider3]');

nextBtn.addEventListener('click', () => {
  plusSlides(1);
});

prevBtn.addEventListener('click', () => {
  plusSlides(-1);
});

showSlidesAuto();

function showSlidesAuto() {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlidesAuto, 10000); // Change image every n seconds

  setSlider();
}

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
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

  setSlider();
}

function setSlider() {
  if (slideIndex == 1) {
    slider1.classList.add('header-line-accent');
    slider2.classList.remove('header-line-accent');
    slider3.classList.remove('header-line-accent');
  } else if (slideIndex == 2) {
    slider1.classList.remove('header-line-accent');
    slider2.classList.add('header-line-accent');
    slider3.classList.remove('header-line-accent');
  } else if (slideIndex == 3) {
    slider1.classList.remove('header-line-accent');
    slider2.classList.remove('header-line-accent');
    slider3.classList.add('header-line-accent');
  }
}
