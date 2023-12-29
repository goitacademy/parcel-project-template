const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const scrollIndicator = document.querySelector('.scroll-indicator aside');

let currentIndex = 0;
const totalImages = images.length;

// Initial active indicator
scrollIndicator.children[currentIndex].classList.add('active');

// Function to update scroll indicator
function updateIndicator() {
    scrollIndicator.querySelector('.active').classList.remove('active');
    scrollIndicator.children[currentIndex].classList.add('active');
}

// Button event listeners
nextBtn.addEventListener('click', () => {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
        carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateIndicator();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateIndicator();
    }
});

// Scroll indicator click event
scrollIndicator.addEventListener('click', (e) => {
    if (e.target.tagName === 'DIV') {
        currentIndex = [...scrollIndicator.children].indexOf(e.target);
        carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateIndicator();
    }
});