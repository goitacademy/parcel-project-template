// Add imports above this line
import { galleryItems } from './gallery-items';
import simplelightbox from "simplelightbox";  
import "simplelightbox/dist/simple-lightbox.min.css";



// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

function createGalleryItem(items) {
  return items
    .map(
      (item) => `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
 </li>`
    )
    .join("");
}

const galleryItemsEl = createGalleryItem(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryItemsEl);

galleryEl.addEventListener("click", openImage);

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionType: "alt",
});

function openImage(event) {
  event.preventDefault();
  if (event.target.tagName === "IMG") {
    galleryEl.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        instance.close();
      }
    });
  }
}
