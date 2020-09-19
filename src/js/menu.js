(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    menuLink1: document.querySelector('[link1]'),
    menuLink2: document.querySelector('[link2]'),
    menuLink3: document.querySelector('[link3]'),
    menuLink4: document.querySelector('[link4]'),
    menuLink5: document.querySelector('[link5]'),
  };
  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  refs.menuLink1.addEventListener('click', toggleModal);
  refs.menuLink2.addEventListener('click', toggleModal);
  refs.menuLink3.addEventListener('click', toggleModal);
  refs.menuLink4.addEventListener('click', toggleModal);
  refs.menuLink5.addEventListener('click', toggleModal);
  function toggleModal() {
    document.body.classList.toggle('data-menu-open');
    refs.menu.classList.toggle('is-open');
    document.body.classList.toggle('menu-open');
  }
})();
