let firstNumber;
let secondNumber;
let answer = 0;

for (firstNumber = +prompt("Type the first number", 0); !Number.isInteger(+firstNumber); firstNumber = +prompt("Type the first number", 0)) {
        alert(`"${firstNumber}" - is not a number, please try again`);
  }
  for (secondNumber = +prompt("Type the second number", 0);!Number.isInteger(+secondNumber); secondNumber = +prompt("Type the second number", 0)) {
    alert(`"${secondNumber}" - is not a number, please try again`);
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

for(firstNumber;firstNumber <= secondNumber; firstNumber++){
    if(evenNumbersPass){
        if(firstNumber % 2 != 0){
        answer += firstNumber;
        }
    }
    else{
    answer += firstNumber;
        }
    }

console.log(`So, the answer is ${answer}`);
document.writeln(`So, the answer is ${answer}`);