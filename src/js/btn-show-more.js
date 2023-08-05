const btnShowMoreRight = document.querySelector('.show-more__right');
const btnShowMoreLeft = document.querySelector('.show-more__left');
const initialItems = document.querySelectorAll('.show-initial');
const hiddenItems = document.querySelectorAll('.hide-initial');
const moreInfo = document.querySelector('.more-info');
btnShowMoreLeft.addEventListener('click', () => {
  initialItems.forEach(item => {
    item.classList.add('hide-on-click');
    item.classList.remove('show-initial');
  });
  hiddenItems.forEach(item => {
    item.classList.remove('hide-on-click');
    item.classList.add('show-initial');
  });
});

btnShowMoreRight.addEventListener('click', () => {
  initialItems.forEach(item => {
    item.classList.remove('hide-on-click');
    item.classList.add('show-initial');
  });
  hiddenItems.forEach(item => {
    item.classList.add('hide-on-click');
    item.classList.remove('show-initial');
  });
  if (window.matchMedia('(min-width: 768px) and (max-width: 1027px)').matches) {
    moreInfo.scrollLeft += 100;
  }
});
