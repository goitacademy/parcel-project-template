// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
import { galleryItems } from './gallery-items.js';

// Change code below this line

// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";


console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryList = createGalleryCardsItem(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryList);


 function createGalleryCardsItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__img"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
.join("");
 }




