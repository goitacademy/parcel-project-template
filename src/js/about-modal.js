(() => {
    const aboutBtnRef = document.querySelector('[data-about-modal-open]');
    const aboutModalRef = document.querySelector('[data-about-modal]');
    const aboutBtnClose = document.querySelector('[data-about-modal-close]');
  
    aboutBtnRef.addEventListener('click', () => {
      aboutModalRef.classList.toggle('is-hidden');
    });
  
    aboutBtnClose.addEventListener('click', () => {
      aboutModalRef.classList.toggle('is-hidden');
    });
  })();
  