// У цьому завданні вам необхідно створити клас Student та розробляти методи всередині цього класу.

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

  getInfo(){
    const studentInfo = (`Студент ${this.course}го курсу ${this.university}, ${this.fullName}`);
    return studentInfo;
  }

  // Створіть геттер оцінок, який повертає масив оцінок студента

  get getMarks(){
    if(this.studentStatus === true)return this.marks;
    return null;
  }

  //Створіть сеттер оцінок який дозволяє поставити оцінку студенту.

  set setMarks(mark){
    if (mark <= 0 || mark > 5){
      alert("ERROR, введіть число від 1 до 5")
      return;
    }
    if(this.studentStatus === true)return this.marks.push(mark);
    return null;
  }

  // Створіть метод отримання середнього балу

  getAvarageMark(){
    let sum = 0;
    this.marks.forEach(mark => {
      sum = sum + mark;
    });
    const avarageMark = sum / this.marks.length;
    return avarageMark.toFixed(1);
  }

  // Створіть метод, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна.

  dismiss(){
    this.studentStatus = false;
    return this.studentStatus;
  }

  // Створіть метод, який дозволить поновити студента

  recover(){
    this.studentStatus = true;
    return this.studentStatus;
  }
}


let student = new Student("Вища Школа Психотерапії м.Одеса", 1, "Остап Бендер");

 console.group("Клас студент");
 console.log(student);
 console.groupEnd();
 console.group("Інформація про студента");
 console.log(student.getInfo());
 console.groupEnd();
 console.group("Оцінки студента");
 console.log(student.getMarks);
 console.groupEnd();
 console.group("Додати оцінку студенту");
 console.log(student.setMarks = 4);
 console.log(student.marks);
 console.groupEnd();
 console.group("Вивести середню оцінку студента");
 console.log(student.getAvarageMark());
 console.groupEnd();
 console.group("Виключити студента");
 console.log(student.dismiss());
 console.log(student);
 console.log(student.getMarks);
 console.log(student.marks);
 console.log(student.setMarks = 5);
 console.log(student.marks);
 console.groupEnd();
 console.group("Поновити студента");
 console.log(student.recover());
 console.log(student);
 console.log(student.getMarks);
 console.log(student.setMarks = 5);
 console.log(student.marks);
 console.groupEnd();

// Advanced

 class BudgetStudent extends Student{

  constructor(university, course, fullName, marks = [5, 4, 4, 5], studentStatus = true){
    super(university, course, fullName, marks = [5, 4, 4, 5], studentStatus = true);
    setInterval(this.getScholarship, 15000);
  }

  getScholarship = () => {
    if(this.studentStatus === true && this.getAvarageMark() >= 4)console.log("Ви отримали 1400 грн. стипендії");
  }
 }

 const budget = new BudgetStudent("Вища Школа Психотерапії м.Одеса", 1, "Остап Бендер");
