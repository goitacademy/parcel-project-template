(() => {
    const refs = {
        openModalBtn: document.querySelector('[fra-modal-open]'),
        closeModalBtn: document.querySelector('[fra-modal-close]'),
        modal: document.querySelector('[fra-modal]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
})();