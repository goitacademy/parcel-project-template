;(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]")
  const mobileMenuRef = document.querySelector("[data-menu]")
  const listMenuRef = document.querySelector("[data-menu-list]")

  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false

    menuBtnRef.classList.toggle("is-open")
    menuBtnRef.setAttribute("aria-expanded", !expanded)

    mobileMenuRef.classList.toggle("is-open")
  })
listMenuRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false

    if (window.screen.width < 1200) {
    menuBtnRef.classList.toggle("is-open")
    menuBtnRef.setAttribute("aria-expanded", !expanded)

    mobileMenuRef.classList.toggle("is-open")
  
}
})
  
})()