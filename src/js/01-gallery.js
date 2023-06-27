// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const items = [];
galleryItems.forEach(element =>{
    const photoLink = document.createElement('a')
    photoLink.className = 'photo__link'
    photoLink.href = element.original
    const photoItem = document.createElement('img')
    photoItem.className = 'gallery__image'
    photoItem.src = element.preview;
    photoItem.setAttribute('title', element.description)
    photoItem.alt = element.description;
    photoLink.append(photoItem)
    items.push(photoLink)
})
gallery.append(...items)
new SimpleLightbox('.gallery a',{
    captionDelay: 250
})