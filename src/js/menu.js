// Скрипт для открытия и закрытия мобильного и планшетного меню
// Пока без атрибутов доступности, как делал Репета, добавлю позже

(() => {
  const menuBtnOpen = document.querySelector("[data-menu-button-open]");
  const menuBtnClose = document.querySelector("[data-menu-button-close]");
  const itemClose = document.querySelector("[close-menu]");
  const mobileMenuRef = document.querySelector("[data-menu-mobile]");
  const tabletMenuRef = document.querySelector("[data-menu-tablet]");

  // MOBILE and TABLET Menu Open
  menuBtnOpen.addEventListener("click", () => {

    mobileMenuRef.classList.add("is-open");
    tabletMenuRef.classList.add("is-open");
  });
  // MOBILE and TABLET Menu Close
  menuBtnClose.addEventListener("click", () => {

    mobileMenuRef.classList.remove("is-open");
    tabletMenuRef.classList.remove("is-open");
  });
  // close on click menu item
  itemClose.addEventListener("click", () => {
 
    mobileMenuRef.classList.remove("is-open");
    tabletMenuRef.classList.remove("is-open");
  });
})();

