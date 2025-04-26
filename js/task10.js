// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
//   ];

function calcTotalPrice(fruits, fruitName) {
  let total = 0;
  
  for (const fruit of fruits) {
    if (fruit.name === fruitName) {
      total += fruit.price * fruit.quantity;
    }
  }
  
  return total;
}

const fruits = [
  { name: "Яблуко", price: 45, quantity: 7 },
  { name: "Апельсин", price: 60, quantity: 4 },
  { name: "Банан", price: 125, quantity: 8 },
  { name: "Груша", price: 350, quantity: 2 },
  { name: "Виноград", price: 440, quantity: 3 },
  { name: "Банан", price: 125, quantity: 3 },
];

console.log(calcTotalPrice(fruits, "Банан")); // (125*8) + (125*3) = 1000 + 375 = 1375
console.log(calcTotalPrice(fruits, "Яблуко")); // 45*7 = 315
console.log(calcTotalPrice(fruits, "Груша")); // 350*2 = 700
console.log(calcTotalPrice(fruits, "Ківі")); // 0 (фрукт відсутній)