(() => {
    const franchiseModalOpenRef = document.querySelector('[data-franchise-btn-open]');
    const franchisePopUpRef = document.querySelector('[data-franchise-modal]');
    const franchiseModalClose = document.querySelector('[data-franchise-btn-close]');
  
    franchiseModalOpenRef.addEventListener('click', () => {
      franchisePopUpRef.classList.toggle('is-open');
    });
  
    franchiseModalClose.addEventListener('click', () => {
      franchisePopUpRef.classList.toggle('is-open');
    });
  })();
  