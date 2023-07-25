const btnShowMore = document.getElementById('show-more');
const hiddenItems = document.querySelectorAll('.hide-on-mobile');
btnShowMore.addEventListener('click', showMore);
function showMore() {
  hiddenItems.forEach(item => {
    item.classList.remove('hide-on-mobile');
    item.classList.add('show-on-mobile');
  });
}
document.getElementById('show-more').addEventListener('click', function () {
  const hiddenItems = document.querySelectorAll('.hide-on-mobile');
  hiddenItems.forEach(item => {
    item.classList.remove('hide-on-mobile');
    item.classList.add('show-on-mobile');
  });
});
