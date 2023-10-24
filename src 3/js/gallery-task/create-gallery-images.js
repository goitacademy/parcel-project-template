import { galleryItems } from '../gallery-items.js';

export const galleryImages = galleryItems
  .map(image => {
    return `
  <li class="gallery__item">
    <a class="gallery__link" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
    </a>
</li>
  `;
  })
  .join('');
