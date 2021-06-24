const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів

const studentGroups = getPairs(students);
function getPairs(){
  let studentsPairs = [...students];
  [studentsPairs[1], studentsPairs[2]] = [studentsPairs[2], studentsPairs[1]];
  const pairSize = 2;
  for(let i = 0; i < Math.ceil(students.length/pairSize); i++){
    studentsPairs[i] = studentsPairs.slice((i*pairSize), (i*pairSize) + pairSize);
}
  return studentsPairs.slice(0,3);
}
console.log(studentGroups);

// Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.

const groupsWithThemes = getGroupThemes(studentGroups, themes)
function getGroupThemes(){
  const groupWithTheme = [];
  for(let i = 0;i < themes.length; i++){
    groupWithTheme.push([studentGroups[i].join(" і "), themes[i]]);
  }
  return groupWithTheme;
}
console.log(groupsWithThemes);

// Зіставте оцінки(marks) зі студентом(students): 

const studentsRated = getStudentsWithMarks(students, marks)
function getStudentsWithMarks(){
  const studentsMark = [];
  for(let i = 0; i < marks.length; i++){
    studentsMark.push([students[i], marks[i]]);
  }
  return studentsMark;
}
console.log(studentsRated);

// Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт

const groupsRated = getProjectsWithMarks(groupsWithThemes);
function getProjectsWithMarks(){
  const groupsProjectsWithMarks = [];
  const groupMark = 0;
  for(let i = 0; i < groupsWithThemes.length; i++){
    do{
      groupMark = Math.trunc(Math.random()*10);
    }
    while(groupMark > 5 || groupMark < 1);
    groupsProjectsWithMarks.push([groupsWithThemes[i][0], groupsWithThemes[i][1], groupMark])
  }
  return groupsProjectsWithMarks;
}
console.log (groupsRated);