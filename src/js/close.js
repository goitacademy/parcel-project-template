const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');

// Get the modal window element
const modal = document.querySelector('.mobile-menu');

// Loop through each mobile menu link element and add a click event listener
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Check if the modal window is currently open
    if (modal.classList.contains('is-open')) {
      // Close the modal window
      modal.classList.remove('is-open');
    }
  });
});