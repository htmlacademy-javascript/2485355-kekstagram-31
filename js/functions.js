const isCorrectLength = (str, length) => str.length <= length;

// Строка короче 20 символов
isCorrectLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
isCorrectLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
isCorrectLength('проверяемая строка', 10); // false


const isPalindrome = (str) => {

  const normalStr = str.replaceAll(' ', '').toLowerCase();

  for (let i = 0; i < normalStr.length / 2; i++) {
    if (normalStr[i] !== normalStr.at(-(i + 1))) {
      return false;
    }
  }

  return true;
};

// Строка является палиндромом
isPalindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindrome('ДовОд'); // true
// Это не палиндром
isPalindrome('Кекс'); // false
// Это палиндром
isPalindrome('Лёша на полке клопа нашёл '); // true


const getDigits = (input) => Number.parseInt(
  input.toString().replace(/\D/g, ''), 10
);

getDigits('2023 год'); // 2023
getDigits('ECMAScript 2022'); // 2022
getDigits('1 кефир, 0.5 батона'); // 105
getDigits('агент 007'); // 7
getDigits('а я томат'); // NaN
getDigits(2023); // 2023
getDigits(-1); // 1
getDigits(1.5); // 15

const convertTimeToMinutes = (time) => {
  const splittedTime = time.split(':');

  return parseInt(splittedTime[0], 10) * 60 + parseInt(splittedTime[1], 10);
};

const verifyMeetingTime = (
  workStartTime,
  workEndTime,
  meetingStartTime,
  meetingDuration
) => {
  const startWorkTimeInMinutes = convertTimeToMinutes(workStartTime);
  const endWorkTimeInMinutes = convertTimeToMinutes(workEndTime);
  const startMeetingTimeInMinutes = convertTimeToMinutes(meetingStartTime);

  return !(
    startMeetingTimeInMinutes < startWorkTimeInMinutes ||
    endWorkTimeInMinutes < startMeetingTimeInMinutes + meetingDuration
  );
};

// eslint-disable-next-line no-console
console.log(verifyMeetingTime('08:00', '17:30', '14:00', 90)); // true
// eslint-disable-next-line no-console
console.log(verifyMeetingTime('8:0', '10:0', '8:0', 120)); // true
// eslint-disable-next-line no-console
console.log(verifyMeetingTime('08:00', '14:30', '14:00', 90)); // false
// eslint-disable-next-line no-console
console.log(verifyMeetingTime('14:00', '17:30', '08:0', 90)); // false
// eslint-disable-next-line no-console
console.log(verifyMeetingTime('8:00', '17:30', '08:00', 900)); // false
