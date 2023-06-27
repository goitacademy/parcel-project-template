var slideIndex = 1;
var slideIndex2 = 1; // Adăugăm un nou index pentru slider-ul mySlides2
showSlides(slideIndex);
showSlides2(slideIndex2); // Apelăm funcția pentru slider-ul mySlides2
function plusSlides(n) {
  showSlides((slideIndex += n));
  showSlides2((slideIndex2 += n)); // Actualizăm index-ul pentru ambele slide-uri
}
function currentSlide(n) {
  showSlides((slideIndex = n));
  showSlides2((slideIndex2 = n)); // Actualizăm index-ul pentru ambele slide-uri
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}
function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides2');
  if (n > slides.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex2 - 1].style.display = 'block';
}
