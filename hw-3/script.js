//1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.

function getMaxDigitalNumber(number) {
    let maxDigit = +number.charAt(0);

    if (isNaN(number) || !Number.isInteger(+number) || number === '') {
      return ("ERROR, хибний ввід, спробуйте ще раз");
    }

    for (let i = 1; i <= number.length; i++) {
        if (+number.charAt(i) > maxDigit) {
            maxDigit = +number.charAt(i);
        }

    }

    return maxDigit;
}

//2. Створити функцію, яка визначає ступінь числа

function raiseNumberToDegree (number, pow) {
  if (isNaN(number || pow) || !Number.isInteger(+number && +pow) || (number || pow) === '') {
    return ("ERROR, хибний ввід, спробуйте ще раз");
    }
    let result = 1;

    for (i = 1; i <= Math.abs(+pow); i++) {
        result = result * number;
    }

    if (pow === 0) {
      result = 1;
    }

    if (String(pow).includes("-")) {
      result = 1 / result;
    }
    
    return result;
}

//3. Створити функцію, яка форматує ім'я, роблячи першу букву великою.

function formatName(name) {
  while (Number.isInteger(parseInt(name)) || name === '') {
    return (`ERROR: хибний ввід, спробуйте ще раз`); 
  }

  let rightName = name.toLowerCase();
  rightName = rightName.replace(rightName.charAt(0), rightName.charAt(0).toUpperCase());

  return rightName;
}


//4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.

function calculateSalaryWithTaxes(salary) {
  const tax = 19.5;
  if (isNaN(salary) || !Number.isInteger(salary) || salary === ''){
  return ("ERROR, хибний ввід - спробуйте ще раз");
  }

  const cleanCash = (salary - (salary * tax) / 100).toFixed(2);

  return cleanCash;
}

//5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.

function getRandomNumberFromRange (fromNumber, toNumber) {
  if (isNaN(fromNumber || toNumber) || !Number.isInteger(fromNumber || toNumber) || (fromNumber || toNumber) === ''){
    return ("ERROR, хибний ввід - спробуйте ще раз");
  }

  let randomNumber = 0;

  if (toNumber < fromNumber) {
    [fromNumber, toNumber] = [toNumber, fromNumber];
  }

  do {
    randomNumber = fromNumber + Math.trunc(Math.random()*10000);
  }
  while (randomNumber > toNumber);

  return randomNumber;
}

//6. Створити функцію, яка рахує скільки разів певна буква повторюється в слові.

function countLettersInWord(letter, word) { 
  if (Number.isInteger(parseInt(letter || word)) || (letter || word) === '') {
    return(`ERROR, хибний ввід, спробуйте ще раз`); 
  }

  let letterQuanity = 0;

  for (i = 0; i <= word.length; i++) {

    if (word.charAt(i) === letter) {
      letterQuanity++;
    }

  }

  return letterQuanity;
}

//7. Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку

function convertCurrency(cash) {
  const currency = 27.55;
  let convertedMoney = 0;
  switch (true) {

    case (cash.includes("UAH") && !cash.includes("$")): {
      convertedMoney = (parseInt(cash) / currency).toFixed(2) + '$';
      break;
    }

    case (cash.includes("$") && !cash.includes("UAH")): {
      convertedMoney = (parseInt(cash) * currency).toFixed(2) + 'грн.'; 
      break;
    }

    case (!cash.includes("$") || !cash.includes("UAH")): {
      convertedMoney = 'ERROR, ви не ввели ідентифікатор валюти';
      break;
    }

    case (cash.includes("$") && cash.includes("UAH")): {
      convertedMoney = 'ERROR, ви ввели обидва ідентифікатори валюти';
      break;
    }

  }

  if (isNaN(parseInt(convertedMoney))) {
    convertedMoney = 'ERROR, хибний ввід, спробуйте ще раз';
  }

  return convertedMoney;
}

//8. Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.

function getRandomPassword(numbersQuanity = 8) {

  let password = "";

  if (isNaN(numbersQuanity) || !Number.isInteger(numbersQuanity) || numbersQuanity === '') {

    return ("ERROR, хибний ввід, спробуйте ще раз");
  }

  for (i = 0; i < numbersQuanity; i++) {
  password = password + Math.trunc(Math.random()*10);
  }

  return password;
}

