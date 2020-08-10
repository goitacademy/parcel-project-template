// (() => {
//   const refs = {
//     menuBtn: document.querySelector('[data-menu-button]'),
//     goLink: document.querySelector('[data-menu-link]'),
//     // closeBtn2: document.querySelector('[data-menu-close-2]'),
//     // closeBtn3: document.querySelector('[data-menu-close-3]'),
//     // closeBtn4: document.querySelector('[data-menu-close-4]'),
//     // closeBtn5: document.querySelector('[data-menu-close-5]'),
//     mobileMenu: document.querySelector('[data-backdrop]'),
//     menuInner: document.querySelector('[data-menu-inner]'),
//   };

//   refs.menuBtn.addEventListener('click', () => {
//     const expanded = refs.menuBtn.getAttribute('aria-expanded') === 'true' || false;

//     refs.menuBtn.classList.toggle('is-open');
//     refs.menuBtn.setAttribute('aria-expanded', !expanded);

//     refs.mobileMenu.classList.toggle('is-visible');
//     refs.menuInner.classList.toggle('is-open');
//     document.body.classList.toggle('modal-open');
//   });

//   refs.goLink.addEventListener('click', () => {
//     const expanded = refs.menuBtn.getAttribute('aria-expanded') === 'true' || false;

//     refs.menuBtn.classList.toggle('is-open');
//     refs.menuBtn.setAttribute('aria-expanded', !expanded);

//     refs.mobileMenu.classList.toggle('is-visible');
//     refs.menuInner.classList.toggle('is-open');
//     document.body.classList.toggle('modal-open');
//   });

//   // refs.closeBtn2.addEventListener('click', () => {
//   //   const expanded = refs.menuBtn.getAttribute('aria-expanded') === 'true' || false;

//   //   refs.menuBtn.classList.toggle('is-open');
//   //   refs.menuBtn.setAttribute('aria-expanded', !expanded);

//   //   refs.mobileMenu.classList.toggle('is-visible');
//   //   refs.sideBar.classList.toggle('is-open');
//   //   document.body.classList.toggle('modal-open');
//   // });

//   // refs.closeBtn3.addEventListener('click', () => {
//   //   const expanded = refs.menuBtn.getAttribute('aria-expanded') === 'true' || false;

//   //   refs.menuBtn.classList.toggle('is-open');
//   //   refs.menuBtn.setAttribute('aria-expanded', !expanded);

//   //   refs.mobileMenu.classList.toggle('is-visible');
//   //   refs.sideBar.classList.toggle('is-open');
//   //   document.body.classList.toggle('modal-open');
//   // });

//   // refs.closeBtn4.addEventListener('click', () => {
//   //   const expanded = refs.menuBtn.getAttribute('aria-expanded') === 'true' || false;

//   //   refs.menuBtn.classList.toggle('is-open');
//   //   refs.menuBtn.setAttribute('aria-expanded', !expanded);

//   //   refs.mobileMenu.classList.toggle('is-visible');
//   //   refs.sideBar.classList.toggle('is-open');
//   //   document.body.classList.toggle('modal-open');
//   // });

//   // refs.closeBtn5.addEventListener('click', () => {
//   //   const expanded = refs.menuBtn.getAttribute('aria-expanded') === 'true' || false;

//   //   refs.menuBtn.classList.toggle('is-open');
//   //   refs.menuBtn.setAttribute('aria-expanded', !expanded);

//   //   refs.mobileMenu.classList.toggle('is-visible');
//   //   refs.sideBar.classList.toggle('is-open');
//   //   document.body.classList.toggle('modal-open');
//   // });
// })();

// // const anchors = document.querySelectorAll('a[href*="#"]');

// // for (let anchor of anchors) {
// //   anchor.addEventListener('click', function (e) {
// //     e.preventDefault();

// //     const blockID = anchor.getAttribute('href').substr(1);

// //     document.getElementById(blockID).scrollIntoView({
// //       behavior: 'smooth',
// //       block: 'start',
// //     });
// //   });
// // }

(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu-inner]');
  const mobileBackdropRef = document.querySelector('[data-backdrop]');
  const body = document.querySelector('body');
  const toggleMenu = () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    menuBtnRef.classList.toggle('is-open');
    body.classList.toggle('scroll-hidden');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
    mobileBackdropRef.classList.toggle('is-visible');
  };
  menuBtnRef.addEventListener('click', () => {
    toggleMenu();
  });
  mobileMenuRef.addEventListener('click', ({ target }) => {
    target.getAttribute('data-menu-link') === '' && toggleMenu();
  });
})();
