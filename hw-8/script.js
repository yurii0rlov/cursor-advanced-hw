// У цьому завданні вам необхідно створити клас Student та розробляти методи всередині цього класу.

class Student {
// У стдентів повинні бути наступні властивості: university, course, fullName.

  constructor (university, course, fullName){
  this.university = university;
  this.course = course;
  this.fullName = fullName;
  this.marks = [];
  }

// Створіть метод який повертає сукупну інформацію про курс, учбовий заклад та імені студента.

  getInfo(){
    const result = (`Студент ${this.course}го курсу ${this.university}, ${this.fullName}`);
    return result;
  }

  // Створіть геттер оцінок, який повертає масив оцінок студента

  get marks(){
    const studentMarks = [5, 4, 4, 5];
    return studentMarks;
  }

  //Створіть сеттер оцінок який дозволяє поставити оцінку студенту.

  set marks(mark){
    if (mark <= 0 || mark > 5){
      return;
    }
    
  }
}

let student = new Student(
  prompt("Введіть назву університету", "Вища Школа Психотерапії м.Одеса"),
 +prompt("Введіть курс на якому навчається студент", "1"),
  prompt("Введіть повне ім'я студента", "Остап Бендер"));

 console.log(student);
 console.log(student.getInfo());
 console.log(student.marks);
 student.marks = 3; 