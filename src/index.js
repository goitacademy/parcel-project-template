import './sass/main.scss';

(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileBtnClose = document.querySelector("[data-menu-close]");
  
    const Btn1 = document.querySelector("[bat-0]");
    const Btn2 = document.querySelector("[bat-0]");
    const Btn3 = document.querySelector("[bat-0]");
    const Btn4 = document.querySelector("[bat-0]");
    const Btn5 = document.querySelector("[bat-0]");
    const Btn6 = document.querySelector("[bat-0]");
   
  
    menuBtnRef.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-open");

      Btn1.classList.toggle("bat-0");
      Btn2.classList.toggle("bat-0");
      Btn3.classList.toggle("bat-0");
      Btn4.classList.toggle("bat-0");
      Btn5.classList.toggle("bat-0");
      Btn6.classList.toggle("bat-0");
          })

    mobileBtnClose.addEventListener('click', () => {
      mobileMenuRef.classList.toggle("is-open");
      
      Btn1.classList.toggle("bat-0");
      Btn2.classList.toggle("bat-0");
      Btn3.classList.toggle("bat-0");
      Btn4.classList.toggle("bat-0");
      Btn5.classList.toggle("bat-0");
      Btn6.classList.toggle("bat-0");
     
      
    });
})()
  

