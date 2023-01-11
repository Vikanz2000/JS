// 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

let num1 = prompt('Вводим num1');
let num2 = prompt('Вводим num2');
if (num1 <= 1) {
  console.log(`num1 меньше или равно 1`);
}
else if (num1 > 1) {
  console.log(`num1 больше 1`);
}
else {
  console.log(`Нет,солнце, ты ввел недопустимое значение num1`)
}
if (num2 >= 3) {
  console.log(`num2 больше или равно 3`);
}
else if (num2 < 3) {
  console.log(`num2 меньше 3`);
}
else {
  console.log(`Нет, солнце, это недопустимое значение num2`)
}

// 2
// Перепишите код к тернарному оператору
// let test = true;
// if (test === true) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

let test = true;
console.log((test === true) ? '+++' : '---');

// 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day = prompt('Вводим число от 1 до 31');
if (day >= 1 && day < 11) {
  console.log('Первая декада');
}
else if (day >= 11 && day < 21) {
  console.log('Вторая декада');
}
else if (day >= 21 && day <= 31) {
  console.log('Третья декада');
}
else {
  console.log('Ты ввел неверное значение');
}
