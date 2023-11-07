
let currentSlide = 0;
const slides = document.querySelectorAll(".image");
const imageCountElement = document.getElementById("imageCount");

function showSlide(index) {
    slides[currentSlide].style.transform = "translateX(-100%)";
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].style.transform = "translateX(0)";
    updateIndicator();
}

function updateIndicator() {
    imageCountElement.textContent = `Imagine ${currentSlide + 1} din ${slides.length}`;
}

function plusSlides(n) {
    showSlide(currentSlide + n);
}

updateIndicator();