//9. Створіть функцію, яка видаляє всі букви з речення.
function deleteLetters(word, letter) {
  if (Number.isInteger(parseInt(letter || word)) || (letter || word) === '') {

    return(`ERROR, хибний ввід, спробуйте ще раз`); 
  }

  let rightWord = word;

  for (i = 0; i <= word.length; i++) {

    if (word.charAt(i) === letter) {
      rightWord = rightWord.replace(letter, "");
    }
  }

  return rightWord;
}

//10. Створіть функцію, яка перевіряє, чи є слово паліндромом.

function isPalyndromCheck (word) {
  if (Number.isInteger(parseInt(word)) || (word) === '') {
    return(`ERROR, хибний ввід, спробуйте ще раз`); 
  }

  let letterQuanity = 0;
  let letterPassed = 0;

  for(i = 0, e = word.length - 1; i < e; i++, e--) {
      letterQuanity++;

      if (word.charAt(i) === word.charAt(e)) {
        letterPassed++;
      }
  }

  if (letterQuanity === letterPassed) {
    return "ТАК";
  } else {
    return "НІ";
  }
}

//11. Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.

function deleteDuplicateLetter (string) {
  if (Number.isInteger(parseInt(string)) || (string) === '') {
    return(`ERROR, хибний ввід, спробуйте ще раз`); 
  }

  let letterQuanity = 0;
  let newString = '';

  for(i = 0;i <= string.length; i++) {

    for(e = 0; e <= string.length; e++){
      
      if (string.charAt(i) === string.charAt(e) && e != i) {
        letterQuanity++;
      }  
    }

      if (letterQuanity === 0) {
        newString += string.charAt(i);
      }

    letterQuanity = 0;
  }

  if (newString === '') {
    return "Усі символи повторювались, повертати нічого"
  }

  return newString;
}

// Вивід результатів
function getMaxDigitResult() {
    alert(`Результат : ${getMaxDigitalNumber(prompt("Введіть число", 12345))}`);
}
function raiseNumberToDegreeResult() {
    alert(`Результат : ${raiseNumberToDegree(prompt("Введіть число", 2),(prompt("Введіть степінь", 3)))}`);
}
function formatNameResult() {
    alert(`Результат : ${formatName(prompt("Введіть ім'я", "пЕтРо"))}`);
}
function calculateSalaryWithTaxesResult() {
    alert(`Після утримання податку ви отримаєте : ${calculateSalaryWithTaxes(+prompt("Введіть заробітну плату", 1000))} грн.`);
}
function getRandomNumberFromRangeResult() {
    alert(`Результат : ${getRandomNumberFromRange(+prompt("Введіть перше число", 1),(+prompt("Введіть друге число", 10)))}`); 
}
function countLettersInWordResult() {
    alert(`Символів у слові : ${countLettersInWord(prompt("Введіть символ для підрахунку", "a").toLowerCase(),(prompt("Введіть слово", "Alarm").toLowerCase()))}`);
}
function convertCurrencyResult() {
    alert(`Після переводу валют отримуємо : ${convertCurrency(prompt("Введіть суму з ідентифікатором валюти ($ або UAH)", "1000UAH").toUpperCase())}`);
}
function getRandomPasswordResult() {
    alert(`Ваш пароль : ${getRandomPassword(+prompt("Введіть потрібну кількість символів", 8))}`);
}
function deleteLettersResult() {
    alert(`Результат : ${deleteLetters(prompt("Введіть рядок символів", "Ababagalamaga").toLowerCase(),(prompt("Введіть символ який потрібно прибрати", "a").toLowerCase()))}`);
}
function isPalyndromResult() {
    alert(`Слово паліндром ? - : ${isPalyndromCheck((prompt("Введіть слово", "Тенет").toLowerCase()).replace(/\s+/g,''))}`);
}
function deleteDuplicateLetterResult() {
    alert(`Результат : ${deleteDuplicateLetter(prompt("Введіть стрічку", "Марка").toLowerCase())}`);
}