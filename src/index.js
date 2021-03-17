import './modal';
import './sass/main.scss';

(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileBtnClose = document.querySelector('[data-menu-close]');

  const BtnClose = document.querySelector('[bat-close]');
  const MenuRef = document.querySelector('[bat-ref]');

  const idexit1 = document.querySelector('[data-id-exit1]');
  const idexit2 = document.querySelector('[data-id-exit2]');
  const idexit3 = document.querySelector('[data-id-exit3]');
  const idexit4 = document.querySelector('[data-id-exit4]');
  const idexit5 = document.querySelector('[data-id-exit5]');


  menuBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');

    BtnClose.classList.toggle('bat-close');
    MenuRef.classList.toggle('bat-ref');
  });

  MenuRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');

    BtnClose.classList.toggle('bat-close');
    MenuRef.classList.toggle('bat-ref');
  });

  idexit1.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');

    BtnClose.classList.toggle('bat-close');
    MenuRef.classList.toggle('bat-ref');
  });
  idexit2.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');

    BtnClose.classList.toggle('bat-close');
    MenuRef.classList.toggle('bat-ref');
  });
  idexit3.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');

    BtnClose.classList.toggle('bat-close');
    MenuRef.classList.toggle('bat-ref');
  });
  idexit4.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');

    BtnClose.classList.toggle('bat-close');
    MenuRef.classList.toggle('bat-ref');
  });
  idexit5.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');

    BtnClose.classList.toggle('bat-close');
    MenuRef.classList.toggle('bat-ref');
  });

  mobileBtnClose.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');

    BtnClose.classList.toggle('bat-close');
    MenuRef.classList.toggle('bat-ref');
  });
})();

$(document).ready(function () {
  $('#menu1').on('click', 'a', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });
});


$(document).ready(function () {
  $('#menu2').on('click', 'a', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });
});


$('.single-item').slick({
  autoplay: true,
  arrows: false,
  dots: true,
  dotsClass: 'slick-dots',
});
