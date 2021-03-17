import './modal';
import './sass/main.scss';

(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileBtnClose = document.querySelector('[data-menu-close]');

  const BtnClose = document.querySelector('[bat-close]');
  const MenuRef = document.querySelector('[bat-ref]');

  const idExit1 = document.querySelector('[id-Exit1]');
  const idExit2 = document.querySelector('[id-Exit2]');
  const idExit3 = document.querySelector('[id-Exit3]');
  const idExit4 = document.querySelector('[id-Exit4]');
  const idExit5 = document.querySelector('[id-Exit5]');

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

  idExit1.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');

    BtnClose.classList.toggle('bat-close');
    MenuRef.classList.toggle('bat-ref');
  });
  idExit2.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');

    BtnClose.classList.toggle('bat-close');
    MenuRef.classList.toggle('bat-ref');
  });
  idExit3.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');

    BtnClose.classList.toggle('bat-close');
    MenuRef.classList.toggle('bat-ref');
  });
  idExit4.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');

    BtnClose.classList.toggle('bat-close');
    MenuRef.classList.toggle('bat-ref');
  });
  idExit5.addEventListener('click', () => {
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
