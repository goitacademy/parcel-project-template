const navLinks = document.querySelector('#navlinks');
const navToggleBtn = document.querySelector('#navtogglebtn');

navtogglebtn.addEventListener('click', () => {
  navlinks.classList.toggle('active');
});
