import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryImages } from './gallery-task/creat-gallery-images.js';
import getElement from './gallery-task/newElement.js';
// Add imports above this line
// Change code below this line
const gallery = getElement('.gallery');
gallery.innerHTML = galleryImages;
var lightbox = new SimpleLightbox('.gallery a', {
  capttion: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});
