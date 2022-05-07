import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const itemMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', itemMarkup);

// galleryContainer.addEventListener('click', onGalleryContainerClick);

    
function createGalleryItemsMarkup(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `
    <div class="gallery__item">
        <a class="gallery__item" href="${original}">
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
}

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function (e) {
    gallery.options.fadeSpeed = 250;
    gallery.options.captionsData = 'alt';
});
