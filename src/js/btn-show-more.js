const btnShowMoreRight = document.querySelector('.show-more-right');
const btnShowMoreLeft = document.querySelector('.show-more-left');
const initialItems = document.querySelector('.show-initial');
const hiddenItems = document.querySelector('.hide-initial');
btnShowMoreRight.forEach(btn => {
  btn.addEventListener('click', () => {
    initialItems.forEach(item => {
      item.classList.add('hide-on-click');
      item.classList.remove('show-initial');
    });
    hiddenItems.forEach(item => {
      item.classList.add('show-initial');
      item.classList.remove('hide-on-click');
    });
  });
});

btnShowMoreLeft.forEach(btn => {
  btn.addEventListener('click', () => {
    initialItems.forEach(item => {
      item.classList.remove('hide-on-click');
      item.classList.add('show-initial');
    });
    hiddenItems.forEach(item => {
      item.classList.remove('show-initial');
      item.classList.add('hide-on-click');
    });
  });
});
