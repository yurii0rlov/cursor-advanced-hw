const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів

const pairs = getPairs(students);
function getPairs(){
  let studentsPairs = [...students];
  [studentsPairs[1], studentsPairs[2]] = [studentsPairs[2], studentsPairs[1]];
  const pairSize = 2;
  for(let i = 0; i < Math.ceil(students.length/pairSize); i++){
    studentsPairs[i] = studentsPairs.slice((i*pairSize), (i*pairSize) + pairSize);
}
  return studentsPairs.slice(0,3);
}
console.log(pairs);
