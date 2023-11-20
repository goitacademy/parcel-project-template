import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

const ulList = document.querySelector('.gallery');

function createLi(galleryItems) {
    for (let i = 0; i < galleryItems.length; i++ ) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const ahr = document.createElement('a')
        img.src = galleryItems[i].preview;
        img.alt = galleryItems[i].description;
        ahr.href = galleryItems[i].original;
        img.classList.add('gallery__image');
        ahr.classList.add('gallery__link');
        li.classList.add('gallery__item');
        li.appendChild(ahr);
        ahr.appendChild(img); 
        ulList.appendChild(li);
        ulList.style.listStyleType = "none";
    }
}
createLi(galleryItems)

const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});