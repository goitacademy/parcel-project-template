import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from "./gallery-items.js";

const containerGallaryDivRef = document.querySelector(".gallery");
const marcupRef = createGellery(galleryItems);
containerGallaryDivRef.insertAdjacentHTML("beforeend", marcupRef);

function createGellery(event) {
  return event
    .map(({ preview, original, description }) => {
      return `<a 
      class="gallery__item"
      href="${original}">
  <img
  class="gallery__image"
  src="${preview}" 
  alt="${description}" />
</a>
`;
    })
    .join("");
}

containerGallaryDivRef.addEventListener("click", modalImg);

var modalImg = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captions: true,
  captionType: "attr",
  captionPosition: "bottom",
  captionDelay: 250,
});
