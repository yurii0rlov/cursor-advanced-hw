//Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.
//У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа.

function getRandomArray(length, min, max){

  let array = [];
  let number = 0;

 for(let i = 0; i < length; i++) {
    do {
    number = Math.floor((Math.random() * 10000 - 1000));
    }while(number > max || number < min)
    array.push(number);
  }

  return array;
}

// Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів.

function getAverage(randomArrayResult){
  let numbersSum = 0;
  randomArrayResult.forEach(number => {
    numbersSum += number;
  })
  return numbersSum/randomArrayResult.length;
} 

// Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів.

function getMedian(randomArrayResult){
  let median = 0;

  let sortedArray = randomArrayResult.map((number) => {
    return number;
  })

  sortedArray.sort((a, b) => a - b);

  if(sortedArray.length % 2 === 0){
    median = (sortedArray[sortedArray.length / 2 - 1] + sortedArray[sortedArray.length / 2]) / 2;
  }else{median = (sortedArray[sortedArray.length / 2 - 0.5]);}
  
  return median;
}

//Створіть функцію – яка фільтрує парні числа передані як аргументи функції

function filterEvenNumbers(randomArrayResult){

  let onlyDouble = randomArrayResult.filter((number) => {
    if(number % 2 !== 0){
      return number;
    }
  })
  return onlyDouble;
}

//Створіть функцію  – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5

function getDividedByFive(randomArrayResult){
  let divideOnFive = randomArrayResult.filter((number) => {
    if(number % 5 === 0){
      return number;
    }
  })
  return divideOnFive;
}

// Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0

function countPositiveNumbers(randomArrayResult){
  let positiveNumbers = 0;
  randomArrayResult.forEach((number) => {
    if(number >= 0){
      positiveNumbers++;
    }
  })
  return positiveNumbers;
}

function getRandomArrayOperationsResults() {
  const length = +prompt("Введіть довжину масиву", 10);
  const min = +prompt("Введіть мінімальне значення масиву", 1);
  const max = +prompt("Введіть максимальне значення масиву", 10);

  if(length <= 0){
    alert("ERROR, довжина масиву не може бути менша 1");
    return;
  }

  if (isNaN(length && min && max)){
    alert("ERROR, хибний ввід - спробуйте ще раз");
    return;
  }

  const firstFunctionResult = getRandomArray(length, min, max);
  alert(`
Ваш масив чисел : ${firstFunctionResult}
Середнє арифметичне масиву: ${getAverage(firstFunctionResult)}
Медіана масиву: ${getMedian(firstFunctionResult)}
Масив непарних чисел: ${filterEvenNumbers(firstFunctionResult)}
Масив чисел які діляться на 5: ${getDividedByFive(firstFunctionResult)}
Кількість чисел більших за 0: ${countPositiveNumbers(firstFunctionResult)}
`);
  console.log("Масив випадкових чисел:");
  console.log(firstFunctionResult);
  console.log("Середнє арифметичне масиву:");
  console.log(getAverage(firstFunctionResult));
  console.log("Медіана масиву:");
  console.log(getMedian(firstFunctionResult));
  console.log("Масив непарних чисел:");
  console.log(filterEvenNumbers(firstFunctionResult));
  console.log("Масив чисел які діляться на 5:");
  console.log(getDividedByFive(firstFunctionResult));
  console.log("Кількість чисел більших за 0:");
  console.log(countPositiveNumbers(firstFunctionResult));
  console.log("Мода числа:");
  console.log(getModa(firstFunctionResult));
}

// Створіть функцію – яка вираховує моду всіх переданих в неї аргументів.

function getModa(firstFunctionResult){

  let sortArray = firstFunctionResult.map((number) => {
    return number;
  })

  sortArray.sort((a, b) => a - b);
  let modaArray = [];
  sortArray.forEach((number, i, arr) => {
    if(number === arr[i + 1]){
      modaArray.push(number);
    }

  })
  console.log("modaarray" + modaArray);

  let modes = [];
  let count = [];
  let maxIndex = 0;

for (i = 0; i < modaArray.length; i++) {
  let number = modaArray[i];
    count[number] = (count[number] || 0) + 1;

    if (count[number] > maxIndex) {
        maxIndex = count[number];
    }
  }

for (let i in count) {
    if (count.hasOwnProperty(i) && count[i] === maxIndex) {
        modes.push(+i);
    }
}


return modes;
}



// Створіть функцію – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*)

function replaceBadWords(string){
  newString = string.split(" ");
  let rightString = [];
  const badwords = ["shit", "fuck"];
  newString.forEach(word => {
    for(let i = 0; i <= badwords.length; i++){
      if((word.toLowerCase()).includes(badwords[i])){
      word = (word.toLowerCase()).replace(badwords[i], "****");
      }
    }
    rightString.push(word);
  })
  return rightString.join(" ");
}

function replaceBadWordsResult(){
  alert(replaceBadWords(prompt("Type your string with bad words", "Fuck you, fucking piece of shit")));
}


// Створіть функцію, яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває.
// Пробіли завжди видаляються. Рядок приводится до нижнього регістру.

function divideByThree(word){
  wordArray = (word.toLowerCase()).split("");

  const wordDivideArray = [];
  const divideSymbols = 3;

  for(let i = 0; i < wordArray.length; i += divideSymbols) {
    wordDivideArray.push(wordArray.slice(i, i + divideSymbols).join(""));
  }
  return wordDivideArray;
}

function divideByThreeResult(){
  console.log(divideByThree(prompt("Type your word", "Programmer")));
  alert("Result in console");
}