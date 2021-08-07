import { result } from 'lodash';
import catSound from './assets/cat.mp3'
import axios from 'axios';
// 1 

export const firstHW = Math.trunc(Math.random() * 100) + '%';
// 2
export function secondHW () {
let firstNumber = 1;
let secondNumber = 10;
const evenNumbersPass = true;

if(secondNumber < firstNumber){
  [secondNumber, firstNumber] = [firstNumber, secondNumber];
}

let answer = 0;
for(firstNumber;firstNumber <= secondNumber; firstNumber++){
  if(evenNumbersPass && firstNumber % 2 === 0) continue;
  answer += firstNumber;
}

return (answer);
}
// 3
export function thirdHW() {
    const number = '1234798642'
    let maxDigit = +number.charAt(0);

    for (let i = 1; i <= number.length; i++) {
        if (+number.charAt(i) > maxDigit) {
            maxDigit = +number.charAt(i);
        }

    }

    return maxDigit;
}
//4
export function fourthHW(){
  const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
  let studentsPairs = [...students];
  [studentsPairs[1], studentsPairs[2]] = [studentsPairs[2], studentsPairs[1]];
  const pairSize = 2;
  for(let i = 0; i < Math.ceil(students.length/pairSize); i++){
    studentsPairs[i] = studentsPairs.slice((i*pairSize), (i*pairSize) + pairSize);
}
  return studentsPairs.slice(0,3);
}
//5
export function fifthHW(){
    const length = 10;
    const min = -10;
    const max = 10;

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
  //6
  
export function sixthHW(){
    const students = [
        {
            name: "Tanya"
        },
        {
            name: "Victor"
        },
        {
            name: "Anton"
        }
    ];
        const studentsNames = [];
        students.forEach(student => {
          studentsNames.push(student.name);
      })
      return studentsNames.sort()
      }
//7
const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

export function seventhHW(){
  const salary = 1000;
  return ('Податок складає:' + salary * ukraine.tax + '$')
}

//8

class Student {
    // У стдентів повинні бути наступні властивості: university, course, fullName.
    
      constructor (university, course, fullName, marks = [5, 4, 4, 5], studentStatus = true){
      this.university = university;
      this.course = course;
      this.fullName = fullName;
      this.marks = marks;
      this.studentStatus = studentStatus;
      }
    // Створіть метод який повертає сукупну інформацію про курс, учбовий заклад та імені студента.
    
    eightHW(){
        const studentInfo = (`Студент ${this.course}го курсу ${this.university}, ${this.fullName}`);
        return studentInfo;
      }
}

export let pupil = new Student("Вища Школа Психотерапії м.Одеса", 1, "Остап Бендер");

//9

export function ninthHW(){
    const numbers = 25;
    const section = document.getElementById('ninthHW');
    for (let i = 1; i <= numbers; i++){
      let div = document.createElement('div');
      div.className = "block";
      div.style.backgroundColor = getColor();
      section.append(div);
    }
  }
export function getColor(){
    const color = `rgb(${Math.trunc(Math.random()*255)}, ${Math.trunc(Math.random()*255)}, ${Math.trunc(Math.random()*255)})`;
    return color;
  }
//10
const animal = document.getElementById('cat');
let animalSound = new Audio('');

export function playAnimalSound(){
    animalSound.pause();
    animalSound = new Audio(catSound);
    animalSound.play();
}

export function tenthHW(){
    animal.addEventListener('click', function(e) {
        playAnimalSound();
    })
};

//11
export async function eleventhHW(){
    const length = 20;
    let i = 1;
    let chinianCharachters = '';

    while(i <= length){
        const promise = new Promise(function(resolve) {
            const time = String(Date.now());
            const lastNumbers = time.substring(time.length, time.length - 5);
            const symbols = String.fromCharCode(lastNumbers)
            setTimeout(() => resolve(symbols), 50);
            i++;
        })
        chinianCharachters += await promise;
    }
    return console.log(chinianCharachters); 
}

//13

export async function thirteentHW(){
  const section = document.getElementById('planets');
  let page = 1;
  section.innerHTML = '';
  
  await axios.get(`https://swapi.dev/api/planets/?page=${page}`)
      .then((response) => {
              response.data.results.forEach(planet => {
                  const planetName = planet.name;                        
                  section.insertAdjacentHTML('afterbegin', 
                  `<div class='planet'>
                  <p>${planetName}</p></div>`);
              })
      });
    }

    //14
    export function fourteenHW(){
     function* createIdGenerator() {
      for (let i = 1; ; i++){
        yield i;
      }
    }
    
    const idGenerator = createIdGenerator();
    
    let numberString = '';
    
    document.getElementById('addNumber').addEventListener('click', function(){
      const div = document.getElementById('generateNumbers');
      div.innerHTML = '';
      numberString += String(idGenerator.next().value + ', ');
      div.insertAdjacentHTML('afterbegin', `<p>${numberString}</p>`)
    })
  }