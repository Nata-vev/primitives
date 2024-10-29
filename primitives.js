'use strict'

/* Створити функцію, яка приймає рядок і повертає копію цього рядка, але
  кожне слово починається з великої літери
  'test string' -> 'Test String'
  'teSt STRing' -> 'TeSt STRing'
  */

function getCapitaletterString(str) {
  if (typeof str !== 'string' || !str.trim()) {
    throw new TypeError('Type of data is incorrect!');
  }

  const words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
};

console.log(getCapitaletterString('test string'));

/*Створити функцію, вона приймає рядок як аргумент і повертає кількість голосних літер у рядку
  Рядки будуть чисто англійською і голосними вважати символи A E I O U
  'test string' -> 2
  'test stering' -> 3
  */

function getVowelsNumber(str, vowelArray = ['a', 'e', 'i', 'o', 'u']) {
  if (typeof str !== 'string' || !str.trim()) {
    throw new TypeError('Type of data is incorrect!');
  }

  let vowelCount = 0;
  let lowerCase = str.toLowerCase();

  for (let i = 0; i < lowerCase.length; i++) {
    if (vowelArray.includes(lowerCase[i])) {
      vowelCount++;
    }
  }
  return vowelCount;
};

console.log(getVowelsNumber('test striiing'));

