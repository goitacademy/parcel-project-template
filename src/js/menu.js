//  (() => {
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

//      $('.menu__backdrop, .menu__container').click(function () {
//       mobileMenuRef.classList.remove('is-open'),
//         menuBtnRef.classList.remove('is-open');
//     });
   
//   });
// })();
(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
  
})();
