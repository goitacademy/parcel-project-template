import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery');

galleryItems.forEach(image => {
  list.insertAdjacentHTML(
    'beforeend',
    `<li class="gallery__item"><a href="${image.original}"><img src="${image.preview}" alt="${image.description}" class="gallery__image" loading="lazy"></img></a></li>`
  );
});

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
