(() => {
    const refs = {
        openModalBtn: document.querySelector('[local-modal-open]'),
        closeModalBtn: document.querySelector('[local-modal-close]'),
        modal: document.querySelector('[local-modal]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
})();