// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

function calculateAverage(...args) {
    for (let num of args) {
        if (typeof num !== 'number' || isNaN(num)) {
           console.log('Усі аргументи повинні бути числами');
        }
    }
    let sum = 0;
    for (let num of args) {
        sum += num;
    }
    return sum / args.length;
}

// Приклади використання:
console.log(calculateAverage(1, 3, 3, 4)); // 2.75
console.log(calculateAverage(10, 20, 30)); // 20
console.log(calculateAverage(5));         // 5
console.log(calculateAverage(1, '2', 3)); // Викине помилку
