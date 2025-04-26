// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.
function min(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return "Not a number";
    } else {
        return a < b ? a : b;
    }
}
console.log(min(5, NaN));
console.log(min("A", 10));
console.log(min(5, 10));