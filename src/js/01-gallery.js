import { galleryItems } from './gallery-items.js';

// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');

function createGalleryItem(item) {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.href = item.original;

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = item.preview;
  galleryImage.alt = item.description;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
}

function createGallery(items) {
  const galleryFragment = document.createDocumentFragment();
  items.forEach(item => {
    const galleryItem = createGalleryItem(item);
    galleryFragment.appendChild(galleryItem);
  });
  galleryList.appendChild(galleryFragment);
}

createGallery(galleryItems);

const lightbox = new SimpleLightbox('.gallery__link', {
  alertError: false,
  captionsData: 'alt',
  fileExt: 'png|jpg|jpeg|gif',
  animationSpeed: 50,
  showCounter: true,
  captionDelay: 250,
  preloading: false,
});
