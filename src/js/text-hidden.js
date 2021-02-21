// (() => {
//     const iconBtnRef = document.querySelector("[data-text-button]");
//     const textFirstItem = document.querySelector("[data-mobile-text]");
//     const textFirstItemTablet = document.querySelector("[data-text]");

//     iconBtnRef.addEventListener("click", () => {
//         const expanded =
//             iconBtnRef.getAttribute("aria-expanded") === "true" || false;
        
//         iconBtnRef.classList.toggle("is-open");
//         iconBtnRef.setAttribute("aria-expanded", !expanded);

//         textFirstItem.classList.toggle("is-open");
//         textFirstItemTablet.classList.toggle("is-open");
//     });
// })();

// (() => {
//     const iconBtnSecRef = document.querySelector("[data-text-button-sec]");
//     const textSecItem = document.querySelector("[data-mobile-texts]");
//     const textSecItemTablet = document.querySelector("[data-texts]");

//     iconBtnSecRef.addEventListener("click", () => {
//         const expanded =
//             iconBtnSecRef.getAttribute("aria-expanded") === "true" || false;
        
//         iconBtnSecRef.classList.toggle("is-open");
//         iconBtnSecRef.setAttribute("aria-expanded", !expanded);

//         textSecItem.classList.toggle("is-open");
//         textSecItemTablet.classList.toggle("is-open");
//     });
// })();

// (() => {
//     const iconBtnThRef = document.querySelector("[data-text-button-th]");
//     const textThItem = document.querySelector("[data-mobile-textth]");
//     const textThItemTablet = document.querySelector("[data-textth]");

//     iconBtnThRef.addEventListener("click", () => {
//         const expanded =
//             iconBtnThRef.getAttribute("aria-expanded") === "true" || false;
        
//         iconBtnThRef.classList.toggle("is-open");
//         iconBtnThRef.setAttribute("aria-expanded", !expanded);

//         textThItem.classList.toggle("is-open");
//         textThItemTablet.classList.toggle("is-open");
//     });
// })();


// tablet & desctop

$('.products__button').on('click', function () {
        if ($(this).prev().is(':visible')) {
          $(this).prev().hide('slow');
        } else {
          $(this).prev().show('slow');
        }
      });
      $('.products__button').on('click', function () {
        this.classList.toggle('rotate');
      });