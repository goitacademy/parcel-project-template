(() => {
        const refs = {
          openModalBtn: document.querySelector('[ice-cream-data-modal-open]'),
          closeModalBtn: document.querySelector('[ice-cream-data-modal--close]'),
          modal: document.querySelector('[ice-cream-data-modal]'),
        };

        refs.openModalBtn.addEventListener('click', toggleModal);
        refs.closeModalBtn.addEventListener('click', toggleModal);

        function toggleModal() {
          refs.modal.classList.toggle('is-hidden');
        }

})();
      (() => {
        const refs = {
          openModalBtn: document.querySelector('[ice-coffee-data-modal-open]'),
          closeModalBtn: document.querySelector('[ice-coffee-data-modal-close]'),
          modal: document.querySelector('[ice-coffee-data-modal]'),
        };

        refs.openModalBtn.addEventListener('click', toggleModal);
        refs.closeModalBtn.addEventListener('click', toggleModal);

        function toggleModal() {
          refs.modal.classList.toggle('is-hidden');
        }

})();
      (() => {
        const refs = {
          openModalBtn: document.querySelector('[milkshakes-data-modal-open]'),
          closeModalBtn: document.querySelector('[milkshakes-data-modal-close]'),
          modal: document.querySelector('[milkshakes-data-modal]'),
        };

        refs.openModalBtn.addEventListener('click', toggleModal);
        refs.closeModalBtn.addEventListener('click', toggleModal);

        function toggleModal() {
          refs.modal.classList.toggle('is-hidden');
        }

      })();