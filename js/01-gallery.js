import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const createImg = (items) => {
    return items.reduce((parent, item) => {
        const { preview, original, description } = item;
        return parent + `<div class='gallery__item'>
        <a class='gallery__link' href='${original}'>
            <img
            class="gallery__image"
            src='${preview}'
            data-source='${original}'
            alt='${description}' /></a>
        </div>`
    }, ' ')
}
const galleryContainer = document.querySelector('.gallery')
const galleryList = createImg(galleryItems);
const galleryAdd = galleryContainer.insertAdjacentHTML('beforeend', galleryList);
galleryContainer.addEventListener('click', onClickHandler);
console.log(galleryAdd);

function onClickHandler(event) {
    event.preventDefault();
    
    if (event.target.classList.contains('gallery__image')) {
        const galleryInst = basicLightbox.create(`
            <img src='${event.target.dataset.source}'>`, {
                onShow: (galleryInst) => {
                    document.addEventListener('keydown', event => {
                        if (event.code === 'Escape') {
                            galleryInst.close();
                        }
                    }, {once: true})
                }
            })
        galleryInst.show()
    }
}

