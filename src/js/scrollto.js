// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]');

// Цикл по всем ссылкам
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href')
      ? anchor.getAttribute('href')
      : 'body';
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
// Возврат наверх
jQuery(document).ready(function () {
  var btn = $('#button');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });
});
var btn = $('#button');
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
if ($(window).scrollTop() > 300) {
  btn.addClass('show');
} else {
  btn.removeClass('show');
}
if ($(window).scrollTop() > 300) {
  btn.addClass('show');
} else {
  btn.removeClass('show');
}
btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});
