// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const getGallery = document.querySelector("div.gallery");

const addList = galleryItems
  .map(
    ({
      description,
      original,
      preview,
    }) =>
`<div class="gallery-item"><a class="gallery__link" href="${original}">
<img class="gallery__image"
src="${preview}" 
data-source="${original}" 
alt="${description}"  >
</a></div>`
  )
  .join("");
getGallery.insertAdjacentHTML("afterbegin", addList);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250,
  navText: ["❰", "❱"],
});
