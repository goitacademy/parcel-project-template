// Скрипт для открытия и закрытия мобильного и планшетного меню
// Пока без атрибутов доступности, как делал Репета, добавлю позже

(() => {
  const menuBtnOpen = document.querySelector("[data-menu-button-open]");
  const menuBtnClose = document.querySelector("[data-menu-button-close]");
  const itemClose = document.querySelectorAll("[close-menu]");
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
  for (i = 0; i < 4; i++) {
    itemClose[i].addEventListener("click", () => {
 
      mobileMenuRef.classList.remove("is-open");
      tabletMenuRef.classList.remove("is-open");
    });
  }

})();



// var highlightedItems = userList.querySelectorAll(".highlighted");

// highlightedItems.forEach(function(userItem) {
//   deleteUser(userItem);
// });