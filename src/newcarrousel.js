const slides = document.querySelectorAll(".slide");
let totalSlides = slides.length;
let counter = 0;
const slideNumberElement = document.querySelector('.slide-number');

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
  if (counter === 0) {
    counter = totalSlides - 1; // Go to the last photo
  } else {
    counter--;
  }
  slideImage();
  updateSlideNumber();
};

const goNext = () => {
  if (counter === totalSlides - 1) {
    counter = 0; // Go to the first photo
  } else {
    counter++;
  }
  slideImage();
  updateSlideNumber();
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

const updateSlideNumber = () => {
  let counterDisplay = counter + 1;
  let totalSlidesDisplay = totalSlides;

  if (totalSlides < 10) {
    totalSlidesDisplay = "0" + totalSlides;
  }

  if (counterDisplay < 10) {
    counterDisplay = "0" + counterDisplay;
  }

  slideNumberElement.textContent = `${counterDisplay} - ${totalSlidesDisplay}`;
};

updateSlideNumber(); // Update slide number initially
