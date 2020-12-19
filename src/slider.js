(() => {
  const refs = {
    // adding parameters for the script
    firstButton: document.querySelector('[first-button]'),
    secondButton: document.querySelector('[second-button]'),
    thirdButton: document.querySelector('[third-button]'),
    firstReview: document.querySelector('[firts-review]'),
    secondReview: document.querySelector('[second-review]'),
    thirdReview: document.querySelector('[third-review]')
  };

  // actions when customer press the button
    refs.firstButton.addEventListener('click', toggleModal_1);
    refs.secondButton.addEventListener('click', toggleModal_2);
    refs.thirdButton.addEventListener('click', toggleModal_3);

  function toggleModal_1() {
    // placing active status icon after button was pressed
    refs.firstButton.classList.add('active');
    refs.secondButton.classList.remove('active');
    refs.thirdButton.classList.remove('active');

    // placing slider windows in a right order
    refs.firstReview.classList.remove('left');
    refs.firstReview.classList.add('centered');
    
    refs.secondReview.classList.remove('centered', 'left');
    refs.secondReview.classList.add('right');

    refs.thirdReview.classList.remove('centered');
    refs.thirdReview.classList.add('right');
    }
        
  function toggleModal_2() {
    // placing active status icon after button was pressed
    refs.firstButton.classList.remove('active');
    refs.secondButton.classList.add('active');
    refs.thirdButton.classList.remove('active');

    // placing slider windows in a right order
    refs.firstReview.classList.remove('centered');
    refs.firstReview.classList.add('left');
    
    refs.secondReview.classList.remove('right', 'left');
    refs.secondReview.classList.add('centered');

    refs.thirdReview.classList.remove('centered');
    refs.thirdReview.classList.add('right');
    }
        
  function toggleModal_3() {
    // placing active status icon after button was pressed
    refs.firstButton.classList.remove('active');
    refs.secondButton.classList.remove('active');
    refs.thirdButton.classList.add('active');

    // placing slider windows in a right order
    refs.firstReview.classList.remove('centered');
    refs.firstReview.classList.add('left');
    
    refs.secondReview.classList.remove('right', 'centered');
    refs.secondReview.classList.add('left');

    refs.thirdReview.classList.remove('right');
    refs.thirdReview.classList.add('centered');
    }
})();