// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const imageList = document.querySelector('.gallery');
let imageHTML = '';
galleryItems.forEach(item => {
  let image = `
  <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="Image description"
      />
    </a>
  </li>`;

  imageHTML += image;
});
imageList.innerHTML = imageHTML;

imageList.addEventListener('click', onImageClick);
let galery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function onImageClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  galery.on('closed.simplelightbox', function () {
    galery.refresh();
  });
}
