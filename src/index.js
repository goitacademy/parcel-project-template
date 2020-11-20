import "./sass/main.scss";

/* --------mobile MENU------------- */
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const menuBlockRef = document.querySelector("[data-menu-block]");
  const headerRef = document.querySelector("[data-header]");
  const bodyRef = document.querySelector("body");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    menuBtnRef.classList.toggle("is-open");
      menuBlockRef.classList.toggle("is-open");
      menuBlockRef.classList.toggle("is-close");
    // menuBlockRef.classList.toggle("container");
    //   headerRef.classList.toggle("is-open");
      bodyRef.classList.toggle("mobile-menu-open");
      headerRef.classList.toggle("mobile-menu-open");
      headerRef.classList.toggle("mobile-menu-close");
  });
/* =========================================== */