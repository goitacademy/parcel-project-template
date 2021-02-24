(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const modal = document.querySelector("[data-backdrop]");
  
    menuBtnRef.addEventListener("click", () => {
      const expanded =
        menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
      menuBtnRef.classList.toggle("is-open");
      menuBtnRef.setAttribute("aria-expanded", !expanded);
  
      mobileMenuRef.classList.toggle("is-open");
    });
  
  // $('html, body').animate(
  //   {
  //     scrollTop: $($(this).attr('#')).offset().top,
  //   },
  //   1000,
  //   'linear',
  // );

  $('a[href*="#menu"]').on('click', function (e) {
  e.preventDefault();

  const mobileMenuRef = document.querySelector('[data2-menu]');
  const menuBtnRef = document.querySelector('[data2-menu-button]');
  mobileMenuRef.classList.toggle('is-open');
  menuBtnRef.classList.toggle('is-open');

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    10000,
    'linear',
  );
});
    
  })();

// (() => {
//   const menuBtnRef = document.querySelector("[data-menu-button]");
//   const mobileMenuRef = document.querySelector("[data-menu]");
//   const modal = document.querySelector("[data-backdrop]");

//   menuBtnRef.addEventListener("click", () => {
//     const expanded =
//       menuBtnRef.getAttribute("aria-expanded") === "true" || false;
//     menuBtnRef.classList.toggle("is-open");
//     menuBtnRef.setAttribute("aria-expanded", !expanded);
//     mobileMenuRef.classList.toggle('is-open');//открывает меню
//     modal.classList.remove('is-hidden');//показывает бекдроп
//     document.body.classList.toggle('modal-open');

//     // $('.menu__backdrop, .menu__container').click(function () {
//     //     mobileMenuRef.classList.remove('is-open'),
//     //     menuBtnRef.classList.remove('is-open'),
//     //     document.body.classList.remove('modal-open'),
//     //     modal.classList.toggle('is-hidden'); 
//     // });

//   })()
// };