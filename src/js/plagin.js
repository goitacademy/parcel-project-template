const btnOpen = document.querySelector('.btnOpen');
const btnClose = document.querySelector('.btnClose');
const header__menu = document.querySelector('.header__menu');
const header__btn = document.querySelector('.header__btn');
const nav__item = document.querySelector('nav__item');
function myFunction(){
    if (window.innerWidth >= 1200) {
      const tl = new TimelineMax({ paused: true });
      tl.timeScale(1);
      tl.to('h6', 0.3, { opacity: 0 })
        .to(btnOpen, 0.7, {
          x: -300,
          opacity: 0,
          ease: Power2.easeInOut,
        }, '-=0.5')
        .to(header__menu, 0.5, {
          x: 0,
          ease: Power2.easeInOut,
        }, '-=0.5')
        .to(btnClose, 0.7, {
          x: 0,
          opacity: 1,
          rotation: 360,
          ease: Power1.easeInOut,
        }, '-=0.5')
        .to(header__btn, 0.9, {
          x: 0,
          opacity: 1,
          rotation: 360,
          ease: Power1.easeInOut,
        }, '-=0.5')
        .staggerFrom('.nav__item', 0.2, {
          opacity: 1,
          x: 250,
          ease: Back.easeOut,
        }, 0.06, '-=0.18');
  }
}
window.on('resize', function (e) {
  myFunction();
})
  openMenu = () => tl.play();
  closeMenu = () => tl.reverse();
  btnOpen.addEventListener('click', openMenu, false);
  btnClose.addEventListener('click', closeMenu, false);