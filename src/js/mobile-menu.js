(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const mobileBtnClose = document.querySelector("[data-menu-close]");
  
    menuBtnRef.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-open");
    })

    mobileBtnClose.addEventListener('click', () => {
      mobileMenuRef.classList.toggle("is-open");
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $(".mobile-menu"); // Элемент, клик по которому не должен приводить к закрытию. 
      if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) { // и не по его дочерним элементам
         $('.mobile-menu').removeClass('is-open');
          // $('.mobile-menu__background').removeClass('menu-bcg');
      }
    });
  })()

  