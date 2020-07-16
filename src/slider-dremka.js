(() => {
  const refs = {
    list: document.querySelector('[data-id="list"]'),
    items: document.querySelectorAll('[data-item]'),
    prevBtn: document.querySelector('[data-btn-prev]'),
    nextBtn: document.querySelector('[data-btn-next]'),
    radioBtns: document.querySelectorAll('[type="radio"]'),
    radioList: document.querySelector('[data-radio-list]'),
  };

  const getElByAtr = (listRefs, atr) =>
    [...listRefs].find(el => el.getAttribute(atr) === '');

  const slider = {
    intervalId: null,
    activeIndex: 0,
    isActive: false,

    start() {
      if (this.isActive) {
        return;
      }

      this.displayActiveItem();

      this.isActive = true;
      this.intervalId = setInterval(() => this.listingNext(), 3000);
    },

    stop() {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.isActive = false;
    },

    displayActiveItem() {
      refs.items[this.activeIndex].setAttribute('data-active', '');
      [...refs.items]
        .filter(el => !el.getAttribute('data-active'))
        .map(el => el.setAttribute('style', 'display: none'));

      refs.items[this.activeIndex].setAttribute('style', 'display: block');
    },

    setActiveItem() {
      const prevElem = getElByAtr(refs.items, 'data-active');
      const prevRadio = getElByAtr(refs.radioBtns, 'checked');

      prevElem.removeAttribute('data-active');
      prevElem.setAttribute('style', 'display: none');
      prevRadio.removeAttribute('checked');

      this.displayActiveItem();
      // refs.items[this.activeIndex].setAttribute('data-active', '');
      // [...refs.items]
      //   .filter(el => !el.getAttribute('data-active'))
      //   .map(el => el.setAttribute('style', 'display: block'));

      // refs.items[this.activeIndex].setAttribute('style', 'display: block');
      refs.radioBtns[this.activeIndex].setAttribute('checked', '');
    },

    listingNext() {
      this.activeIndex = this.activeIndex + 1;
      if (this.activeIndex === refs.items.length) {
        this.activeIndex = 0;
      }
      this.setActiveItem();
      console.log('this.activeIndex', this.activeIndex);
    },

    listingPrev() {
      this.activeIndex = this.activeIndex - 1;
      if (this.activeIndex === -1) {
        this.activeIndex = refs.items.length - 1;
      }
      this.setActiveItem();
      console.log('this.activeIndex', this.activeIndex);
    },

    // listingRadio({ target }) {
    //   const { name, value } = target;
    //   const activeRadio = value;
    //   console.log('name', name);
    //   // if (name === 'slider') {
    //   this.activeIndex = [...refs.radioList.children].findIndex(
    //     el => el === target.closest('[data-radio]'),
    //   );
    //   this.setActiveItem();
    //   // }
    //   console.log('this.activeIndex', this.activeIndex);
    // },
  };

  // slider.displayActiveItem.call(slider);

  refs.nextBtn.addEventListener('click', slider.listingNext.bind(slider));
  refs.prevBtn.addEventListener('click', slider.listingPrev.bind(slider));
  // refs.radioList.addEventListener('click', slider.listingRadio.bind(slider));

  // const onResize = () => {
  //   if (window.matchMedia('screen and (max-width: 479px)').matches) {
  //     slider.start();
  //   } else {
  //     slider.stop();
  //   }
  // };

  // window.addEventListener('load', () => slider.displayActiveItem());

  // listner for run slider
  window.addEventListener('load', () => {
    //   if (window.matchMedia('screen and (max-width: 479px)').matches) {
    slider.start();
    //   }
  });
  // listner for run slider -END
})();
// window.addEventListener('resize', onResize);
