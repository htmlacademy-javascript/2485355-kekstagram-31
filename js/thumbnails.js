import {getPhotosArray} from './create-photos.js';

const picturesContainer = document.querySelector('.pictures');
const newThumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createThumbnailsFragments = (photosArray) => {
  const fragment = document.createDocumentFragment();

  photosArray.forEach((photo) => {
    const element = newThumbnailTemplate.cloneNode(true);

    const thumbnailImg = element.querySelector('.picture__img');
    const thumbnailLikes = element.querySelector('.picture__likes');
    const thumbnailComments = element.querySelector('.picture__comments');

    thumbnailImg.src = photo.url;
    thumbnailImg.alt = photo.description;
    thumbnailLikes.textContent = photo.likes;
    thumbnailComments.textContent = photo.comments.length;

    fragment.appendChild(element);
  });

  picturesContainer.appendChild(fragment);
};

const renderThumbnails = () => createThumbnailsFragments(getPhotosArray());

export {renderThumbnails};
