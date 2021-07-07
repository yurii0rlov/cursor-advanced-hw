const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// Створіть функцію – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн.

function getMyTaxes(salary){

  return (salary * this.tax)
}

console.log(`Податок складає: ${getMyTaxes.call(ukraine, 1000)}$`);

// Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary)

function getMiddleTaxes(){

  return (this.tax * this.middleSalary).toFixed(2)
}

console.log(`В середньому податок складає: ${getMiddleTaxes.call(latvia)}$`);

// Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies)

function getTotalTaxes(){

  return (this.tax * this.middleSalary * this.vacancies).toFixed(2)
}

console.log(`Всього в країні платять: ${getTotalTaxes.call(litva)}$ податку`);

// Створіть функцію – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. 

function getMySalary(){
  const minSalary = 1500;
  const maxSalary = 2000;
  const randomMultiplyCoef = 1000;
  let randomSalary = 0;
  const mySalary = {};

  do {
    randomSalary = minSalary + Math.trunc(Math.random()*randomMultiplyCoef);
  }
  while (randomSalary > maxSalary);
  
  mySalary.salary = randomSalary;
  mySalary.taxes = +(randomSalary * this.tax).toFixed(2);
  mySalary.profit = +(randomSalary - mySalary.taxes).toFixed(2);

  return mySalary;
}

console.log(getMySalary.call(ukraine))
setInterval(() => console.log(getMySalary.call(ukraine)), 10000);