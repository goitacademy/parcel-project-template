// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

const galleryBox = document.querySelector('ul.gallery');

for (const item of galleryItems) {
  const imgGallery = `<li class="gallery__item"><a class="gallery__link" href="${item.original}">
     <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a></li>`;
  galleryBox.insertAdjacentHTML('beforeend', imgGallery);
}
const lightboxInstance = new SimpleLightbox('.gallery__item a', {
  captions: true,
  captionDelay: 250,
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
});

// Change code below this line

console.log(galleryItems);