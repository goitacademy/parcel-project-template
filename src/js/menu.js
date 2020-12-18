// (() => {
//   const menuBtnRef = document.querySelector("[data-menu-button]");
//   const mobileMenuRef = document.querySelector("[data-menu]");

//   const openStateAnimate = 'animate__fadeInRight';
//   const closeStateAnimate = 'animate__fadeOutRight';

//   const element = document.querySelector('[data-menu]');
//   element.classList.add('animate__animated', openStateAnimate);

//   menuBtnRef.addEventListener("click", () => {
//     const expanded =
//       menuBtnRef.getAttribute("aria-expanded") === "true" || false;

//     if(expanded){
//       element.classList.remove(openStateAnimate);
//       element.classList.add(closeStateAnimate);
//     }else{
//       element.classList.remove(closeStateAnimate);
//       element.classList.add(openStateAnimate);
//     }

//     menuBtnRef.classList.toggle("is-open");
//     menuBtnRef.setAttribute("aria-expanded", !expanded);

//     if (!mobileMenuRef.classList.contains('is-open')) { 
//       mobileMenuRef.classList.toggle("is-open");
//     } 
//   });
// })();

(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  const heroRef = document.querySelector('[data-hero]');

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    // heroRef.classList.toggle('is-open');
  });
})();