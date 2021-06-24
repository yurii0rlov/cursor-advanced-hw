//Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.
//У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа.

function getRandomArray(length, min, max){

  if (isNaN(length || min || max) || !Number.isInteger(length || min || max) || (length || min || max) === ''){
    return ("ERROR, хибний ввід - спробуйте ще раз");
  }

  let array = [];
  let number = 0;

 for(let i = 0; i < length; i++){
    do {
    number = Math.floor((Math.random() * 10000 - 1000));
    }

    while(number > max || number < min);

    array.push(number);
  }

  return array;
}

const length = +prompt("Введіть довжину масиву", 10);
const min = +prompt("Введіть мінімальне значення масиву", 1);
const max = +prompt("Введіть максимальне значення масиву", 10);

const firstFunctionResult = getRandomArray(length, min, max);
console.log(firstFunctionResult);

// Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів.

function getAverage(firstFunctionResult){
  let numbersSum = 0;
  firstFunctionResult.forEach(number => {
    numbersSum += number;
  })
  return numbersSum/firstFunctionResult.length;
} 
console.log(getAverage(firstFunctionResult));

// Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів.

function getMedian(firstFunctionResult){
  let median = 0;

  let sortedArray = firstFunctionResult.map((number) => {
    return number;
  })

  sortedArray.sort((a, b) => a - b);

  if(sortedArray.length % 2 === 0){
    median = (sortedArray[sortedArray.length / 2 - 1] + sortedArray[sortedArray.length / 2]) / 2;
  }else{median = (sortedArray[sortedArray.length / 2 - 0.5]);}
  
  return median;
}
console.log(getMedian(firstFunctionResult));

//Створіть функцію – яка фільтрує парні числа передані як аргументи функції

function filterEvenNumbers(firstFunctionResult){

  let onlyDouble = firstFunctionResult.filter((number) => {
    if(number % 2 !== 0){
      return number;
    }
  })
  return onlyDouble;
}

console.log(filterEvenNumbers(firstFunctionResult));

//Створіть функцію  – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5

function getDividedByFive(firstFunctionResult){
  let divideOnFive = firstFunctionResult.filter((number) => {
    if(number % 5 === 0){
      return number;
    }
  })
  return divideOnFive;
}
console.log(getDividedByFive(firstFunctionResult));

// Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0

function countPositiveNumbers(firstFunctionResult){
  let positiveNumbers = 0;
  firstFunctionResult.forEach((number) => {
    if(number >= 0){
      positiveNumbers++;
    }
  })
  return positiveNumbers;
}

console.log(countPositiveNumbers(firstFunctionResult));

// Створіть функцію – яка вираховує моду всіх переданих в неї аргументів.

function getModa(firstFunctionResult){

  let sortArray = firstFunctionResult.map((number) => {
    return number;
  })

  sortArray.sort((a, b) => a - b);
  let maxNumberCount = 1;
  let modaArray = [];
  sortArray.forEach((number, i, arr) => {
    if(number === arr[i + 1]){
      modaArray.push(number, arr[i + 1]);
      maxNumberCount++;
    }

  })
  console.log(maxNumberCount);
    console.log(modaArray);
}

console.log(getModa(firstFunctionResult));


// Створіть функцію – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*)

function replaceBadWords(string){
  newString = string.split(" ");
  
}