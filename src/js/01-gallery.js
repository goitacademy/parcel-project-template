import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const imageGallery = document.querySelector('.gallery');
const cardsMarkup = createImageCardsMarkup(galleryItems);

function createImageCardsMarkup(images) {
  return images
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </li>`
    )
    .join('');
}

imageGallery.insertAdjacentHTML('beforeend', cardsMarkup);

imageGallery.style.listStyle = 'none';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
