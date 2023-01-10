// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const imageGallery = createImageGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imageGallery);


function createImageGallery(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link"href="${original}">
 <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>`
    })
        .join("")
}

new SimpleLightbox('.gallery a', {
	captionDelay: 250
})