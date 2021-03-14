import './sass/main.scss';

(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const mobileBtnClose = document.querySelector("[data-menu-close]");


  
    const BtnClose = document.querySelector("[bat-close]");
    const MenuRef = document.querySelector("[bat-ref]");
  
    menuBtnRef.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-open");

      BtnClose.classList.toggle("bat-close");
      MenuRef.classList.toggle("bat-ref");
    })  
   
  
  
    MenuRef.addEventListener('click', () => {
      mobileMenuRef.classList.toggle("is-open");

      BtnClose.classList.toggle("bat-close");
      MenuRef.classList.toggle("bat-ref");  
      
    });
  
  
    mobileBtnClose.addEventListener('click', () => {
      mobileMenuRef.classList.toggle("is-open");

      BtnClose.classList.toggle("bat-close");
      MenuRef.classList.toggle("bat-ref");  
      
    });
  
  
})()


// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     document.body.classList.toggle("modal-open");
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();
import './modal';