(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-open-ice-cream-modal]"),
        closeModalBtn: document.querySelector("[data-close-ice-cream-modal]"),
        backdrop: document.querySelector("[data-backdrop-ice-cream]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    refs.backdrop.addEventListener("click", logBackdropClick);

    function toggleModal() {
        refs.backdrop.classList.toggle("is-hidden");
    }

    function logBackdropClick() {
        console.log("Это клик в бекдроп");
    }

  })();