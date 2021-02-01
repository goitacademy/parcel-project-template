// Скрипт для открытия и закрытия мобильного и планшетного меню
// Пока закомментил атрибуты доступности, они не обязательны, добавлю позже

(() => {
  const menuBtnOpen = document.querySelector("[data-menu-button-open]");
  const menuBtnClose = document.querySelector("[data-menu-button-close]");
  const mobileMenuRef = document.querySelector("[data-menu-mobile]");
  const tabletMenuRef = document.querySelector("[data-menu-tablet]");

  // MOBILE and TABLET Menu Open
  menuBtnOpen.addEventListener("click", () => {
    // const expanded =
    //   menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    // menuBtnRef.classList.toggle("is-open");
    // menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.add("is-open");
    tabletMenuRef.classList.add("is-open");
  });
  // MOBILE and TABLET Menu Close
  menuBtnClose.addEventListener("click", () => {
    // const expanded =
    //   menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    // menuBtnRef.classList.toggle("is-open");
    // menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.remove("is-open");
    tabletMenuRef.classList.remove("is-open");
  });
})();