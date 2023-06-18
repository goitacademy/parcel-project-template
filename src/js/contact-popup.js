(() => {
    const contactModalOpenRef = document.querySelector('[data-location-modal-open]');
    const contactPopUpRef = document.querySelector('[data-location-popup]');
    const contactModalClose = document.querySelector('[data-location-modal-close]');
  
    contactModalOpenRef.addEventListener('click', () => {
      contactPopUpRef.classList.toggle('is-open');
    });
  
    contactModalClose.addEventListener('click', () => {
      contactPopUpRef.classList.toggle('is-open');
    });
  })();
  