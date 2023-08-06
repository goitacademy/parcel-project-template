// Get a reference to the DOM element with the ID 'right-arrow'
const rightArrow = document.querySelector('#right-arrow');

// Get a reference to the DOM element with the ID 'left-arrow'
const leftArrow = document.querySelector('#left-arrow');

// Get a reference to the DOM element with the class 'days-list'
const daysList = document.querySelector('.days-list');

// Add a click event listener to the right arrow element, calling the scrollToLeft function
rightArrow.addEventListener('click', scrollToLeft);

// Add a click event listener to the left arrow element, calling the scrollToRight function
leftArrow.addEventListener('click', scrollToRight);

// Function to scroll the 'daysList' element to the left
function scrollToLeft() {
  // Use the scroll method with 'behavior: 'smooth'' to scroll left by 160 pixels
  daysList.scroll({
    left: 160,
    behavior: 'smooth',
  });
}

// Function to scroll the 'daysList' element to the right
function scrollToRight() {
  // Use the scroll method with 'behavior: 'smooth'' to scroll right by 160 pixels (negative value)
  daysList.scroll({
    left: -160,
    behavior: 'smooth',
  });
}

// In summary, this code enables users to interact with a horizontal list of days by clicking arrow buttons to scroll the list left or right.
// The smooth scrolling behavior enhances the user experience and allows them to navigate through the list of days more easily.
