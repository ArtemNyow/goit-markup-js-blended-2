// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3]

function findSmallestNumber(numbers) {
    if (!Array.isArray(numbers)) return "Sory, it is not an array!"
    return Math.min(...numbers);
}
console.log(findSmallestNumber(numbers));
console.log(findSmallestNumber("Array"));
