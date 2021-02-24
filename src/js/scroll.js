
// Скрипт Masonry

import Masonry from 'masonry-layout';
window.onload = () => {
  const grid = document.querySelector('.gallery');
  const masonry = new Masonry(grid, {
    itemSelector: '.gallery-image',
    gutter: 3,
    originLeft: false,
    originTop: false,
    horizontalOrder: true,
    fitWidth: true,
  });
};
