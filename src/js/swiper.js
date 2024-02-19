const totalSlides = document.getElementsByClassName("Slide").length;
let currentSlideIndex = 0;
showSlides();
function showSlides() {
  if (currentSlideIndex < totalSlides) {
    let slides = document.getElementsByClassName("Slide");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[currentSlideIndex].style.display = "block";
    currentSlideIndex++;
  } else {
    currentSlideIndex = 0;
  }
  setTimeout(showSlides, 2000);
}
function showSlidess() {
  const container = document.querySelector(".Slides-container");
  container.classList.add("hide-overflow");
  if (currentSlideIndex < totalSlides) {
    let slides = document.getElementsByClassName("Slide");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[currentSlideIndex].style.display = "block";
    currentSlideIndex++;
  } else {
    currentSlideIndex = 0;
  }
  setTimeout(showSlides, 2000);
  // Șterge clasa "hide-overflow" după ce slide-ul a fost schimbat
  setTimeout(() => {
    container.classList.remove("hide-overflow");
  }, 0);
}
