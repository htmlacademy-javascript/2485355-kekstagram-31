const isCorrectLength = (str, length) => str.length <= length;

// Строка короче 20 символов
isCorrectLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
isCorrectLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
isCorrectLength('проверяемая строка', 10); // false


function isPalindrome(str) {

  const normalStr = str.replaceAll(' ', '').toLowerCase();

  for (let i = 0; i < normalStr.length / 2; i++) {
    if (normalStr[i] !== normalStr.at(-(i + 1))) {
      return false;
    }
  }

  return true;
}

// Строка является палиндромом
isPalindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindrome('ДовОд'); // true
// Это не палиндром
isPalindrome('Кекс'); // false
// Это палиндром
isPalindrome('Лёша на полке клопа нашёл '); // true


function getDigits(input) {
  const number = Number.parseInt(
    input.toString().replace(/\D/g, ''), 10
  );

  return number;
}

getDigits('2023 год'); // 2023
getDigits('ECMAScript 2022'); // 2022
getDigits('1 кефир, 0.5 батона'); // 105
getDigits('агент 007'); // 7
getDigits('а я томат'); // NaN
getDigits(2023); // 2023
getDigits(-1); // 1
getDigits(1.5); // 15
