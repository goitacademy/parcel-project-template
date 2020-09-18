let slideIndex = 1;
let windowSize = document.documentElement.clientWidth;

showSlides(slideIndex);

window.addEventListener(
  'resize',
  function () {
    windowSize = document.documentElement.clientWidth;
    showSlides(slideIndex);
  },
  false,
);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

ArrowRight.onclick = function () {
  plusSlides(1);
};

ArrowLeft.onclick = function () {
  plusSlides(-1);
};

const dots = document.getElementsByClassName('reviews-dot');
for (let i = 0; i < dots.length; i++) {
  dots[i].onclick = function () {
    currentSlide(i + 1);
  };
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('reviews-slide');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';

  const dots = document.getElementsByClassName('reviews-dot');
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace('active', '');
    dots[i].style.display = 'none';
    dots[i].style.order = 0;
    if (windowSize < 768) {
      dots[i].style.margin = 0;
    }
  }

  dots[slideIndex - 1].className += ' active';

  if (windowSize < 768) {
    if (slideIndex == 1) {
      dots[dots.length - 1].style.display = 'block';
      dots[dots.length - 1].style.order = -1;
      dots[dots.length - 1].style.margin = '0 10px 0 0';

      dots[0].style.display = 'block';
      dots[0].style.margin = '0 10px 0 0';

      dots[1].style.display = 'block';
    } else if (slideIndex == dots.length) {
      dots[dots.length - 2].style.display = 'block';
      dots[dots.length - 2].style.margin = '0 10px 0 0';

      dots[dots.length - 1].style.display = 'block';
      dots[dots.length - 1].style.margin = '0 10px 0 0';

      dots[0].style.display = 'block';
      dots[0].style.order = 99;
    } else {
      dots[slideIndex - 2].style.display = 'block';
      dots[slideIndex - 2].style.margin = '0 10px 0 0';

      dots[slideIndex - 1].style.display = 'block';
      dots[slideIndex - 1].style.margin = '0 10px 0 0';

      dots[slideIndex].style.display = 'block';
    }
  } else {
    for (let i = 0; i < dots.length; i++) {
      dots[i].style.display = 'block';
    }
  }
}
