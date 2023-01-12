// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', onShowBigImage);

(function createMarkup() {
  const createGallery = galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
          class="gallery__image"
          src="${preview}" 
          data-source="${original}" 
          alt="${description}" 
          />
        </a>
      </div>
      `;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', createGallery);
})();

function onShowBigImage(e) {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }
}

const lightBox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionsDelay: 250,
});

console.log(galleryItems);
