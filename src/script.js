$(document).ready(function () {
  $slideshow=$('.slider').slick({
    arrows: false,
    dots:true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    speed: 1000,
    easing: 'ease',
      }), $('.slider').click(function () { $slideshow.slick("slickNext") })
});
