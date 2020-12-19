(() => {
  const refs = {
    firstButton: document.querySelector('[first-button]'),
    secondButton: document.querySelector('[second-button]'),
    thirdButton: document.querySelector('[third-button]'),
    firstReview: document.querySelector('[firts-review]'),
    secondReview: document.querySelector('[second-review]'),
    thirdReview: document.querySelector('[third-review]')
  };

    refs.firstButton.addEventListener('click', toggleModal_1);
    refs.secondButton.addEventListener('click', toggleModal_2);
    refs.thirdButton.addEventListener('click', toggleModal_3);

    function toggleModal_1() {
        refs.firstButton.classList.toggle('active');
        refs.firstReview.classList.toggle('centered');
        refs.secondReview.classList.toggle('rigth');
        refs.thirdReview.classList.toggle('rigth');
    }
        
    function toggleModal_2() {
        refs.secondButton.classList.toggle('active');
        refs.secondReview.classList.toggle('centered');
        refs.firstReview.classList.toggle('left');
        refs.thirdReview.classList.toggle('rigth');
    }
        
    function toggleModal_3() {
        refs.thirdButton.classList.toggle('active');
        refs.thirdReview.classList.toggle('centered');
        refs.firstButton.classList.toggle('left');
        refs.secondReview.classList.toggle('left');
    }
})();