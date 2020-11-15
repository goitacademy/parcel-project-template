// (() => {
//     const menuBtnRef = document.querySelector("[data-menu-open]");
//     const closeBtnRef = document.querySelector("[data-menu-close]");
//     const mobileMenuRef = document.querySelector("[data-menu");

//      menuBtnRef.addEventListener("click", () => {
//         const expanded =
//             menuBtnRef.getAttribute("aria-expanded") === "true" || false;
//         menuBtnRef.classList.toggle("is-open");
//         menuBtnRef.setAttribute("aria-expanded", !expanded);

//         mobileMenuRef.classList.toggle("is-open");
//      });
    
//     closeBtnRef.addEventListener("click", () => {
//         const expanded =
//             menuBtnRef.getAttribute("aria-expanded") === "true" || false;
//         menuBtnRef.classList.toggle("is-open");
//         menuBtnRef.setAttribute("aria-expanded", !expanded);

//         mobileMenuRef.classList.toggle("is-open");
//     });
// })();

(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-menu-open]'),
      closeModalBtn: document.querySelector('[data-menu-close]'),
      modal: document.querySelector('[data-menu]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();