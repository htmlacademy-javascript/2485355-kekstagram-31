import {getRandomInteger, getRandomArrayElement, randomIdGenerator} from './util.js';
import {getData} from './data.js';

const {DECRIPTION_TEMPLATE, MESSAGE_TEMPLATE, NAMES} = getData();

const DESCRIPTIONS_IDS_RANGE = {
  min: 1,
  max: 25
};

const PHOTOS_NUMBERS_RANGE = {
  min: 1,
  max: 25
};

const COMMENTS_IDS_RANGE = {
  min: 1,
  max: 999
};

const AVATARS_NUMBERS_RANGE = {
  min: 1,
  max: 6
};

const LIKES_COUNT = {
  min: 15,
  max: 200
};

const COMMENTS_COUNT = {
  min: 0,
  max: 30
};

const DECRIPTIONS_COUNT = 25;

const generatePhotoId = randomIdGenerator(DESCRIPTIONS_IDS_RANGE.min, DESCRIPTIONS_IDS_RANGE.max);
const generatePhotoNumber = randomIdGenerator(PHOTOS_NUMBERS_RANGE.min, PHOTOS_NUMBERS_RANGE.max);
const generateCommentId = randomIdGenerator(COMMENTS_IDS_RANGE.min, COMMENTS_IDS_RANGE.max);

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(AVATARS_NUMBERS_RANGE.min, AVATARS_NUMBERS_RANGE.max)}.svg`,
  message: getRandomArrayElement(MESSAGE_TEMPLATE),
  name: getRandomArrayElement(NAMES),
});

const createPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotoNumber()}.jpg`,
  description: getRandomArrayElement(DECRIPTION_TEMPLATE),
  likes: getRandomInteger(LIKES_COUNT.min, LIKES_COUNT.max),
  comments: Array.from({ length: getRandomInteger(COMMENTS_COUNT.min, COMMENTS_COUNT.max)}, createComment)
});

const getPhotosArray = () => Array.from({length: DECRIPTIONS_COUNT}, createPhoto);

export {getPhotosArray};
