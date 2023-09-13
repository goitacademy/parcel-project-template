(() => {
    const buyNowModalOpenRef = document.querySelector('[data-buynow-btn-open]');
    const buyNowMobileModalOpenRef = document.querySelector('[data-buynow-btn-open-mobile]');
    const buyNowPopUpRef = document.querySelector('[data-buynow-popup]');
    const buyNowModalClose = document.querySelector('[data-buynow-btn-close]');
  
    buyNowMobileModalOpenRef.addEventListener('click', () => {
      buyNowPopUpRef.classList.toggle('is-hidden');
    });
  
    buyNowModalOpenRef.addEventListener('click', () => {
      buyNowPopUpRef.classList.toggle('is-hidden');
    });
  
    buyNowModalClose.addEventListener('click', () => {
      buyNowPopUpRef.classList.toggle('is-hidden');
    });
  })();
  