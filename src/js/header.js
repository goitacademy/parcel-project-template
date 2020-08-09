(() => {
  const refs = {
    menuBtn: document.querySelector('[data-menu-button]'),
    closeBtn1: document.querySelector('[data-menu-close-1]'),
    closeBtn2: document.querySelector('[data-menu-close-2]'),
    closeBtn3: document.querySelector('[data-menu-close-3]'),
    closeBtn4: document.querySelector('[data-menu-close-4]'),
    closeBtn5: document.querySelector('[data-menu-close-5]'),
    mobileMenu: document.querySelector('[data-menu]'),
    sideBar: document.querySelector('[data-sideBar]'),
  };

  refs.menuBtn.addEventListener('click', () => {
    const expanded = refs.menuBtn.getAttribute('aria-expanded') === 'true' || false;

    refs.menuBtn.classList.toggle('is-open');
    refs.menuBtn.setAttribute('aria-expanded', !expanded);

    refs.mobileMenu.classList.toggle('is-visible');
    refs.sideBar.classList.toggle('is-open');
    document.body.classList.toggle('modal-open');
  });

  refs.closeBtn1.addEventListener('click', () => {
    const expanded = refs.menuBtn.getAttribute('aria-expanded') === 'true' || false;

    refs.menuBtn.classList.toggle('is-open');
    refs.menuBtn.setAttribute('aria-expanded', !expanded);

    refs.mobileMenu.classList.toggle('is-visible');
    refs.sideBar.classList.toggle('is-open');
    document.body.classList.toggle('modal-open');
  });

  refs.closeBtn2.addEventListener('click', () => {
    const expanded = refs.menuBtn.getAttribute('aria-expanded') === 'true' || false;

    refs.menuBtn.classList.toggle('is-open');
    refs.menuBtn.setAttribute('aria-expanded', !expanded);

    refs.mobileMenu.classList.toggle('is-visible');
    refs.sideBar.classList.toggle('is-open');
    document.body.classList.toggle('modal-open');
  });

  refs.closeBtn3.addEventListener('click', () => {
    const expanded = refs.menuBtn.getAttribute('aria-expanded') === 'true' || false;

    refs.menuBtn.classList.toggle('is-open');
    refs.menuBtn.setAttribute('aria-expanded', !expanded);

    refs.mobileMenu.classList.toggle('is-visible');
    refs.sideBar.classList.toggle('is-open');
    document.body.classList.toggle('modal-open');
  });

  refs.closeBtn4.addEventListener('click', () => {
    const expanded = refs.menuBtn.getAttribute('aria-expanded') === 'true' || false;

    refs.menuBtn.classList.toggle('is-open');
    refs.menuBtn.setAttribute('aria-expanded', !expanded);

    refs.mobileMenu.classList.toggle('is-visible');
    refs.sideBar.classList.toggle('is-open');
    document.body.classList.toggle('modal-open');
  });

  refs.closeBtn5.addEventListener('click', () => {
    const expanded = refs.menuBtn.getAttribute('aria-expanded') === 'true' || false;

    refs.menuBtn.classList.toggle('is-open');
    refs.menuBtn.setAttribute('aria-expanded', !expanded);

    refs.mobileMenu.classList.toggle('is-visible');
    refs.sideBar.classList.toggle('is-open');
    document.body.classList.toggle('modal-open');
  });
})();

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
