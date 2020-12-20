(() => {
        const refs = {
          openModalBtn: document.querySelector('[data-maps-modal-open]'),
          closeModalBtn: document.querySelector('[data-maps-modal-close]'),
          modal: document.querySelector('[data-maps-modal]'),
        };

        refs.openModalBtn.addEventListener('click', toggleModal);
        refs.closeModalBtn.addEventListener('click', toggleModal);

        function toggleModal() {
          refs.modal.classList.toggle('is-hidden');
        }
      })();