let firstNumber = +prompt("Type the first number", 0);

while(isNaN(firstNumber) || !Number.isInteger(firstNumber) || firstNumber == ''){
  alert(`"${firstNumber}" - is not a number, please try again`);
  firstNumber = +prompt("Type the first number", 0);
}

let secondNumber = +prompt("Type the first number", 0);

while(isNaN(secondNumber) || !Number.isInteger(secondNumber) || secondNumber == ''){
  alert(`"${secondNumber}" - is not a number, please try again`);
  secondNumber = +prompt("Type the first number", 0);
}

const evenNumbersPass = confirm("Do you wanna skip even numbers ?");

console.log(`The first number is ${firstNumber}
The second number is ${secondNumber}
Did you want to skip even numbers: ${evenNumbersPass}`);
document.writeln(`The first number is ${firstNumber}
The second number is ${secondNumber}
Did you want to skip even numbers: ${evenNumbersPass}`);

if(secondNumber < firstNumber){
  [secondNumber, firstNumber] = [firstNumber, secondNumber];
}

let answer = 0;
for(firstNumber;firstNumber <= secondNumber; firstNumber++){
  if(evenNumbersPass && firstNumber % 2 == 0) continue;
  answer += firstNumber;
}

console.log(`So, the answer is ${answer}`);
document.writeln(`So, the answer is ${answer}`);