// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };


const user = {
    name: "John",
    age: 20,
    hobby: "tenis",
    premium: true,
  };

user.mood = 'happy';

user.hobby = 'skydiving';

user.premium = false;

for (const key of Object.keys(user)) {
    console.log(`${key}:${user[key]}`);
}