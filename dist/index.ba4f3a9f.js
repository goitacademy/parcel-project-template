(()=>{
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
        openBanner: document.querySelector("[banner-open]"),
        closeBanner: document.querySelector("[banner-close]"),
        banner: document.querySelector("[banner-display]")
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.openBanner.addEventListener("click", toggleBanner);
    refs.closeBanner.addEventListener("click", toggleBanner);
    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
    function toggleBanner() {
        refs.banner.classList.toggle("is-display");
    }
})();

//# sourceMappingURL=index.ba4f3a9f.js.map
