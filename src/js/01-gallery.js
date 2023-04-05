// Add imports above this line
import { galleryItems } from './gallery-items';
// Opisany w dokumentacji
import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

galleryItems.forEach(item => {
  const galleryImg = `<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image , lightbox"
    src="${item.preview}"
    data-source="${item.original}"
    title="${item.description}"
  />
</a>
</div>`;

  gallery.insertAdjacentHTML('beforeend', galleryImg);
});

var lightbox = new SimpleLightbox('.gallery__link', {
  captionSelector: 'img',
  captionDelay: 250,
});
lightbox.on('show.simplelightbox', function () {
  console.log('test');
});
lightbox.on('error.simplelightbox', function (e) {
  console.log(e); // some usefull information
});
