import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector(".gallery");

const galaryElem = galleryItems
    .map(
        (item) =>
            `<div class="gallery__item">
            <a class="gallery__link" href=${item.original}>
            <img 
            class="gallery__image" src=${item.preview} 
            data-source=${item.original} 
            alt=${item.description}/>
            </a>
            </div>`
    )
    .join("");
    

    const clickContainer = (e) => {
        e.preventDefault();
      
        if (e.target.classList.contains("gallery")) return;
        const source = e.target.dataset.source;
      
        const instance = basicLightbox.create(`
          <div class="modal">
              <img src="${source}"width="800" height="600">
              
          </div>`);
      
        instance.show();
      };
      
      galleryContainer.addEventListener("click", clickContainer);


console.log(galleryItems);