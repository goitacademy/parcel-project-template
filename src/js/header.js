let header = document.querySelector('.header'),
  scrollPrev = 0;

//$(window).scroll(function () {
document.addEventListener('scroll', function () {
  let scrolled = window.scrollY; //$(window).scrollTop();

  console.log({ scrolled, scrollPrev });
  if (scrolled > 100 && scrolled > scrollPrev) {
    header.classList.add('out');
  } else {
    header.classList.remove('out');
  }
  scrollPrev = scrolled;
});
