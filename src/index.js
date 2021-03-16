
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


import './modal';

$(document).ready(function(){
  $('.customer-reviews__wrappers').slick();
});