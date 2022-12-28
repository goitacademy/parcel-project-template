// Add imports above this line

import { galleryItems } from "./gallery-items";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

const refs = {
  imageContainer: document.querySelector(".gallery"),
  body: document.body,
};

function newgalleryItems(items) {
  return items
    .map(({ preview, description, original }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img loading="lazy" width="354" height="240"
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    })
    .join("");
}

const cardgalleryMarkup = newgalleryItems(galleryItems);
refs.imageContainer.insertAdjacentHTML("beforeend", cardgalleryMarkup);

const lightbox = new SimpleLightbox(".gallery a");

const createModalWindow = (imageAdress) => {
  window.instance = lightbox.create(
    `
      <img src="${imageAdress}">
  `,
    {
      onShow: () =>
        window.addEventListener("keydown", closeModalWindowByEscPressing),
      onClose: () => {
        window.removeEventListener("keydown", closeModalWindowByEscPressing);
        refs.body.classList.remove("disable-scroll");
      },
    }
  );
  return instance;
};

refs.imageContainer.addEventListener("click", onClickOpenModal);

function onClickOpenModal(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const originalImageRef = event.target.dataset.source;
  createModalWindow(originalImageRef).show();
  refs.body.classList.add("disable-scroll");
}

function closeModalWindowByEscPressing(event) {
  const ESC_KEY_CODE = "Escape";
  if (event.code === ESC_KEY_CODE && instance.visible()) {
    instance.close();
    refs.body.classList.remove("disable-scroll");
  }
}

const lazyImages = refs.imageContainer.querySelectorAll(".gallery__image");

lazyImages.forEach((image) =>
  image.addEventListener("load", onImageLoaded, { once: true })
);

function onImageLoaded(event) {
  event.target.classList.add("appear");
}

lazyImages.forEach((image) =>
  image.addEventListener("mouseenter", onMouseEnter)
);

function onMouseEnter(event) {
  event.target.style.transitionDelay = "100ms";
  event.target.style.transitionDuration = "500ms";
}
