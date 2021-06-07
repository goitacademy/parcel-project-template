(() => {
    const refs = {
      openProductBtn: document.querySelector('[data-product-open]'),
      closeProductBtn: document.querySelector('[data-product-close]'),
      product: document.querySelector('[data-product]'),
    };
  
    refs.openProductBtn.addEventListener('click', toggleModal);
    refs.closeProductBtn.addEventListener('click', toggleModal);
  
    function toggleProduct() {
      document.body.classList.toggle("product-open");
      refs.product.classList.toggle('is-hidden');
    }
  })();