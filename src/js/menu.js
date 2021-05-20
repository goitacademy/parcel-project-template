openclose = () => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");

    const expanded =
        menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    document.body.classList.toggle('modal-open')

    mobileMenuRef.classList.toggle("is-open");
}

(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    menuBtnRef.addEventListener("click", openclose);
})();

(() => {
    menuItems = document.querySelectorAll(".anchor-link")
    Array.from(menuItems).map(item => item.addEventListener("click", openclose))

})();


