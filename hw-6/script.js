const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

//Створіть функцію - яка повертає список предметів для конкретного студента.

function getSubjects(student){
  const studentSubjects = [];
  Object.keys(students[student].subjects).forEach(subject => {
    subject = subject.replace(subject.charAt(0), subject.charAt(0).toUpperCase());
    if(subject.includes("_"))
    subject = subject.replace(subject.charAt(subject.search("_"))," ");

    studentSubjects.push(subject);
  });
  return studentSubjects;
}

//Створіть функцію – яка поверне середню оцінку по усім предметам для переданого студента. Оцінку округліть до 2ого знаку.

function getAverageMark(student){
let studentMarks = 0;
let marksQty = 0;
Object.values(students[student].subjects).forEach(marks => {
  marks.forEach(mark =>{
    studentMarks += mark;
    marksQty ++;
  })
})

return +(studentMarks/marksQty).toFixed(2)
}

//Створіть функцію яка повертає інформацію загального виду по переданому студенту

function getStudentInfo(student){
  const studentInfo = (`Ім'я студента ${students[student].name},
Студент вчиться на ${students[student].course}-ому курсі,
Середній бал студента ${getAverageMark(student)}`);

  return studentInfo;
}

// Створіть функцію – яка повертає імена студентів у алфавітному порядку.

function getStudentsNames(students){
  const studentsNames = [];
  students.forEach(student => {
    studentsNames.push(student.name);
})
return studentsNames.sort()
}

//Створіть функцію – яка повертає кращого студента зі списку по показнику середньої оцінки.

function getBestStudent(students){
  let bestStudent;
  let maxMark = 0;
  students.forEach((_student, index) => {
    if(getAverageMark(index) > maxMark){
      maxMark = getAverageMark(index);
      bestStudent = students[index].name;
    }
  })
  return bestStudent;
}

// Створіть функцію – яка повертає об'єкт, в якому ключі це букви у слові, а значення – кількість їх повторень.

function calculateWordLetters(word){
const wordObject = {};
const wordArray = word.toLowerCase().split("");

wordArray.forEach(char => {
  wordObject[char] = 0;
})
wordArray.forEach(char => {
  wordObject[char] += 1;
})

  return wordObject;
}

function getResults(){
  console.log("Предмети студента:");
  console.log(getSubjects(0));
  console.log("Середня оцінка студента:");
  console.log(getAverageMark(0));
  console.log("Інформація про студента:");
  console.log(getStudentInfo(0));
  console.log("Список студентів в алфавітному порядку:");
  console.log(getStudentsNames(students));
  console.log("Найкращий студент:");
  console.log(getBestStudent(students));
  console.log("Перетворення слова в об'єкт:");
  console.log(calculateWordLetters("тест"))
}