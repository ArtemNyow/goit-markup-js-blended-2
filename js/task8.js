// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//  };

const salaries = {
    Mango: 100,
    Poly: 160,
    Ajax: 1470,
};
  
let sum = 0;

for (const key in salaries) {
    sum += salaries[key];
}
console.log(sum)