(() => {
   const refs = {
     openMenuBtn: document.querySelector('[data-menu-open]'),
     closeMenuBtn: document.querySelector('[data-menu-close]'),
     menu: document.querySelector('[data-tablet-menu]'),
     buttonTablet: document.querySelector('[data-button-tablet]'),
   };
   refs.openMenuBtn.addEventListener('click', toggleModal);
   refs.closeMenuBtn.addEventListener('click', toggleModal);
   function toggleModal() {
     refs.menu.classList.toggle('is-open');
     refs.buttonTablet.classList.toggle('is-hidden');
   }
 })();