// (function() {
//     const slidesContainer = document.getElementById("slides-container");
//     const slidesCount = slidesContainer.childElementCount;
//     const slides = Array.from(slidesContainer.querySelectorAll('.slide'));

//     let selectedSlideIndex = 0;

//     console.error(slidesContainer.clientWidth);
//     console.error(slides.length);
//     // console.info(slides)
//     // console.info(slides.length)

//     const prevButton = document.getElementById("slide-arrow-prev");
//     const nextButton = document.getElementById("slide-arrow-next");

    // nextButton.addEventListener("click", () => {
    //     selectedSlideIndex = selectedSlideIndex === slides.length - 1 ? 0 : selectedSlideIndex + 1;
    //     // slidesContainer.scrollLeft = selectedSlideIndex * slidesContainer.clientWidth;
    //     slides.map(function(slide, index) {
    //         slide.style.display = index === selectedSlideIndex ? 'block' : 'none';
    //     })
    // });

//     prevButton.addEventListener("click", () => {
//         selectedSlideIndex = selectedSlideIndex === 0 ? slides.length - 1 : selectedSlideIndex - 1;
//         // slidesContainer.scrollLeft = selectedSlideIndex * slidesContainer.clientWidth;
//         slides.map(function(slide, index) {
//             slide.style.display = index === selectedSlideIndex ? 'block' : 'none';
//         })
//     });


// })();

 