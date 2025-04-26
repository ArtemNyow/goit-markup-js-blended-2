// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'


function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = '';
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(findLongestWord("London is the capital of Great Britain"))