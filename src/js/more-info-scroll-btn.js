const rightArrow = document.querySelector('#moreInfo-right-btn');
const leftArrow = document.querySelector('#moreInfo-left-btn');
const moreInfoBlock = document.querySelector('.moreInfo__block');

rightArrow.addEventListener('click', scrollToLeft);
leftArrow.addEventListener('click', scrollToRight);

function scrollToLeft() {
  rightArrow.classList.add('moreInfo_scroll_arrow_hidden');
  leftArrow.classList.remove('moreInfo_scroll_arrow_hidden');
  moreInfoBlock.scroll({
    left: 550,
    behavior: 'smooth',
  });
}

function scrollToRight() {
  rightArrow.classList.remove('moreInfo_scroll_arrow_hidden');
  leftArrow.classList.add('moreInfo_scroll_arrow_hidden');
  moreInfoBlock.scroll({
    left: -550,
    behavior: 'smooth',
  });
}
