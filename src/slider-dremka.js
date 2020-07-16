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
      refs.radioBtns[this.activeIndex].setAttribute('checked', '');
    },

    listingNext() {
      this.activeIndex = this.activeIndex + 1;
      if (this.activeIndex === refs.items.length) {
        this.activeIndex = 0;
      }
      this.setActiveItem();
    },

    listingPrev() {
      this.activeIndex = this.activeIndex - 1;
      if (this.activeIndex === -1) {
        this.activeIndex = refs.items.length - 1;
      }
      this.setActiveItem();
    },
  };

  refs.nextBtn.addEventListener('click', slider.listingNext.bind(slider));
  refs.prevBtn.addEventListener('click', slider.listingPrev.bind(slider));

  // listner for run slider
  window.addEventListener('load', () => {
    slider.start();
  });
  // listner for run slider -END
})();
