const DECRIPTION_TEMPLATE = [
  'Никогда не сдавайся, ведь ты не квартира.',
  'Работа не волк. Волк - это гулять.',
  'Одна ошибка и ты ошибся.',
  'Уот так уот.',
  'Если ты бездомный - просто купи дом.',
  'Спаси и so horny.',
  'Так исторически сложилось.',
  'Never gonna give you up.',
  'Sweet liberty, my arm!',
  'Ктулху фхтагн.'
];

const MESSAGE_TEMPLATE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Вася',
  'Игорь',
  'Петя',
  'Олег',
  'Евгений',
  'Кирилл',
  'Тимур',
  'Дима',
  'Алексей',
  'Виктор',
  'Александр',
  'Марсель',
];

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

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

const randomIdGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);

    if (previousValues.length >= max - min + 1) {
      return null;
    }

    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const generatePhotoDescriptionId = randomIdGenerator(DESCRIPTIONS_IDS_RANGE.min, DESCRIPTIONS_IDS_RANGE.max);
const generatePhotoNumber = randomIdGenerator(PHOTOS_NUMBERS_RANGE.min, PHOTOS_NUMBERS_RANGE.max);
const generateCommentId = randomIdGenerator(COMMENTS_IDS_RANGE.min, COMMENTS_IDS_RANGE.max);

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(AVATARS_NUMBERS_RANGE.min, AVATARS_NUMBERS_RANGE.max)}.svg`,
  message: getRandomArrayElement(MESSAGE_TEMPLATE),
  name: getRandomArrayElement(NAMES),
});

const createPhotoDescription = () => ({
  id: generatePhotoDescriptionId(),
  url: `photos/${generatePhotoNumber()}.jpg`,
  description: getRandomArrayElement(DECRIPTION_TEMPLATE),
  likes: getRandomInteger(LIKES_COUNT.min, LIKES_COUNT.max),
  comments: Array.from({ length: getRandomInteger(COMMENTS_COUNT.min, COMMENTS_COUNT.max)}, createComment)
});

const photoDescriptions = Array.from({length: DECRIPTIONS_COUNT}, createPhotoDescription);

console.log(photoDescriptions);
